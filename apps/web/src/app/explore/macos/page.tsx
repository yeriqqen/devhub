'use client';

import Link from 'next/link';
import { useState } from 'react';

// Define macOS project interface
interface MacOSProject {
    id: number;
    title: string;
    description: string;
    image: string;
    tags: string[];
    category: string;
    year: string;
    href: string;
}

// Replace with your actual macOS projects
const macosProjects: MacOSProject[] = [];

const categories = ['All', 'Developer Tools', 'Design', 'Utilities', 'Media', 'Productivity'];

export default function MacOSProjectsPage() {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [hoveredProject, setHoveredProject] = useState<number | null>(null);

    const filteredProjects = selectedCategory === 'All'
        ? macosProjects
        : macosProjects.filter(project => project.category === selectedCategory);

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            {/* Header */}
            <div className="text-center mb-12">
                <Link
                    href="/explore"
                    className="inline-flex items-center text-gray-500 hover:text-gray-700 mb-4 transition-colors"
                >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    Back to All Work
                </Link>
                <h1 className="text-5xl font-light text-gray-900 mb-4">
                    macOS Applications
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Native macOS applications built with Swift and SwiftUI,
                    designed for productivity and creativity on the Mac platform.
                </p>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`px-6 py-2 rounded-full transition-all duration-200 ${selectedCategory === category
                            ? 'bg-purple-600 text-white'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                            }`}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* Projects Grid */}
            {filteredProjects.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project) => (
                        <Link
                            key={project.id}
                            href={project.href}
                            className="group block"
                            onMouseEnter={() => setHoveredProject(project.id)}
                            onMouseLeave={() => setHoveredProject(null)}
                        >
                            <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-gray-300">
                                {/* Project Image */}
                                <div className="aspect-[4/3] bg-gradient-to-br from-purple-50 to-indigo-100 relative overflow-hidden">
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="text-center">
                                            <div className="w-16 h-16 bg-purple-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                </svg>
                                            </div>
                                            <p className="text-sm text-gray-500">macOS App</p>
                                        </div>
                                    </div>
                                    {hoveredProject === project.id && (
                                        <div className="absolute inset-0 bg-black bg-opacity-10 flex items-center justify-center">
                                            <span className="text-white bg-black bg-opacity-50 px-4 py-2 rounded-full text-sm">
                                                View App
                                            </span>
                                        </div>
                                    )}
                                </div>

                                {/* Project Details */}
                                <div className="p-6">
                                    <div className="flex items-center justify-between mb-2">
                                        <h3 className="text-xl font-medium text-gray-900 group-hover:text-purple-600 transition-colors">
                                            {project.title}
                                        </h3>
                                        <span className="text-sm text-gray-500">{project.year}</span>
                                    </div>
                                    <p className="text-gray-600 mb-4">
                                        {project.description}
                                    </p>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="bg-gray-100 text-gray-700 text-xs px-2.5 py-1 rounded-full"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Category */}
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm font-medium text-purple-600">
                                            {project.category}
                                        </span>
                                        <svg
                                            className="w-5 h-5 text-gray-400 group-hover:text-purple-600 transition-colors"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                            />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            ) : (
                <div className="text-center py-16">
                    <div className="w-24 h-24 bg-gray-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                        <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                    </div>
                    <h3 className="text-xl font-medium text-gray-900 mb-2">No macOS Apps Yet</h3>
                    <p className="text-gray-600 mb-6">Add your macOS application projects to showcase your work.</p>
                    <Link
                        href="/explore"
                        className="inline-flex items-center text-purple-600 hover:text-purple-700 transition-colors"
                    >
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        Browse All Categories
                    </Link>
                </div>
            )}

            {/* Load More Button - Only show if there are projects */}
            {filteredProjects.length > 0 && (
                <div className="text-center mt-12">
                    <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-8 py-3 rounded-full transition-colors">
                        Load More Apps
                    </button>
                </div>
            )}
        </div>
    );
}
