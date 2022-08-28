import Header from "./components/navbar/Navbar";
import { BrowserRouter } from "react-router-dom";
import Routess from "./routes/Routes";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
        <Routess />

      </BrowserRouter>
    </div>
  );
}

export default App;
