
import React from 'react'
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import WebFont from "webfontloader";
import './App.css';
import Cart from './component/Cart/Cart';
import Home from './component/Home/Home.js';
import Footer from './component/layout/Footer/Footer';
import Header from './component/layout/Header/Header';
import LoginSignIn from './component/User/LoginSignIn';
import store from './store/store';
import Productpage from './component/Productpage/Productpage';

function App() {
  React.useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"]
      }
    })

  }, [])
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Routes>
          <Route extact path='/' element={<Home />} />
          <Route extact path='/cart' element={<Cart />} />
          <Route extact path='/login' element={<LoginSignIn />} />
          <Route extact path='/productpage' element={<Productpage />} />
        </Routes>

        <Footer />


      </Router>

    </Provider>

  );
}

export default App;
