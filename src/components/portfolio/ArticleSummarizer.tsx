'use client';

import { useState, type FormEvent } from 'react';
import { summarizeArticle, type SummarizeArticleInput } from '@/ai/flows/summarize-article';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Loader2, Lightbulb, AlertTriangle } from 'lucide-react';

export default function ArticleSummarizer() {
  const [articleUrl, setArticleUrl] = useState('');
  const [summary, setSummary] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setError('');
    setSummary('');

    if (!articleUrl) {
      setError('Please enter an article URL.');
      setIsLoading(false);
      return;
    }

    try {
      const input: SummarizeArticleInput = { articleUrl };
      const result = await summarizeArticle(input);
      setSummary(result.summary);
    } catch (e: any) {
      console.error(e);
      setError(e.message || 'Failed to summarize the article. Please check the URL and try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-2xl shadow-lg rounded-xl">
      <CardHeader>
        <CardTitle className="font-headline text-2xl flex items-center">
            <Lightbulb className="mr-2 h-6 w-6 text-accent" />
            AI Article Summarizer
        </CardTitle>
        <CardDescription>
          Paste a URL below to get a concise summary of the article content.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="url"
            placeholder="https://example.com/article"
            value={articleUrl}
            onChange={(e) => setArticleUrl(e.target.value)}
            disabled={isLoading}
            className="text-base"
          />
          <Button type="submit" disabled={isLoading} className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Summarizing...
              </>
            ) : (
              'Summarize Article'
            )}
          </Button>
        </form>

        {error && (
          <Alert variant="destructive" className="mt-4">
            <AlertTriangle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        {summary && (
          <Card className="mt-6 bg-secondary/30">
            <CardHeader>
              <CardTitle className="font-headline text-lg">Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground whitespace-pre-line">{summary}</p>
            </CardContent>
          </Card>
        )}
      </CardContent>
    </Card>
  );
}
