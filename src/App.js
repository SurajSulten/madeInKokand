import About from "./layouts/about/About";
import B2bSoution from "./layouts/b2bSolution/B2bSoution";
import Contact from "./layouts/contact/Contact";
import FAQ from "./layouts/faq/FAQ";
import Footer from "./layouts/footer/Footer";
import Header from "./layouts/header/Header";
import Hero from "./layouts/hero/Hero";
import NewProduct from "./layouts/newProduct/NewProduct";
import PopularProduct from "./layouts/popularProduct/PopularProduct";
import ProductCategory from "./layouts/productCategory/ProductCategory";
import ProductSearch from "./layouts/productSearch/ProductSearch";
import Trust from "./layouts/trust/Trust";
import Useful from "./layouts/useful/Useful";
import WhyMadeInKokand from "./layouts/whyMadeInKokand/WhyMadeInKokand";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <B2bSoution />
      <About />
      <Trust />
      <NewProduct />
      <PopularProduct />
      <ProductCategory />
      <WhyMadeInKokand />
      <ProductSearch />
      <FAQ />
      <Useful />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
