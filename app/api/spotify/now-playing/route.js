
import querystring from "querystring";
import { NextResponse } from 'next/server';

const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;
const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;

const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;

const getAccessToken = async () => {
    if (!client_id || !client_secret || !refresh_token) {
        console.error("Environment variables for Spotify client_id, client_secret, or refresh_token are missing!");
        throw new Error("Server configuration error: Missing Spotify secrets.");
    }

    const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64");

    const response = await fetch(TOKEN_ENDPOINT, {
        method: "POST",
        headers: {
            Authorization: `Basic ${basic}`,
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: querystring.stringify({
            grant_type: "refresh_token",
            refresh_token,
        }),
        cache: 'no-store'
    });

    if (!response.ok) {
        const errorData = await response.json();
        console.error("Error fetching Spotify access token:", errorData);
        throw new Error(`Failed to get Spotify access token: ${JSON.stringify(errorData)}`);
    }

    return response.json();
};


export async function GET() {
    try {
        const { access_token } = await getAccessToken();
        const response = await fetch(NOW_PLAYING_ENDPOINT, {
            headers: {
                Authorization: `Bearer ${access_token}`,
            },
            cache: 'no-store'
        });

        if (response.status === 204) {
            return NextResponse.json({ isPlaying: false }, { status: 200 });
        }

        if (!response.ok) {
            const errorData = await response.json();
            console.error("Spotify Now Playing API error:", errorData);
            return NextResponse.json({ message: "Spotify API Error", details: errorData }, { status: response.status });
        }

        const song = await response.json();

        if (!song || !song.item) {
            return NextResponse.json({ isPlaying: false }, { status: 200 });
        }

        const albumImageUrl = song.item.album.images[0]?.url || null;
        const artist = song.item.artists.map((_artist) => _artist.name).join(", ");
        const isPlaying = song.is_playing;
        const songUrl = song.item.external_urls.spotify;
        const title = song.item.name;

        return NextResponse.json({
            albumImageUrl,
            artist,
            isPlaying,
            songUrl,
            title,
        }, { status: 200 });

    } catch (error) {
        console.error("Error in /api/spotify/now-playing route:", error);
        return NextResponse.json({ message: "Internal Server Error", details: error.message }, { status: 500 });
    }
}