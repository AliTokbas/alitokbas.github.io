
import './Navbar.css';
import { Link } from 'react-router-dom';


function Navbar() {
  return (
    <nav>
      <div class="navbar clearfix">
        <div id="logo-box">
          <a to="/" class="logo" >RentAli</a>
        </div>
        <div id="nav-links" class="responsive">
          <ul>
            <li class="nav-item nav-icon">
              <a href="" class="nav-link">
                <i class="fas fa-bars"></i>
              </a>
            </li>
            <li class="nav-item">
              <Link to="/" class="nav-link">Anasayfa</Link>
            </li>
            <li class="nav-item">
              <a href="" class="nav-link">Kiralama Şartları</a>
            </li>
            <li class="nav-item">
              <a href="#iletisim" class="nav-link">İletişim</a>
            </li>
            <li class="nav-item">
              <a href="" class="nav-link">Hakkımızda</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

  );
}

export default Navbar;
