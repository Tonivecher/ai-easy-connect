
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Process from '@/components/Process';
import Pricing from '@/components/Pricing';
import About from '@/components/About';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Set meta tags for SEO
    document.title = 'AI FOR YOU - ИИ доступен каждому!';
    
    // You can add more meta tags here if needed
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Обучение искусственному интеллекту без VPN. Настройка ИИ на смартфоне и практические навыки использования ИИ в жизни и работе.');
    }
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Process />
      <Pricing />
      <About />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
