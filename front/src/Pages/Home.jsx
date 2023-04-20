import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'
import Home from '../Components/Home/Home'
import Banner from '../Components/Banner/Banner';
import background from '../Assets/BannerHome.jpg'

function HomePage() {
  return (
    <>
      <Header />
      <Banner img={background} alt="Femme dans un parking" text="Libérez-vous du stress de la recherche de place grâce à Parko" />
      <Home />
      <Footer />
    </>
  );
}

export default HomePage;
