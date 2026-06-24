import { useEffect } from 'react';
import Analytics from '../components/Analytics';
import HeroB from '../components/HeroB';
import Somos from '../components/Somos';
import WhatsAppFloat from '../components/WhatsAppFloat';
import Footer from '../components/Footer';

export default function QueHacemos() {
  useEffect(() => {
    document.querySelector('meta[name="description"]')
      ?.setAttribute('content', 'Te aseguramos una contabilidad optimizada con IA en tus operaciones y una oportuna declaración de impuestos.');
  }, []);

  return (
    <>
      <Analytics />
      <HeroB />
      <Somos />
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
