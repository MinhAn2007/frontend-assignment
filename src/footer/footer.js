import LogoMIT from '/mit-logo white.svg';
import './style.css';

const Footer = () => {
    return `
        <div class="footer-container">
            <div class="footer-content">
                <div class="footer-content-top-left">
                    <h3>The latest iteration of a legacy</h3>
                    <span>
                        Founded at the Massachusetts Institute of Technology in 1899, MIT Technology Review is a world-renowned, independent media company whose insight, analysis, reviews, interviews and live events explain the newest technologies and their commercial, social and political impact.
                    </span>
                    <br/><br/>
                    <button>
                        READ MORE ABOUT OUR HISTORY
                    </button>
                </div>
                <div class="footer-content-top-right">
                    <h3>Advertise with MIT Technology Review</h3>
                    <span>
                        Elevate your brand to the forefront of conversation around emerging technologies that are radically transforming business. From event sponsorships to custom content to visually arresting video storytelling, advertising with MIT Technology Review creates opportunities for your brand to resonate with an unmatched audience of technology and business elite.
                    </span>
                    <br/><br/>
                    <button>
                        ADVERTISE WITH US
                    </button>
                </div>
            </div>
            <div class="footer-content">
                <div class="footer-content-bottom-left">
                    <div class="logo">
                        <img src="${LogoMIT}" alt="Vite logo" />
                    </div>
                    <h4>© 2025 MIT Technology Review</h4>
                </div>
                <div class="footer-content-bottom-right">
                    <ul class="footer-columns">
                        <li>About us</li>
                        <li>Careers</li>
                        <li>Custom content</li>
                        <li>Advertise with us</li>
                        <li>International Editions</li>
                        <li>Republishing</li>
                        <li>MIT Alumni News</li>
                        <li>Help & FAQ</li>
                        <li>My subscription</li>
                        <li>Editorial guidelines</li>
                        <li>Privacy policy</li>
                        <li>Terms of Service</li>
                        <li>Write for us</li>
                        <li>Contact us</li>
                    </ul>
                </div>
            </div>
        </div>
    `;
}

export default Footer;
