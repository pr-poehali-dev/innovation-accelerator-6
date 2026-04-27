import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Featured from "@/components/Featured";
import Promo from "@/components/Promo";
import Books from "@/components/Books";
import Food from "@/components/Food";
import Clothing from "@/components/Clothing";
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
      <Footer />
    </main>
  );
};

export default Index;