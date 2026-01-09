/*import "./Hero.css"

import heroVideo from "../../assets/hero/hero-video.webm"
import logo from "../../assets/hero/logo.webp"
import titleGroup from "../../assets/hero/hero-title-group.webp"

const Hero = () => {
  return (
    <section className="hero">
      <video
        className="hero-video"
        src={heroVideo}
        autoPlay
        loop
        muted
        playsInline
      />

      <div className="hero-overlay" />

      {/* Logo *//*}
      <img src={logo} alt="Logo" className="hero-logo" />

      {/* Grupo de textos *//*}
      <img
        src={titleGroup}
        alt="Marcos y Naty Wedding"
        className="hero-title-group"
      />
    </section>
  )
}

export default Hero*/

import { useEffect, useRef } from "react" // 1. Importar hooks
import "./Hero.css"
import heroVideo from "../../assets/hero/hero-video.webm"
import logo from "../../assets/hero/logo.webp"
import titleGroup from "../../assets/hero/hero-title-group.webp"

const Hero = () => {
  // 2. Crear una referencia al elemento de video
  const videoRef = useRef<HTMLVideoElement>(null);

  /*useEffect(() => {
    // 3. Forzar el play cuando el componente cargue
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.error("El autoplay fue bloqueado por el navegador:", error);
      });
    }
  }, []);*/

  useEffect(() => {
    if (videoRef.current) {
      // Forzamos el mute explícitamente por código
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      
      // Intentamos reproducir
      const promise = videoRef.current.play();
      if (promise !== undefined) {
        promise.catch(error => {
          // AUTO-DETECCIÓN DEL ERROR
          console.log("Error de reproducción:", error.name);
          // Si sale "NotAllowedError", es bloqueo del navegador
        });
      }
    }
  }, []);

  return (
    <section className="hero">
      <video
        ref={videoRef} // 4. Asignar la referencia
        className="hero-video"
        src={heroVideo}
        autoPlay
        loop
        muted
        playsInline
        preload="auto" // Sugerencia extra para que cargue antes
      />

      <div className="hero-overlay" />

      {/* Resto de tu código igual... */}
      <img src={logo} alt="Logo" className="hero-logo" />
      <img src={titleGroup} alt="Marcos y Naty Wedding" className="hero-title-group" />
    </section>
  )
}

export default Hero