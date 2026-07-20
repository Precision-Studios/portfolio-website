import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Landing from './pages/Landing';
import Browse from './pages/Browse';
import ProductDetails from './pages/ProductDetails';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Cart from './pages/Cart';

import Contact from './pages/Contact';
import Home from './pages/Home';
import MvpList from './pages/MvpList';

// Demo Hub
import DemoHub from './pages/demos/DemoHub';

// Café Demo
import CafeLanding from './pages/demos/cafe/CafeLanding';
import CafeMenu from './pages/demos/cafe/CafeMenu';
import CafeOrder from './pages/demos/cafe/CafeOrder';
import CafeDashboard from './pages/demos/cafe/CafeDashboard';

// Medical Demo
import MedicalLanding from './pages/demos/medical/MedicalLanding';
import MedicalDoctors from './pages/demos/medical/MedicalDoctors';
import MedicalBooking from './pages/demos/medical/MedicalBooking';
import MedicalDashboard from './pages/demos/medical/MedicalDashboard';

function App() {
  return (
    <Routes>
      {/* Precision Studios Landing */}
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />

      {/* MVP Showcase */}
      <Route path="/mvp" element={<MvpList />} />

      {/* Whitelabel Demos */}
      <Route path="/demos" element={<DemoHub />} />

      {/* Café Demo */}
      <Route path="/demos/cafe" element={<CafeLanding />} />
      <Route path="/demos/cafe/menu" element={<CafeMenu />} />
      <Route path="/demos/cafe/order" element={<CafeOrder />} />
      <Route path="/demos/cafe/dashboard" element={<CafeDashboard />} />

      {/* Medical Demo */}
      <Route path="/demos/medical" element={<MedicalLanding />} />
      <Route path="/demos/medical/doctors" element={<MedicalDoctors />} />
      <Route path="/demos/medical/booking" element={<MedicalBooking />} />
      <Route path="/demos/medical/dashboard" element={<MedicalDashboard />} />

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
