import { ReactNode, useRef } from 'react';

import styles from './Accordion.module.scss';

interface Props {
  id: string;
  title: string;
  children: ReactNode;
}

function Accordion({ id, title, children }: Props) {
  const contentRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    contentRef.current?.scrollTo({ left: 0 });

    setTimeout(() => {
      window.scrollTo({
        top: contentRef.current?.offsetTop,
        behavior: 'smooth',
      });
    }, 200);
  };

  return (
    <section className={styles.container}>
      <div className={styles.tab}>
        <input
          type='checkbox'
          onClick={handleClick}
          id={id}
          className={styles.input}
        />
        <label className={styles.tabLabel} htmlFor={id}>
          {title}
        </label>
        <div ref={contentRef} className={styles.tabContent}>
          {children}
        </div>
      </div>
    </section>
  );
}

export default Accordion;
