import React from 'react';
import { WeatherWidget } from './WeatherWidget';

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ 
  title = "Welcome to our App", 
  subtitle = "Discover amazing features" 
}) => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>{title}</h1>
        <p>{subtitle}</p>
        <WeatherWidget />
      </div>
    </section>
  );
};
