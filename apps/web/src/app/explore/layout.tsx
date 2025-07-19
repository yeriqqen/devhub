import { Nav } from "@/widgets/Nav";

export default function ExploreLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-white">
            <Nav />
            <div className="pt-16">
                {children}
            </div>
        </div>
    );
}
