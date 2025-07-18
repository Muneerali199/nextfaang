import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./hooks/useAuth";
import Index from "./pages/Index";
import Auth from "./pages/Auth";
import NotFound from "./pages/NotFound";
import CPContributors from "./pages/CPContributors";
import Resources from "./pages/Resources";
import ResumeTips from "./pages/ResumeTips";
import DSAMastery from "./pages/DSAMastery";
import HackathonGuide from "./pages/HackathonGuide";
import CPDictionary from "./pages/CPDictionary";
import CPTricksAndTips from "./pages/CPTricksAndTips";
import LanguageTranslation from "./pages/LanguageTranslation";
import ContestAnalyzer from "./pages/ContestAnalyzer";
import { ThemeProvider } from "@/components/themeprovider"; // You'll need to create this

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <AuthProvider>
        <TooltipProvider>
          <div className="min-h-screen bg-background text-foreground">
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/auth" element={<Auth />} />
                <Route path="/cp-contributors" element={<CPContributors />} />
                <Route path="/resources" element={<Resources />} />
                <Route path="/resume-tips" element={<ResumeTips />} />
                <Route path="/dsa-mastery" element={<DSAMastery />} />
                <Route path="/hackathon-guide" element={<HackathonGuide />} />
                <Route path="/cp-dictionary" element={<CPDictionary />} />
                <Route path="/cp-tricks-tips" element={<CPTricksAndTips />} />
                <Route path="/language-translation" element={<LanguageTranslation />} />
                <Route path="/contest-analyzer" element={<ContestAnalyzer />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          </div>
        </TooltipProvider>
      </AuthProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;