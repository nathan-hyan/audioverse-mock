import { Button } from "@components";
import speakersImg from "./assets/speakers.png";
import styles from "./Second.module.scss";
import { motion } from "framer-motion";
import { LOCAL_ANIMATIONS } from "./constants";

function Second() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={LOCAL_ANIMATIONS.global}
      className={styles.container}
    >
      <motion.img
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: false, amount: 0.5 }}
        src={speakersImg}
        alt="speakers"
      />
      <motion.div
        viewport={{ once: false, amount: 0.5 }}
        variants={LOCAL_ANIMATIONS.global}
        initial="hidden"
        whileInView="visible"
        className={styles.text}
      >
        <motion.p variants={LOCAL_ANIMATIONS.global}>
          PARLANTES. DAC. CABLES.
        </motion.p>
        <motion.h2
          variants={LOCAL_ANIMATIONS.global}
        >{`Tu música, tu vida\nComo nunca antes\nlo habías escuchado.`}</motion.h2>
        <Button variants={LOCAL_ANIMATIONS.global} label={"Conocer más"} />
      </motion.div>
    </motion.div>
  );
}

export default Second;
