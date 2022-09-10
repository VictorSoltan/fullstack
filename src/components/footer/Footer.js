import './Footer.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faAppStore,
    faGooglePlay,
    faFacebook,
    faTwitter,
    faViber,
    faYoutube,
    faInstagram,
    faGooglePay,
    faApplePay,
    faCcVisa,
    faCcMastercard
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <div className="footerContainer">
            <div className="footerApplication">
                <h2 className="h11"><strong>Встановлюй додаток!</strong></h2>
                <div className="divWithBrands">
                    <FontAwesomeIcon icon={faGooglePlay} className="img"/>
                    <FontAwesomeIcon icon={faAppStore} className="img"/>
                </div>
            </div>
            <div style={{"display": 'flex', "margin-left": "15px", "grid-column-gap": "210px"}}>
                <img src="/src/redux/images.png" alt="logo"/>
                <div style={{"position": "absolute", "right": "60px", "margin-top": "10px"}}>
                    <h2 className="h22"><strong>Категории</strong></h2>
                    <ul>
                        <li>Laptops</li>
                        <li>Phones</li>
                        <li>Electronics</li>
                    </ul>
                </div>
                <div>
                    <h1 className="h111">Контакти</h1>
                    <h2 className="h22"><strong>044 502 70 20</strong></h2>
                    <p>Оформити замовлення
                        9:00 - 21:00</p>
                    <h2 className="h22"><strong>044 502 70 20</strong></h2>
                    <p>Служба підтримки
                        9:00 - 21:00</p>
                </div>
                <div>
                    <h1 className="h111">Новинки</h1>
                    <p>iPhone 13</p>
                    <p>iPhone 12</p>
                    <p>iPhone 11</p>
                    <p>iPad Mini</p>
                    <p>iPad Pro</p>
                    <p>AirPods</p>
                </div>
            </div>
            <div className="divThirdFooter">
                <FontAwesomeIcon icon={faFacebook} className="img"/>
                <FontAwesomeIcon icon={faYoutube} className="img"/>
                <FontAwesomeIcon icon={faInstagram} className="img"/>
                <FontAwesomeIcon icon={faTwitter} className="img"/>
                <FontAwesomeIcon icon={faViber} className="img"/>

                <div className="divWithSocialNetworks">
                    <FontAwesomeIcon icon={faGooglePay} className="img"/>
                    <FontAwesomeIcon icon={faApplePay} className="img"/>
                    <FontAwesomeIcon icon={faCcMastercard} className="img"/>
                    <FontAwesomeIcon icon={faCcVisa} className="img"/>
                </div>
            </div>
        </div>
    )
}

export {Footer};
