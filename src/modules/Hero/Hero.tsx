import { useEffect, useRef, useState } from "react"
import "./Hero.css"

// Importa tus recursos
import heroVideoWebm from "../../assets/hero/hero-video.webm"
import heroVideoMp4 from "../../assets/hero/hero-video.mp4"
import heroPoster from "../../assets/hero/hero-poster.webp"
import logo from "../../assets/hero/logo.webp"
import titleGroup from "../../assets/hero/hero-title-group.webp"

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  // Estado para rastrear si el video realmente se está reproduciendo
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.defaultMuted = true;
      video.muted = true;
      
      // Intentamos reproducir el video
      video.play()
        .then(() => {
          // Si tiene éxito, marcamos como reproduciendo
          setIsVideoPlaying(true);
        })
        .catch((error) => {
          // Si falla (ahorro de energía), mantenemos el estado en false
          console.warn("Autoplay impedido por el sistema, usando imagen fija:", error.name);
          setIsVideoPlaying(false);
        });
    }
  }, []);

  return (
    <section 
      className="hero"
      style={{
        // Si el video falla, la sección muestra el poster de fondo por CSS
        backgroundImage: !isVideoPlaying ? `url(${heroPoster})` : 'none',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundColor: '#000' // Fondo negro por si la imagen tarda
      }}
    >
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
        poster={heroPoster}
        style={{ 
          // Si NO está reproduciendo, ocultamos el video por completo (opacity 0)
          // Esto hace que el botón de Play que pone el sistema también desaparezca
          opacity: isVideoPlaying ? 1 : 0,
          transition: "opacity 0.8s ease-in-out", // Transición suave al aparecer
          pointerEvents: "none" // Evita que clicks accidentales activen controles
        }}
      >
        <source src={heroVideoWebm} type="video/webm" />
        <source src={heroVideoMp4} type="video/mp4" />
        Tu navegador no soporta videos integrados.
      </video>

      {/* Overlay oscuro para mantener legibilidad */}
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