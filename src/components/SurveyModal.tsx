import { useState } from "react";
import { Button } from "./ui/button";
import { ClipboardList, X } from "lucide-react";

interface SurveyModalProps {
  formUrl: string;
  buttonLabel?: string;
  buttonClassName?: string;
  buttonSize?: "default" | "sm" | "lg" | "icon";
}

export const SurveyModal = ({
  formUrl,
  buttonLabel = "Take Survey",
  buttonClassName = "text-base px-6 py-5 border-2 border-primary text-primary hover:bg-primary/10 transition-smooth group",
  buttonSize = "lg",
}: SurveyModalProps) => {
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
        <ClipboardList className="w-5 h-5 mr-2 group-hover:scale-110 transition-smooth" />
        {buttonLabel}
      </Button>

      {showModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-0 sm:p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Survey modal"
        >
          <div
            className="absolute inset-0 bg-black/70"
            onClick={() => setShowModal(false)}
          />
          <div className="relative bg-card sm:rounded-xl p-3 sm:p-4 w-full h-full sm:h-[85vh] sm:max-w-3xl z-10 sm:border border-primary/30 flex flex-col">
            <div className="flex justify-between items-center mb-3 sm:mb-4">
              <h3 className="text-lg sm:text-xl font-bold">Quick Survey</h3>
              <Button
                size="sm"
                variant="ghost"
                onClick={() => setShowModal(false)}
              >
                <X className="w-4 h-4" />
                Close
              </Button>
            </div>
            <div className="flex-1 w-full min-h-0">
              <iframe
                className="w-full h-full sm:rounded-lg border border-border"
                src={formUrl}
                title="Survey Form"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
