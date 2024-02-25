import { faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Hero() {
    return (
        <main>
            <div>
                <FontAwesomeIcon icon={faSun} className="sun" />
            </div>
            <h2>Астрология</h2>
        </main>
    );
}