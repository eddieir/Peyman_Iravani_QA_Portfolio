
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
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
  Ship,
  Globe2,
  DatabaseZap,
  ServerCog,
  ListChecks,
  TerminalSquare
} from 'lucide-react';

const technologies = [
  // Programming Languages
  { name: 'Python', icon: <Code className="h-5 w-5" />, category: "Programming Languages", detail: "Proficient in Python for scripting, automation, and backend development." },
  { name: 'C#', icon: <Code className="h-5 w-5" />, category: "Programming Languages", detail: "Experienced in C# for developing .NET applications and automation solutions." },
  { name: 'Node.js', icon: <Binary className="h-5 w-5" />, category: "Programming Languages", detail: "Skilled in Node.js for building scalable backend services and APIs." },
  { name: 'SQL', icon: <Database className="h-5 w-5" />, category: "Programming Languages", detail: "Strong understanding of SQL for database querying and management." },
  { name: 'C', icon: <Code className="h-5 w-5" />, category: "Programming Languages", detail: "Foundational knowledge in C programming." },
  { name: 'C++', icon: <Code className="h-5 w-5" />, category: "Programming Languages", detail: "Familiar with C++ for system-level programming and performance-critical applications." },

  // Web Technologies
  { name: 'ReactJS', icon: <Component className="h-5 w-5" />, category: "Web Technologies", detail: "Developing interactive user interfaces with ReactJS." },
  { name: 'AngularJS', icon: <Component className="h-5 w-5" />, category: "Web Technologies", detail: "Experience with AngularJS for building dynamic web applications." },
  { name: 'HTML5', icon: <FileCode className="h-5 w-5" />, category: "Web Technologies", detail: "Expertise in HTML5 for structuring web content." },
  { name: 'SASS', icon: <Palette className="h-5 w-5" />, category: "Web Technologies", detail: "Using SASS for advanced and maintainable CSS." },

  // Test Automation
  { name: 'Selenium', icon: <MousePointerSquareDashed className="h-5 w-5" />, category: "Test Automation", detail: "Extensive experience with Selenium for web UI automation." },
  { name: 'Appium', icon: <Smartphone className="h-5 w-5" />, category: "Test Automation", detail: "Skilled in Appium for mobile application testing." },
  { name: 'Playwright', icon: <Puzzle className="h-5 w-5" />, category: "Test Automation", detail: "Proficient with Playwright for modern end-to-end web testing." },
  { name: 'Robot Framework', icon: <Bot className="h-5 w-5" />, category: "Test Automation", detail: "Using Robot Framework for keyword-driven test automation." },
  { name: 'Cypress', icon: <CheckCircle className="h-5 w-5" />, category: "Test Automation", detail: "Experience with Cypress for fast and reliable web testing." },
  { name: 'JUnit', icon: <TestTube2 className="h-5 w-5" />, category: "Test Automation", detail: "Utilizing JUnit for unit testing in Java applications." },
  { name: 'Postman', icon: <Send className="h-5 w-5" />, category: "Test Automation", detail: "Expertise in Postman for API testing and development." },
  { name: 'Newman', icon: <Terminal className="h-5 w-5" />, category: "Test Automation", detail: "Using Newman to run Postman collections from the command line." },
  
  // Test Frameworks
  { name: 'MCP', icon: <Settings2 className="h-5 w-5" />, category: "Test Frameworks", detail: "Experience with MCP (Multi-Channel Platform) framework." },
  { name: 'Playwright-MCP', icon: <Combine className="h-5 w-5" />, category: "Test Frameworks", detail: "Integrating Playwright with MCP for enhanced testing capabilities." },
  
  // Performance Testing
  { name: 'Locust', icon: <CloudLightning className="h-5 w-5" />, category: "Performance Testing", detail: "Using Locust for load testing and performance analysis." },
  { name: 'JMeter', icon: <Gauge className="h-5 w-5" />, category: "Performance Testing", detail: "Proficient with JMeter for performance and load testing." },

  // AI in Testing
  { name: 'AI in Testing', icon: <Brain className="h-5 w-5" />, category: "AI in Testing", detail: "Exploring and implementing AI solutions to enhance testing processes." },

  // DevOps & CI/CD
  { name: 'Azure DevOps (ADO)', icon: <CloudCog className="h-5 w-5" />, category: "DevOps & CI/CD", detail: "Using Azure DevOps for CI/CD pipelines and project management." },
  { name: 'GitLab', icon: <GitBranch className="h-5 w-5" />, category: "DevOps & CI/CD", detail: "Experience with GitLab for version control and CI/CD." },
  { name: 'Docker', icon: <Box className="h-5 w-5" />, category: "DevOps & CI/CD", detail: "Utilizing Docker for containerization and environment consistency." },
  { name: 'Kubernetes', icon: <Ship className="h-5 w-5" />, category: "DevOps & CI/CD", detail: "Hands-on experience with Kubernetes for orchestrating containerized applications." },
  
  // Cloud & Virtualization
  { name: 'AWS', icon: <Cloud className="h-5 w-5" />, category: "Cloud & Virtualization", detail: "Working with Amazon Web Services for cloud infrastructure and services." },
  { name: 'BrowserStack', icon: <Globe2 className="h-5 w-5" />, category: "Cloud & Virtualization", detail: "Using BrowserStack for cross-browser and cross-platform testing." },

  // Database Management
  { name: 'MongoDB', icon: <DatabaseZap className="h-5 w-5" />, category: "Database Management", detail: "Experience with MongoDB for NoSQL database solutions." },
  { name: 'Oracle', icon: <Database className="h-5 w-5" />, category: "Database Management", detail: "Knowledge of Oracle databases for enterprise applications." },
  { name: 'MS SQL Server', icon: <ServerCog className="h-5 w-5" />, category: "Database Management", detail: "Proficient with Microsoft SQL Server and Management Studio." },

  // Development & PM Tools
  { name: 'Jira', icon: <ListChecks className="h-5 w-5" />, category: "Development & PM Tools", detail: "Using Jira for agile project management and bug tracking." },
  
  // IDEs
  { name: 'Visual Studio', icon: <TerminalSquare className="h-5 w-5" />, category: "IDEs", detail: "Proficient with Visual Studio (2019, 2022) for .NET development." },
  { name: 'Visual Studio Code', icon: <TerminalSquare className="h-5 w-5" />, category: "IDEs", detail: "Extensive use of VS Code for various development tasks." },
  { name: 'IntelliJ', icon: <TerminalSquare className="h-5 w-5" />, category: "IDEs", detail: "Using IntelliJ IDEA for Java and other JVM language development." },
  { name: 'Eclipse', icon: <TerminalSquare className="h-5 w-5" />, category: "IDEs", detail: "Experience with Eclipse IDE for Java development." },
  { name: 'PyCharm', icon: <TerminalSquare className="h-5 w-5" />, category: "IDEs", detail: "Utilizing PyCharm for Python development." },
];

const categories = [
  "Programming Languages",
  "Web Technologies",
  "Test Automation",
  "Test Frameworks",
  "Performance Testing",
  "AI in Testing",
  "DevOps & CI/CD",
  "Cloud & Virtualization",
  "Database Management",
  "Development & PM Tools",
  "IDEs"
];

export default function TechStack() {
  return (
    <section id="skills" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">My Tech Stack</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              A glimpse into the tools and technologies I leverage to build and ensure quality software. Hover over a skill for more details.
            </p>
          </div>
        </div>
        
        {categories.map(category => {
          const categorySkills = technologies.filter(tech => tech.category === category);
          if (categorySkills.length === 0) return null;

          return (
            <div key={category} className="my-10">
              <h3 className="text-2xl font-semibold tracking-tight mb-6 text-center font-headline">{category}</h3>
              <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                {categorySkills.map((tech) => (
                  <TooltipProvider key={tech.name}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Card className="flex flex-col items-center justify-center p-6 hover:shadow-accent/20 hover:shadow-lg transition-shadow duration-300 rounded-xl cursor-default">
                          <div className="mb-3 rounded-full bg-accent/10 p-3 text-accent">
                            {tech.icon}
                          </div>
                          <CardHeader className="p-0 mb-1 text-center">
                            <CardTitle className="text-base font-headline">{tech.name}</CardTitle>
                          </CardHeader>
                          {/* Category badge can be removed if sections are clearly titled */}
                          {/* <CardContent className="p-0">
                            <Badge variant="outline" className="text-xs">{tech.category}</Badge>
                          </CardContent> */}
                        </Card>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>{tech.detail}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

    