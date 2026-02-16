import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, FileText, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import emailjs from "@emailjs/browser";

interface PitchDeckFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PitchDeckForm = ({ isOpen, onClose }: PitchDeckFormProps) => {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleClose = () => {
    setSubmitted(false);
    onClose();
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;

    emailjs
      .sendForm(
        "service_b5h9308", // replace with your EmailJS service ID
        "template_34yofob", // replace with your EmailJS template ID
        form,
        "m-uVBTyj2Yp3MwJZ3" // replace with your EmailJS public key
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          setSubmitted(true);
        },
        (error) => {
          console.error("Email sending error:", error.text);
          alert("Something went wrong. Please try again later.");
        }
      )
      .finally(() => setIsSubmitting(false));
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foreground/50 backdrop-blur-sm"
          onClick={handleClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2 }}
            className="relative w-full max-w-md bg-card rounded-2xl shadow-elegant p-6 border border-border"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-muted transition-colors"
            >
              <X className="w-5 h-5 text-muted-foreground" />
            </button>

            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <FileText className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">
                  {submitted ? "Access Granted!" : "View Pitch Deck"}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {submitted ? "Thank you for your interest" : "Enter your details to access"}
                </p>
              </div>
            </div>

            {!submitted ? (
              <form
                onSubmit={handleSubmit}
                className="space-y-4"
              >
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="John Doe"
                    required
                    maxLength={100}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@company.com"
                    required
                    maxLength={255}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company">Company</Label>
                  <Input
                    id="company"
                    name="company"
                    type="text"
                    placeholder="Your Company Name"
                    required
                    maxLength={100}
                  />
                </div>

                <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
                  {isSubmitting ? "Submitting..." : "Get Access"}
                </Button>
              </form>
            ) : (
              <div className="text-center space-y-4">
                <p className="text-muted-foreground">
                  Click below to view Konnectik's pitch deck.
                </p>
                <Button asChild size="lg" className="w-full">
                  <a
                    href="https://bit.ly/KonnectikPDS"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="mr-2 w-5 h-5" />
                    Open Pitch Deck
                  </a>
                </Button>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
