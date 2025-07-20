'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { WelcomeButton, LeftMenu, RightMenu } from './ui';

export const Nav = () => {
    const [isClient, setIsClient] = useState(false);
    const pathname = usePathname();
    const isHomePage = pathname === '/';
    const isPortfolioPage = pathname === '/portfolio';

    useEffect(() => {
        setIsClient(true);
    }, []);

    const showHomepageLayout = isClient ? isHomePage : true;
    const textColor = isPortfolioPage ? 'text-white' : 'text-black';

    return (
        <nav>
            <div className={`fixed left-0 right-0 pointer-events-none z-50 transition-all duration-1000 ease-out ${showHomepageLayout
                ? 'top-1/2 transform -translate-y-full'
                : 'top-8'
                }`}>
                <div className="flex justify-between px-6 md:px-8">
                    <LeftMenu />
                    <RightMenu />
                </div>
            </div>
            <WelcomeButton textColor={textColor} />
        </nav>
    );
};

export default Nav;