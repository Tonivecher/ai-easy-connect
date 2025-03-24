
import React from 'react';
import { Coffee, Settings, Users, Zap } from 'lucide-react';

const Process = () => {
  const steps = [
    {
      icon: <Users className="w-12 h-12 text-ai-blue" />,
      title: 'Встречаемся в офисе по выходным',
      description: 'Мы проводим небольшие группы по выходным в комфортном офисе с дружеской атмосферой.',
      delay: 0
    },
    {
      icon: <Settings className="w-12 h-12 text-ai-blue" />,
      title: 'Настраиваем ИИ-доступ на смартфоне',
      description: 'Прямо на встрече подключаем доступ к ИИ без VPN на вашем устройстве. Работает на iOS и Android.',
      delay: 100
    },
    {
      icon: <Zap className="w-12 h-12 text-ai-blue" />,
      title: 'Объясняем, как использовать ИИ',
      description: 'Показываем практические примеры использования ИИ в повседневной жизни и работе.',
      delay: 200
    },
    {
      icon: <Coffee className="w-12 h-12 text-ai-blue" />,
      title: 'Чай, кофе и дружеская атмосфера',
      description: 'Отвечаем на все вопросы, помогаем с настройками и просто хорошо проводим время.',
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
              className="glass-card p-8 transition-all duration-300 hover:bg-white/10 animate-fade-in"
              style={{ animationDelay: `${step.delay}ms` }}
            >
              <div className="flex flex-col items-center md:items-start text-center md:text-left">
                <div className="mb-4 p-3 rounded-full bg-ai-dark/50 border border-ai-blue/20">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-ai-light/80">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
