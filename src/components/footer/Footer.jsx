import React from 'react'
import './footer.css'
import { FaFacebookF } from 'react-icons/fa'
import { FaLinkedinIn } from 'react-icons/fa'
import { FaGithubAlt } from 'react-icons/fa'
import { AiOutlineYoutube } from 'react-icons/ai'
import { AiOutlineSkype } from 'react-icons/ai'
import { RiDiscordLine } from 'react-icons/ri'
import { ImBlogger2 } from 'react-icons/im'
/**
 * Thêm link tại footer dòng 26
 * <li><a href="#testimonials">Testimonials</a></li>
 */

const Footer = () => {
    return (
        <footer>
            <a href="#" className='footer__logo'>ARVIND</a>

            <ul className='permalinks'>
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#portfolio">Portfolio</a></li>

                <li><a href="#contact">Contact</a></li>
            </ul>

            <div className="footer__socials">
                <a href="https://www.facebook.com/"><FaFacebookF /></a>        {/* #should keep */}
                <a href="https://www.youtube.com/channel/"><AiOutlineYoutube /></a >     {/* #should keep */}
                <a href="https://www.linkedin.com/in/arvind-sai-dooda/"><FaLinkedinIn /></a>
                <a href="https://github.com/Arvindsai-lu"><FaGithubAlt /></a>
                <a href="http://Arvindsai-lu.github.io/"><ImBlogger2 /></a >
                <a href="https://discord.com/invite/BygnxeAV"><RiDiscordLine /></a >
            </div >

            <div className="footer__copyright">
                <small>&copy; <b><a href="https://www.linkedin.com/in/arvind-sai-dooda/">Arvind</a></b>. All rights reserved.</small>
            </div>
        </footer >
    )
}

export default Footer