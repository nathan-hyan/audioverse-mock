import { Button } from '@components';
import styles from './Seventh.module.scss';

function Seventh() {
  return (
    <div className={styles.container}>
      <h1>Aumenta el volumen sin preocupaciónes</h1>
      <div className={styles.box}>
        <p>
          Con nuestros amplificadores de altavoz, podrás aumentar el volumen sin
          preocuparte de sobrecalentamiento ni distorsiones indeseadas.
          Trabajamos para que la calidad de tu música sea lo mejor posible, sin
          importar el volumen.
        </p>
      </div>
      <Button label='Conocer más' />
    </div>
  );
}
export default Seventh;
