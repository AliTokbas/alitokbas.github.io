import './footer.css';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        
            <div id="iletisim" className="iletisim">
                <h1>İletişim Bilgilerimiz</h1>
                <hr></hr>

                    <a to=""><i className="fa-sharp fa-solid fa-location-dot" ></i> Merkez/Antalya</a>
                    <a to=""><i className="fa-solid fa-phone" ></i> +90 5** *** ****</a>
                    <a to=""><i className="fa-solid fa-at" ></i> ***********@gmail.com</a>

            </div>
        
    );
}

export default Footer;