import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import "./styles/reset.css";
import "./styles/App.css";

import Main from './components/Main.js';
import Header from './components/Header.js';


function App() {
  return (
    <div>
      <Header />
      <Main/>
    </div>
  );
}

export default App;
