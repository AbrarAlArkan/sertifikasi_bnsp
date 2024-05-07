import styles from "./hero.module.css";
import covidPhoto from '../../assets/poto.jpeg'

function Hero() {
    return (
        <div className={styles.container}>
            <section className={styles.hero}>
                <div className={styles.hero__left}>
                    <h2 className={styles.hero__title}>Covid Id</h2>
                    <h3 className={styles.hero__genre}> 
                        Monitoring Perkembangan Covid
                    </h3>
                    <p className={styles.hero__description}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum excepturi maiores accusantium dolorem rerum ipsum molestiae eaque dicta unde temporibus facilis, nostrum asperiores molestias beatae earum, eos quibusdam doloribus praesentium.
                        </p>
                    <button className={styles.hero__button}>Vaccine</button>
                </div>
                <div className={styles.hero__right}>
                    <img 
                    className={styles.hero__image}
                    src={covidPhoto}
                    alt="placeholder"
                    />
                </div>
            </section>
        </div>
    );
}

export default Hero;