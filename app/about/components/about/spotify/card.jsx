// app/about/components/about/spotify/card.jsx
"use client"; // Dies ist entscheidend! Macht die Komponente zu einer Client Component

import React, { useEffect, useState } from "react";
// KEIN Import von "../../../../api/spotify/fetch" mehr!
// Wir rufen die API Route direkt per fetch() auf.

import PlayingAnimation from "./animation"; // Bleibt gleich
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Bleibt gleich
import { faSpotify } from "@fortawesome/free-brands-svg-icons"; // Bleibt gleich
import Image from "next/image"; // Bleibt gleich

const Card = () => {
    const [loading, setLoading] = useState(true);
    const [result, setResult] = useState({});
    const [error, setError] = useState(null); // Optional: Für bessere Fehleranzeige

    useEffect(() => {
        const fetchData = async () => {
            try {
                // HIER IST DER WICHTIGE PUNKT: Aufruf DEINER NEUEN API Route!
                const response = await fetch('/api/spotify/now-playing');
                const data = await response.json();

                if (response.ok) {
                    setResult(data);
                } else {
                    // Fehler von der API Route (z.B. 500 Internal Server Error)
                    setError(data.message || 'Failed to fetch Spotify data from API.');
                    console.error('Error from /api/spotify/now-playing:', data);
                }
            } catch (err) {
                // Netzwerkfehler oder Problem beim Aufruf der API Route
                setError('Network error or problem connecting to Spotify API.');
                console.error('Fetch error calling /api/spotify/now-playing:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchData(); // Fetch data immediately on component mount

        // Fetch data every minute (oder wie oft du möchtest)
        const intervalId = setInterval(fetchData, 60 * 1000);

        return () => clearInterval(intervalId); // Cleanup beim Unmount der Komponente
    }, []);

    if (loading) {
        return (
            <div className="mt-3 flex justify-center w-full">
                <div className="flex justify-center mb-8">
                    <div className="loader ease-linear rounded-full border-4 border-t-4 border-black h-12 w-12 mb-4"></div>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="mt-3 flex justify-center w-full">
                <p className="text-red-500">Error loading Spotify data: {error}</p>
            </div>
        );
    }

    return (
        <div className="mt-3 flex justify-center w-full">
            <div className="relative w-full mb-8 grid grid-cols-2 gap-2 border-2 border-gray-500 p-4 rounded-lg backdrop-filter backdrop-blur-lg bg-white bg-opacity-30">
                {result.isPlaying && result.albumImageUrl && (
                    <Image
                        src={result.albumImageUrl}
                        alt="Background Image" // `alt` Attribut für Barrierefreiheit
                        layout="fill"
                        objectFit="cover"
                        className="z-0 opacity-20 absolute"
                    />
                )}
                <div className="z-10 flex items-center">
                    <FontAwesomeIcon
                        icon={faSpotify}
                        className="text-black text-5xl me-5 md:me-1 xl:me-8"
                    />
                    <p className="font-semibold me-5 md:me-1 xl:me-7">
                        {result.isPlaying ? "Now playing" : "Currently offline"}
                    </p>
                    {result.isPlaying && <PlayingAnimation />}
                </div>
                {result.isPlaying && (
                    <div className="z-10 rounded-lg ms-5">
                        <div className="flex items-center space-x-4">
                            <div className="overflow-hidden">
                                <a
                                    href={result.songUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block font-semibold w-full truncate text-blue-500"
                                >
                                    {result.title}
                                </a>
                                <p className="truncate text-gray-500">
                                    {result.artist}
                                </p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Card;