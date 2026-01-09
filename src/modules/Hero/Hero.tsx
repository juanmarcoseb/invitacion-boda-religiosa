import { useEffect, useRef } from "react"
import "./Hero.css"

// Importa tus recursos
import heroVideoWebm from "../../assets/hero/hero-video.webm"
import heroVideoMp4 from "../../assets/hero/hero-video.mp4" // Nuevo MP4
import heroPoster from "../../assets/hero/hero-poster.webp" // La imagen fija
import logo from "../../assets/hero/logo.webp"
import titleGroup from "../../assets/hero/hero-title-group.webp"

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      // Forzar silencio para asegurar el autoplay
      video.defaultMuted = true;
      video.muted = true;
      
      // Intentar reproducir
      video.play().catch((error) => {
        // Si hay error (como ahorro de energía), el 'poster' se mostrará automáticamente
        console.warn("Autoplay bloqueado o fallido, mostrándose el poster:", error.name);
      });
    }
  }, []);

  return (
    <section className="hero">
      <video
        ref={videoRef}
        className="hero-video"
        autoPlay
        loop
        muted
        playsInline
        controls={false}
        disablePictureInPicture
        preload="auto"
        poster={heroPoster} // <--- 1. Aquí asignas la imagen de respaldo
      >
        {/* 2. El navegador intentará cargar primero el que considere mejor */}
        <source src={heroVideoWebm} type="video/webm" />
        <source src={heroVideoMp4} type="video/mp4" />
        
        Tu navegador no soporta videos integrados.
      </video>

      <div className="hero-overlay" />

      {/* Logo */}
      <img src={logo} alt="Logo" className="hero-logo" />

      {/* Grupo de textos */}
      <img
        src={titleGroup}
        alt="Marcos y Naty Wedding"
        className="hero-title-group"
      />
    </section>
  )
}

export default Hero