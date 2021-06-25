import "./App.css";
import Header from "./components/Header";
import ImageSlider from "./components/ImageSlider";
import ProductCategory from "./components/ProductCategory";

const App = () => {
  return (
    <div>
      <Header />
      <ImageSlider />
      <div className="container">
        <ProductCategory />
        <h2>Hamro Furnuture</h2>
      </div>
    </div>
  );
};

export default App;
