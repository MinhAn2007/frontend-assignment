import "./style.css";

const AboutListContent = () => {
  return `
        <div class="about-list">
            <h2>10 Breakthrough Technologies</h2>
            <div class="about-list-content">
                <p>
                    Every year, the reporters and editors at MIT Technology Review survey the tech landscape and pick 10 technologies that we think have the greatest potential to change our lives in the years ahead. We consider advances in every field, from biotechnology and artificial intelligence to computing, robotics, and climate tech. This is the 23rd year we’ve published this list.
                    <span class="underline">Here’s what didn’t make the cut</span>
                </p>
                <br/>
                <h4 class="underline">Explore the archive <i class="fas fa-arrow-right"></i></h4>
                <br/><br/>
                <h3>CREDITS</h3>
                <span class="bold">Editorial</span>
                <span>Special projects editor: Amy Nordrum</span>
                <span>Copy editing: Linda Lowenthal</span>
                <span>Engagement: Juliet Beauchamp, Abby Ivory-Ganja</span>
                <span>Fact checking: Helen Li</span>
                <br/>
                <span class="bold">Art</span>
                <span>Art direction: Stephanie Arnett</span>
                <span>Illustration: Simoul Alva, Jennifer Dionisio, Simon Landrein</span>
                <br/>
                <span class="bold">Technology</span>
                <span>Lead developer: Andre Vitorio</span>
                <span>Design: Vichhika Tep, Mariya Sitnova</span>
                <span>Product: Mariya Sitnova, Allison Chase</span>
                <span>CTO: Drake Martinet</span>
            </div>
        </div>
    `;
};

export default AboutListContent;
