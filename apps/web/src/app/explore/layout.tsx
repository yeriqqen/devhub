export default function ExploreLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-white">
            <div className="pt-20">
                {children}
            </div>
        </div>
    );
}
