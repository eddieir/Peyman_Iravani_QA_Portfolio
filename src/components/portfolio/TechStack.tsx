
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Code,
  Database,
  Component,
  FileCode,
  Palette,
  Binary,
  MousePointerSquareDashed,
  Smartphone,
  Puzzle,
  Bot,
  CheckCircle,
  CloudLightning,
  Send,
  Terminal,
  TestTube2,
  Gauge,
  Settings2,
  Combine,
  Brain,
  CloudCog,
  GitBranch,
  Cloud,
  Box,
  Ship, // Icon for Kubernetes
  Globe2, // Icon for BrowserStack
  DatabaseZap, // Specific for MongoDB or can use Database
  ServerCog, // For SQL Server / Management Studio
  ListChecks, // For Jira
  TerminalSquare // For IDEs
} from 'lucide-react';

const technologies = [
  // Programming Languages
  { name: 'Python', icon: <Code className="h-5 w-5" />, category: "Programming Languages" },
  { name: 'C#', icon: <Code className="h-5 w-5" />, category: "Programming Languages" },
  { name: 'Node.js', icon: <Binary className="h-5 w-5" />, category: "Programming Languages" },
  { name: 'SQL', icon: <Database className="h-5 w-5" />, category: "Programming Languages" },
  { name: 'C', icon: <Code className="h-5 w-5" />, category: "Programming Languages" },
  { name: 'C++', icon: <Code className="h-5 w-5" />, category: "Programming Languages" },

  // Web Technologies
  { name: 'AngularJS', icon: <Component className="h-5 w-5" />, category: "Web Technologies" },
  { name: 'HTML5', icon: <FileCode className="h-5 w-5" />, category: "Web Technologies" },
  { name: 'SASS', icon: <Palette className="h-5 w-5" />, category: "Web Technologies" },

  // Test Automation & Frameworks
  { name: 'Selenium', icon: <MousePointerSquareDashed className="h-5 w-5" />, category: "Test Automation" },
  { name: 'Appium', icon: <Smartphone className="h-5 w-5" />, category: "Test Automation" },
  { name: 'Playwright', icon: <Puzzle className="h-5 w-5" />, category: "Test Automation" },
  { name: 'Robot Framework', icon: <Bot className="h-5 w-5" />, category: "Test Automation" },
  { name: 'Cypress', icon: <CheckCircle className="h-5 w-5" />, category: "Test Automation" },
  { name: 'JUnit', icon: <TestTube2 className="h-5 w-5" />, category: "Test Automation" },
  { name: 'MCP', icon: <Settings2 className="h-5 w-5" />, category: "Test Frameworks" },
  { name: 'Playwright-MCP', icon: <Combine className="h-5 w-5" />, category: "Test Frameworks" },
  
  // API & Performance Testing
  { name: 'Locust', icon: <CloudLightning className="h-5 w-5" />, category: "API & Performance Testing" },
  { name: 'Postman', icon: <Send className="h-5 w-5" />, category: "API & Performance Testing" },
  { name: 'Newman', icon: <Terminal className="h-5 w-5" />, category: "API & Performance Testing" },
  { name: 'JMeter', icon: <Gauge className="h-5 w-5" />, category: "API & Performance Testing" },

  // AI in Testing
  { name: 'AI in Testing', icon: <Brain className="h-5 w-5" />, category: "AI in Testing" },

  // DevOps, CI/CD
  { name: 'Azure DevOps (ADO)', icon: <CloudCog className="h-5 w-5" />, category: "DevOps & CI/CD" },
  { name: 'GitLab', icon: <GitBranch className="h-5 w-5" />, category: "DevOps & CI/CD" },
  { name: 'Docker', icon: <Box className="h-5 w-5" />, category: "DevOps & CI/CD" },
  { name: 'Kubernetes', icon: <Ship className="h-5 w-5" />, category: "DevOps & CI/CD" },
  
  // Cloud & Virtualization
  { name: 'AWS', icon: <Cloud className="h-5 w-5" />, category: "Cloud & Virtualization" },
  { name: 'BrowserStack', icon: <Globe2 className="h-5 w-5" />, category: "Cloud & Virtualization" },

  // Database Management
  { name: 'MongoDB', icon: <DatabaseZap className="h-5 w-5" />, category: "Database Management" },
  { name: 'Oracle', icon: <Database className="h-5 w-5" />, category: "Database Management" },
  { name: 'MS SQL Server', icon: <ServerCog className="h-5 w-5" />, category: "Database Management" },

  // Development & PM Tools
  { name: 'Jira', icon: <ListChecks className="h-5 w-5" />, category: "Development & PM Tools" },
  { name: 'Visual Studio', icon: <TerminalSquare className="h-5 w-5" />, category: "IDEs" },
  { name: 'Visual Studio Code', icon: <TerminalSquare className="h-5 w-5" />, category: "IDEs" },
  { name: 'IntelliJ', icon: <TerminalSquare className="h-5 w-5" />, category: "IDEs" },
  { name: 'Eclipse', icon: <TerminalSquare className="h-5 w-5" />, category: "IDEs" },
  { name: 'PyCharm', icon: <TerminalSquare className="h-5 w-5" />, category: "IDEs" },
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
