import "./App.css";
import Header from "./components/Header";
import ImageSlider from "./components/ImageSlider";

import { Container } from "@material-ui/core";

const App = () => {
  return (
    <div>
      <Header />
      <ImageSlider />
      <Container>
        <h2>Hamro Furnuture</h2>
      </Container>
    </div>
  );
};

export default App;
