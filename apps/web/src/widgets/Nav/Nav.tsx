'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { WelcomeButton } from './ui';

export const Nav = () => {
    const [hoveredSide, setHoveredSide] = useState<'left' | 'right' | null>(null);
    const [isClient, setIsClient] = useState(false);
    const pathname = usePathname();
    const isHomePage = pathname === '/';

    useEffect(() => {
        setIsClient(true);
    }, []);

    const showHomepageLayout = isClient ? isHomePage : true;

    return (
        <>
            <nav className={`fixed left-0 right-0 pointer-events-none z-50 transition-all duration-1000 ease-out ${showHomepageLayout
                ? 'top-1/2 transform -translate-y-full'
                : 'top-8'
                }`}>
                <div className="flex justify-between px-6 md:px-8">
                    <div
                        className="relative pointer-events-auto"
                        onMouseEnter={() => setHoveredSide('left')}
                        onMouseLeave={() => setHoveredSide(null)}
                    >
                        <Link href="/explore" className="cursor-pointer text-black">
                            <div className="text-xl underline font-light relative z-20 hover:text-blue-600 transition-colors">
                                explore
                            </div>
                        </Link>
                        <div
                            className={`absolute top-0 left-full ml-2 text-xl text-black font-light whitespace-nowrap transition-all duration-300 ease-out z-10 ${hoveredSide === 'left'
                                ? 'opacity-100 translate-x-0 visible'
                                : 'opacity-0 -translate-x-4 invisible'
                                }`}
                        >
                            <Link href="/explore/web" className="hover:text-blue-600 transition-colors mr-2">
                                web
                            </Link>
                            <Link href="/explore/macos" className="hover:text-purple-600 transition-colors mr-2">
                                macOS
                            </Link>
                            <Link href="/explore/mobile" className="hover:text-green-600 transition-colors">
                                mobile
                            </Link>
                        </div>
                    </div>
                    <div
                        className="relative pointer-events-auto"
                        onMouseEnter={() => setHoveredSide('right')}
                        onMouseLeave={() => setHoveredSide(null)}
                    >
                        <div className="cursor-pointer text-black">
                            <div className="text-xl font-light relative z-20">
                                connect
                            </div>
                        </div>
                        <div
                            className={`absolute top-0 right-full mr-2 text-xl text-black font-light whitespace-nowrap transition-all duration-300 ease-out z-10 ${hoveredSide === 'right'
                                ? 'opacity-100 translate-x-0 visible'
                                : 'opacity-0 translate-x-4 invisible'
                                }`}
                        >
                            <Link href="/about" className="hover:text-blue-600 transition-colors mr-2">
                                about
                            </Link>
                            <Link href="/contact" className="hover:text-blue-600 transition-colors mr-2">
                                contact
                            </Link>
                            <Link href="/explore" className="hover:text-blue-600 transition-colors mr-2">
                                portfolio
                            </Link>
                            <a href="/resume.pdf" target="_blank" className="hover:text-blue-600 transition-colors">
                                resume
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
            <WelcomeButton />
        </>
    );
};

export default Nav;