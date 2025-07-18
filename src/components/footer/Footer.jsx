import React from 'react'
import './footer.css'
import { FaFacebookF } from 'react-icons/fa'
import { FaLinkedinIn } from 'react-icons/fa'
import { FaGithubAlt } from 'react-icons/fa'
import { AiOutlineYoutube } from 'react-icons/ai'
import { RiDiscordLine } from 'react-icons/ri'
import { ImBlogger2 } from 'react-icons/im'

const Footer = () => {
  return (
    <footer>
      <a href="#hero" className='footer__logo'>ARVIND</a> {/* Changed from # to #hero */}

      <ul className='permalinks'>
        <li><a href="#hero">Home</a></li> {/* Changed from # to #hero */}
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/" target="_blank" rel="noreferrer"><FaFacebookF /></a>
        <a href="https://www.youtube.com/channel/" target="_blank" rel="noreferrer"><AiOutlineYoutube /></a>
        <a href="https://www.linkedin.com/in/arvind-sai-dooda/" target="_blank" rel="noreferrer"><FaLinkedinIn /></a>
        <a href="https://github.com/Arvindsai-lu" target="_blank" rel="noreferrer"><FaGithubAlt /></a>
        <a href="http://Arvindsai-lu.github.io/" target="_blank" rel="noreferrer"><ImBlogger2 /></a>
        <a href="https://discord.com/invite/BygnxeAV" target="_blank" rel="noreferrer"><RiDiscordLine /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; <b><a href="https://www.linkedin.com/in/arvind-sai-dooda/" target="_blank" rel="noreferrer">Arvind</a></b>. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer
