
"use client";

import React, { useEffect, useState } from "react";

import PlayingAnimation from "./animation"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpotify } from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";

const Card = () => {
    const [loading, setLoading] = useState(true);
    const [result, setResult] = useState({});
	

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/api/spotify/now-playing');
                const data = await response.json();
                if (response.ok) {
                    setResult(data);
                } else {
                    setError(data.message || 'Failed to fetch Spotify data from API.');
                    console.error('Error from /api/spotify/now-playing:', data);
                }
            } catch (err) {
                setError('Network error or problem connecting to Spotify API.');
                console.error('Fetch error calling /api/spotify/now-playing:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();

        const intervalId = setInterval(fetchData, 60 * 1000);

        return () => clearInterval(intervalId); 
    }, []);

    return (
        <div className="mt-3 flex justify-center w-full">
            <div className="relative w-full mb-8 grid grid-cols-2 gap-2 border-2 border-gray-500 p-4 rounded-lg backdrop-filter backdrop-blur-lg bg-white bg-opacity-30">
                {result.isPlaying && result.albumImageUrl && (
                    <Image
                        src={result.albumImageUrl}
                        alt="Background Image"
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