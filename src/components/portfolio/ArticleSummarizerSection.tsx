import ArticleSummarizer from './ArticleSummarizer';

export default function ArticleSummarizerSection() {
  return (
    <section id="summarizer" className="w-full py-12 md:py-24 lg:py-32 bg-secondary/50">
      <div className="container px-4 md:px-6 flex flex-col items-center">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">AI-Powered Summaries</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Quickly grasp the essence of any article with this AI tool.
          </p>
        </div>
        <ArticleSummarizer />
      </div>
    </section>
  );
}
