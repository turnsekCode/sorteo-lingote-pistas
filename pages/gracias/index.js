import React from "react";
import styles from "./gracias.module.css";
import Image from "next/image";

const Gracias = () => {
  return (
    <>
      <div className={styles.cabecera}>
        <Image
          src="/assets/logo.png"
          alt="Fondo"
          className={styles.imagenLogo}
          width={163}
          height={30}
          priority
        />
      </div>
      <main className={styles.contenedorMain}>
        <div className={styles.contenedor}>
          <div className={styles.tituloGracias}>
            <h2>¡GRACIAS!</h2>
          </div>
          <Image
            src="/assets/imagenPersonasGracias.png"
            alt="Fondo"
            className={styles.imagenPersonas}
            width={341}
            height={427}
            priority
          />

          <div className={styles.contenedorTexto}>
            <p>
              Hemos recibido correctamente tus datos y el resultado de las
              pistas.
            </p>
            <p>
              Permanece atent@ a nuestro{" "}
              <span className={styles.linea}>Instagram</span>, en breve
              anunciaremos el ganador o ganadora.
            </p>
            <a href="https://www.instagram.com/quickgold.es/">
              <Image
                src="/assets/imagenInstagram.png"
                alt="Fondo"
                className={styles.imagenInstagram}
                width={173}
                height={58}
                priority
              />
            </a>
          </div>
        </div>
      </main>
      <div className={styles.footer}> </div>
    </>
  );
};

export default Gracias;
