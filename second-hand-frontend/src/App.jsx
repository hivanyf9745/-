import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { fetchProducts } from "./features/reducerSlices/apiData";
import MainNav from "./routes/navigation/Main-nav.component";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <Routes>
      <Route path='/' element={<MainNav />}></Route>
    </Routes>
  );
};

export default App;
