
// Fix: Import React to resolve 'React' namespace error
import React from 'react';

export interface Project {
  id: number;
  name: string;
  category: string;
  description: string | React.ReactNode;
  url: string;
  image: string;
}

export interface Differential {
  id: number;
  title: string;
  icon: React.ReactNode;
}