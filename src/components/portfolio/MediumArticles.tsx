
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookOpenText } from 'lucide-react';

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
