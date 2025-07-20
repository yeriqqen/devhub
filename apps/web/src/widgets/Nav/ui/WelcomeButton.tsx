'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

interface WelcomeButtonProps {
    textColor?: string;
}

export const WelcomeButton = ({ textColor = 'text-black' }: WelcomeButtonProps) => {
    const [mounted, setMounted] = useState(false);
    const pathname = usePathname();
    const isHomePage = pathname === '/';

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <div
                className="fixed flex justify-center left-0 right-0 pointer-events-none z-40"
                style={{
                    top: '80vh',
                    transform: 'translateY(-50%)',
                    height: '12rem',
                    transition: 'top 1000ms ease-out, transform 1000ms ease-out'
                }}
            >
                <div className="pointer-events-auto flex items-center">
                    <Link href="/" className={`cursor-pointer ${textColor} transition-colors pointer-events-none`}>
                        <h1 className={`font-black tracking-tight ${textColor} leading-none transition-all duration-1000 text-6xl md:text-8xl lg:text-9xl`}>
                            WELCOME
                        </h1>
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div
            className="fixed flex justify-center left-0 right-0 pointer-events-none z-40"
            style={{
                top: isHomePage ? '80vh' : '-3rem',
                transform: isHomePage ? 'translateY(-50%)' : 'translateY(0)',
                height: '12rem',
                transition: 'top 1000ms ease-out, transform 1000ms ease-out'
            }}
        >
            <div className="pointer-events-auto flex items-center">
                <Link href="/" className={`cursor-pointer ${textColor} transition-colors ${isHomePage ? 'pointer-events-none' : 'hover:text-gray-600'
                    }`}>
                    <h1 className={`font-black tracking-tight ${textColor} leading-none transition-all duration-1000 ${isHomePage
                        ? 'text-6xl md:text-8xl lg:text-9xl'
                        : 'text-2xl md:text-3xl'
                        }`}>
                        WELCOME
                    </h1>
                </Link>
            </div>
        </div>
    );
};
