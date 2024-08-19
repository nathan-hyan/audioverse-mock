import styles from './Hero.module.scss';
import { Button, UnderAudioBadge } from '@components';
import { motion } from 'framer-motion';
import { LOCAL_ANIMATIONS, ITEMS } from './constants';
import { Item } from './components';

function Landing() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <motion.div
          variants={LOCAL_ANIMATIONS.title}
          initial='hidden'
          animate='visible'
          className={styles.title}
        >
          <motion.h1 variants={LOCAL_ANIMATIONS.title}>
            Audio profesional al alcance de tus oídos. Con todo lo que necesitas
          </motion.h1>
          <UnderAudioBadge variants={LOCAL_ANIMATIONS.title} />
        </motion.div>

        <hr className={styles.separator} />

        <motion.div
          variants={LOCAL_ANIMATIONS.items}
          initial='hidden'
          animate='visible'
          className={styles.itemContainer}
        >
          {ITEMS.map(({ key, ...item }) => (
            <Item {...item} key={key} />
          ))}
        </motion.div>

        <motion.footer
          initial='hidden'
          animate='visible'
          variants={LOCAL_ANIMATIONS.footer}
          className={styles.footer}
        >
          <Button
            variants={LOCAL_ANIMATIONS.footer}
            label='Comienza desde 3,99€ al mes'
          />
          <motion.small variants={LOCAL_ANIMATIONS.footer}>
            {`Prueba AudioVerse sin ataduras durante 30 días. Si decides cancelar\ndurante los primeros 6 meses, se aplicará una tarifa de cancelación.\nLa suscripción se renueva automáticamente cada mes.`}
          </motion.small>
        </motion.footer>
      </div>
    </div>
  );
}
export default Landing;
