import { SpotlightNavbar } from "@/components/ui/spotlight-navbar";
import Galaxy from "@/components/Galaxy";
import WorkGlimpse from "@/components/WorkGlimpse";

export default function Home() {
  return (
    <>
    <main className="relative h-screen flex flex-col w-full overflow-hidden text-foreground">
      {/* Background */}
      <div className="absolute inset-0 z-0 overflow-hidden flex items-center justify-center">
        {/* We keep it responsive by default, but apply the requested props */}
        <div style={{ width: '100%', height: '100%', position: 'relative' }}>
          <Galaxy
            starSpeed={0.5}
            density={1}
            hueShift={140}
            speed={1}
            glowIntensity={0.3}
            saturation={0}
            mouseRepulsion={true}
            repulsionStrength={2}
            twinkleIntensity={0.3}
            rotationSpeed={0.1}
            transparent={true}
          />
        </div>
      </div>

      {/* Navbar */}
      <SpotlightNavbar />

      {/* Hero Content */}
      <div className="relative z-10 flex-grow flex flex-col items-center justify-center px-4 text-center max-w-5xl mx-auto">
        <h1 className="font-heading text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">
          Transforming Ideas into <br className="hidden md:block"/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-100 to-neutral-500 drop-shadow-lg">Digital Reality</span>
        </h1>
        <p className="font-sans text-lg md:text-2xl text-neutral-300 max-w-2xl mb-10">
          We are a premium digital service provider specializing in modern web development, UI/UX design, and digital marketing.
        </p>
        <div className="flex gap-4 flex-col sm:flex-row">
          <button className="px-8 py-3 rounded-full bg-white text-black font-semibold text-lg hover:bg-neutral-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.3)]">
            View Our Services
          </button>
          <button className="px-8 py-3 rounded-full border border-white/20 text-white font-semibold text-lg hover:bg-white/10 transition-colors backdrop-blur-md">
            Get a Quote
          </button>
        </div>
      </div>
      
      {/* Overlay to blend with upcoming sections if any */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-background to-transparent z-0 pointer-events-none" />
    </main>
    <WorkGlimpse />
    </>
  );
}
