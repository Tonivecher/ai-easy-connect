
import React from 'react';
import { Coffee, Settings, Users, Zap } from 'lucide-react';

const Process = () => {
  const steps = [
    {
      icon: <Users className="w-12 h-12 text-ai-blue" />,
      title: 'Уютные встречи в офисе на выходных',
      description: 'Собираемся небольшими дружескими группами в комфортном пространстве, где каждому уделяется внимание!',
      delay: 0
    },
    {
      icon: <Settings className="w-12 h-12 text-ai-blue" />,
      title: 'Мгновенно настраиваем ИИ на вашем смартфоне',
      description: 'Прямо на месте подключаем доступ к лучшим ИИ-сервисам без всяких VPN — работает и на iOS, и на Android!',
      delay: 100
    },
    {
      icon: <Zap className="w-12 h-12 text-ai-blue" />,
      title: 'Раскрываем все секреты использования ИИ',
      description: 'Показываем на реальных примерах, как ИИ может упростить вашу жизнь и сделать работу продуктивнее!',
      delay: 200
    },
    {
      icon: <Coffee className="w-12 h-12 text-ai-blue" />,
      title: 'Тёплая атмосфера, чай и печеньки',
      description: 'Отвечаем на все вопросы в непринуждённой обстановке и помогаем освоиться с новыми технологиями!',
      delay: 300
    }
  ];

  return (
    <section id="process" className="py-20">
      <div className="section-container">
        <h2 className="heading-secondary text-center mb-12">Как проходят наши встречи</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="glass-card p-8 transition-all duration-300 hover:bg-white/10 animate-fade-in rounded-3xl"
              style={{ animationDelay: `${step.delay}ms` }}
            >
              <div className="flex flex-col items-center md:items-start text-center md:text-left">
                <div className="mb-4 p-3 rounded-full bg-ai-dark/50 border border-ai-blue/20">
                  {step.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-3 font-sans">{step.title}</h3>
                <p className="text-ai-light/90 text-lg leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
