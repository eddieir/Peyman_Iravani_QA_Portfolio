import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Puzzle, MousePointerSquareDashed, Smartphone, Database, Gauge, Code } from 'lucide-react';

const technologies = [
  { name: 'Playwright', icon: <Puzzle className="h-5 w-5" />, category: "Test Automation" },
  { name: 'Selenium', icon: <MousePointerSquareDashed className="h-5 w-5" />, category: "Test Automation" },
  { name: 'Appium', icon: <Smartphone className="h-5 w-5" />, category: "Mobile Testing" },
  { name: 'Python', icon: <Code className="h-5 w-5" />, category: "Programming" },
  { name: 'Node.js', icon: <Code className="h-5 w-5" />, category: "Programming" },
  { name: 'JMeter', icon: <Gauge className="h-5 w-5" />, category: "Performance Testing" },
  { name: 'SQL', icon: <Database className="h-5 w-5" />, category: "Databases" },
  { name: 'MongoDB', icon: <Database className="h-5 w-5" />, category: "Databases" },
  { name: 'PostgreSQL', icon: <Database className="h-5 w-5" />, category: "Databases" },
];

export default function TechStack() {
  return (
    <section id="skills" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">My Tech Stack</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              A glimpse into the tools and technologies I leverage to build and ensure quality software.
            </p>
          </div>
        </div>
        <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-12">
          {technologies.map((tech) => (
            <Card key={tech.name} className="flex flex-col items-center justify-center p-6 hover:shadow-accent/20 hover:shadow-lg transition-shadow duration-300 rounded-xl">
              <div className="mb-3 rounded-full bg-accent/10 p-3 text-accent">
                {tech.icon}
              </div>
              <CardHeader className="p-0 mb-1">
                <CardTitle className="text-lg font-headline">{tech.name}</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <Badge variant="outline" className="text-xs">{tech.category}</Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
