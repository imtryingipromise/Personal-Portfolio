import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Landing } from '@/components/sections/Landing';
import { About } from '@/components/sections/About';
import { Skills } from '@/components/sections/Skills';
import { Projects } from '@/components/sections/Projects';
import { Education } from '@/components/sections/Education';
import { Certifications } from '@/components/sections/Certifications';
import { Contact } from '@/components/sections/Contact';
import { useTheme } from '@/lib/useTheme';
import { NoiseOverlay } from '@/components/ui/NoiseOverlay';
import { ParticleField } from '@/components/ui/ParticleField';
import { ScrollProgress } from '@/components/ui/ScrollProgress';
import { MarqueeBanner } from '@/components/ui/MarqueeBanner';
import { KonamiEaster } from '@/components/ui/KonamiEaster';

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

            <KonamiEaster isDark={isDark} />
            <Navbar isDark={isDark} onToggle={toggle} />
            <main className="flex-grow relative z-[1]">
                <Landing isDark={isDark} />
                <MarqueeBanner isDark={isDark} />
                <About isDark={isDark} />
                <Skills isDark={isDark} />
                <Projects isDark={isDark} />
                <Education isDark={isDark} />
                <Certifications isDark={isDark} />
                <Contact isDark={isDark} />
            </main>
            <Footer isDark={isDark} />
        </div>
    );
}

export default App;
