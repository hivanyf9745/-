// import reactLogo from './assets/react.svg';
import './App.css';
import { Routes } from 'react-router-dom';
import { MainNav } from './routes/navigation/Main-nav.component';
import { Home } from './routes/home/Home.component';
import { MerchandisePage } from './routes/merchandise/MerchandisePage.component';
import { InputForm } from './routes/inputForm/InputForm.component';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<MainNav />}>
          <Route index element={<Home />} />
          <Route
            path='/merchandise/:id'
            element={<MerchandisePage id={merchandiseId} />}
          />
          <Route path='/input-form' element={<InputForm />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
