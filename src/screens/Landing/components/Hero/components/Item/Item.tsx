import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Item.module.scss';
import { motion } from 'framer-motion';

interface Props {
  img: IconDefinition;
  description: string;
}

function Item({ img, description }: Props) {
  const variants = {
    visible: { x: 0, opacity: 1 },
    hidden: { x: -10, opacity: 0 },
  };

  return (
    <motion.div variants={variants} className={styles.container}>
      <FontAwesomeIcon size='lg' icon={img} className={styles.icon} />
      <p>{description}</p>
    </motion.div>
  );
}
export default Item;
