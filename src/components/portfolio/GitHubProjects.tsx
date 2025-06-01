
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Falcon Automation Framework',
    description: 'A robust test automation framework built with Selenium, TestNG, Java, and Maven for comprehensive end-to-end testing of web applications. Features Page Object Model, data-driven testing, and detailed reporting capabilities.',
    imageUrl: 'https://media.licdn.com/dms/image/v2/D4D2DAQEx8oIZ-QG_Ng/profile-treasury-image-shrink_800_800/B4DZZel8waHwAc-/0/1745343731237?e=1749394800&v=beta&t=nMpnejtojkUb9g0YhJaS2aNCmYFpgQHmncZXLO2cxEA',
    imageHint: 'automation framework',
    githubUrl: 'https://github.com/eddieir/Falcon-Automation',
    liveUrl: null,
  },
  {
    title: 'QA Automation Framework',
    description: 'A comprehensive test automation framework built with Playwright and Python for E2E testing of web applications.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'code abstract',
    githubUrl: 'https://github.com/eddieir',
    liveUrl: '#',
  },
  {
    title: 'API Test Suite',
    description: 'Automated API tests using Node.js and Jest, focusing on RESTful services and ensuring data integrity.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'network server',
    githubUrl: 'https://github.com/eddieir',
  },
  {
    title: 'Performance Test Scripts',
    description: 'Developed JMeter scripts for load and stress testing critical application components.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'graph chart',
    githubUrl: 'https://github.com/eddieir',
  },
];

export default function GitHubProjects() {
  return (
    <section id="projects" className="w-full py-12 md:py-24 lg:py-32 bg-secondary/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">GitHub Projects</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Explore some of my recent work and contributions on GitHub.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.title} className="overflow-hidden hover:shadow-lg transition-shadow duration-300 rounded-xl flex flex-col">
              <Image
                src={project.imageUrl}
                alt={project.title}
                width={600}
                height={400}
                className={project.title === 'Falcon Automation Framework' ? "object-contain aspect-video w-full" : "object-cover aspect-video w-full"}
                data-ai-hint={project.imageHint}
              />
              <CardHeader>
                <CardTitle className="font-headline">{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow" />
              <CardFooter className="flex justify-start gap-2">
                <Button variant="outline" asChild>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" /> GitHub
                  </a>
                </Button>
                {project.liveUrl && project.liveUrl !== '#' && (
                   <Button variant="default" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                    </a>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
