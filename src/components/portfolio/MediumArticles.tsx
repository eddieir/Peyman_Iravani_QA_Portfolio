
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookOpenText } from 'lucide-react';
import { title } from 'process';

const articlesData = [
  {
    title: 'Understanding MCP Server Architecture for QA Automation',
    description: 'An in-depth look at MCP Server architecture and its implications for QA automation strategies.',
    articleUrl: 'https://medium.com/@peyman.iravani/understanding-mcp-server-architecture-for-qa-automation-a89e426de099',
  },
  {
    title: 'Playwright JavaScript Fundamentals for Professional QA Engineers',
    description: 'Essential JavaScript concepts for QA professionals using Playwright for test automation.',
    articleUrl: 'https://medium.com/@peyman.iravani/playwright-javascript-fundamentals-for-professional-qa-engineers-0e6fc967b9ab',
  },
  {
    title: 'Setting Up MCP Server with Playwright: A Complete Integration Guide',
    description: 'A step-by-step guide to integrating MCP Server with Playwright for enhanced test automation.',
    articleUrl: 'https://medium.com/@peyman.iravani/setting-up-mcp-server-with-playwright-a-complete-integration-guide-bbd40dd008cf',
  },
  {
    title: 'Test Data Management in MCP-Playwright Architecture',
    description: 'Strategies and best practices for managing test data within an MCP and Playwright framework.',
    articleUrl: 'https://medium.com/@peyman.iravani/test-data-management-in-mcp-playwright-architecture-69c31e791cf8',
  },
  {
    title: 'Building Intelligent Test Selectors with MCP Server Logic',
    description: 'Leveraging MCP Server logic to create robust and intelligent test selectors for automation.',
    articleUrl: 'https://medium.com/@peyman.iravani/building-intelligent-test-selectors-with-mcp-server-logic-d5fb8c26730e',
  },
  {
    title: 'Advanced Playwright Patterns: Parallel Testing and Resource Management',
    description: 'Maximising test execution efficiency in enterprise environments',
    articleUrl: 'https://medium.com/@peyman.iravani/advanced-playwright-patterns-parallel-testing-and-resource-management-3e4e71e09801',
  },
  {
    title: 'API Testing Integration: Combining REST APIs with UI Automation',
    description: 'Building comprehensive test suites that validate end-to-end workflows',
    articleUrl: 'https://medium.com/@peyman.iravani/api-testing-integration-combining-rest-apis-with-ui-automation-a0372b6704ce',
  },
  {
    title: 'Custom Reporting and Analytics with MCP Server',
    description: 'Building intelligent test reporting systems that provide actionable insights',
    articleUrl: 'https://medium.com/@peyman.iravani/custom-reporting-and-analytics-with-mcp-server-683de5bec472',
  },
  {
    title: 'Advanced JavaScript Testing Strategies for Modern Web Applications',
    description: 'Master Authentication Flows, Visual Testing, and Performance Optimization with Playwright',
    articleUrl: 'https://medium.com/@peyman.iravani/advanced-javascript-testing-strategies-for-modern-web-applications-00ce3a09cb8b',
  },
  {
    title:'Security Testing Automation: Integrating Security Scans with Functional Tests',
    description: 'Security Testing Automation: Integrating Security Scans with Functional Tests',
    articleUrl: 'https://medium.com/@peyman.iravani/security-testing-automation-integrating-security-scans-with-functional-tests-faee52ed72af'
  },
  {
    title:'Scaling Test Automation: From Dozens to Thousands of Tests',
    description: 'Enterprise-level strategies for massive test suite management',
    articleUrl: 'https://medium.com/@peyman.iravani/scaling-test-automation-from-dozens-to-thousands-of-tests-3e715da8f13d'
  },
  {
    title: 'Cloud Testing Strategies: AWS, Azure, and GCP Integration',
    description: 'Leveraging cloud platforms for scalable test automation',
    articleUrl: 'https://medium.com/@peyman.iravani/cloud-testing-strategies-aws-azure-and-gcp-integration-f574e035652c'
  },
  {
    title: 'AI-Powered Test Generation and Maintenance',
    description: 'Leveraging artificial intelligence to create and maintain test suites',
    articleUrl: 'https://medium.com/@peyman.iravani/ai-powered-test-generation-and-maintenance-c903c56a940a'
  },
  {
    title: 'QA Automation in Blockchain: Mastering Liquid Network Testing with Modern Solutions',
    description: 'How to overcome common testing challenges in the Liquid Network ecosystem using cutting-edge automation strategies',
    articleUrl: 'https://medium.com/@peyman.iravani/qa-automation-in-blockchain-mastering-liquid-network-testing-with-modern-solutions-99516105dd20'
  }

];

interface Article {
  title: string;
  description: string;
  articleUrl: string;
}

export default function MediumArticles() {
  return (
    <section id="articles" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Medium Articles</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Read my thoughts and insights on QA, automation, and technology on Medium.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {articlesData.map((article: Article) => (
            <Card key={article.title} className="overflow-hidden hover:border-accent/50 hover:bg-secondary/60 transition-all duration-300 rounded-xl flex flex-col">
              <CardHeader>
                <CardTitle className="font-headline">{article.title}</CardTitle>
                <CardDescription>{article.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow" />
              <CardFooter>
                <Button variant="default" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  <a href={article.articleUrl} target="_blank" rel="noopener noreferrer">
                    <BookOpenText className="mr-2 h-4 w-4" /> Read on Medium
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
