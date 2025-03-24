
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="section-container">
        <h2 className="heading-secondary text-center mb-12">Кто мы</h2>
        
        <div className="glass-card p-8 max-w-3xl mx-auto animate-fade-in">
          <p className="text-xl leading-relaxed">
            Мы — эксперты по ИИ, которые сами обучили ИИ создать этот сайт! 
            Наша миссия — сделать новейшие технологии доступными для каждого,
            вне зависимости от технических навыков и опыта.
          </p>
          <p className="text-xl leading-relaxed mt-4">
            Мы верим, что искусственный интеллект — это инструмент, который может 
            значительно упростить жизнь и открыть новые возможности для каждого человека.
          </p>
          <p className="text-xl leading-relaxed mt-4">
            На наших встречах мы объясняем сложные вещи простым языком и помогаем вам 
            начать использовать ИИ уже сегодня.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
