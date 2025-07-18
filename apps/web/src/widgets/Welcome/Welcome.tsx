'use client';

import { useState, useEffect } from 'react';

interface WelcomeProps {
    onComplete: () => void;
}

export const Welcome = ({ onComplete }: WelcomeProps) => {
    const [isVisible, setIsVisible] = useState(true);
    const [scrollProgress, setScrollProgress] = useState(0);
    const [hasEntered, setHasEntered] = useState(false);
    const [innerHeight, setInnerHeight] = useState(0);

    useEffect(() => {
        setInnerHeight(window.innerHeight);
        // Hide scrollbar when welcome is active
        document.body.style.overflow = 'hidden';
        document.documentElement.style.overflow = 'hidden';

        // Trigger entrance animation
        const enterTimeout = setTimeout(() => {
            setHasEntered(true);
        }, 100);

        const triggerTransition = (progress: number) => {
            setScrollProgress(Math.min(progress, 1));

            if (progress >= 1) {
                setTimeout(() => {
                    // Restore scrollbar
                    document.body.style.overflow = '';
                    document.documentElement.style.overflow = '';
                    setIsVisible(false);
                    onComplete();
                }, 300);
            }
        };

        const handleScroll = () => {
            const scrollY = window.scrollY;
            const progress = Math.min(scrollY / 100, 1); // 100px for full transition
            console.log('Scroll detected:', scrollY, 'Progress:', progress);
            triggerTransition(progress);
        };

        const handleWheel = (e: WheelEvent) => {
            e.preventDefault(); // Prevent default scroll behavior
            const delta = e.deltaY;
            console.log('Wheel detected:', delta);

            if (delta > 0) { // Scrolling down
                const newProgress = scrollProgress + (delta / 500); // Adjust sensitivity
                triggerTransition(newProgress);
            }
        };

        const handleTouchStart = (e: TouchEvent) => {
            const startY = e.touches[0].clientY;

            const handleTouchMove = (moveEvent: TouchEvent) => {
                const currentY = moveEvent.touches[0].clientY;
                const deltaY = startY - currentY;

                if (deltaY > 0) { // Swipe up
                    const progress = deltaY / 100; // Adjust sensitivity
                    triggerTransition(progress);
                }
            };

            document.addEventListener('touchmove', handleTouchMove, { passive: false });

            const handleTouchEnd = () => {
                document.removeEventListener('touchmove', handleTouchMove);
                document.removeEventListener('touchend', handleTouchEnd);
            };

            document.addEventListener('touchend', handleTouchEnd, { once: true });
        };

        // Add event listeners
        window.addEventListener('scroll', handleScroll, { passive: true });
        window.addEventListener('wheel', handleWheel, { passive: false });
        document.addEventListener('touchstart', handleTouchStart, { passive: true });

        return () => {
            clearTimeout(enterTimeout);
            // Restore scrollbar on cleanup
            document.body.style.overflow = '';
            document.documentElement.style.overflow = '';
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('wheel', handleWheel);
            document.removeEventListener('touchstart', handleTouchStart);
        };
    }, [onComplete, scrollProgress]);

    if (!isVisible) {
        return null;
    }

    // Calculate transform values for natural continuous scroll
    const welcomeTranslateY = scrollProgress * -innerHeight; // Move entire screen height up

    return (
        <div
            className={`fixed inset-0 z-50 flex items-center justify-center cursor-pointer bg-white`}
            style={{
                transform: `translateY(${welcomeTranslateY}px)`
            }}
            onClick={() => {
                if (scrollProgress < 1) {
                    // Restore scrollbar
                    document.body.style.overflow = '';
                    document.documentElement.style.overflow = '';
                    setIsVisible(false);
                    onComplete();
                }
            }}
        >
            <div
                className={`text-center space-y-8 transform transition-all duration-700 ease-out delay-100`}
                style={{
                    opacity: hasEntered ? 1 : 0,
                    transform: `translateY(${hasEntered ? 0 : 12}px)`
                }}
            >
                <div className="space-y-4">
                    <h1
                        className={`text-6xl font-light text-black transform transition-all duration-700 ease-out delay-200`}
                        style={{
                            opacity: hasEntered ? 1 : 0,
                            transform: `translateY(${hasEntered ? 0 : 8}px)`
                        }}
                    >
                        Welcome
                    </h1>
                    <p
                        className={`text-xl text-gray-600 font-light transform transition-all duration-700 ease-out delay-300`}
                        style={{
                            opacity: hasEntered ? 1 : 0,
                            transform: `translateY(${hasEntered ? 0 : 8}px)`
                        }}
                    >
                        scroll down
                    </p>
                </div>
            </div>
        </div>
    );
};
