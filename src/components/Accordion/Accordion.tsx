import { ReactNode } from 'react';

import styles from './Accordion.module.scss';

interface Props {
  id: string;
  title: string;
  children: ReactNode;
}

function Accordion({ id, title, children }: Props) {
  return (
    <section className={styles.container}>
      <div className={styles.tab}>
        <input type='checkbox' id={id} className={styles.input} />
        <label className={styles.tabLabel} htmlFor={id}>
          {title}
        </label>
        <div className={styles.tabContent}>{children}</div>
      </div>
    </section>
  );
}

export default Accordion;
