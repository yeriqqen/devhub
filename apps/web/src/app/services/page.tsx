export default function AboutPage() {
    return (
        <main className="min-h-screen bg-white text-black">
            {/* Hero Section */}
            <section className="px-6 md:px-8 py-16 md:py-24">
                <div className="max-w-[90%] mx-auto">
                    <div className="space-y-8">
                        <h1 className="text-6xl md:text-8xl lg:text-9xl font-light italic leading-tight">
                            I believe innovation is the mother of digital transformation.
                        </h1>

                        <div className="space-y-8 text-3xl md:text-4xl lg:text-5xl leading-relaxed">
                            <p>
                                That&apos;s why I build.
                            </p>

                            <p>
                                It&apos;s the only role that routinely adapts to new technologies, frameworks, and methodologies to create, innovate, and deliver.
                            </p>

                            <p>
                                I outperform by constantly evolving.
                            </p>

                            <p>
                                I build, iterate, build, iterate.
                            </p>

                            <p>
                                And so should you.
                            </p>

                            <p className="font-medium">
                                Still reading? Let&apos;s connect and explore how I can help you innovate.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Capabilities Section
            <section className="px-6 md:px-8 py-16 bg-gray-50">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-light italic mb-12">Capabilities</h2>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                        {[
                            'Frontend Development',
                            'Backend Architecture',
                            'Mobile Applications',
                            'UI/UX Design',
                            'DevOps & Cloud',
                            'API Development',
                            'Database Design',
                            'Performance Optimization'
                        ].map((capability, index) => (
                            <div key={index} className="group">
                                <a href="#" className="block p-4 hover:bg-white transition-colors duration-200 rounded">
                                    <span className="text-lg font-medium group-hover:underline">
                                        {capability}
                                    </span>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section> */}


            {/* Contact CTA Section */}
            <section className="px-6 md:px-8 py-16 bg-black text-white">
                <div className="max-w-4xl mx-auto text-center space-y-12">
                    <h2 className="text-5xl md:text-7xl lg:text-8xl font-light italic leading-tight">
                        Ready to build something extraordinary?
                    </h2>

                    <p className="text-2xl md:text-3xl lg:text-4xl text-gray-300 leading-relaxed">
                        Let&apos;s discuss your next project and create something that makes a difference.
                    </p>

                    <div className="pt-8">
                        <a
                            href="/contact"
                            className="inline-block px-12 py-6 border-2 border-white text-white hover:bg-white hover:text-black transition-colors duration-200 font-medium text-xl md:text-2xl"
                        >
                            Get In Touch
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
}
