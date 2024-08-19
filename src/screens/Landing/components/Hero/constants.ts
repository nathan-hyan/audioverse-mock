import { faSpeakerDeck } from '@fortawesome/free-brands-svg-icons';
import {
  faPhone,
  faShieldHeart,
  faTruck,
} from '@fortawesome/free-solid-svg-icons';

export const ITEMS = [
  {
    key: 0,
    img: faSpeakerDeck,
    description:
      'Recibe un equipo de audio de vanguardia y disfrútalo con una renovación cada 18 meses.',
  },
  {
    key: 1,
    img: faTruck,
    description:
      'Tu kit de sonido evoluciona automáticamente: recibe nuevos componentes y accesorios directamente en tu puerta, solo cuando lo necesites.',
  },
  {
    key: 2,
    img: faShieldHeart,
    description:
      'Benefíciate de una cobertura de garantía sin fecha de caducidad mientras mantengas tu suscripción. ¡La tranquilidad está incluida!',
  },
  {
    key: 3,
    img: faPhone,
    description:
      'Soporte al cliente hiperactivo, disponible 24/7 para resolver todas tus dudas y necesidades.',
  },
];

export const LOCAL_ANIMATIONS = {
  items: {
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
    hidden: { opacity: 0 },
  },
  title: {
    hidden: { x: -10, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        staggerChildren: 1.2,
      },
    },
  },
  footer: {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delayChildren: 1.4,
        staggerChildren: 0.2,
      },
    },
  },
};
