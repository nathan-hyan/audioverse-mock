import styles from './LandingDisclaimers.module.scss';

function LandingDisclaimers() {
  return (
    <div className={styles.container}>
      <h1>Disclaimers</h1>
      <hr />
      <p>
        El servicio AudioVerse Premium está sujeto a los siguientes términos y
        condiciones, los cuales el usuario acepta al suscribirse. Este servicio
        está diseñado para proporcionar a los usuarios acceso a equipos de
        sonido de alta fidelidad, así como a soporte técnico especializado,
        garantías extendidas y la posibilidad de actualización de equipos.
      </p>
      <ol>
        <li>
          Duración del servicio: La suscripción a AudioVerse Premium tiene una
          vigencia mensual, renovándose automáticamente salvo que el usuario
          decida cancelarla. El usuario puede cancelar su suscripción en
          cualquier momento sin penalización alguna. La cancelación de la
          suscripción implica la finalización de los servicios adicionales,
          incluida la garantía extendida y el soporte técnico especializado.
        </li>
        <li>
          Garantía del equipo: La garantía está limitada a los productos
          proporcionados bajo el servicio AudioVerse Premium y está sujeta a los
          términos específicos de cada equipo. Esta garantía cubre defectos de
          fabricación y problemas técnicos derivados del uso normal del equipo.
          No cubre daños causados por mal uso, accidentes, modificaciones no
          autorizadas o intervenciones de terceros no aprobados por AudioVerse.
        </li>
        <li>
          Actualización de equipos: Los usuarios de AudioVerse Premium tienen
          derecho a una actualización de su equipo cada tres años. Esta
          actualización es opcional, y el usuario puede optar por conservar su
          equipo actual. AudioVerse se reserva el derecho de ofrecer equipos de
          características similares en caso de que el modelo exacto no esté
          disponible al momento de la actualización.
        </li>
        <li>
          Soporte técnico: El soporte técnico está disponible dentro del horario
          de atención especificado en la descripción del servicio. Los problemas
          técnicos que no puedan resolverse de manera remota podrían derivar en
          la sustitución del equipo por uno nuevo, siempre que el equipo esté
          dentro del período de garantía y la suscripción permanezca activa.
        </li>
        <li>
          Propiedad del equipo: Durante el período de suscripción, el equipo
          sigue siendo propiedad de AudioVerse. Si el usuario decide finalizar
          su suscripción, deberá devolver el equipo o podrá optar por adquirirlo
          de manera definitiva.
        </li>
      </ol>
    </div>
  );
}
export default LandingDisclaimers;
