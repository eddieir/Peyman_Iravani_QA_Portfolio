import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookOpenText } from 'lucide-react';

const articles = [
  {
    title: 'Mastering Playwright: Tips for Efficient Test Automation',
    description: 'A deep dive into advanced Playwright techniques to enhance your automation scripts and improve test reliability.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'writing blog',
    articleUrl: 'https://medium.com/@peymaniravani', // Replace with actual article URL
  },
  {
    title: 'The Role of AI in Modern QA Practices',
    description: 'Exploring how Artificial Intelligence is reshaping the landscape of quality assurance and software testing.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'artificial intelligence',
    articleUrl: 'https://medium.com/@peymaniravani', // Replace with actual article URL
  },
];

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
          {articles.map((article) => (
            <Card key={article.title} className="overflow-hidden hover:shadow-lg transition-shadow duration-300 rounded-xl flex flex-col">
              <Image
                src={article.imageUrl}
                alt={article.title}
                width={600}
                height={400}
                className="object-cover aspect-video w-full"
                data-ai-hint={article.imageHint}
              />
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
