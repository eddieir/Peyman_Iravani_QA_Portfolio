
import Image from 'next/image';
import { Briefcase } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const experiencesData = [
  {
    dateRange: "MAY 2023 – PRESENT",
    role: "QA Automation Engineer",
    company: "MSC technology",
    location: "Turin, Italy",
    logoUrl: "https://media.licdn.com/dms/image/v2/C4E0BAQF85Rj8s5jygw/company-logo_100_100/company-logo_100_100/0/1630622205824/msc_mediterranean_shipping_co__s_a__logo?e=1754524800&v=beta&t=7Jx9vrVkkShiJi4drjYCd_dbfY_cLMgfIhMDXPLE74w",
    logoAlt: "MSC technology Logo",
    imageHint: "msc technology",
    responsibilities: [
      "Leading and managing all aspects of automation solutions within the team, ensuring robust and scalable implementations.",
      "Designing and developing automation frameworks using Playwright and C# for comprehensive testing, resulting in a fully functional automation solution covering over 1000 test cases with a failure rate below 10%.",
      "Automating API testing using Postman and Newman, ensuring reliability and accuracy across endpoints.",
      "Building and maintaining JUnit frameworks for efficient test execution and reporting.",
      "Creating and executing release and building pipelines in Azure DevOps (ADO) to support CI/CD workflows.",
      "Designed and implemented JMeter API load and performance tests, achieving comprehensive coverage for the majority of internal company APIs.",
      "Mentoring new team members, conducted knowledge-sharing sessions, and onboarded newcomers to automation practices.",
      "Integrating new features into automation solutions and ensuring team-wide understanding and adoption through effective communication.",
      "Collaborating with cross-functional teams in an agile environment to uphold quality standards throughout the software development lifecycle."
    ]
  },
  {
    dateRange: "OCTOBER 2022 – MAY 2023",
    role: "QA Automation Engineer",
    company: "Oval Money",
    location: "Turin, Italy",
    logoUrl: "https://media.licdn.com/dms/image/v2/C560BAQFQOr6FZ1LkoQ/company-logo_100_100/company-logo_100_100/0/1630615176786/ovalmoney_logo?e=1754524800&v=beta&t=cVBn0W99qEHtpHvygwwLgUikw9ycb3UraprkTZwlpWk",
    logoAlt: "Oval Money Logo",
    imageHint: "oval money",
    responsibilities: [
      "Designed and developed automation frameworks from scratch using Python, Selenium for web, and Appium for mobile testing.",
      "Automated API testing with Postman and implemented performance testing frameworks using Locust, ensuring system reliability and scalability.",
      "Created and maintained an automated CI/CD pipeline in GitLab, integrating test automation seamlessly into the development lifecycle and utilized AWS and BrowserStack for cloud-based testing and cross-platform compatibility validation.",
      "Introduced best practices in automation testing, reducing manual testing efforts and improving testing efficiency.",
      "Mentored team members conducted knowledge-sharing sessions, and facilitated the integration of new features into the automation framework.",
      "Collaborated with cross-functional teams in an agile environment to deliver high-quality software solutions."
    ]
  },
  {
    dateRange: "JANUARY 2021 – SEPTEMBER 2022",
    role: "QA Automation Engineer",
    company: "TIM",
    location: "Milan, Italy",
    logoUrl: "https://media.licdn.com/dms/image/v2/D4D0BAQFC13FHQP4Iaw/company-logo_100_100/B4DZcqUtN3HwAQ-/0/1748761761066/tim_logo?e=1754524800&v=beta&t=khgkVL13DuMZ5LnoqHfnl490vXRbSNyNXKuur3BCb24",
    logoAlt: "TIM Logo",
    imageHint: "tim",
    responsibilities: [
      "Automated tests for both mobile and web applications using Python, Selenium, Appium, and Robot Framework, ensuring comprehensive test coverage.",
      "Designed and implemented robust automation scripts for functional, regression, and end-to-end testing.",
      "Enhanced test efficiency by integrating manual test cases into the automation framework.",
      "Collaborated closely with cross-functional teams to deliver high-quality software solutions throughout the development lifecycle.",
      "Participated in agile ceremonies, including daily stand-ups, sprint planning, and retrospectives, to ensure alignment and continuous improvement."
    ]
  },
  {
    dateRange: "MAY 2020 – DECEMBER 2020",
    role: "QA Automation Engineer",
    company: "Nokia",
    location: "Milan, Italy",
    logoUrl: "https://media.licdn.com/dms/image/v2/C4E0BAQGL8hpduEqGKQ/company-logo_100_100/company-logo_100_100/0/1677420439270/nokia_logo?e=1754524800&v=beta&t=dW85Pi4Yi-TKF3QZQVrbwf2dymDXx5Ki5j-AOKVCNcY",
    logoAlt: "Nokia Logo",
    imageHint: "nokia",
    responsibilities: [
      "Automated testing processes using Python, Selenium, and Appium to ensure the quality of mobile and web applications.",
      "Controlled and evaluated APIs and pipelines for server quality, identifying and addressing discrepancies effectively.",
      "Designed and maintained automation scripts to bridge gaps between ideal designs and existing implementations.",
      "Ensured seamless integration of automated tests into the development lifecycle, contributing to enhanced system reliability.",
      "Collaborated with development and testing teams to deliver high-quality solutions in an agile environment."
    ]
  },
  {
    dateRange: "JUNE 2019 – MAY 2020",
    role: "Software engineer & QA engineer",
    company: "Wind3",
    location: "Milan, Italy",
    logoUrl: "https://www.windtre.it/content/experience-fragments/windtre/it/it/site/header/master/_jcr_content/root/header/aem-footer-fixed-icon__desktop.coreimg.svg/1698759224713/big.svg",
    logoAlt: "Wind3 Logo",
    imageHint: "wind3 logo",
    responsibilities: [
      "Developed and maintained eCommerce websites using AngularJS, HTML5, and SASS, ensuring responsive and user-friendly designs.",
      "Designed and implemented test automation frameworks for web, Android, and iOS platforms using Python, Selenium, and Appium.",
      "Collaborated with the development team to identify and resolve bugs, ensuring the delivery of high-quality applications.",
      "Standardized testing and development workflows, enhancing efficiency and consistency across projects.",
      "Performed cross-platform compatibility testing to ensure functionality on multiple devices and browsers.",
      "Actively participated in agile processes, including sprint planning, stand-ups, and retrospectives, to drive continuous improvement."
    ]
  }
];

export default function Experiences() {
  return (
    <section id="experiences" className="w-full py-12 md:py-24 lg:py-32 border-t">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="inline-block rounded-lg bg-secondary p-3">
            <Briefcase className="h-6 w-6 text-secondary-foreground" />
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            My Professional Journey
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            A detailed look at my roles, responsibilities, and accomplishments throughout my career.
          </p>
        </div>
        <div className="space-y-8">
          {experiencesData.map((exp, index) => (
            <Card key={index} className="shadow-lg rounded-xl overflow-hidden">
              <CardHeader className="flex flex-col sm:flex-row items-start gap-4 p-6 bg-card">
                <Image
                  src={exp.logoUrl}
                  alt={exp.logoAlt}
                  width={80}
                  height={80}
                  className="rounded-sm object-contain h-14 w-auto mt-1"
                  data-ai-hint={exp.imageHint}
                />
                <div className="flex-grow">
                  <CardTitle className="font-headline text-xl md:text-2xl">{exp.role} at {exp.company}</CardTitle>
                  <CardDescription className="text-sm md:text-base mt-1">{exp.dateRange} | {exp.location}</CardDescription>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  {exp.responsibilities.map((resp, i) => (
                    <li key={i}>{resp}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
