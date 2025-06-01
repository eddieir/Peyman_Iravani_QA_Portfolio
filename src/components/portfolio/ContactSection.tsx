'use client';

import { Button } from '@/components/ui/button';
import { useToast } from "@/hooks/use-toast";
import { Linkedin, Mail, ClipboardCopy } from 'lucide-react';

const PEYMAN_EMAIL = "peyman.iravani@gmail.com";
const LINKEDIN_URL = "https://www.linkedin.com/in/peyman-iravani-3914504b/";

export default function ContactSection() {
  const { toast } = useToast();

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(PEYMAN_EMAIL)
      .then(() => {
        toast({
          title: "Email Copied!",
          description: `${PEYMAN_EMAIL} copied to clipboard.`,
        });
      })
      .catch(err => {
        console.error('Failed to copy email: ', err);
        toast({
          title: "Error",
          description: "Could not copy email to clipboard.",
          variant: "destructive",
        });
      });
  };

  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-6 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Get In Touch</h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-5 w-5" /> Connect on LinkedIn
              </a>
            </Button>
            <Button size="lg" variant="outline" onClick={copyEmailToClipboard}>
              <ClipboardCopy className="mr-2 h-5 w-5" /> Copy My Email
            </Button>
          </div>
           <p className="text-xs text-muted-foreground pt-4">
              Or, reach out directly at: <Mail className="inline h-4 w-4 mr-1 relative -top-px" />{PEYMAN_EMAIL}
           </p>
        </div>
      </div>
    </section>
  );
}
