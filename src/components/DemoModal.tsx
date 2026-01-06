import { useState } from "react";
import { Play } from "lucide-react";
import { Button } from "./ui/button";

interface DemoModalProps {
  buttonLabel?: string;
  buttonClassName?: string;
  buttonSize?: "default" | "sm" | "lg" | "icon";
}

export const DemoModal = ({
  buttonLabel = "Demo",
  buttonClassName = "text-lg px-10 py-7 border-2 border-primary text-primary hover:bg-primary/10 transition-smooth group",
  buttonSize = "lg",
}: DemoModalProps) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Button
        size={buttonSize}
        variant="outline"
        className={buttonClassName}
        onClick={() => setShowModal(true)}
        aria-haspopup="dialog"
      >
        <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-smooth" />
        {buttonLabel}
      </Button>

      {showModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-0 sm:p-4"
          role="dialog"
          aria-modal="true"
          aria-label="App demo modal"
        >
          <div
            className="absolute inset-0 bg-black/70"
            onClick={() => setShowModal(false)}
          />
          <div className="relative bg-card sm:rounded-xl p-3 sm:p-4 w-full h-full sm:h-auto sm:max-w-4xl z-10 sm:border border-primary/30 flex flex-col">
            <div className="flex justify-between items-center mb-3 sm:mb-4">
              <h3 className="text-lg sm:text-xl font-bold">App Demo</h3>
              <Button
                size="sm"
                variant="ghost"
                onClick={() => setShowModal(false)}
                className="text-sm"
              >
                Close
              </Button>
            </div>
            <div className="flex-1 sm:aspect-video w-full min-h-0">
              <iframe
                className="w-full h-full sm:rounded-lg border border-border"
                src="https://embed.figma.com/proto/RU16jcquksyerqVy3xQ8JM/Konnectik-Flutterflow?page-id=0%3A1&node-id=55-123&viewport=-206%2C400%2C0.38&scaling=scale-down&content-scaling=fixed&starting-point-node-id=11%3A7&embed-host=share"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
