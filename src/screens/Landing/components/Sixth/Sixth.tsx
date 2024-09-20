import classNames from 'classnames';
import { Item } from './components';
import styles from './Sixth.module.scss';
import { ITEMS } from './constants';

function Sixth() {
  return (
    <div className={styles.container}>
      <div className={classNames(styles.section, styles.leftSide)} />
      <div className={classNames(styles.section, styles.rightSide)}>
        <ul>
          {ITEMS.map((item) => (
            <Item
              number={item.number}
              key={item.number}
              title={item.title}
              text={item.text}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}
export default Sixth;
