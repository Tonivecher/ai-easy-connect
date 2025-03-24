
import React from 'react';
import { Check } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Pricing = () => {
  const scrollToForm = () => {
    const formElement = document.getElementById('contact-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const features = [
    'Доступ к ИИ без VPN',
    'Личная настройка на вашем смартфоне',
    'Обучение использованию ИИ',
    'Материалы и шпаргалки',
    'Неделя консультаций после встречи'
  ];

  return (
    <section id="pricing" className="py-20 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-ai-blue/10 rounded-full filter blur-3xl"></div>
      
      <div className="section-container relative z-10">
        <h2 className="heading-secondary text-center mb-16">Стоимость участия</h2>
        
        <div className="max-w-xl mx-auto">
          <div className="glass-card overflow-hidden border-2 border-ai-blue/30 animate-scale-in">
            <div className="bg-gradient-to-r from-ai-blue/20 to-ai-green/20 p-6 text-center">
              <span className="inline-block px-3 py-1 text-sm font-medium bg-ai-blue/20 rounded-full mb-3">
                Лучшее предложение
              </span>
              <h3 className="text-2xl font-bold mb-2">Участие во встрече</h3>
            </div>
            
            <div className="p-8">
              <div className="flex items-center justify-center mb-6">
                <p className="text-3xl font-bold"><span className="text-ai-green">1500 ₽</span></p>
                <span className="ml-2 text-lg line-through opacity-60">1900 ₽</span>
                <span className="ml-2 px-2 py-1 text-xs font-semibold bg-ai-green/20 text-ai-green rounded">
                  по предзаказу
                </span>
              </div>
              
              <ul className="space-y-3 mb-8">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-2 mt-1"><Check className="h-5 w-5 text-ai-green" /></span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button className="w-full btn-primary" onClick={scrollToForm}>
                Записаться на встречу
              </Button>
            </div>
          </div>
          
          <p className="text-center mt-6 opacity-80 text-sm">
            Количество мест ограничено, чтобы обеспечить персональный подход к каждому участнику
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
