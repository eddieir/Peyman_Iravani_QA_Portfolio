import Header from '@/components/portfolio/Header';
import AboutMe from '@/components/portfolio/AboutMe';
import TechStack from '@/components/portfolio/TechStack';
import GitHubProjects from '@/components/portfolio/GitHubProjects';
import MediumArticles from '@/components/portfolio/MediumArticles';
import Experiences from '@/components/portfolio/Experiences';
import ContactSection from '@/components/portfolio/ContactSection';
import Footer from '@/components/portfolio/Footer';

export default function PortfolioPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <AboutMe />
        <TechStack />
        <GitHubProjects />
        <MediumArticles />
        <Experiences />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
