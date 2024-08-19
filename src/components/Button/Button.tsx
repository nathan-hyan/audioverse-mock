import { HTMLMotionProps, motion } from 'framer-motion';
import styles from './Button.module.scss';

interface Props {
  label: string;
}

function Button({ label, ...props }: Props & HTMLMotionProps<'button'>) {
  return (
    <motion.button {...props} type='button' className={styles.button}>
      {label}
    </motion.button>
  );
}
export default Button;
