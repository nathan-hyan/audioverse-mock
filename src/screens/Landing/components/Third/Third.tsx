import { Button } from "@components";
import styles from "./Third.module.scss";

function Third() {
  return (
    <div className={styles.container}>
      <h2>Redescubre tu sonido</h2>
      <p>
        {`AudioVerse es una marca innovadora que redefine tu experiencia
auditiva. Ofrecemos una línea de altavoces y DACs de alta calidad,
diseñados para brindar un sonido puro y envolvente. Con tecnología
avanzada y materiales de primera, nuestros productos están pensados
tanto para audiófilos exigentes como para quienes buscan mejorar su
día a día con un sonido excepcional. Descubre una nueva dimensión de
claridad y precisión sonora con AudioVerse.`}
      </p>
      <Button label="Conocer más" />
    </div>
  );
}
export default Third;
