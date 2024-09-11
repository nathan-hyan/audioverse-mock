import styles from './Item.module.scss';

interface Props {
  number: number;
  title: string;
  text: string;
}

function Item({ number, title, text }: Props) {
  return (
    <li className={styles.container}>
      <h2>{number}</h2>
      <div className={styles.detail}>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </li>
  );
}
export default Item;
