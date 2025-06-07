import Image from 'next/image';

export default function AboutMe() {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-secondary/50">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              About Me
            </h2>
            <p className="mt-4 max-w-[600px] text-muted-foreground text-sm/relaxed md:text-base/relaxed font-lora">
              I’m Peyman Iravani, a Senior QA Automation Engineer with over five years of experience designing and implementing scalable, high-impact automation solutions. I’ve worked with leading companies like MSC Technology, Oval Money, and TIM, building robust test infrastructures and driving quality across complex systems.
            </p>
            <p className="mt-4 max-w-[600px] text-muted-foreground text-sm/relaxed md:text-base/relaxed font-lora">
              My core expertise lies in developing modern automation frameworks using Playwright in both C# and JavaScript, alongside tools like Selenium, Appium, and Robot Framework. I bring end-to-end test coverage across APIs, web, and mobile platforms, leveraging cloud-based solutions (AWS, BrowserStack) and CI/CD pipelines (Azure DevOps, GitLab) to ensure seamless delivery cycles.
            </p>
            <p className="mt-4 max-w-[600px] text-muted-foreground text-sm/relaxed md:text-base/relaxed font-lora">
              I’m passionate about quality, efficiency, and innovation—whether it's stabilizing flaky tests, boosting pipeline speed, or mentoring teams in best practices. I thrive in fast-paced, agile environments and enjoy contributing to products that demand excellence at every release.
            </p>
          </div>
          <div className="flex justify-center items-center">
            <div className="relative w-64 h-64 md:w-72 md:h-72 rounded-full overflow-hidden shadow-xl">
              <Image
                src="/img/23243761.gif"
                alt="Peyman Iravani"
                width={256}
                height={256}
                className="object-cover w-full h-full"
                data-ai-hint="professional portrait"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
