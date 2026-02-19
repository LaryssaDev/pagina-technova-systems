import React, { useState, useEffect } from 'react';
import { Menu, X, Instagram, MessageCircle, MapPin, ChevronRight, ExternalLink } from 'lucide-react';
import { PROJECTS, DIFFERENTIALS, WHATSAPP_URL, INSTAGRAM_URL } from './constants';

const LOGO_URL = "https://i.imgur.com/t25sUy1.jpeg";

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
      const offset = 80; // Compensação para o header fixo
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
    <div className="min-h-screen text-white bg-slate-950 selection:bg-blue-500/30">
      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass border-b border-slate-800 py-3' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
          <a href="#inicio" onClick={(e) => handleNavClick(e, '#inicio')} className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-lg overflow-hidden neon-border transition-transform group-hover:scale-110 border border-slate-800">
              <img src={LOGO_URL} alt="TechNova Logo" className="w-full h-full object-cover" />
            </div>
            <span className="text-xl font-bold tracking-tight hidden sm:block">
              TechNova <span className="text-blue-500">Systems</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm font-medium text-slate-300 hover:text-blue-400 transition-colors cursor-pointer"
              >
                {link.name}
              </a>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all hover:scale-105 active:scale-95 flex items-center gap-2"
            >
              Solicitar Orçamento
            </a>
          </nav>

          {/* Mobile Toggle */}
          <button className="md:hidden text-slate-300" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 glass border-b border-slate-800 animate-in slide-in-from-top duration-300">
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
                className="bg-blue-600 text-white p-4 rounded-xl text-center font-bold"
              >
                Solicitar Orçamento
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="inicio" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute top-0 right-0 -z-10 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 -z-10 w-[400px] h-[400px] bg-blue-500/10 blur-[100px] rounded-full -translate-x-1/2 translate-y-1/2" />
        
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="flex-1 text-center lg:text-left">
              <span className="inline-block py-1 px-4 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-6">
                Design & Performance Digital
              </span>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6">
                Transformamos ideias em <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 neon-text">sites que geram resultados.</span>
              </h1>
              <p className="text-slate-400 text-lg md:text-xl mb-10 max-w-2xl mx-auto lg:mx-0">
                Criamos sites modernos, rápidos e estratégicos para empresas que querem crescer e vender mais no ambiente digital.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-bold text-lg flex items-center justify-center gap-2 transition-all hover:scale-105 neon-border"
                >
                  🚀 Solicitar Orçamento
                </a>
                <a
                  href="#portfolio"
                  onClick={(e) => handleNavClick(e, '#portfolio')}
                  className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-full font-bold text-lg flex items-center justify-center gap-2 transition-all hover:scale-105"
                >
                  📂 Ver Portfólio
                </a>
              </div>
            </div>
            <div className="flex-1 relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
              <div className="relative bg-slate-900 rounded-2xl p-4 md:p-8 border border-slate-800 animate-float">
                 <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200" 
                  alt="Website Showcase" 
                  className="rounded-lg shadow-2xl opacity-90 group-hover:opacity-100 transition-opacity"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-24 bg-slate-900/50 scroll-mt-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-8">Sobre a TechNova <span className="text-blue-500">Systems</span></h2>
            <p className="text-slate-400 text-lg md:text-xl leading-relaxed mb-8">
              A TechNova Systems é especializada na criação de sites profissionais e soluções digitais sob medida. Nosso foco é desenvolver páginas modernas, rápidas e estratégicas que transmitam autoridade e convertam visitantes em clientes.
            </p>
            <p className="text-slate-400 text-lg md:text-xl leading-relaxed">
              Trabalhamos com design personalizado, performance otimizada e estrutura pensada para gerar resultados reais para nossos clientes através de tecnologias de ponta e as melhores práticas de SEO e UX.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24 scroll-mt-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
            <div>
              <span className="text-blue-500 font-bold uppercase tracking-widest text-sm">Cases de Sucesso</span>
              <h2 className="text-4xl md:text-5xl font-bold mt-2">Nossos <span className="text-blue-500">Projetos</span></h2>
            </div>
            <p className="text-slate-400 max-w-sm">
              Conheça alguns dos negócios que elevamos ao próximo nível através do design e tecnologia.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((project) => (
              <div 
                key={project.id} 
                className="group relative bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:border-blue-500/50 cursor-pointer"
              >
                {/* Overlay Link - Torna o card inteiro clicável */}
                <a 
                  href={project.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="absolute inset-0 z-20"
                  aria-label={`Visualizar site de ${project.name}`}
                ></a>

                <div className="aspect-[4/3] overflow-hidden relative">
                  <img 
                    src={project.image} 
                    alt={project.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-60" />
                  
                  {/* Ícone flutuante de Link */}
                  <div className="absolute top-4 right-4 p-3 bg-blue-600 rounded-full text-white opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 z-10 shadow-lg">
                    <ExternalLink size={20} />
                  </div>
                </div>

                <div className="p-8 relative z-10">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <span className="text-xs font-bold text-blue-500 uppercase tracking-widest">{project.category}</span>
                      <h3 className="text-2xl font-bold mt-1 group-hover:text-blue-400 transition-colors">{project.name}</h3>
                    </div>
                  </div>
                  <p className="text-slate-400 mb-6 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="inline-flex items-center gap-2 text-white font-bold group-hover:text-blue-500 transition-colors">
                    Clique aqui para visualizar o site
                    <ChevronRight size={18} className="transition-transform group-hover:translate-x-2" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentials */}
      <section className="py-24 bg-slate-900/50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Por que escolher a <span className="text-blue-500">TechNova</span>?</h2>
            <p className="text-slate-400">Diferenciais que tornam nossos sites ferramentas de vendas poderosas.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            {DIFFERENTIALS.map((item) => (
              <div key={item.id} className="bg-slate-950 border border-slate-800 p-8 rounded-2xl flex flex-col items-center text-center w-full sm:w-64 transition-all hover:bg-blue-600/5 hover:border-blue-500/30 group">
                <div className="mb-6 p-4 rounded-xl bg-blue-500/5 border border-blue-500/10 transition-transform group-hover:scale-110">
                  {item.icon}
                </div>
                <h4 className="text-lg font-bold">{item.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-24 scroll-mt-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-4xl md:text-5xl font-bold mb-8">Vamos tirar seu projeto <span className="text-blue-500">do papel?</span></h2>
              <p className="text-slate-400 text-lg mb-12">
                Estamos prontos para entender seu negócio e criar a solução digital perfeita para suas necessidades. Entre em contato agora mesmo!
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-600/10 rounded-lg text-blue-500">
                    <MapPin />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Endereço</h4>
                    <p className="text-slate-400 leading-relaxed">
                      Avenida Brigadeiro Faria Lima, 1811 - ESC 1119<br />
                      Jardim Paulistano – SP | CEP: 01452-001
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <a 
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-[#25D366] hover:bg-[#20bd5a] text-white p-6 rounded-2xl flex flex-col items-center justify-center gap-3 transition-all hover:scale-[1.02] shadow-lg shadow-green-600/20"
                  >
                    <MessageCircle size={32} />
                    <span className="font-bold text-xl text-center">Falar no WhatsApp</span>
                  </a>
                  <a 
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white p-6 rounded-2xl flex flex-col items-center justify-center gap-3 transition-all hover:scale-[1.02] shadow-lg shadow-purple-600/20"
                  >
                    <Instagram size={32} />
                    <span className="font-bold text-xl text-center">Instagram</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 h-[450px] rounded-3xl overflow-hidden border border-slate-800 shadow-2xl relative group">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1066962916174!2d-46.6872!3d-23.5646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5709559c55b1%3A0x8826d1c8f18c2d58!2sAv.%20Brig.%20Faria%20Lima%2C%201811%20-%20Jardim%20Paulistano%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2001452-001!5e0!3m2!1sen!2sbr!4v1710000000000!5m2!1sen!2sbr" 
                width="100%" 
                height="100%" 
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(0.9)' }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <div className="absolute inset-0 pointer-events-none border-[12px] border-slate-950/20 rounded-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 pt-20 pb-10 border-t border-slate-900">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 lg:col-span-1">
              <a href="#inicio" onClick={(e) => handleNavClick(e, '#inicio')} className="flex items-center gap-3 mb-6 group">
                <div className="w-10 h-10 rounded overflow-hidden transition-transform group-hover:scale-110 border border-slate-800">
                  <img src={LOGO_URL} alt="TechNova Logo" className="w-full h-full object-cover" />
                </div>
                <span className="text-xl font-bold">TechNova</span>
              </a>
              <p className="text-slate-400 mb-8 max-w-xs">
                Sua parceira estratégica na criação de presença digital de alto impacto. Transformando código em lucro.
              </p>
              <div className="flex gap-4">
                <a href={INSTAGRAM_URL} target="_blank" className="p-2 bg-slate-900 rounded-lg text-slate-400 hover:text-blue-500 transition-colors border border-slate-800">
                  <Instagram size={20} />
                </a>
                <a href={WHATSAPP_URL} target="_blank" className="p-2 bg-slate-900 rounded-lg text-slate-400 hover:text-green-500 transition-colors border border-slate-800">
                  <MessageCircle size={20} />
                </a>
              </div>
            </div>

            <div>
              <h5 className="font-bold text-lg mb-6">Links Rápidos</h5>
              <ul className="space-y-4">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href} 
                      onClick={(e) => handleNavClick(e, link.href)}
                      className="text-slate-400 hover:text-blue-500 transition-colors cursor-pointer"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h5 className="font-bold text-lg mb-6">Serviços</h5>
              <ul className="space-y-4 text-slate-400">
                <li>Criação de Sites</li>
                <li>Landing Pages</li>
                <li>E-commerce</li>
                <li>Identidade Visual</li>
                <li>Consultoria Digital</li>
              </ul>
            </div>

            <div>
              <h5 className="font-bold text-lg mb-6">Novidades</h5>
              <p className="text-slate-400 mb-6">
                Assine para receber dicas sobre marketing digital e web design.
              </p>
              <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
                <input 
                  type="email" 
                  placeholder="Seu e-mail" 
                  className="bg-slate-900 border border-slate-800 rounded-lg px-4 py-2 w-full focus:outline-none focus:border-blue-500 transition-colors"
                />
                <button type="submit" className="bg-blue-600 p-2 rounded-lg hover:bg-blue-700 transition-colors">
                  <ChevronRight />
                </button>
              </form>
            </div>
          </div>
          
          <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-sm">
              Direitos reservados © 2026 TechNova Systems
            </p>
            <div className="flex gap-8 text-slate-500 text-sm">
              <a href="#" className="hover:text-blue-500">Privacidade</a>
              <a href="#" className="hover:text-blue-500">Termos</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;