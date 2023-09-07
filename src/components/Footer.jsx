import React from 'react'
import '../index.css'

function Footer() {
  return (
    <div className='orange-violet-gradient'>
        <footer>
            <div>
                <h2 className='blue-text-gradient'>Sobre AVANT</h2>
                <ul>
                    <li>Historia</li>
                    <li>Protección de datos</li>
                    <li>Cookies</li>
                </ul>
            </div>
            <div>
                <h2 className='blue-text-gradient'>Únete al proyecto</h2>
                <ul>
                    <li>Desarrolla tu creatividad</li>
                </ul>
            </div>
            <div>
                <h2 className='blue-text-gradient'>¡Sígueme! :)</h2>
                <ul>
                    <li><a href="" target="_blank"><i className="fa fa-facebook" aria-hidden="true"></i> Facebook</a></li>
                    <li><a href="https://instagram.com/b.santi12/" target="_blank"><i className="fa fa-instagram blue-text-gradient" aria-hidden="true"></i> Instagram</a></li>
                </ul>
            </div>
        </footer>
        <footer className="color">
            <div>Developed by Santi</div>
            <div>Copyright 2023 © Every rigths reserved.</div>
        </footer>
    </div>
  )
}

export default Footer;