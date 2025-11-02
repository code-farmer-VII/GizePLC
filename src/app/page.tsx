import Hero from "@/component/Home/hero";
import AboutSection from "@/component/Home/About";
import Features from "@/component/Home/Features";
import Footer from "@/component/Home/Footer";
import { BlogPosts } from "@/component/Home/Blog";
import Services from "@/component/Home/Services";


export default function Home() {
  return (
    <div className="">
      <Hero />
      <AboutSection />
      <Services />
      <Features />
      <BlogPosts />
      <Footer />
    </div>
  );
}
