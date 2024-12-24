import HeroStyled from './HeroStyled';
import covidPhoto from '../../assets/download.png';

function Hero() {
    return (
        <HeroStyled>
            <section className="hero">
                <div className="hero__left">
                    <header>
                        <h2 className="hero__title">Technova</h2>
                        <h3 className="hero__genre">Monitoring Perkembangan Teknologi</h3>
                    </header>
                    <p className="hero__description">
                    Di tengah derasnya arus perubahan, TechNova berdiri tegak sebagai wadah kreativitas dan inovasi. Kami memahami bahwa teknologi bukan hanya tentang perangkat dan sistem, tetapi tentang bagaimana kita dapat menggunakannya untuk membuat dunia menjadi tempat yang lebih baik. Setiap ide yang lahir di sini adalah benih perubahan yang akan tumbuh menjadi solusi masa depan.
                    </p>
                    <button 
                        className="hero__button" 
                        onClick={() => alert('Navigating to Vaccine Information')}>
                        Vaccine
                    </button>
                </div>
                <div className="hero__right">
                    <img 
                        className="hero__image"
                        src={covidPhoto}
                        alt="Monitoring perkembangan Covid dengan Technova"
                    />
                </div>
            </section>
        </HeroStyled>
    );
}

export default Hero;
