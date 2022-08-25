import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Routes } from "react-router-dom";
import { MainNav } from "./routes/navigation/MainNav.component";
import { Home } from "./routes/home/Home.component";
import {MerchandisePage} from"./routes/merchandise/MerchandisePage.component"

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/" element={<MainNav />}>
          <Route index element={<Home />} />
          <Route
            path="/merchandise/:id"
            element={<MerchandisePage id={merchandiseId} />}
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
