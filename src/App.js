import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Sectionmain from './components/Body/Sectionmain';
import Aboutsection from './components/Body/Aboutsection';
import Cardssection from './components/Body/Cardssection';
import Productsection from './components/Body/Productsection';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Contact from './components/pages/Contact/Contact';
import Terms from './components/pages/Terms-and-conditions/Terms';
import Privacy from './components/pages/Privacy/Privacy';
import Product from './components/pages/Product/Product';
import Ingredients from './components/pages/Ingredients/Ingredients';
import './style.css';
// import './bootstrap.min.css';
import './App.css';
import './plugins.css';
import './styles/bootstrap.min.css'
import Testcomponent from './Testcomponent';
import Checkout from './components/pages/Checkout/Checkout';
import { useState } from 'react';
import Formvalidation from './components/pages/Checkout/Formvalidation';
import Orderstatus from './components/pages/Orderstatus/Orderstatus';


function Applayout() {
  return (
    <div className="App">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

const Home = () => {
 
  return (
    <>
      <Sectionmain />
      <Aboutsection />
      <Cardssection />
      <Productsection />
    </>
  )
}

function App() {
  const [radioValue, setradioValue] = useState(null)
  const Approuter = createBrowserRouter([
    {
      path: "/",
      element: <Applayout />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/terms',
          element: <Terms />
        },
        {
          path: '/privacy',
          element: <Privacy />
        },
        {
          path: '/contact',
          element: <Contact />
        },
        {
          path: '/product',
          element: <Product radioValue={radioValue} setradioValue={setradioValue}/>
        },
        {
          path: '/ingredients',
          element: <Ingredients />
        },
        {
          path: '/checkout',
          element: <Checkout radioValue={radioValue}/>
        },
        {
          path: '/thank-you-customer_id=1124016',
          element: <Orderstatus />
        },
        {
          path: '/formvalidation',
          element: <Formvalidation />
        },
      ]
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={Approuter} />
    </div>
  );
}

export default App;
