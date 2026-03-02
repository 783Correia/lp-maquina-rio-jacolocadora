import Hero from "@/components/Hero";
import Models from "@/components/Models";
import HowItWorks from "@/components/HowItWorks";
import Testimonial from "@/components/Testimonial";
import FinalCTA from "@/components/FinalCTA";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
    return (
        <main className="min-h-screen">
            <Hero />
            <HowItWorks />
            <Models />
            <Testimonial />
            <FinalCTA />
            <WhatsAppButton />
        </main>
    );
}
