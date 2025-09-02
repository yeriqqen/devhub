import { defaultProjects } from './model';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export const HeroSection = () => {
    const [hoveredProject, setHoveredProject] = useState<string | null>(null);
    const [fadingOut, setFadingOut] = useState(false);
    const [displayedProject, setDisplayedProject] = useState<string | null>(null);
    const [leaveTimeout, setLeaveTimeout] = useState<NodeJS.Timeout | null>(null);

    // Handle project hover changes
    const handleProjectEnter = (projectId: string) => {
        // Clear any pending leave timeout
        if (leaveTimeout) {
            clearTimeout(leaveTimeout);
            setLeaveTimeout(null);
        }
        
        setFadingOut(false);
        setHoveredProject(projectId);
        setDisplayedProject(projectId);
    };

    const handleProjectLeave = () => {
        // Use timeout to prevent flickering when moving between items
        const timeout = setTimeout(() => {
            setHoveredProject(null);
            setFadingOut(true);
            // Remove video after fade out animation completes
            setTimeout(() => {
                setDisplayedProject(null);
                setFadingOut(false);
            }, 400);
        }, 150); // Small delay to prevent flickering
        
        setLeaveTimeout(timeout);
    };

    // Cleanup timeout on unmount
    useEffect(() => {
        return () => {
            if (leaveTimeout) {
                clearTimeout(leaveTimeout);
            }
        };
    }, [leaveTimeout]);

    // Create rows with exactly 4 items each
    const createRows = (projects: typeof defaultProjects) => {
        const rows = [];
        for (let i = 0; i < projects.length; i += 4) {
            rows.push(projects.slice(i, i + 4));
        }
        return rows;
    };

    const projectRows = createRows(defaultProjects);
    const displayedProjectData = defaultProjects.find(p => p.id === displayedProject);

    return (
        <section className="px-6 md:px-8 py-12 md:py-16 relative">
            {/* Fullscreen Video/Image Overlay */}
            {displayedProject && displayedProjectData && (
                <div className={`fixed inset-0 z-40 pointer-events-none ${fadingOut ? 'animate-fade-out' : 'animate-fade-in'}`}>
                    {displayedProjectData.video ? (
                        <video
                            className="w-full h-full object-cover"
                            src={displayedProjectData.video}
                            autoPlay
                            loop
                            muted
                            playsInline
                        />
                    ) : (
                        <Image
                            src={displayedProjectData.image}
                            fill
                            style={{ objectFit: 'cover' }}
                            alt={displayedProjectData.name}
                        />
                    )}
                </div>
            )}

            {/* Project Titles */}
            <ul className="text-center items-center flex flex-col gap-y-1 relative z-50"
                onMouseLeave={handleProjectLeave}
            >
                {projectRows.map((row, rowIndex) => (
                    <div
                        key={rowIndex}
                        className="flex flex-col md:flex-row gap-y-1 gap-x-[100px] items-center text-4xl font-light italic text-black"
                    >
                        {row.map((project) => (
                            <li
                                key={project.id}
                                className={`${project.name === "Soon" ? "text-gray-400" : ""} ${project.name !== "Soon" ? "hover:underline cursor-pointer" : ""} transition-opacity duration-300 hover:text-white ${hoveredProject && hoveredProject !== project.id
                                    ? "opacity-30 text-neutral-500"
                                    : "opacity-100"
                                    }`}
                                onMouseEnter={() => {
                                    if ((project.video || project.image) && project.name !== "Soon") {
                                        handleProjectEnter(project.id);
                                    }
                                }}
                                // Remove individual onMouseLeave - handled by container
                            >
                                {project.name}
                            </li>
                        ))}
                    </div>
                ))}
            </ul>
        </section>
    )
};
export default HeroSection;