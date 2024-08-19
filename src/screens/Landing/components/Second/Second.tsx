import { Button } from '@components';
import speakersImg from './assets/speakers.png';
import styles from './Second.module.scss';
import { motion } from 'framer-motion';
import { LOCAL_ANIMATIONS } from './constants';

function Second() {
  return (
    <motion.div
      initial='hidden'
      animate='visible'
      variants={LOCAL_ANIMATIONS.container}
      className={styles.container}
    >
      <motion.img
        variants={LOCAL_ANIMATIONS.img}
        src={speakersImg}
        alt='speakers'
      />
      <motion.div
        variants={LOCAL_ANIMATIONS.container}
        initial='hidden'
        animate='visible'
        className={styles.text}
      >
        <motion.p variants={LOCAL_ANIMATIONS.container}>
          PARLANTES. DAC. CABLES.
        </motion.p>
        <motion.h2
          variants={LOCAL_ANIMATIONS.container}
        >{`Tu música, tu vida\nComo nunca antes\nlo habías escuchado.`}</motion.h2>
        <Button variants={LOCAL_ANIMATIONS.container} label={'Conocer más'} />
      </motion.div>
    </motion.div>
  );
}

export default Second;
