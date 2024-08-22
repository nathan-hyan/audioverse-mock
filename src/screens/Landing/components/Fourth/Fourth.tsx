import styles from './Fourth.module.scss';

function Fourth() {
  return (
    <div className={styles.container}>
      <div className={styles.leftSide}>
        <h2>La manera más cómoda de imprimir</h2>
        <p>
          Todo lo que necesitas, cuando lo necesitas. Disfruta de una nueva
          impresora HP y recibe automáticamente tus cartuchos en casa antes de
          que se agoten, todo en una única cuota mensual y a un precio muy bajo.
        </p>

        <hr />

        <h2>Cambia de plan cuando lo necesites</h2>
        <p>
          Elige el plan perfecto para ti - desde esporádico a profesional - y
          ajústalo fácilmente si tus necesidades de impresión cambian.
        </p>

        <hr />

        <h2>Estamos aquí cuando nos necesites</h2>
        <p>
          Confía en nuestro servicio de atención al cliente personalizado y
          disfruta de una garantía ilimitada mientras esté activa tu
          suscripción. En caso de necesidad, te reemplazamos la impresora al
          siguiente día laborable.
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
