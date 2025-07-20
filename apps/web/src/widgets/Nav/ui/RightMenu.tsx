'use client';

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

export const RightMenu = () => {
    const [hoveredSide, setHoveredSide] = useState<'left' | 'right' | null>(null);
    const pathname = usePathname();
    const isPortfolioPage = pathname === '/portfolio';

    const textColor = isPortfolioPage ? 'text-white' : 'text-black';

    return (
        <div
            className="relative pointer-events-auto"
            onMouseEnter={() => setHoveredSide('right')}
            onMouseLeave={() => setHoveredSide(null)}
        >
            <div className={`cursor-pointer ${textColor}`}>
                <div className="text-xl font-light relative z-20">
                    connect
                </div>
            </div>
            <ul
                className={`absolute top-0 right-full mr-2 text-xl ${textColor} font-light whitespace-nowrap transition-all duration-300 ease-out z-10 ${hoveredSide === 'right'
                    ? 'opacity-100 translate-x-0 visible'
                    : 'opacity-0 translate-x-4 invisible'
                    }`}
            >
                <Link href="/about" className="hover:text-blue-600 transition-colors mr-2">
                    about
                </Link>
                <Link href="/services" className="hover:text-blue-600 transition-colors mr-2">
                    services
                </Link>
                <Link href="/contact" className="hover:text-blue-600 transition-colors mr-2">
                    contact
                </Link>
                <Link href="/portfolio" className="hover:text-blue-600 transition-colors mr-2">
                    portfolio
                </Link>
                <a href="/resume.pdf" target="_blank" className="hover:text-blue-600 transition-colors">
                    resume
                </a>
            </ul>
        </div>
    )
}