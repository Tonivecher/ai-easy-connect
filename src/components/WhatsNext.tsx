
import React from 'react';
import { Sparkles } from 'lucide-react';
import { Button } from "@/components/ui/button";

const WhatsNext = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="whats-next" className="py-20 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-ai-blue/5 rounded-full filter blur-3xl"></div>
      
      <div className="section-container">
        <h2 className="heading-secondary text-center mb-12">Что дальше?</h2>
        
        <div className="glass-card p-8 rounded-3xl animate-fade-in max-w-4xl mx-auto">
          <div className="flex items-center mb-6">
            <div className="p-3 rounded-full bg-ai-blue/20 mr-4">
              <Sparkles className="w-8 h-8 text-ai-blue" />
            </div>
            <h3 className="text-3xl font-semibold">Ваш личный ИИ-помощник</h3>
          </div>
          
          <p className="text-xl leading-relaxed mb-8">
            Представьте, что искусственный интеллект может стать вашим личным помощником, который улучшит каждый аспект вашей жизни! На наших встречах мы покажем, как ИИ может:
          </p>
          
          <ul className="space-y-6 mb-8">
            <li className="flex items-start">
              <div className="p-1 rounded-full bg-ai-green/20 mr-3 mt-1.5">
                <div className="w-3 h-3 rounded-full bg-ai-green"></div>
              </div>
              <p className="text-lg leading-relaxed">
                <span className="font-medium text-ai-green">Составить идеальное меню</span> для всей семьи, с учётом ваших предпочтений и диеты
              </p>
            </li>
            <li className="flex items-start">
              <div className="p-1 rounded-full bg-ai-green/20 mr-3 mt-1.5">
                <div className="w-3 h-3 rounded-full bg-ai-green"></div>
              </div>
              <p className="text-lg leading-relaxed">
                <span className="font-medium text-ai-green">Помочь организовать дом и расписание</span> так, чтобы вам оставалось больше времени на отдых и любимые занятия
              </p>
            </li>
            <li className="flex items-start">
              <div className="p-1 rounded-full bg-ai-green/20 mr-3 mt-1.5">
                <div className="w-3 h-3 rounded-full bg-ai-green"></div>
              </div>
              <p className="text-lg leading-relaxed">
                <span className="font-medium text-ai-green">Подсказать, как наладить отношения в семье</span> с помощью умных рекомендаций
              </p>
            </li>
            <li className="flex items-start">
              <div className="p-1 rounded-full bg-ai-green/20 mr-3 mt-1.5">
                <div className="w-3 h-3 rounded-full bg-ai-green"></div>
              </div>
              <p className="text-lg leading-relaxed">
                <span className="font-medium text-ai-green">Открыть новые горизонты</span> для хобби, творчества и даже бизнеса
              </p>
            </li>
          </ul>
          
          <div className="p-6 bg-ai-dark/50 rounded-xl border border-ai-blue/20 mb-8">
            <p className="text-lg leading-relaxed">
              Мы не просто учим использовать ИИ — мы показываем, как он может стать вашим секретом к более лёгкой, насыщенной и радостной жизни. Присоединяйтесь и узнайте, как сделать каждый день проще и ярче!
            </p>
          </div>
          
          <div className="text-center">
            <Button 
              onClick={() => scrollToSection('contact-form')}
              className="btn-primary text-lg px-8 py-6"
            >
              Хочу узнать больше!
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatsNext;
