import React from 'react'
import './Header.css'

const Header = () => {
    return (
        <header className="header">
            <nav className="nav container">
                <a href="index.html" className="nav__logo">KenRatchapon</a>
                <div className="nav__menu">
                    <ul className="nav__list grid">
                        <li className="nav__link">
                            <a href="#home" className="nav__link active-link">
                                <i className="uil uil-estate nav__icon"></i>
                                Home
                            </a>
                        </li>

                        <li className="nav__link">
                            <a href="#about" className="nav__link">
                                <i class="uil uil-user-square nav__icon"></i>
                                About
                            </a>
                        </li>

                        <li className="nav__link">
                            <a href="skills" className="nav__link">
                                <i class="uil uil-book-open nav__icon"></i>
                                Skills
                            </a>
                        </li>

                        <li className="nav__link">
                            <a href="#qualification" className="nav__link">
                                <i class="uil uil-graduation-cap nav__icon"></i>
                                Qualification
                            </a>
                        </li>

                        <li className="nav__link">
                            <a href="#myworks" className="nav__link">
                                <i class="uil uil-scenery nav__icon"></i>
                                My works
                            </a>
                        </li>

                        <li className="nav__link">
                            <a href="#contact" className="nav__link">
                                <i class="uil uil-message nav__icon"></i>
                                Contact
                            </a>
                        </li>
                    </ul>
                    <i class="uil uil-times nav__close nav__icon"></i>
                </div>
                <div className="nav__toggle">
                    <i class="uil uil-apps nav__icon"></i>
                </div>
            </nav>
        </header>
    )
}

export default Header