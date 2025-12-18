import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import ProductGallery from './components/ProductGallery';
import Calculator from './components/Calculator';
import Projects from './components/Projects';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="bg-light-gray font-body text-charcoal-black">
      <Header />
      <main>
        <Hero />
        <Features />
        <ProductGallery />
        <Calculator />
        <Projects />
      </main>
      <Footer />
    </div>
  );
};

export default App;
