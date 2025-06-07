import Header from '@/components/portfolio/Header';
import AboutMe from '@/components/portfolio/AboutMe';
import TechStack from '@/components/portfolio/TechStack';
import GitHubProjects from '@/components/portfolio/GitHubProjects';
import MediumArticles from '@/components/portfolio/MediumArticles';
import Experiences from '@/components/portfolio/Experiences';
import ContactSection from '@/components/portfolio/ContactSection';
import Footer from '@/components/portfolio/Footer';

export default function Home() {
  console.log("Home component is rendering");
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <AboutMe />
        <TechStack />
        <Experiences />
        <GitHubProjects />
        <MediumArticles />
        <ContactSection />
      </main>
      <Footer />
      <div>
        <p>If you see this message, the components above might not be rendering correctly.</p>
      </div>
    </div>
  );
}
