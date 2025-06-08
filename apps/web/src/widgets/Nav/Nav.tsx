'use client';

import { useState } from 'react';

export const Nav = () => {
    const [hoveredSide, setHoveredSide] = useState<'left' | 'right' | null>(null);

    return (
        <nav className="fixed left-0 right-0 top-1/2 transform -translate-y-1/2 pointer-events-none z-50">
            <div className="flex justify-between items-center px-6 md:px-8">
                <div
                    className="relative pointer-events-auto cursor-pointer text-black"
                    onMouseEnter={() => setHoveredSide('left')}
                    onMouseLeave={() => setHoveredSide(null)}
                >
                    <div className="text-xl underline font-light relative z-20">
                        explore
                    </div>
                    <div
                        className={`absolute top-0 left-full ml-2 text-xl font-light whitespace-nowrap transition-all duration-300 ease-out z-10 ${hoveredSide === 'left'
                            ? 'opacity-100 translate-x-0 visible'
                            : 'opacity-0 -translate-x-4 invisible'
                            }`}
                    >
                        web macOS mobile
                    </div>
                </div>

                <div
                    className="relative pointer-events-auto cursor-pointer text-black"
                    onMouseEnter={() => setHoveredSide('right')}
                    onMouseLeave={() => setHoveredSide(null)}
                >
                    <div className="text-xl font-light relative z-20">
                        connect
                    </div>
                    <div
                        className={`absolute top-0 right-full mr-2 text-xl font-light whitespace-nowrap transition-all duration-300 ease-out z-10 ${hoveredSide === 'right'
                            ? 'opacity-100 translate-x-0 visible'
                            : 'opacity-0 translate-x-4 invisible'
                            }`}
                    >
                        about contact portfolio resume
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Nav;