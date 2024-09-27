import styles from './Separator.module.scss';

function Separator() {
  return <hr data-testid='separator' className={styles.separator} />;
}
export default Separator;
