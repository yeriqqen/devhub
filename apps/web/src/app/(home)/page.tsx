import { HeroSection } from "@/widgets/HeroSection";
import { Nav } from "@/widgets/Nav";
import { CookieNotice } from "@/widgets/CookieNotice";
import { MainBrand } from "@/widgets/MainBrand";

export default function Home() {
    return (
        <main className="min-h-screen bg-gray-50">
            <HeroSection />
            <MainBrand />
            <Nav />
            <CookieNotice />
        </main>
    );
}