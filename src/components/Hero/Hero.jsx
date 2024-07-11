import HeroStyled from './HeroStyled';
import covidPhoto from '../../assets/poto.jpeg'

function Hero() {
    return (
        <HeroStyled>
            <section className="hero">
                <div className="hero__left">
                    <h2 className="hero__title">Covid Id</h2>
                    <h3 className="hero__genre"> 
                        Monitoring Perkembangan Covid
                    </h3>
                    <p className="hero__description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum excepturi maiores accusantium dolorem rerum ipsum molestiae eaque dicta unde temporibus facilis, nostrum asperiores molestias beatae earum, eos quibusdam doloribus praesentium.
                        </p>
                    <button className="hero__button">Vaccine</button>
                </div>
                <div className="hero__right">
                    <img 
                    className="hero__image"
                    src={covidPhoto}
                    alt="placeholder"
                    />
                </div>
            </section>
            </HeroStyled>
    );
}

export default Hero;