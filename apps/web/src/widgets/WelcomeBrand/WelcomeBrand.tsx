'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

export const WelcomeBrand = () => {
    const pathname = usePathname();
    const isHomePage = pathname === '/';

    return (
        <div className={`fixed z-40 transition-all duration-500 ease-out ${isHomePage
                ? 'bottom-20 md:bottom-24 left-0 right-0 pointer-events-none'
                : 'top-8 left-1/2 transform -translate-x-1/2 pointer-events-auto'
            }`}>
            <div className={`text-center ${isHomePage ? 'px-6 md:px-8' : ''}`}>
                <Link
                    href="/"
                    className={`cursor-pointer text-black transition-colors ${isHomePage ? 'pointer-events-none' : 'hover:text-gray-600 pointer-events-auto'
                        }`}
                >
                    <h1 className={`font-black tracking-tight text-black leading-none transition-all duration-500 ${isHomePage
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

export default WelcomeBrand;
