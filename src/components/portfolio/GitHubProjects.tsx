
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink, GitFork, Star } from 'lucide-react';

const projects = [
  {
    title: 'InstaConnect',
    description: 'Automated Instagram interactions and management tool using Python and Selenium.',
    githubUrl: 'https://github.com/eddieir/InstaConnect',
    liveUrl: null,
  },
  {
    title: 'NodeHorizon',
    description: 'A backend project developed with Node.js, Express, and MongoDB for building scalable APIs.',
    githubUrl: 'https://github.com/eddieir/NodeHorizon',
    liveUrl: null,
  },
  {
    title: 'Medical Analysis ML',
    description: 'Machine learning project for medical data analysis and disease prediction using Python, Scikit-learn, and Pandas.',
    githubUrl: 'https://github.com/eddieir/medical_analysis_machine_learning',
    liveUrl: null,
    forks: 8,
    stars: 22,
  },
  {
    title: 'Depression Detection (Twitter)',
    description: 'ML model to detect depression indicators from Twitter posts using NLP techniques and Python.',
    githubUrl: 'https://github.com/eddieir/Depression_detection_using_Twitter_post',
    liveUrl: null,
    forks: 5,
    stars: 18,
  },
  {
    title: 'Falcon Automation Framework',
    description: 'A robust test automation framework built with Selenium, TestNG, Java, and Maven for comprehensive end-to-end testing of web applications. Features Page Object Model, data-driven testing, and detailed reporting capabilities.',
    githubUrl: 'https://github.com/eddieir/Falcon-Automation',
    liveUrl: null,
  },
  {
    title: 'Hayola',
    description: 'A social media platform project developed with modern web technologies.',
    githubUrl: 'https://github.com/eddieir/Hayola',
    liveUrl: null,
    forks: 2, // Placeholder - update with actual count
    stars: 10, // Placeholder - update with actual count
  },
];

export default function GitHubProjects() {
  return (
    <section id="projects" className="w-full py-12 md:py-24 lg:py-32 bg-secondary/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">GitHub Projects</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Explore some of my key projects and contributions on GitHub.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.title} className="overflow-hidden hover:shadow-lg transition-shadow duration-300 rounded-xl flex flex-col">
              <CardHeader>
                <CardTitle className="font-headline">{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow" />
              <CardFooter className="flex flex-wrap justify-start items-center gap-2">
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
                {project.forks !== undefined && (
                  <div className="flex items-center text-sm text-muted-foreground">
                    <GitFork className="mr-1 h-4 w-4" />
                    <span>{project.forks}</span>
                  </div>
                )}
                {project.stars !== undefined && (
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Star className="mr-1 h-4 w-4" />
                    <span>{project.stars}</span>
                  </div>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
