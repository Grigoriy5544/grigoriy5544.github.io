import "./style.css"
import vk from "../../img/icons/vk.svg";
import gitHub from "../../img/icons/gitHub.svg";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__wrapper">
                    <ul className="social">
                        <li className="social__item"><a href="https://github.com/Grigoriy5544" target="_blank" rel="noreferrer"><img src={gitHub} alt="Link"/></a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
