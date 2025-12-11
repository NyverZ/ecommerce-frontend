import { HeroSection } from "../components/HeroSection";
import { RecomendedProductsSection } from "../components/RecomendedProductsSection";

const HomePage = () => {
  return (
    <div className="space-y-16 ">
      <HeroSection />
      <RecomendedProductsSection />
    </div>
  );
};
export default HomePage;
