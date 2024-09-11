import { Button, UnderAudioBadge } from '@components';
import styles from './Fifth.module.scss';
import { motion } from 'framer-motion';

function Fifth() {
  return (
    <motion.div className={styles.container}>
      <motion.h2>{`¡Incluye tu equipo de sonido AudioVerse
con opción de actualización!`}</motion.h2>
      <UnderAudioBadge variants={{}} />
      <motion.p>
        {`Con AudioVerse, no solo adquieres altavoces o DACs de alta calidad, 
también tienes la opción de actualizarlos cada tres años por los modelos más recientes.
Si lo prefieres, puedes conservar tu equipo actual y seguir disfrutando de un
sonido excepcional, diseñado para durar.`}
      </motion.p>
      <Button label='Conocer más' />
    </motion.div>
  );
}
export default Fifth;
