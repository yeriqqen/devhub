'use client';

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

export const LeftMenu = () => {
    const [hoveredSide, setHoveredSide] = useState<'left' | 'right' | null>(null);
    const pathname = usePathname();
    const isPortfolioPage = pathname === '/portfolio';

    const textColor = isPortfolioPage ? 'text-white' : 'text-black';

    return (
        <div
            className="relative pointer-events-auto"
            onMouseEnter={() => setHoveredSide('left')}
            onMouseLeave={() => setHoveredSide(null)}
        >
            <Link href="/explore" className={`cursor-pointer ${textColor}`}>
                <div className={`text-xl underline font-light relative z-20 hover:text-blue-600 transition-colors`}>
                    explore
                </div>
            </Link>
            <ul
                className={`absolute top-0 left-full ml-2 text-xl ${textColor} font-light whitespace-nowrap transition-all duration-300 ease-out z-10 ${hoveredSide === 'left'
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
            </ul>
        </div>
    )
}