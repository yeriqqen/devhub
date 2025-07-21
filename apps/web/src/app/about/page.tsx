export default function AboutPage() {
    return (
        <main className="min-h-screen bg-white text-black">
            {/* Intro Section */}
            <section className="px-6 md:px-8 py-20">
                <div className="max-w-[90%] mx-auto">
                    <div className="space-y-10">
                        <h1 className="text-6xl md:text-8xl lg:text-9xl font-light italic leading-tight">
                            I’m Yestay.
                        </h1>

                        <div className="space-y-8 text-3xl md:text-4xl lg:text-5xl leading-relaxed text-gray-800">
                            <p>
                                I spend most of my time learning, building, and reflecting. Some of that ends up in code. Much of it doesn’t.
                            </p>
                            <p>
                                I care about clarity, discipline, and momentum—whether writing software or living life.
                            </p>
                            <p className="font-medium text-black">
                                I move forward by asking better questions.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* My Story */}
            <section className="px-6 md:px-8 py-20 bg-gray-50">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-5xl md:text-7xl font-light italic mb-16">A Bit of My Story</h2>

                    <div className="space-y-16 text-2xl md:text-3xl leading-relaxed text-gray-800">
                        <div>
                            <h3 className="text-4xl md:text-5xl font-semibold mb-6">Origins</h3>
                            <p>
                                I came from Kazakhstan, started my CS degree in South Korea.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-4xl md:text-5xl font-semibold mb-6">Now</h3>
                            <p>
                                I’m a student, an engineer, and a human working toward mastery. Simply: I eaty, I sleepy, I trainy.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-4xl md:text-5xl font-semibold mb-6">Always</h3>
                            <p>
                                I value honesty, depth, and execution. I’m here to do meaningful work without noise, and to stay awake to the world as it changes.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Beliefs */}
            <section className="px-6 md:px-8 py-20">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-5xl md:text-7xl font-light italic mb-16">Things I Live By</h2>

                    <div className="grid md:grid-cols-2 gap-16 text-gray-800">
                        <div className="space-y-6">
                            <h3 className="text-3xl md:text-4xl font-semibold">Clarity Over Complexity</h3>
                            <p className="text-xl md:text-2xl leading-relaxed">
                                In thought, in work, in relationships—clear beats clever.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <h3 className="text-3xl md:text-4xl font-semibold">Discipline Shapes Freedom</h3>
                            <p className="text-xl md:text-2xl leading-relaxed">
                                Structure isn’t limitation. It’s how I carve space to create and think.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <h3 className="text-3xl md:text-4xl font-semibold">Questions & Answers</h3>
                            <p className="text-xl md:text-2xl leading-relaxed">
                                The right question unlocks more than a thousand solutions.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <h3 className="text-3xl md:text-4xl font-semibold">Growth Is Directional</h3>
                            <p className="text-xl md:text-2xl leading-relaxed">
                                I measure progress not by speed, but by whether I’m headed somewhere real.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Personal Interests */}
            <section className="px-6 md:px-8 py-20">
                <div className="max-w-4xl mx-auto text-center space-y-12">
                    <h2 className="text-5xl md:text-7xl font-light italic">Outside the Terminal</h2>

                    <div className="text-2xl md:text-3xl text-gray-700 leading-relaxed space-y-8">
                        <p>
                            I run, lift, swim, and read. I study languages and write to think clearly. I’m building a life that feels aligned, not just impressive.
                        </p>

                        <p>
                            I seek depth over novelty, strength over aesthetics, presence over polish.
                        </p>

                        <p className="font-medium text-black">
                            Stillness is a feature, not a bug.
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact */}
            <section className="px-6 md:px-8 py-20 bg-black text-white">
                <div className="max-w-4xl mx-auto text-center space-y-10">
                    <h2 className="text-5xl md:text-7xl lg:text-8xl font-light italic leading-tight">
                        Reach out if this resonates.
                    </h2>

                    <p className="text-2xl md:text-3xl lg:text-4xl text-gray-300 leading-relaxed">
                        I don’t chase projects. I choose alignment. If that’s you, let’s talk.
                    </p>

                    <div className="pt-6">
                        <a
                            href="/contact"
                            className="inline-block px-10 py-4 border-2 border-white text-white hover:bg-white hover:text-black transition-colors duration-200 font-medium text-xl md:text-2xl"
                        >
                            Get In Touch
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
}
