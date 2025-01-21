import tech1 from '/tech-1.webp';
import tech2 from '/tech-2.webp';
import tech4 from '/tech-4.webp';
import tech5 from '/tech-5.webp';
import tech7 from '/tech-7.webp';

import './style.css';

const MainContent = () => `
<div class="main-content">
    <div class="numbers-wrapper">
        <hr/>
        <div class="numbers">
            <span data-index="1">1</span>
            <span data-index="2">2</span>
            <span data-index="3">3</span>
            <span data-index="4">4</span>
            <span data-index="5">5</span>
        </div>
    </div>
    <div class="container">
        <div class="section-content"></div>
        <div class="section-image" id="section-image">
            <div class="section-image-scroll">
                <img src="${tech1}" class="logo-horizontal" alt="MIT logo" data-index="1"/>
                <img src="${tech2}" class="logo-horizontal" alt="MIT logo" data-index="2"/>
                <img src="${tech4}" class="logo-horizontal" alt="MIT logo" data-index="4"/>
                <img src="${tech5}" class="logo-horizontal" alt="MIT logo" data-index="5"/>
                <img src="${tech7}" class="logo-horizontal" alt="MIT logo" data-index="6"/>
            </div>
        </div>
    </div>
</div>
`;

document.addEventListener('DOMContentLoaded', function() {
    const imageWrapper = document.getElementById('section-image');
    const imageScrollItems = document.querySelectorAll('.section-image-scroll img');
    const numberItems = document.querySelectorAll('.numbers span');
    const sectionContent = document.querySelector('.section-content');
    const contentData = [
        { id: 1, title: 'AI for everything', content: 'Every year, we look for promising technologies poised to have a real impact on the world. Here are the advances that we think matter most right now.' },
        { id: 2, title: 'Super-efficient solar cells', content: 'A new approach to cancer treatment is using vaccines made from patients own cells.' },
        { id: 3, title: 'Apple Vision Pro', content: 'A startup is developing a contact lens with a built-in display.' },
        { id: 4, title: 'Weight-loss drugs', content: 'Machine learning is speeding up the search for new drugs.' },
        { id: 5, title: 'Enhanced geothermal systems', content: 'A new chip design could make it easier to build quantum computers.' },
    ];

    numberItems.forEach((number, index) => {
        number.addEventListener('click', () => {
            const targetImage = imageScrollItems[index];
            if (targetImage) {
                targetImage.scrollIntoView({ behavior: 'smooth' });
            }
            
            sectionContent.innerHTML = `
                <h3>${contentData[index].title}</h3>
                <p>${contentData[index].content}</p>
            `;
            
            numberItems.forEach(num => num.classList.remove('active'));
            number.classList.add('active');
        });
    });

    if (imageWrapper) {
        imageWrapper.addEventListener('scroll', function() {
            let currentIndex = 0;
            imageScrollItems.forEach((image, index) => {
                const imageRect = image.getBoundingClientRect();
                const wrapperRect = imageWrapper.getBoundingClientRect();
                
                if (imageRect.top >= wrapperRect.top && imageRect.top <= wrapperRect.bottom) {
                    currentIndex = index;
                }
            });
            
            numberItems.forEach((number, index) => {
                if (index === currentIndex) {
                    number.classList.add('active');
                    sectionContent.innerHTML = `
                        <h3>${contentData[index].title}</h3>
                        <p>${contentData[index].content}</p>
                    `;
                } else {
                    number.classList.remove('active');
                }
            });

            if (currentIndex === -1) {
                sectionContent.innerHTML = `
                    <h3>${contentData[0].title}</h3>
                    <p>${contentData[0].content}</p>
                `;
            }
        });

        sectionContent.innerHTML = `
            <h3>${contentData[0].title}</h3>
            <p>${contentData[0].content}</p>
        `;
    }
});

export default MainContent;