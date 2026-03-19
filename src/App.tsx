import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { FeaturesGrid } from '@/components/sections/FeaturesGrid';
import { Projects } from '@/components/sections/Projects';
import { Education } from '@/components/sections/Education';
import { Certifications } from '@/components/sections/Certifications';
import { Contact } from '@/components/sections/Contact';
import { useTheme } from '@/lib/useTheme';
import { NoiseOverlay } from '@/components/ui/NoiseOverlay';
import { ParticleField } from '@/components/ui/ParticleField';
import { ScrollProgress } from '@/components/ui/ScrollProgress';
import { MarqueeBanner } from '@/components/ui/MarqueeBanner';

function App() {
    const { isDark, toggle } = useTheme();

    return (
        <div
            className="min-h-screen flex flex-col w-full overflow-x-hidden"
            style={{
                background: isDark ? '#000000' : '#F0F0F0',
                color: isDark ? '#F5F5F5' : '#111111',
                transition: 'background-color 0.3s ease, color 0.3s ease',
            }}
        >
            {/* Global effects */}
            <ScrollProgress isDark={isDark} />
            <ParticleField isDark={isDark} />
            <NoiseOverlay />

            <Navbar isDark={isDark} onToggle={toggle} />
            <main className="flex-grow relative z-[1]">
                {/* 1. Hero */}
                <Hero isDark={isDark} />
                {/* Marquee strip */}
                <MarqueeBanner isDark={isDark} />
                {/* 2. About */}
                <About isDark={isDark} />
                {/* 3. Skills */}
                <FeaturesGrid isDark={isDark} />
                {/* 4. Projects */}
                <Projects isDark={isDark} />
                {/* 5. Education */}
                <Education isDark={isDark} />
                {/* 6. Certifications */}
                <Certifications isDark={isDark} />
                {/* 7. Contact */}
                <Contact isDark={isDark} />
            </main>
            <Footer isDark={isDark} />
        </div>
    );
}

export default App;
