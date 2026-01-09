import "./Hero.css"

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
