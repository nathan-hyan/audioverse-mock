import { Accordion, Button } from '@components';
import styles from './LandingFAQs.module.scss';
import { FAQs } from '@constants';

function LandingFAQs() {
  return (
    <div className={styles.container}>
      <h1>Preguntas Frecuentes</h1>
      <div className={styles.accordionContainer}>
        {FAQs.map((faq) => (
          <Accordion key={faq.id} id={faq.id} title={faq.question}>
            {faq.answer}
          </Accordion>
        ))}
      </div>
      <Button label='Ver más' />
    </div>
  );
}
export default LandingFAQs;
