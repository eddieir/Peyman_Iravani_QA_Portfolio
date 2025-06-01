import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

export default function AboutMe() {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-secondary/50">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              About Me
            </h2>
            <p className="mt-4 max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              I am Peyman Iravani, a dedicated QA Automation Engineer with over 5 years of experience in designing, developing, and implementing robust automation frameworks. My expertise spans across various testing methodologies and tools, ensuring high-quality software delivery. I am passionate about leveraging technology to streamline testing processes and enhance product reliability.
            </p>
             <p className="mt-4 max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              I thrive in dynamic environments, continuously learning and adapting to new challenges in the ever-evolving tech landscape. My goal is to contribute to building exceptional digital experiences through meticulous testing and automation.
            </p>
          </div>
          <Card className="overflow-hidden rounded-xl shadow-lg">
            <CardContent className="p-0">
              <Image
                src="https://avatars.githubusercontent.com/u/23243761?v=4"
                alt="Peyman Iravani"
                width={600}
                height={400}
                className="object-cover aspect-[3/2]"
                data-ai-hint="professional portrait"
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
