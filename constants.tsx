
import React from 'react';
import { Layout, Zap, Target, Users, Headset } from 'lucide-react';
import { Project, Differential } from './types';

export const WHATSAPP_URL = "https://api.whatsapp.com/send/?phone=11948626304&text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento.&type=phone_number&app_absent=0&utm_source=ig";
export const INSTAGRAM_URL = "https://www.instagram.com/tech.novasystems/";

export const PROJECTS: Project[] = [
  {
    id: 1,
    name: "Dra Elaynne Cristina",
    category: "Dentista",
    description: "Landing page profissional com foco em agendamentos e apresentação de serviços odontológicos.",
    url: "https://draelaynne-cristina-dentista.vercel.app/",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 2,
    name: "Dra Giovanna Santana",
    category: "Dentista",
    description: "Site institucional elegante e moderno para clínica odontológica de alto padrão.",
    url: "https://dra-giovanna-santana.vercel.app/",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 3,
    name: "TERRAPLANAGEM PLAN",
    category: "Engenharia",
    description: "Site Institucional elegante e moderno, estratégico com informações da empresa.",
    url: "https://www.terraplanagemplan.com/",
    image: "https://i.imgur.com/ylFs2SK.png"
  },
  {
    id: 4,
    name: "Gueto Fya",
    category: "Loja de Roupas",
    description: "E-commerce moderno com layout urbano e focado na experiência de compra do usuário.",
    url: "https://gueto-fya-qj8t.vercel.app/",
    image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 5,
    name: "Marconi",
    category: "Barbearia",
    description: "Site institucional dinâmico para barbearia com sistema de visualização de serviços e estilo.",
    url: "https://marconi-1jce.vercel.app/",
    image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 6,
    name: "Torcida Prime",
    category: "E-commerce",
    description: (
      <>
        E-commerce moderno para vendas de camisas de time e <span className="text-blue-400 font-bold">integração de API de pagamento MercadoPago</span>
      </>
    ),
    url: "https://torcidaprime.vercel.app/",
    image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80&w=800"
  }
];

export const DIFFERENTIALS: Differential[] = [
  { id: 1, title: "Design moderno", icon: <Layout className="w-8 h-8 text-blue-500" /> },
  { id: 2, title: "Sites rápidos e otimizados", icon: <Zap className="w-8 h-8 text-blue-500" /> },
  { id: 3, title: "Estrutura estratégica", icon: <Target className="w-8 h-8 text-blue-500" /> },
  { id: 4, title: "Atendimento personalizado", icon: <Users className="w-8 h-8 text-blue-500" /> },
  { id: 5, title: "Suporte contínuo", icon: <Headset className="w-8 h-8 text-blue-500" /> },
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Dra. Elaynne Cristina",
    role: "Odontologia",
    content: "A TechNova transformou minha presença digital. Minha agenda nunca esteve tão cheia depois que lançamos a nova landing page.",
    image: "https://images.unsplash.com/photo-1559839734-2b71f1536783?auto=format&fit=crop&q=80&w=200"
  },
  {
    id: 2,
    name: "Roberto Silva",
    role: "Marketing Digital",
    content: "O foco em conversão deles é surreal. O ROI dos meus anúncios dobrou com a estrutura que eles montaram.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200"
  },
  {
    id: 3,
    name: "Lucas Marconi",
    role: "Empresário",
    content: "Design impecável e suporte que realmente resolve. Recomendo para qualquer empresa que queira ser levada a sério.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200"
  }
];

export const FAQS = [
  {
    question: "Quanto tempo leva para o site ficar pronto?",
    answer: "O prazo médio é de 10 a 20 dias úteis, dependendo da complexidade do projeto e da agilidade no envio dos materiais."
  },
  {
    question: "O site será otimizado para o Google (SEO)?",
    answer: "Sim! Todos os nossos sites são construídos com as melhores práticas de SEO técnico para ajudar seu negócio a aparecer nas buscas."
  },
  {
    question: "Eu mesmo poderei alterar o conteúdo depois?",
    answer: "Sim, entregamos o site com um painel administrativo intuitivo ou treinamos você para fazer edições básicas de texto e imagens."
  },
  {
    question: "O site funciona bem no celular?",
    answer: "Com certeza. Utilizamos a abordagem 'Mobile-First', garantindo que a experiência seja perfeita em qualquer tamanho de tela."
  }
];

export const PROCESS_STEPS = [
  {
    id: "01",
    title: "Estratégia",
    description: "Analisamos seu mercado e público para criar uma estrutura que converte."
  },
  {
    id: "02",
    title: "Design & Dev",
    description: "Criamos um visual exclusivo e codificamos com foco em performance."
  },
  {
    id: "03",
    title: "Lançamento",
    description: "Configuramos tudo, testamos e colocamos sua máquina de vendas no ar."
  }
];
