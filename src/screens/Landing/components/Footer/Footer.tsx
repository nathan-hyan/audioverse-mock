import styles from './Footer.module.scss';

function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className={styles.container}>
      <ol className={styles.links}>
        <li>
          <button onClick={handleScrollToTop}>Ir arriba</button>
        </li>
        <li>
          <a
            href='https://www.linkedin.com/in/exequielm2048/'
            target='_blank'
            rel='noreferrer'
          >
            LinkedIn
          </a>
        </li>
        <li>
          <a href='https://hyan.dev' target='_blank' rel='noreferrer'>
            Página personal
          </a>
        </li>
      </ol>
      <small>
        Copyright © {currentYear} Hy-An. Todos los derechos reservados.
      </small>
    </footer>
  );
}
export default Footer;
