
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Here you would typically handle the actual form submission
    console.log('Form submitted:', formData);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Заявка отправлена!",
        description: "Мы свяжемся с вами в ближайшее время.",
      });
      setFormData({
        name: '',
        phone: '',
        email: '',
        message: ''
      });
    }, 1000);
  };

  return (
    <section id="contact-form" className="py-20">
      <div className="section-container">
        <h2 className="heading-secondary text-center mb-12">Записаться на встречу</h2>
        
        <div className="max-w-xl mx-auto glass-card p-8 animate-fade-in">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block mb-2 font-medium text-ai-green">
                Ваше имя
              </label>
              <Input
                id="name"
                name="name"
                placeholder="Иван Иванов"
                required
                value={formData.name}
                onChange={handleChange}
                className="bg-ai-dark/50 border-ai-light/20 focus:border-ai-blue text-ai-light"
              />
            </div>
            
            <div>
              <label htmlFor="phone" className="block mb-2 font-medium text-ai-green">
                Телефон
              </label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                placeholder="+7 (999) 123-45-67"
                required
                value={formData.phone}
                onChange={handleChange}
                className="bg-ai-dark/50 border-ai-light/20 focus:border-ai-blue text-ai-light"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block mb-2 font-medium text-ai-green">
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="example@mail.ru"
                required
                value={formData.email}
                onChange={handleChange}
                className="bg-ai-dark/50 border-ai-light/20 focus:border-ai-blue text-ai-light"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block mb-2 font-medium text-ai-green">
                Сообщение (необязательно)
              </label>
              <Textarea
                id="message"
                name="message"
                placeholder="Ваши вопросы или пожелания"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="bg-ai-dark/50 border-ai-light/20 focus:border-ai-blue text-ai-light resize-none"
              />
            </div>
            
            <Button 
              type="submit" 
              className="w-full btn-primary" 
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Отправка...' : 'Отправить заявку'}
            </Button>
            
            <p className="text-sm text-center opacity-70">
              Нажимая кнопку, вы соглашаетесь с нашей политикой конфиденциальности
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
