import { motion, Variants } from "framer-motion";
import styles from "./Button.module.scss";

interface Props {
  label: string;
  variants?: Variants;
}

function Button({ label, variants }: Props) {
  return (
    <motion.button variants={variants} type="button" className={styles.button}>
      {label}
    </motion.button>
  );
}
export default Button;
