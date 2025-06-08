export default function Home() {
    return (
        <main className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="px-6 md:px-8 py-12 md:py-16">
                {/* Project Titles */}
                <ul className="text-center items-center flex flex-col gap-y-1">
                    <div className="flex flex-col md:flex-row gap-y-1 gap-x-[100px] items-center text-4xl font-light italic text-black">
                        <li>DEP</li>
                        <li>Yeriqqen</li>
                        <li>My Bankai</li>
                        <li>Yikipedia</li>
                    </div>
                    <div className="flex flex-col md:flex-row gap-y-1 gap-x-[100px] items-center text-4xl font-light italic text-black">
                        <li>Memories</li>
                        <li></li>
                        <li>Yikipedia</li>
                        <li>나 혼자만 레벨업</li>
                    </div>
                </ul>
            </section>

            {/* Main Brand - positioned at bottom */}
            <section className="fixed bottom-20 md:bottom-24 left-0 right-0 px-6 md:px-8">
                <div className="text-center">
                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tight text-black leading-none">
                        WELCOME
                    </h1>
                </div>
            </section>

            {/* Navigation - positioned in middle with work and agency on sides */}
            <nav className="fixed left-0 right-0 top-1/2 transform -translate-y-1/2 pointer-events-none">
                <div className="flex justify-between items-center px-6 md:px-8">
                    <div className="text-xl underline font-light pointer-events-auto cursor-pointer text-black">
                        explore web macOS mobile
                    </div>
                    <div className="text-xl font-light pointer-events-auto cursor-pointer text-black">
                        about contact portfolio resume connect
                    </div>
                </div>
            </nav>

            {/* Cookie Notice */}
            <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 md:p-6">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <p className="text-sm text-black flex-1">
                        We use cookies and other tracking technologies on our website and to understand where our anonymous visitors are coming from.
                    </p>
                    <div className="flex gap-4">
                        <button className="text-sm underline text-black hover:text-gray-600 transition-colors">
                            Decline
                        </button>
                        <button className="text-sm underline text-black hover:text-gray-600 transition-colors">
                            Accept
                        </button>
                    </div>
                </div>
            </div>
        </main>
    );
}