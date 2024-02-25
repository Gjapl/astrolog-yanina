import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Footer() {
    return (
        <footer>
            <p className="copyright-text">© 2024 Все права защищены</p>
            <div><FontAwesomeIcon icon={faPhone} className="wp icon" />Телефон: <div>+7 925 877-04-91</div></div>
        </footer>
    );
}