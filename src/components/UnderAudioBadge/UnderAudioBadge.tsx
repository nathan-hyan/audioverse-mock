import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './UnderAudioBadge.module.scss';
import { motion, Variants } from 'framer-motion';

interface Props {
  variants: Variants;
}

function UnderAudioBadge({ variants }: Props) {
  return (
    <motion.div variants={variants} className={styles.carbonBadge}>
      <FontAwesomeIcon icon={faGlobe} />
      <p>Certificado UnderAudio</p>
    </motion.div>
  );
}
export default UnderAudioBadge;
