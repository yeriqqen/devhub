'use client';

import Link from 'next/link';

const workCategories = [
    {
        title: 'Web Development',
        description: 'Interactive websites and web applications',
        href: '/explore/web',
        count: 0,
        featured: true
    },
    {
        title: 'Mobile Apps',
        description: 'iOS and Android applications',
        href: '/explore/mobile',
        count: 0,
        featured: false
    },
    {
        title: 'macOS Apps',
        description: 'Native macOS applications and tools',
        href: '/explore/macos',
        count: 0,
        featured: false
    }
];

export default function ExplorePage() {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            {/* Header */}
            <div className="text-center mb-16">
                <h1 className="text-5xl font-light text-gray-900 mb-6">
                    All Work
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Explore my portfolio of creative projects spanning web development,
                    mobile applications, and desktop software.
                </p>
            </div>

            {/* Categories Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                {workCategories.map((category) => (
                    <Link
                        key={category.href}
                        href={category.href}
                        className="group block bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-all duration-300 hover:border-gray-300"
                    >
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-2xl font-light text-gray-900 group-hover:text-blue-600 transition-colors">
                                {category.title}
                            </h3>
                            {category.featured && (
                                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                                    Featured
                                </span>
                            )}
                        </div>
                        <p className="text-gray-600 mb-4">
                            {category.description}
                        </p>
                        <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-500">
                                {category.count} projects
                            </span>
                            <svg
                                className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 5l7 7-7 7"
                                />
                            </svg>
                        </div>
                    </Link>
                ))}
            </div>

            {/* Recent Work Preview */}
            <div className="border-t border-gray-200 pt-16">
                <h2 className="text-3xl font-light text-gray-900 mb-8 text-center">
                    Recent Work
                </h2>
                <div className="text-center py-12">
                    <div className="w-20 h-20 bg-gray-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                        <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                        </svg>
                    </div>
                    <h3 className="text-xl font-medium text-gray-900 mb-2">No Projects Yet</h3>
                    <p className="text-gray-600">Start adding projects to build your portfolio showcase.</p>
                </div>
            </div>
        </div>
    );
}
