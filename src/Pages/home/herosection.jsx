export default function herosection() {
    return (
        <section id="herosection" className="hero--section">
           <div className="hero--section--content--box">
            <div className="hero--section--content">
                <p className="section--title">Hey, I'm Fahad</p>
                <h1 className="hero--section--title">
                    <span className="hero--section-title--color">
                        Full Stack 
                    </span>
                    {" "} <br />
                    Developer
                </h1>
                <p className="hero--section-description">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur nemo eaque quas.
                    <br />Lorem ipsum dolor sit amet consectetur adipisicing.
                </p>
            </div>
            <button className="btn btn-primary">Get In Touch</button>
            </div> 
            <div className="hero--section--img">
                <img src="./img/hero_img.png" alt="Hero Section" />
            </div>
        </section>
    );
} 