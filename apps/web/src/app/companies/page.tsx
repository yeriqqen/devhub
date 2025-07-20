'use client';

import Link from 'next/link';
import { CompaniesGrid } from '../../widgets/ExperienceGrid';

export default function CompaniesPage() {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            {/* Header */}
            <div className="text-center mb-16">
                <h1 className="text-5xl font-light text-gray-900 mb-6">
                    Professional Experience
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    A journey through innovative companies where I&apos;ve contributed to building
                    exceptional digital experiences and scalable solutions.
                </p>
            </div>

            {/* Companies Grid */}
            <CompaniesGrid />

            {/* Call to Action */}
            <div className="mt-16 text-center">
                <div className="bg-gray-50 rounded-lg p-8">
                    <h3 className="text-2xl font-light text-gray-900 mb-4">
                        Interested in Working Together?
                    </h3>
                    <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                        I&apos;m always open to discussing new opportunities and exciting projects.
                        Let&apos;s connect and see how we can create something amazing together.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
                        >
                            Get in Touch
                        </Link>
                        <Link
                            href="/resume.pdf"
                            target="_blank"
                            className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors"
                        >
                            View Resume
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
