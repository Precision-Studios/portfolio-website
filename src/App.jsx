import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Landing from './pages/Landing';
import Browse from './pages/Browse';
import ProductDetails from './pages/ProductDetails';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Cart from './pages/Cart';

import Home from './pages/Home';
import MvpList from './pages/MvpList';

function App() {
  return (
    <Routes>
      {/* Precision Studios Landing */}
      <Route path="/" element={<Home />} />

      {/* MVP Showcase */}
      <Route path="/mvp" element={<MvpList />} />

      {/* T-Shirt MVP - All routes prefixed */}
      <Route path="/mvp/tshirt">
        <Route index element={<Layout><Landing /></Layout>} />
        <Route path="browse" element={<Layout><Browse /></Layout>} />
        <Route path="product/:id" element={<Layout><ProductDetails /></Layout>} />
        <Route path="cart" element={<Layout><Cart /></Layout>} />
        <Route path="login" element={<Layout><Login /></Layout>} />
        <Route path="signup" element={<Layout><Signup /></Layout>} />
      </Route>
    </Routes>
  );
}

export default App;
