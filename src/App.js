import "./App.css";
import Header from "./components/Header";
import ImageSlider from "./components/ImageSlider";
import ProductCategoryOne from "./components/ProductCategoryOne";

const App = () => {
  return (
    <div>
      <Header />
      <ImageSlider />
      <div className="container">
        <ProductCategoryOne />
        <h2>Hamro Furnuture</h2>
      </div>
    </div>
  );
};

export default App;
