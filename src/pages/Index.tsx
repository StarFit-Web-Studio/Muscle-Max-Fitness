import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProgramsSection from "@/components/ProgramsSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import TrainersSection from "@/components/TrainersSection";
import MembershipSection from "@/components/MembershipSection";
import TransformationsSection from "@/components/TransformationsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ScheduleSection from "@/components/ScheduleSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProgramsSection />
      <WhyChooseSection />
      <TrainersSection />
      <MembershipSection />
      <TransformationsSection />
      <TestimonialsSection />
      <ScheduleSection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </main>
  );
};

export default Index;
