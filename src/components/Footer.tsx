
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-xl font-bold text-ai-light">AI FOR YOU</p>
            <p className="text-sm opacity-70">aiforyou.ru</p>
          </div>
          
          <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-6">
            <a href="#" className="text-sm hover:text-ai-blue transition-colors">
              Политика конфиденциальности
            </a>
            <a href="#" className="text-sm hover:text-ai-blue transition-colors">
              Условия использования
            </a>
          </div>
        </div>
        
        <div className="mt-8 text-center text-sm opacity-70">
          <p>© {currentYear} AI FOR YOU. Все права защищены.</p>
          <p className="mt-1">Сайт создан с помощью искусственного интеллекта</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
