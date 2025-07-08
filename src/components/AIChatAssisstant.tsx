import { EnhancedChatbot } from "./EnhancedChatbot";
import { EnhancedAIMentor } from "./EnhancedAIMentor";
import { FloatingAIMentor } from "./FloatingAIMentor";

type AIChatAssistantProps = {
  showChatbot: boolean;
  onClose: () => void;
};

export const AIChatAssistant = ({ showChatbot, onClose }: AIChatAssistantProps) => {
  return (
    <>
      <FloatingAIMentor />
      
      {showChatbot && (
        <EnhancedChatbot onClose={onClose} />
      )}

      {/* If you want to keep both mentor and chatbot */}
      {/* <EnhancedAIMentor /> */}
    </>
  );
};