import Hero from './components/Hero';
import Services from './components/Services';
import Reviews from './components/Reviews';
import Meta from '../../components/Meta';

const Home = () => {
  return (
    <div>
      <Meta title="VersiMarket | Home" description="Web-based Services Marketplace for Web Design, Development, Mobile Apps and Data Analytics" />
      <Hero />
      <Services />
      <Reviews />
    </div>
  );
}

export default Home;
