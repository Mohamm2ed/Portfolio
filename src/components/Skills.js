import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  // const responsive = {
  //   superLargeDesktop: {
  //     // the naming can be any, depends on you.
  //     breakpoint: { max: 4000, min: 3000 },
  //     items: 5
  //   },
  //   desktop: {
  //     breakpoint: { max: 3000, min: 1024 },
  //     items: 3
  //   },
  //   tablet: {
  //     breakpoint: { max: 1024, min: 464 },
  //     items: 2
  //   },
  //   mobile: {
  //     breakpoint: { max: 464, min: 0 },
  //     items: 1
  //   }
  // };
// Configuration responsive pour le carrousel
const responsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 1024 }, items: 5 },
  desktop: { breakpoint: { max: 1024, min: 768 }, items: 3 },
  tablet: { breakpoint: { max: 768, min: 464 }, items: 2 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }
};

// Tableau d'objets pour les éléments du carrousel
const carouselItems = [
  { image: meter1, label: 'Web Development' },
  { image: meter2, label: 'Brand Identity' },
  { image: meter3, label: 'Logo Design' },
  { image: meter1, label: 'App Development' },
  { image: meter1, label: 'Full-Stack' }
];
  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn" style={{ backgroundColor: 'rgba(5, 5,60, 50)' }}>
                        <h2>Skills</h2>
                        <p>Passionate about computing and technology, I have developed a varied skill set covering web development, software solutions design and data analysis.<br></br> Each project I undertake is an opportunity to strengthen my skills and broaden my mastery of modern tools, in order to deliver innovative and effective solutions.<br></br> Discover below the key skills that enable me to meet technical challenges and transform ideas into concrete achievements.

Translated with DeepL.com (free version) </p>
                        {/* <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>Web Development</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5>Brand Identity</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5>Logo Design</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>App Development</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>Full-Stack</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5>Data Science</h5>
                            </div>
                        </Carousel> */}

<Carousel 
      responsive={responsive} 
      infinite={true} 
      autoPlay={true} 
      autoPlaySpeed={1500}  // Temps en millisecondes (2 secondes)
      className="owl-carousel owl-theme skill-slider"
    >
      {carouselItems.map((item, index) => (
        <div className="item" key={index}>
          <img src={item.image} alt="Image" />
          <h5>{item.label}</h5>
        </div>
      ))}
    </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
