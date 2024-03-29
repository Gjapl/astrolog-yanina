import { faTelegram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faBars, faMoon, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

export function Header() {
    const navRef: any = useRef(null);

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }

    return (
        <header>
            <HashLink to="/astrolog-yanina/#" className="link">
                <h2>
                    <span>
                        <FontAwesomeIcon icon={faMoon} className="moon" />
                    </span>
                    Янина Степанян
                </h2>
            </HashLink>
            <nav ref={navRef}>
                <ul className="nav-menu">
                    <li><HashLink to="/astrolog-yanina/#information" className="link" onClick={showNavbar}>Обо мне</HashLink></li>
                    <li><HashLink to="/astrolog-yanina/#services" className="link" onClick={showNavbar}>Услуги и цены</HashLink></li>
                    <li className="close"><FontAwesomeIcon icon={faTimes} onClick={showNavbar}/></li>
                </ul>
            </nav>
            <button className="nav-open-btn" onClick={showNavbar}>
                <FontAwesomeIcon icon={faBars} />
            </button>
            <div className="contacts">
                <h3>Контакты</h3>
                <ul className="contact-list">
                    <li>
                        <Link to="https://api.whatsapp.com/send/?phone=79258770491" target="_blank" className="link">
                            <FontAwesomeIcon icon={faWhatsapp} className="wp icon" />
                        </Link>
                    </li>
                    <li>
                        <Link to="https://t.me/+79258770491" target="_blank" className="link">
                            <FontAwesomeIcon icon={faTelegram} className="tg icon" />
                        </Link>
                    </li>
                </ul>
            </div>
        </header>
    );
}