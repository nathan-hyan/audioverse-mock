import { Button } from '@components';
import styles from './Third.module.scss';
import { motion } from 'framer-motion';
import { LOCAL_ANIMATIONS } from './constants';

function Third() {
  return (
    <motion.div
      variants={LOCAL_ANIMATIONS.container}
      initial='hidden'
      animate='visible'
      className={styles.container}
    >
      <motion.h2 variants={LOCAL_ANIMATIONS.items}>
        Redescubre tu sonido
      </motion.h2>
      <motion.p variants={LOCAL_ANIMATIONS.items}>
        {`AudioVerse es una marca innovadora que redefine tu experiencia
auditiva. Ofrecemos una línea de altavoces y DACs de alta calidad,
diseñados para brindar un sonido puro y envolvente. Con tecnología
avanzada y materiales de primera, nuestros productos están pensados
tanto para audiófilos exigentes como para quienes buscan mejorar su
día a día con un sonido excepcional. Descubre una nueva dimensión de
claridad y precisión sonora con AudioVerse.`}
      </motion.p>
      <Button variants={LOCAL_ANIMATIONS.items} label='Conocer más' />
    </motion.div>
  );
}
export default Third;
