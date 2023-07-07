import { Link } from "react-router-dom"
import './Anasayfa.css';
import klasik from './img/klasik.png';
import suv from './img/suv.png';
import sedan from './img/sedan.png';
import spor from './img/spor.png';


function Anasayfa() {
    return (
        <div>
        <header>
        <div class="bg-image"></div>
        <div class="content">
            <h1>Ali RENT A CAR @alirentacar</h1>
            <p> Hayalinizdeki Arabayı Deneyin</p>
            <button className="btn outline"><a href="#baslik" >Araç Kirala</a></button>
        </div>
    </header>
    <div id="baslik">
        <h1>Araç Filomuz</h1>
        <hr></hr>
    </div>
    <section>


        <div class="container">
            <div class="wrapper">
                <div class="banner-image"> </div>
                <img src={suv} alt=""></img>
                <h1> SUV Araçlar</h1>
                <p>Lorem ipsum dolor sit amet, <br />
                    consectetur adipiscing elit.</p>
            </div>
            <div class="button-wrapper">
                <Link to="/suv">
                    <button class="btn outline">Araçları Gör</button>
                </Link>
            </div>
        </div>
        <div class="container">
            <div class="wrapper">
                <div class="banner-image"> </div>
                <img src={klasik} alt="" />
                <h1> Klasik Araçlar</h1>
                <p>Lorem ipsum dolor sit amet, <br />
                    consectetur adipiscing elit.</p>
            </div>
            <div class="button-wrapper">
            <Link to="/klasik">
                    <button class="btn outline">Araçları Gör</button>
                </Link>

            </div>
        </div>
        <div class="container">
            <div class="wrapper">
                <div class="banner-image"> </div>
                <img src={sedan} alt=""></img>
                <h1> Sedan Araçlar</h1>
                <p>Lorem ipsum dolor sit amet, <br />
                    consectetur adipiscing elit.</p>
            </div>
            <div class="button-wrapper">
            <Link to="/sedan">
                    <button class="btn outline">Araçları Gör</button>
                </Link>

            </div>
        </div>
        <div class="container">
            <div class="wrapper">
                <div class="banner-image"> </div>
                <img src={spor} alt=""></img>
                <h1> Spor Araçlar</h1>
                <p>Lorem ipsum dolor sit amet, <br />
                    consectetur adipiscing elit.</p>
            </div>
            <div class="button-wrapper">
            <Link to="/spor">
                    <button class="btn outline">Araçları Gör</button>
                </Link>

            </div>
        </div>





    </section>
    </div>
  
    );
  }
  
  export default Anasayfa;