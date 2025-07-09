import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { useVisitorTracker } from "@/hooks/useVisitorTracker";
import { SignupRequired } from "@/components/SignupRequired";
import { CelebrationEffect } from "@/components/CelebrationEffect";
import { LoadingScreen } from "@/components/LoadingScreen";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { StatsSection } from "@/components/StatsSection";
import { DSASection } from "@/components/DSASection";
import { CPSection } from "@/components/CPSection";
import { SystemDesignSection } from "@/components/SystemDesignSection";
import { SmartToolsSection } from "@/components/SmartToolsSection";
import { OpenSourceSection } from "@/components/OpenSourceSection";
import { CommunitySection } from "@/components/CommunitySection";
import { FutureScope } from "@/components/FutureScope";
import { ContactSection } from "@/components/ContactSection";
import { CodingArena } from "@/components/CodingArena";
import { Chatbot } from "@/components/Chatbot";
import { VoiceAITour } from "@/components/VoiceAITour"; // Import the VoiceAITour component

const Index = () => {
  const [showChatbot, setShowChatbot] = useState(false);
  const [hasSignedUp, setHasSignedUp] = useState(false);
  const [showCelebration, setShowCelebration] = useState(false);
  const [showTour, setShowTour] = useState(false); // State for controlling tour visibility
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  // Track visitors to the website
  useVisitorTracker();

  // Check if user has already signed up and show tour for first-time visitors
  useEffect(() => {
    const signupData = localStorage.getItem('user_signup');
    if (signupData) {
      setHasSignedUp(true);
    }

    // Check if this is the user's first visit
    const hasVisitedBefore = localStorage.getItem('hasVisitedBefore');
    if (!hasVisitedBefore) {
      setShowTour(true);
      localStorage.setItem('hasVisitedBefore', 'true');
    }
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  // Show signup form if user hasn't signed up and isn't authenticated
  if (!hasSignedUp && !user) {
    return (
      <>
        <SignupRequired 
          onSignupComplete={() => {
            setHasSignedUp(true);
            setShowCelebration(true);
          }} 
        />
        <CelebrationEffect 
          show={showCelebration} 
          onComplete={() => setShowCelebration(false)} 
        />
      </>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950">
      <Navbar />
      
      {user ? (
        // Authenticated user view
        <div className="container mx-auto px-4 py-8">
          <div className="mb-8 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">
              Welcome back, <span className="text-primary">{user.email?.split('@')[0]}</span>!
            </h1>
            <p className="text-muted-foreground">Ready for your next coding challenge?</p>
          </div>
          <CodingArena />
        </div>
      ) : (
        // Public landing page
        <main className="space-y-20 md:space-y-32">
          <HeroSection />
          <StatsSection />
          
          <section id="learning-sections" className="space-y-20 md:space-y-32">
            <DSASection id="dsa-section" /> {/* Added id for tour navigation */}
            <CPSection id="cp-section" /> {/* Added id for tour navigation */}
            <SystemDesignSection />
          </section>

          <SmartToolsSection id="smart-tools" /> {/* Added id for tour navigation */}
          <OpenSourceSection />
          <CommunitySection id="community" /> {/* Added id for tour navigation */}
          <FutureScope />
          <ContactSection id="contact" /> {/* Added id for tour navigation */}
        </main>
      )}
      
      {/* Chatbot Component */}
      <Chatbot />
      
      {/* Voice AI Tour - conditionally rendered */}
      {showTour && (
        <VoiceAITour onClose={() => setShowTour(false)} />
      )}
    </div>
  );
};

export default Index;