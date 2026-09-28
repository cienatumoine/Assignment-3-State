import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductCard from './components/ProductCard';
import Footer from './components/Footer';

function App() {
  return (
    
    <div className="app">

      <Header storeName="School Supplies"/>

      <Hero
        heroTitle={
          <>
            Welcome to <br />
            ComponentCorner
          </>
        }
        heroPara="Your one stop shop for all your back to school needs."
        heroButton = "Shop now"
        image = "https://placehold.co/1200x400/667eea/ffffff?text"
      />

      <ProductCard
        name="Pencil"
        price={0.99}
        image="https://placehold.co/600x400"
        description="Sharpened lead writing utinsil with eraser."
      />

      <ProductCard
        name="Pen"
        price={1.29}
        image="https://placehold.co/600x400"
        description="Ink powered clickable writing utinsil."
      />

      <ProductCard
        name="Paper"
        price={0.33}
        image="https://placehold.co/600x400"
        description="8x11 flat white construction paper to write on."
      />
      
      <Footer
        title = "ComponentCorner"
        storeName = "Back to School Supplies"
        storeEmail = "componentcorner@gmail.com"
        storePhone = "567.458.5454"
        storeLocation = "564 Walter St, Eugene, OR"

      />

    </div>
  );
}

export default App;