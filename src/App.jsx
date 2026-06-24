import QueHacemos from './pages/QueHacemos';
import Analytics from './components/Analytics';
import HeroB from './components/HeroB';
import WhatsAppFloat from './components/WhatsAppFloat';
import Somos from './components/Somos';
import Planes from './components/Planes';
import Pasos from './components/Pasos';
import Cita from './components/Cita';
import OtrosServicios from './components/OtrosServicios';
import Formaliza from './components/Formaliza';
import Sunat from './components/Sunat';
import Testimonios from './components/Testimonios';
import CtaBand from './components/CtaBand';
import Footer from './components/Footer';

const path = window.location.pathname;

export default function App() {
  if (path === '/que-hacemos') return <QueHacemos />;

  return (
    <>
      <Analytics />
      <HeroB />
      <Somos />
      <Planes />
      <Pasos />
      <Cita />
      <OtrosServicios />
      <Formaliza />
      <Sunat />
      <Testimonios />
      <CtaBand />
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
