import { useState } from "react";
import { VoiceAITour } from "./VoiceAITour";
import { Button } from "@/components/ui/button";
import { Mic } from "lucide-react";

export const AITourButton = () => {
  const [showTour, setShowTour] = useState(false);

  return (
    <>
      <Button
        onClick={() => setShowTour(true)}
        className="fixed bottom-6 right-6 z-40 rounded-full p-3 h-14 w-14 shadow-lg hover:shadow-xl transition-all"
        variant="default"
        title="Start Voice Tour"
      >
        <Mic className="h-6 w-6" />
      </Button>

      {showTour && (
        <VoiceAITour onClose={() => setShowTour(false)} />
      )}
    </>
  );
};