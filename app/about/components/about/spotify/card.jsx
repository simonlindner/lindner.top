"use client";

import React, { useEffect, useState } from "react";

import PlayingAnimation from "./animation"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpotify } from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";

const Card = () => {
    const [loading, setLoading] = useState(true);
    const [result, setResult] = useState({});
	const [error, setError] = useState(null);

    const [progress, setProgress] = useState(0);
    const [duration, setDuration] = useState(0);

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

    // Fortschritt und Dauer nach jedem API-Call immer auf aktuelle Werte setzen
    useEffect(() => {
        if (result && typeof result.progress_ms === "number" && typeof result.duration_ms === "number") {
            setProgress(result.progress_ms);
            setDuration(result.duration_ms);
        }
    }, [result.progress_ms, result.duration_ms]);

    // Fortschritt lokal hochzählen und nach Song-Ende neuen Request machen
    useEffect(() => {
        if (!result.isPlaying || typeof progress !== "number" || typeof duration !== "number") return;
        let start = Date.now();
        let localProgress = progress;
        let ended = false;
        const tick = () => {
            const elapsed = Date.now() - start;
            const next = localProgress + elapsed;
            if (!ended && next >= duration) {
                ended = true;
                setProgress(duration);
                setTimeout(() => {
                    setResult(prev => ({ ...prev, forceRefresh: Date.now() }));
                }, 1500);
                return;
            }
            if (!ended) setProgress(next);
        };
        const interval = setInterval(tick, 1000);
        return () => clearInterval(interval);
    }, [result.isPlaying, progress, duration]);

    // Immer refreshen, wenn progress >= duration
    useEffect(() => {
        if (progress >= duration && duration > 0) {
            const timeout = setTimeout(() => {
                window.dispatchEvent(new Event("spotify-refresh"));
            }, 1500);
            return () => clearTimeout(timeout);
        }
    }, [progress, duration]);

    useEffect(() => {
        const handler = () => {
            (async () => {
                try {
                    const response = await fetch('/api/spotify/now-playing');
                    const data = await response.json();
                    if (response.ok) {
                        setResult(data);
                    }
                } catch {}
            })();
        };
        window.addEventListener("spotify-refresh", handler);
        return () => window.removeEventListener("spotify-refresh", handler);
    }, []);

    const formatTime = ms => {
        if (!ms && ms !== 0) return "--:--";
        const totalSeconds = Math.floor(ms / 1000);
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60;
        return `${minutes}:${seconds.toString().padStart(2, '0')}`;
    };

    return (
        <div className="mt-3 flex justify-center w-full">
            <div className="relative w-full mb-8 grid grid-cols-2 gap-2 border-2 border-gray-500 p-6 rounded-xl backdrop-filter backdrop-blur-lg bg-white bg-opacity-30 overflow-hidden">
                {result.isPlaying && result.albumImageUrl && (
                    <Image
                        src={result.albumImageUrl}
                        alt="Background Image"
                        layout="fill"
                        objectFit="cover"
                        className="z-0 opacity-20 absolute"
                    />
                )}
                <div className="z-10 flex items-center text-lg">
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
                    <div className="z-10 rounded-lg ms-5 w-full">
                        <div className="flex items-center space-x-4">
                            <div className="overflow-hidden">
                                {result.title && result.title.length > 29 ? (
                                    <div className="relative w-full overflow-hidden" style={{maxWidth: '100%'}}>
                                        <a
                                            href={result.songUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="block font-semibold text-blue-500 text-lg whitespace-nowrap"
                                            style={{
                                                display: 'inline-block',
                                                animation: 'marquee 16s linear infinite alternate',
                                                minWidth: '50%',
                                                marginLeft: 20
                                            }}
                                        >
                                            {result.title}
                                        </a>
                                        <style>{`
                                            @keyframes marquee {
                                                0% { transform: translateX(0%); }
                                                100% { transform: translateX(-50%); }
                                            }
                                        `}</style>
                                    </div>
                                ) : (
                                    <a
                                        href={result.songUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block font-semibold w-full truncate text-blue-500 text-lg"
                                    >
                                        {result.title}
                                    </a>
                                )}
                                <p className="truncate text-gray-500 text-base">
                                    {result.artist}
                                </p>
                            </div>
                        </div>
                    </div>
                )}
                {typeof progress === "number" && typeof duration === "number" && duration > 0 && result.isPlaying && (
                    <div className="absolute left-0 bottom-0 w-full px-0 pb-0 z-20 ">
                        <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden relative shadow-inner">
                            <div
                                className="h-2 absolute left-0 top-0 transition-all duration-500 shadow-md rounded-full"
                                style={{
                                    width: `${Math.max(2, Math.min(100, (progress / duration) * 100))}%`,
                                    minWidth: '4px',
                                    zIndex: 30,
                                    background: 'linear-gradient(90deg, #222 80%, #444 100%)',
                                    boxShadow: '0 1px 6px 0 rgba(0,0,0,0.10)',
                                }}
                            >
                                <div style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    width: '100%',
                                    height: '100%',
                                    borderRadius: '9999px',
                                    background: 'linear-gradient(180deg, rgba(255,255,255,0.18) 0%, rgba(0,0,0,0) 80%)',
                                    pointerEvents: 'none',
                                }} />
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Card;