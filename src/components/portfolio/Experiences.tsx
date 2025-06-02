
import { Briefcase } from 'lucide-react';

export default function Experiences() {
  return (
    <section id="experiences" className="w-full py-12 md:py-24 lg:py-32 border-t">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="inline-block rounded-lg bg-secondary p-3">
            <Briefcase className="h-6 w-6 text-secondary-foreground" />
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            My Professional Journey
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Details about my professional roles, responsibilities, and accomplishments will be showcased here.
            Stay tuned for updates on my work experience!
          </p>
        </div>
        {/* Placeholder for experience cards or timeline */}
        <div className="text-center text-muted-foreground">
          <p>(Experience details coming soon)</p>
        </div>
      </div>
    </section>
  );
}
