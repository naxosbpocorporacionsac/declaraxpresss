const number = import.meta.env.VITE_WA_NUMBER || '51999999999';
const message = import.meta.env.VITE_WA_MESSAGE || 'Hola, quiero mi diagnóstico gratuito';

export const waUrl = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
