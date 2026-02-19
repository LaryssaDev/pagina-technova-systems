
import React from 'react';
import { Layout, Zap, Target, Users, Headset } from 'lucide-react';
import { Project, Differential } from './types';

export const WHATSAPP_URL = "https://api.whatsapp.com/send/?phone=11944702197&text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento.&type=phone_number&app_absent=0&utm_source=ig";
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
    name: "Roberto – MKT Digital",
    category: "Nicho Emagrecimento",
    description: "Página de vendas estratégica com foco total em conversão para produtos de emagrecimento.",
    url: "https://emagrecimento-2026-drkn.vercel.app/",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=800"
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
  }
];

export const DIFFERENTIALS: Differential[] = [
  { id: 1, title: "Design moderno", icon: <Layout className="w-8 h-8 text-blue-500" /> },
  { id: 2, title: "Sites rápidos e otimizados", icon: <Zap className="w-8 h-8 text-blue-500" /> },
  { id: 3, title: "Estrutura estratégica", icon: <Target className="w-8 h-8 text-blue-500" /> },
  { id: 4, title: "Atendimento personalizado", icon: <Users className="w-8 h-8 text-blue-500" /> },
  { id: 5, title: "Suporte contínuo", icon: <Headset className="w-8 h-8 text-blue-500" /> },
];
