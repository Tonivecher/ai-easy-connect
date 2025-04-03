
import React from 'react';
import { Users } from 'lucide-react';

const AboutExtended = () => {
  return (
    <section id="about-extended" className="py-20 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-ai-blue/5 rounded-full filter blur-3xl"></div>
      
      <div className="section-container">
        <h2 className="heading-secondary text-center mb-12">О нас подробнее</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="glass-card p-8 rounded-3xl animate-fade-in">
            <div className="flex items-center mb-6">
              <div className="p-3 rounded-full bg-ai-blue/20 mr-4">
                <Users className="w-8 h-8 text-ai-blue" />
              </div>
              <h3 className="text-2xl font-semibold">Наша команда</h3>
            </div>
            
            <p className="text-lg leading-relaxed mb-4">
              Мы — энтузиасты технологий, которые верят, что искусственный интеллект должен быть доступен каждому, 
              а не только техническим специалистам.
            </p>
            
            <p className="text-lg leading-relaxed mb-4">
              В нашей команде — эксперты по ИИ с опытом в IT-сфере, которые говорят 
              на понятном языке и помогают преодолеть технологический барьер.
            </p>
            
            <p className="text-lg leading-relaxed">
              Мы сами активно используем ИИ в повседневной жизни и бизнесе и знаем, 
              как эти инструменты могут сэкономить время и открыть новые возможности.
            </p>
          </div>
          
          <div className="glass-card p-8 rounded-3xl animate-fade-in" style={{ animationDelay: '100ms' }}>
            <h3 className="text-2xl font-semibold mb-6">Наша миссия</h3>
            
            <p className="text-lg leading-relaxed mb-4">
              Мы стремимся демистифицировать искусственный интеллект и сделать его понятным и 
              доступным инструментом для всех, вне зависимости от возраста и технических навыков.
            </p>
            
            <p className="text-lg leading-relaxed mb-4">
              Наша цель — не просто настроить ИИ-инструменты на вашем смартфоне, 
              а научить вас эффективно использовать их для решения повседневных задач.
            </p>
            
            <p className="text-lg leading-relaxed mb-6">
              Мы верим, что ИИ — это не угроза, а мощный помощник, который может значительно 
              улучшить качество жизни и открыть новые творческие и профессиональные возможности.
            </p>
            
            <div className="p-4 bg-ai-dark/50 rounded-xl border border-ai-blue/20">
              <p className="text-ai-green font-medium italic">
                "Наша задача — сделать технологии будущего доступными для всех уже сегодня!"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutExtended;
