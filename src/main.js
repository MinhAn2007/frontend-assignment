import './style.css'
import Navigation from './navigation/navigation';
import Cover from './cover/cover';
import MainContent from './main-content/main-content';
import AboutListContent from './about-list-content/about-list-content';
import Footer from './footer/footer';
import WelcomeModal from './modal/modal';

document.querySelector('#app').innerHTML = `
  ${WelcomeModal()}
  <header class="padded-container">
    ${Navigation()}
  </header>
  <section>
    ${Cover()}
  </section>
  <section>
    ${MainContent()}
  </section>
  <section>
    ${AboutListContent()}
  </section>
  <footer class="padded-container">
    ${Footer()}
  </footer>
`