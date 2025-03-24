
import React from 'react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToForm = () => {
    const formElement = document.getElementById('contact-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 -left-20 w-72 h-72 bg-ai-blue/20 rounded-full filter blur-3xl animate-pulse-subtle"></div>
        <div className="absolute bottom-20 -right-20 w-72 h-72 bg-ai-green/20 rounded-full filter blur-3xl animate-pulse-subtle delay-1000"></div>
      </div>
      
      <div className="section-container relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <h1 className="heading-primary animate-fade-in">
            ИИ доступен каждому!<br />
            <span className="text-ai-blue">Освой технологии будущего без сложностей.</span>
          </h1>
          
          <p className="mt-6 text-xl sm:text-2xl opacity-90 max-w-3xl animate-fade-in" style={{ animationDelay: '100ms' }}>
            Прямо на встрече мы подключим тебе доступ к ИИ без VPN и научим, как его использовать.
          </p>
          
          <div className="mt-10 animate-fade-in" style={{ animationDelay: '200ms' }}>
            <Button className="btn-primary text-lg" onClick={scrollToForm}>
              Записаться на встречу
            </Button>
          </div>
          
          <div className="mt-16 glass-card p-6 animate-scale-in">
            <p className="text-lg opacity-80">
              Все встречи проходят в выходные дни в комфортном офисе в центре города
            </p>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="text-ai-light/70"
        >
          <path 
            d="M12 5V19M12 19L19 12M12 19L5 12" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
