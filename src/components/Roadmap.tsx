
import React from 'react';
import { Calendar, Flag, MapPin } from 'lucide-react';

const Roadmap = () => {
  const milestones = [
    {
      icon: <MapPin className="w-10 h-10 text-ai-green" />,
      title: "Старт проекта",
      date: "Апрель 2025",
      description: "Запуск первых регулярных встреч по обучению ИИ в Москве",
      delay: 0
    },
    {
      icon: <Flag className="w-10 h-10 text-ai-green" />,
      title: "Расширение программы",
      date: "Июнь 2025",
      description: "Добавление специализированных тематических воркшопов для разных сфер деятельности",
      delay: 150
    },
    {
      icon: <Calendar className="w-10 h-10 text-ai-green" />,
      title: "Запуск онлайн-курса",
      date: "Сентябрь 2025",
      description: "Создание полноценного онлайн-курса для удаленного обучения из любой точки России",
      delay: 300
    }
  ];

  return (
    <section id="roadmap" className="py-20 relative">
      {/* Background accent */}
      <div className="absolute bottom-0 left-1/4 w-[700px] h-[700px] bg-ai-green/5 rounded-full filter blur-3xl"></div>
      
      <div className="section-container">
        <h2 className="heading-secondary text-center mb-6">Наши планы развития</h2>
        <p className="text-xl text-center text-ai-light/80 max-w-2xl mx-auto mb-16">
          Мы только начинаем наш путь, но у нас большие планы на будущее. 
          Присоединяйтесь к нам на ранних этапах!
        </p>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-ai-blue via-ai-green to-ai-blue/30 transform -translate-x-1/2 hidden md:block"></div>
          
          <div className="space-y-20">
            {milestones.map((milestone, index) => (
              <div 
                key={index} 
                className="relative animate-fade-in"
                style={{ animationDelay: `${milestone.delay}ms` }}
              >
                {/* Timeline dot - only visible on md+ screens */}
                <div className="absolute left-1/2 top-12 w-5 h-5 bg-ai-green rounded-full transform -translate-x-1/2 hidden md:block"></div>
                
                <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8`}>
                  <div className={`w-full md:w-1/2 text-center ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <span className="inline-block bg-ai-dark/80 text-ai-green px-4 py-1 rounded-full text-sm font-medium mb-3">
                      {milestone.date}
                    </span>
                    <h3 className="text-2xl font-semibold mb-2">{milestone.title}</h3>
                    <p className="text-lg text-ai-light/80 leading-relaxed">{milestone.description}</p>
                  </div>
                  
                  <div className="glass-card p-6 rounded-full bg-ai-dark/50 border border-ai-green/20 hidden md:block">
                    {milestone.icon}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="text-center mt-16">
          <p className="text-lg text-ai-light/70 mb-8">
            Планы могут меняться, но наша миссия остается неизменной — сделать ИИ доступным для всех!
          </p>
          <button 
            onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-secondary inline-flex items-center gap-2"
          >
            Присоединиться к проекту
          </button>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
