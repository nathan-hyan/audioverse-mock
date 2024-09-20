import { Separator } from '@components';
import styles from './Fourth.module.scss';

function Fourth() {
  return (
    <div className={styles.container}>
      <div className={styles.leftSide}>
        <h2>Tu música, a otro nivel</h2>
        <p>
          Lleva tu pasión por la música a nuevas alturas con AudioVerse.
          Nuestros altavoces y DACs de alta fidelidad están diseñados para
          ofrecer un sonido excepcional, brindándote la experiencia auditiva que
          siempre soñaste.
        </p>

        <Separator />

        <h2>Encuentra tu tono perfecto</h2>
        <p>
          Explora nuestra colección y elige el equipo que mejor se ajuste a tu
          estilo de vida. Desde configuraciones compactas para espacios pequeños
          hasta sistemas avanzados para audiófilos, AudioVerse tiene lo que
          necesitas para disfrutar de cada nota con claridad y profundidad.
        </p>

        <Separator />

        <h2>Estamos aquí para perfeccionar tu sonido</h2>
        <p>
          Nuestro equipo de expertos está siempre disponible para ayudarte a
          sacar el máximo provecho de tus productos AudioVerse. Además,
          ofrecemos una garantía extendida y un proceso de reemplazo rápido y
          sencillo, para que nunca pierdas un solo beat.
        </p>
      </div>

      <div className={styles.verticalLine} />

      <div className={styles.rightSide}>
        <img
          src='https://plus.unsplash.com/premium_photo-1663047632991-a2de16748c44?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          alt='rightSide'
          className={styles.img}
        />
      </div>
    </div>
  );
}
export default Fourth;
