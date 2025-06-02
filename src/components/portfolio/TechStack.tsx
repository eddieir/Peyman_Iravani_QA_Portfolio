
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Database,
  Settings2,
  Combine,
  Brain,
  CloudLightning,
  Terminal,
  TestTube2,
  Code,
  Binary,
  FileCode,
  Smartphone,
  MousePointer2,
  ToyBrick,
  TestTubeDiagonal,
  Atom,
  CodeXml,
  Palette,
  CloudCog,
  GitFork,
  Cloud,
  Container,
  Puzzle,
  Send,
  Gauge,
  Globe2,
  ClipboardList,
  KanbanSquare,
  Github,
  MonitorPlay,
} from 'lucide-react';

const technologies = [
  // Programming Languages
  { name: 'Python', icon: <Code className="h-6 w-6 text-accent" />, category: "Programming Languages", detail: "Proficient in Python for scripting, automation, and backend development." },
  { name: 'C#', icon: <Code className="h-6 w-6 text-accent" />, category: "Programming Languages", detail: "Experienced in C# for developing .NET applications and automation solutions." },
  { name: 'Node.js', icon: <Binary className="h-6 w-6 text-accent" />, category: "Programming Languages", detail: "Skilled in Node.js for building scalable backend services and APIs." },
  { name: 'TypeScript', icon: <FileCode className="h-6 w-6 text-accent" />, category: "Programming Languages", detail: "Proficient in TypeScript for building robust and scalable web applications, enhancing JavaScript with static typing." },
  { name: 'SQL', icon: <Database className="h-6 w-6 text-accent" />, category: "Programming Languages", detail: "Strong understanding of SQL for database querying and management." },
  { name: 'C', icon: <Code className="h-6 w-6 text-accent" />, category: "Programming Languages", detail: "Foundational knowledge in C programming." },
  { name: 'C++', icon: <Code className="h-6 w-6 text-accent" />, category: "Programming Languages", detail: "Familiar with C++ for system-level programming and performance-critical applications." },

  // Frameworks & Libraries
  { name: 'Selenium', icon: <TestTube2 className="h-6 w-6 text-accent" />, category: "Frameworks & Libraries", detail: "Extensive experience with Selenium for web UI automation." },
  { name: 'Appium', icon: <Smartphone className="h-6 w-6 text-accent" />, category: "Frameworks & Libraries", detail: "Skilled in Appium for mobile application testing." },
  { name: 'Playwright', icon: <MousePointer2 className="h-6 w-6 text-accent" />, category: "Frameworks & Libraries", detail: "Proficient with Playwright for modern end-to-end web testing." },
  { name: 'Robot Framework', icon: <ToyBrick className="h-6 w-6 text-accent" />, category: "Frameworks & Libraries", detail: "Using Robot Framework for keyword-driven test automation." },
  { name: 'Cypress', icon: <TestTubeDiagonal className="h-6 w-6 text-accent" />, category: "Frameworks & Libraries", detail: "Experience with Cypress for fast and reliable web testing." },
  { name: 'JUnit', icon: <TestTube2 className="h-6 w-6 text-accent" />, category: "Frameworks & Libraries", detail: "Utilizing JUnit for unit testing in Java applications." },
  { name: 'ReactJS', icon: <Atom className="h-6 w-6 text-accent" />, category: "Frameworks & Libraries", detail: "Developing interactive user interfaces with ReactJS." },
  { name: 'AngularJS', icon: <Atom className="h-6 w-6 text-accent" />, category: "Frameworks & Libraries", detail: "Experience with AngularJS for building dynamic web applications." },
  { name: 'HTML5', icon: <CodeXml className="h-6 w-6 text-accent" />, category: "Frameworks & Libraries", detail: "Expertise in HTML5 for structuring web content." },
  { name: 'SASS', icon: <Palette className="h-6 w-6 text-accent" />, category: "Frameworks & Libraries", detail: "Using SASS for advanced and maintainable CSS." },
  { name: 'MCP', icon: <Settings2 className="h-6 w-6 text-accent" />, category: "Frameworks & Libraries", detail: "Experience with MCP (Multi-Channel Platform) framework." },
  { name: 'Playwright-MCP', icon: <Combine className="h-6 w-6 text-accent" />, category: "Frameworks & Libraries", detail: "Integrating Playwright with MCP for enhanced testing capabilities." },
  
  // Databases
  { name: 'MongoDB', icon: <Database className="h-6 w-6 text-accent" />, category: "Databases", detail: "Experience with MongoDB for NoSQL database solutions." },
  { name: 'Oracle', icon: <Database className="h-6 w-6 text-accent" />, category: "Databases", detail: "Knowledge of Oracle databases for enterprise applications." },
  { name: 'MS SQL Server', icon: <Database className="h-6 w-6 text-accent" />, category: "Databases", detail: "Proficient with Microsoft SQL Server and Management Studio." },

  // Cloud, DevOps & CI/CD
  { name: 'Azure DevOps', icon: <CloudCog className="h-6 w-6 text-accent" />, category: "Cloud, DevOps & CI/CD", detail: "Using Azure DevOps for CI/CD pipelines and project management." },
  { name: 'GitLab', icon: <GitFork className="h-6 w-6 text-accent" />, category: "Cloud, DevOps & CI/CD", detail: "Experience with GitLab for version control and CI/CD." },
  { name: 'AWS', icon: <Cloud className="h-6 w-6 text-accent" />, category: "Cloud, DevOps & CI/CD", detail: "Working with Amazon Web Services for cloud infrastructure and CI/CD services." }, 
  { name: 'Docker', icon: <Container className="h-6 w-6 text-accent" />, category: "Cloud, DevOps & CI/CD", detail: "Utilizing Docker for containerization and environment consistency." },
  { name: 'Kubernetes', icon: <Puzzle className="h-6 w-6 text-accent" />, category: "Cloud, DevOps & CI/CD", detail: "Hands-on experience with Kubernetes for orchestrating containerized applications." },

  // Testing Tools & Platforms
  { name: 'Postman', icon: <Send className="h-6 w-6 text-accent" />, category: "Testing Tools & Platforms", detail: "Expertise in Postman for API testing and development." },
  { name: 'Newman', icon: <Terminal className="h-6 w-6 text-accent" />, category: "Testing Tools & Platforms", detail: "Using Newman to run Postman collections from the command line." },
  { name: 'JMeter', icon: <Gauge className="h-6 w-6 text-accent" />, category: "Testing Tools & Platforms", detail: "Proficient with JMeter for performance and load testing." },
  { name: 'Locust', icon: <CloudLightning className="h-6 w-6 text-accent" />, category: "Testing Tools & Platforms", detail: "Using Locust for load testing and performance analysis." },
  { name: 'BrowserStack', icon: <Globe2 className="h-6 w-6 text-accent" />, category: "Testing Tools & Platforms", detail: "Using BrowserStack for cross-browser and cross-platform testing." },
  { name: 'Jira', icon: <ClipboardList className="h-6 w-6 text-accent" />, category: "Testing Tools & Platforms", detail: "Using Jira for agile project management and bug tracking." },
  { name: 'Azure DevOps Boards', icon: <KanbanSquare className="h-6 w-6 text-accent" />, category: "Testing Tools & Platforms", detail: "Utilizing Azure DevOps Boards for work item tracking." },
  { name: 'GitHub', icon: <Github className="h-6 w-6 text-accent" />, category: "Testing Tools & Platforms", detail: "Proficient with GitHub for version control, collaboration, and project hosting." },
  
  // Development Environments (IDEs)
  { name: 'Visual Studio', icon: <MonitorPlay className="h-6 w-6 text-accent" />, category: "Development Environments (IDEs)", detail: "Proficient with Visual Studio (2019, 2022) for .NET development." },
  { name: 'VS Code', icon: <FileCode className="h-6 w-6 text-accent" />, category: "Development Environments (IDEs)", detail: "Extensive use of VS Code for various development tasks." },
  { name: 'IntelliJ IDEA', icon: <FileCode className="h-6 w-6 text-accent" />, category: "Development Environments (IDEs)", detail: "Using IntelliJ IDEA for Java and other JVM language development." },
  { name: 'Eclipse', icon: <FileCode className="h-6 w-6 text-accent" />, category: "Development Environments (IDEs)", detail: "Experience with Eclipse IDE for Java development." },
  { name: 'PyCharm', icon: <FileCode className="h-6 w-6 text-accent" />, category: "Development Environments (IDEs)", detail: "Utilizing PyCharm for Python development." },

  // Specialized Skills
  { name: 'AI in Testing', icon: <Brain className="h-6 w-6 text-accent" />, category: "Specialized Skills", detail: "Exploring and implementing AI solutions to enhance testing processes." },
];

const categories = [
  "Programming Languages",
  "Frameworks & Libraries",
  "Databases",
  "Cloud, DevOps & CI/CD",
  "Testing Tools & Platforms",
  "Development Environments (IDEs)",
  "Specialized Skills"
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
              <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-4 md:gap-x-8">
                {categorySkills.map((tech) => (
                  <TooltipProvider key={tech.name} delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <div className="flex items-center gap-2 p-2.5 rounded-lg hover:bg-secondary/40 hover:shadow-sm transition-all duration-200 cursor-default border border-transparent hover:border-accent/30">
                          <span className="flex-shrink-0">{tech.icon}</span>
                          <span className="text-sm font-medium text-foreground">
                            {tech.name}
                          </span>
                        </div>
                      </TooltipTrigger>
                      <TooltipContent className="max-w-xs bg-popover text-popover-foreground border-border shadow-xl rounded-md">
                        <p className="text-sm">{tech.detail}</p>
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
