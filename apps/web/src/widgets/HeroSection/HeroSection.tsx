export const HeroSection = () => {
    return (
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
                    <li>나 혼자만 레벨업</li>
                    <li className="text-gray-400">Soon</li>
                    <li className="text-gray-400">Soon</li>
                </div>
            </ul>
        </section>
    )
};
export default HeroSection;