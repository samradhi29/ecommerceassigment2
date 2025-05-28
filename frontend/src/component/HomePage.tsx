
import Navbar from './Navbar';
import Hero from './Hero';
import HeroVideo from './HeroVideo';
import DescriptionCTA from './DescriptionCTA';
import ProductDetail from './ProductDetail';
import Reviews from './Reviews';
import InfoPage from './InfoPage';
import Footer from './Footer';
import MediaGrid from './MediaGrid';
export default function HomePage() {
  return (
    <div className="bg-[#090808] ">
      <Navbar showButton />
      <Hero />
      <HeroVideo />
      <DescriptionCTA />
<MediaGrid/>    
      <ProductDetail />

      <InfoPage />
      <Reviews />
      <Footer />
    </div>
  );
}
