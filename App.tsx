import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, X, Instagram, MessageCircle, MapPin, 
  ChevronRight, ExternalLink, Play, CheckCircle2, 
  ArrowRight, Star, Quote, ChevronDown, Sparkles,
  ShieldCheck, Clock, Rocket, Target, Zap,
  Pause, Volume2, VolumeX
} from 'lucide-react';
import { 
  PROJECTS, DIFFERENTIALS, WHATSAPP_URL, INSTAGRAM_URL,
  TESTIMONIALS, FAQS, PROCESS_STEPS 
} from './constants';
import ParticleBackground from './components/ParticleBackground';

const LOGO_URL = "https://i.imgur.com/t25sUy1.jpeg";

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPaused(false);
      } else {
        videoRef.current.pause();
        setIsPaused(true);
      }
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMenuOpen(false);
    
    if (href === '#inicio') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const targetId = href.replace('#', '');
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      const offset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const navLinks = [
    { name: 'Início', href: '#inicio' },
    { name: 'Portfólio', href: '#portfolio' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Contato', href: '#contato' },
  ];

  return (
    <div className="min-h-screen text-white bg-slate-950 selection:bg-blue-500/30 font-sans overflow-x-hidden">
      <ParticleBackground />
      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'glass border-b border-slate-800/50 py-3' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
          <motion.a 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            href="#inicio" 
            onClick={(e) => handleNavClick(e, '#inicio')} 
            className="flex items-center gap-3 group"
          >
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl overflow-hidden neon-border transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 border border-slate-800">
              <img src={LOGO_URL} alt="TechNova Logo" className="w-full h-full object-cover" />
            </div>
            <span className="text-lg md:text-xl font-bold tracking-tight hidden sm:block">
              TechNova <span className="text-blue-500">Systems</span>
            </span>
          </motion.a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link, idx) => (
              <motion.a
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm font-medium text-slate-400 hover:text-blue-400 transition-colors cursor-pointer relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full" />
              </motion.a>
            ))}
            <motion.a
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-2.5 rounded-full text-sm font-bold transition-all hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:scale-105 active:scale-95 flex items-center gap-2"
            >
              Falar com Especialista
            </motion.a>
          </nav>

          {/* Mobile Toggle */}
          <button className="md:hidden text-slate-300 p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden absolute top-full left-0 right-0 glass border-b border-slate-800 overflow-hidden"
            >
              <nav className="flex flex-col p-6 gap-6">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-lg font-medium text-slate-300 hover:text-blue-400"
                  >
                    {link.name}
                  </a>
                ))}
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMenuOpen(false)}
                  className="bg-blue-600 text-white p-4 rounded-xl text-center font-bold shadow-lg"
                >
                  Falar com Especialista
                </a>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 -z-10 w-[600px] h-[600px] bg-blue-600/10 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 -z-10 w-[500px] h-[500px] bg-blue-500/10 blur-[100px] rounded-full -translate-x-1/2 translate-y-1/2" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5" />
        
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs md:text-sm font-bold uppercase tracking-widest mb-8"
            >
              <Sparkles size={16} />
              Líder em Conversão Digital 2024
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl lg:text-8xl font-black leading-[1.1] mb-8 tracking-tight"
            >
              Pare de perder clientes para um <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-blue-700 neon-text">site amador.</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-slate-400 text-lg md:text-2xl mb-12 max-w-3xl leading-relaxed"
            >
              Nós construímos máquinas de vendas. Sites rápidos, persuasivos e focados em colocar dinheiro no seu bolso.
            </motion.p>

            {/* VSL Section */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="w-full max-w-4xl aspect-video relative group mb-16 rounded-3xl overflow-hidden border border-slate-800 shadow-2xl shadow-blue-500/10"
            >
              <video 
                ref={videoRef}
                src="https://res.cloudinary.com/dvyljza7x/video/upload/v1778596115/0429_4_p4bu2g.mp4"
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
              />
              
              {/* Custom Controls Overlay */}
              <div className="absolute inset-x-0 bottom-0 p-6 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-slate-950/80 to-transparent">
                <div className="flex items-center gap-4">
                  <button 
                    onClick={togglePlay}
                    className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center hover:bg-blue-500 transition-colors shadow-lg"
                  >
                    {isPaused ? <Play fill="white" size={20} className="ml-1" /> : <Pause fill="white" size={20} />}
                  </button>
                  <button 
                    onClick={toggleMute}
                    className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors backdrop-blur-md"
                  >
                    {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
                  </button>
                </div>
                
                {/* Visual indicator that this is a video but no seeking */}
                <div className="text-xs font-bold text-slate-400 uppercase tracking-widest bg-slate-900/50 px-3 py-1.5 rounded-full border border-slate-800">
                  TechNova VSL
                </div>
              </div>

              {/* Center Play Button Overlay (Visible when paused) */}
              <AnimatePresence>
                {isPaused && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={togglePlay}
                    className="absolute inset-0 flex items-center justify-center bg-slate-950/20 cursor-pointer"
                  >
                    <div className="w-24 h-24 rounded-full bg-blue-600/90 flex items-center justify-center shadow-[0_0_30px_rgba(37,99,235,0.4)]">
                      <Play fill="white" size={40} className="ml-2" />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full"
            >
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-10 py-5 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl font-black text-xl flex items-center justify-center gap-3 transition-all hover:scale-105 shadow-[0_20px_40px_rgba(37,99,235,0.3)]"
              >
                QUERO MEU SITE AGORA
                <ArrowRight size={24} />
              </a>
              <div className="flex items-center gap-4 text-slate-400 font-medium">
                <div className="flex -space-x-2">
                  {[1,2,3,4].map(i => (
                    <img key={i} src={`https://i.pravatar.cc/100?img=${i+10}`} className="w-10 h-10 rounded-full border-2 border-slate-950" alt="Avatar" />
                  ))}
                </div>
                <span className="text-sm md:text-base">+500 projetos entregues</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-12 border-y border-slate-900 bg-slate-950/50">
        <div className="container mx-auto px-4">
          <p className="text-center text-slate-500 text-sm font-bold uppercase tracking-[0.2em] mb-8">Empresas que confiam na TechNova</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
            {['Google', 'Meta', 'Amazon', 'Netflix', 'Stripe'].map(brand => (
              <span key={brand} className="text-2xl md:text-3xl font-black tracking-tighter">{brand}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-black mb-6">Nosso Processo de <span className="text-blue-500">Alta Performance</span></h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">Não é apenas um site. É uma estratégia completa desenhada para o seu sucesso.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connector Line */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-slate-800 -translate-y-1/2 -z-10" />
            
            {PROCESS_STEPS.map((step, idx) => (
              <motion.div 
                whileHover={{ y: -10 }}
                key={step.id} 
                className="bg-slate-900/50 border border-slate-800 p-10 rounded-3xl relative group hover:border-blue-500/50 transition-all duration-500"
              >
                <div className="text-6xl font-black text-blue-500/10 absolute top-4 right-8 group-hover:text-blue-500/20 transition-colors">
                  {step.id}
                </div>
                <div className="w-16 h-16 bg-blue-600/10 rounded-2xl flex items-center justify-center text-blue-500 mb-8 border border-blue-500/20">
                  {idx === 0 ? <Target size={32} /> : idx === 1 ? <Zap size={32} /> : <Rocket size={32} />}
                </div>
                <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                <p className="text-slate-400 leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof / Testimonials */}
      <section className="py-24 bg-slate-900/30">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-8">
            <div className="text-center md:text-left">
              <h2 className="text-3xl md:text-5xl font-black mb-4">O que dizem nossos <span className="text-blue-500">clientes</span></h2>
              <div className="flex items-center justify-center md:justify-start gap-1 text-yellow-500">
                {[1,2,3,4,5].map(i => <Star key={i} size={20} fill="currentColor" />)}
                <span className="ml-2 text-white font-bold">4.9/5 no Google</span>
              </div>
            </div>
            <a href={WHATSAPP_URL} className="px-8 py-4 bg-white/5 border border-white/10 rounded-2xl font-bold hover:bg-white/10 transition-all">Ver todos os depoimentos</a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t) => (
              <motion.div 
                key={t.id}
                whileHover={{ scale: 1.02 }}
                className="bg-slate-900 border border-slate-800 p-8 rounded-3xl relative"
              >
                <Quote className="absolute top-8 right-8 text-blue-500/20" size={48} />
                <div className="flex items-center gap-4 mb-6">
                  <img src={t.image} alt={t.name} className="w-14 h-14 rounded-full object-cover border-2 border-blue-500/30" />
                  <div>
                    <h4 className="font-bold">{t.name}</h4>
                    <p className="text-sm text-blue-500 font-medium">{t.role}</p>
                  </div>
                </div>
                <p className="text-slate-300 italic leading-relaxed">"{t.content}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24 scroll-mt-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-20">
            <span className="text-blue-500 font-bold uppercase tracking-widest text-sm">Portfólio Premium</span>
            <h2 className="text-4xl md:text-6xl font-black mt-4 mb-6">Projetos que <span className="text-blue-500">Vendem</span></h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">Cada pixel é pensado para guiar o seu cliente até o botão de compra.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((project, idx) => (
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                key={project.id} 
                className="group relative bg-slate-900 border border-slate-800 rounded-[2.5rem] overflow-hidden transition-all duration-500 hover:-translate-y-3 hover:border-blue-500/50"
              >
                <a href={project.url} target="_blank" rel="noopener noreferrer" className="absolute inset-0 z-20" />
                <div className="aspect-[16/10] overflow-hidden relative">
                  <img src={project.image} alt={project.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
                  <div className="absolute top-6 right-6 p-4 bg-blue-600 rounded-2xl text-white opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0 z-10 shadow-2xl">
                    <ExternalLink size={24} />
                  </div>
                </div>

                <div className="p-10">
                  <span className="text-xs font-black text-blue-500 uppercase tracking-[0.2em] mb-3 block">{project.category}</span>
                  <h3 className="text-2xl font-black mb-4 group-hover:text-blue-400 transition-colors">{project.name}</h3>
                  <p className="text-slate-400 mb-8 line-clamp-2 leading-relaxed">{project.description}</p>
                  <div className="flex items-center gap-2 text-white font-black group-hover:text-blue-500 transition-all">
                    VER PROJETO COMPLETO
                    <ChevronRight size={20} className="transition-transform group-hover:translate-x-2" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-slate-900/30">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-6">Dúvidas <span className="text-blue-500">Frequentes</span></h2>
            <p className="text-slate-400">Tudo o que você precisa saber para começar seu projeto hoje.</p>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, idx) => (
              <div key={idx} className="bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden transition-all duration-300">
                <button 
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full p-6 text-left flex justify-between items-center hover:bg-white/5 transition-colors"
                >
                  <span className="font-bold text-lg md:text-xl pr-8">{faq.question}</span>
                  <ChevronDown className={`transition-transform duration-300 ${activeFaq === idx ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {activeFaq === idx && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 pt-0 text-slate-400 leading-relaxed border-t border-slate-900/50">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-600 -z-10 opacity-5" />
        <div className="container mx-auto px-4 md:px-8">
          <motion.div 
            whileInView={{ scale: [0.95, 1] }}
            className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden shadow-2xl shadow-blue-500/20"
          >
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2" />
            <div className="relative z-10">
              <h2 className="text-4xl md:text-7xl font-black mb-8 leading-tight">Pronto para dominar o <br className="hidden md:block" /> seu mercado digital?</h2>
              <p className="text-blue-100 text-xl md:text-2xl mb-12 max-w-2xl mx-auto font-medium">
                Não deixe seu concorrente levar seus clientes. Garanta sua vaga para este mês.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-12 py-6 bg-white text-blue-600 rounded-2xl font-black text-2xl flex items-center justify-center gap-3 transition-all hover:scale-105 hover:shadow-2xl"
                >
                  QUERO MEU ORÇAMENTO
                  <MessageCircle size={28} />
                </a>
              </div>
              <div className="mt-12 flex flex-wrap justify-center gap-8 text-blue-100/80 font-bold uppercase tracking-widest text-sm">
                <div className="flex items-center gap-2"><ShieldCheck size={20} /> Garantia de Satisfação</div>
                <div className="flex items-center gap-2"><Clock size={20} /> Entrega Ágil</div>
                <div className="flex items-center gap-2"><CheckCircle2 size={20} /> Suporte VIP</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contato" className="bg-slate-950 pt-24 pb-12 border-t border-slate-900">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">
            <div className="lg:col-span-5">
              <a href="#inicio" onClick={(e) => handleNavClick(e, '#inicio')} className="flex items-center gap-3 mb-8 group">
                <div className="w-12 h-12 rounded-xl overflow-hidden border border-slate-800">
                  <img src={LOGO_URL} alt="TechNova Logo" className="w-full h-full object-cover" />
                </div>
                <span className="text-2xl font-black">TechNova <span className="text-blue-500">Systems</span></span>
              </a>
              <p className="text-slate-400 text-lg mb-10 max-w-md leading-relaxed">
                Transformamos empresas comuns em autoridades digitais através de design estratégico e tecnologia de ponta.
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-600/10 rounded-xl text-blue-500 border border-blue-500/20">
                    <MapPin size={24} />
                  </div>
                  <p className="text-slate-400 font-medium">
                    Av. Brigadeiro Faria Lima, 1811 - ESC 1119<br />
                    Jardim Paulistano – SP | 01452-001
                  </p>
                </div>
                <div className="flex gap-4">
                  <a href={INSTAGRAM_URL} target="_blank" className="p-4 bg-slate-900 rounded-2xl text-slate-400 hover:text-blue-500 transition-all border border-slate-800 hover:border-blue-500/50">
                    <Instagram size={24} />
                  </a>
                  <a href={WHATSAPP_URL} target="_blank" className="p-4 bg-slate-900 rounded-2xl text-slate-400 hover:text-green-500 transition-all border border-slate-800 hover:border-green-500/50">
                    <MessageCircle size={24} />
                  </a>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-12">
              <div>
                <h5 className="font-black text-lg mb-8 uppercase tracking-widest text-blue-500">Navegação</h5>
                <ul className="space-y-4">
                  {navLinks.map((link) => (
                    <li key={link.name}>
                      <a href={link.href} onClick={(e) => handleNavClick(e, link.href)} className="text-slate-400 hover:text-white transition-colors font-medium">{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h5 className="font-black text-lg mb-8 uppercase tracking-widest text-blue-500">Soluções</h5>
                <ul className="space-y-4 text-slate-400 font-medium">
                  <li>Landing Pages</li>
                  <li>Sites Institucionais</li>
                  <li>E-commerce</li>
                  <li>Sistemas Web</li>
                  <li>SEO & Tráfego</li>
                </ul>
              </div>
              <div className="col-span-2 md:col-span-1">
                <h5 className="font-black text-lg mb-8 uppercase tracking-widest text-blue-500">Newsletter</h5>
                <p className="text-slate-400 mb-6 text-sm">Receba estratégias de vendas toda semana.</p>
                <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
                  <input type="email" placeholder="E-mail" className="bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 w-full focus:outline-none focus:border-blue-500 transition-colors" />
                  <button type="submit" className="bg-blue-600 p-3 rounded-xl hover:bg-blue-700 transition-colors shadow-lg">
                    <ChevronRight />
                  </button>
                </form>
              </div>
            </div>
          </div>
          
          <div className="pt-12 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-slate-500 text-sm font-medium">
              © 2026 TechNova Systems. Todos os direitos reservados.
            </p>
            <div className="flex gap-8 text-slate-500 text-sm font-medium">
              <a href="#" className="hover:text-white transition-colors">Privacidade</a>
              <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <motion.a
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: 'spring' }}
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-[100] w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center text-white shadow-[0_10px_30px_rgba(37,211,102,0.4)] hover:scale-110 active:scale-95 transition-all group"
      >
        <MessageCircle size={32} />
        <span className="absolute right-full mr-4 bg-white text-slate-900 px-4 py-2 rounded-xl text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-xl">
          Falar com um consultor
        </span>
      </motion.a>
    </div>
  );
};

export default App;