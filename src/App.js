import { BrowserRouter } from "react-router-dom";
import "./App.css";
import LayoutPage from "./layout";

function App() {
  return (
    <BrowserRouter>
      <LayoutPage>
        <p>ini konten</p>
      </LayoutPage>
    </BrowserRouter>
  );
}

export default App;
