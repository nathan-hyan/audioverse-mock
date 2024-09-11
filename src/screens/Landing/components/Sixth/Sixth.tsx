import classNames from 'classnames';
import { Item } from './components';
import styles from './Sixth.module.scss';

function Sixth() {
  return (
    <div className={styles.container}>
      <div className={classNames(styles.section, styles.leftSide)} />
      <div className={classNames(styles.section, styles.rightSide)}>
        <ul>
          <Item
            number={1}
            title={`Elige un nuevo\nequipo de sonido`}
            text={`Selecciona entre los últimos modelos de
altavoces y DACs de AudioVerse para
disfrutar de la mejor calidad de sonido.`}
          />
          <Item
            number={2}
            title={`Ajusta tu configuración\nde sonido`}
            text={`Personaliza tu experiencia auditiva con
opciones que se adaptan a cualquier
espacio y preferencia.`}
          />
          <Item
            number={3}
            title={`Disfruta de la mejor\nexperiencia de audio`}
            text={`Con AudioVerse, puedes actualizar tu equipo
o personalizar tu configuración cuando lo
necesites, para que tu música siempre
suene perfecta.`}
          />
        </ul>
      </div>
    </div>
  );
}
export default Sixth;
