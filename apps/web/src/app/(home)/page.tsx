'use client';

import { useState, useEffect } from 'react';
import { HeroSection } from "@/widgets/HeroSection";
import { CookieNotice } from "@/widgets/CookieNotice";
import { MainBrand } from "@/widgets/MainBrand";
import { Welcome } from "@/widgets/Welcome";

export default function Home() {
    const [showWelcome, setShowWelcome] = useState(false);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
        const visited = sessionStorage.getItem('hasVisited');

        if (!visited) {
            setShowWelcome(true);
        }
    }, []);

    const handleWelcomeComplete = () => {
        setShowWelcome(false);
        sessionStorage.setItem('hasVisited', 'true');

        // Smooth scroll to top after transition
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <>
            {showWelcome && <Welcome onComplete={handleWelcomeComplete} />}

            <main
                className={`min-h-screen bg-gray-50`}
                style={{
                    minHeight: '100vh',
                    marginTop: showWelcome ? '100vh' : '0', // Push content down when welcome is shown
                    transition: 'margin-top 0.1s ease-out',
                    ...(isClient && { visibility: showWelcome ? 'hidden' : 'visible' }) // Only apply visibility on client
                }}
            >
                <HeroSection />
                <MainBrand />
                <CookieNotice />
            </main>
        </>
    );
}