import LogoMIT from '/tr10-hero_mf79db_c_scale,w_1700.webp';
import LogoMITHorizontal from '/mit-logo-horizontal.svg';
import './style.css';

const Cover = () => `
    <div class="cover">
        <div class="cover-content">
            <div class="cover-image">
                <img src="${LogoMIT}" class="logo" alt="Vite logo" />
            </div>
            <div class="cover-text">
                <div class="cover-text-content">
                    <img src="${LogoMITHorizontal}" class="logo-horizontal" alt="MIT logo" />
                    <h3>10 Breakthrough Technologies <span>2024</span></h3>
                    <div class="social-icons">
                        <a href="https://www.facebook.com" class="facebook-icon">
                            <i class="fab fa-facebook"></i>
                        </a>
                        <a href="https://www.instagram.com" class="instagram-icon">
                            <i class="fab fa-instagram"></i>
                        </a>
                        <a href="https://www.twitter.com" class="twitter-icon">
                            <i class="fab fa-twitter"></i>
                        </a>
                    </div>
                </div>
                <div class="cover-text-footer">
                    <p>Every year, we look for promising technologies poised to have a real impact on the world. Here are the advances that we think matter most right now.</p>
                </div>
            </div>
        </div>
    </div>
`;

export default Cover;