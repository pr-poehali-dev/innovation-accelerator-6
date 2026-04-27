import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Featured from "@/components/Featured";
import Promo from "@/components/Promo";
import Books from "@/components/Books";
import Food from "@/components/Food";
import Clothing from "@/components/Clothing";
import Attractions from "@/components/Attractions";
import Hotels from "@/components/Hotels";
import Pools from "@/components/Pools";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Featured />
      <Promo />
      <Books />
      <Food />
      <Clothing />
      <Attractions />
      <Hotels />
      <Pools />
      <Footer />
    </main>
  );
};

export default Index;