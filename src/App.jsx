import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Contact from './pages/Contact';
import Home from './pages/Home';
import MvpList from './pages/MvpList';
import DemoHub from './pages/demos/DemoHub';
import HttpErrorPage from './pages/errors/HttpErrorPage';

// Café Demo
const CafeLanding = lazy(() => import('./pages/demos/cafe/CafeLanding'));
const CafeMenu = lazy(() => import('./pages/demos/cafe/CafeMenu'));
const CafeOrder = lazy(() => import('./pages/demos/cafe/CafeOrder'));
const CafeDashboard = lazy(() => import('./pages/demos/cafe/CafeDashboard'));

// Medical Demo
const MedicalLanding = lazy(() => import('./pages/demos/medical/MedicalLanding'));
const MedicalDoctors = lazy(() => import('./pages/demos/medical/MedicalDoctors'));
const MedicalBooking = lazy(() => import('./pages/demos/medical/MedicalBooking'));
const MedicalDashboard = lazy(() => import('./pages/demos/medical/MedicalDashboard'));

// Marketing Demo
const MarketingLanding = lazy(() => import('./pages/demos/marketing/MarketingLanding'));
const MarketingAudits = lazy(() => import('./pages/demos/marketing/MarketingAudits'));
const MarketingKeywords = lazy(() => import('./pages/demos/marketing/MarketingKeywords'));
const MarketingDashboard = lazy(() => import('./pages/demos/marketing/MarketingDashboard'));

// Florist Demo
const FlowersLanding = lazy(() => import('./pages/demos/flowers/FlowersLanding'));
const FlowersCatalog = lazy(() => import('./pages/demos/flowers/FlowersCatalog'));
const FlowersOrder = lazy(() => import('./pages/demos/flowers/FlowersOrder'));
const FlowersDashboard = lazy(() => import('./pages/demos/flowers/FlowersDashboard'));

// Education Demo
const EducationLanding = lazy(() => import('./pages/demos/education/EducationLanding'));
const EducationTutors = lazy(() => import('./pages/demos/education/EducationTutors'));
const EducationEnroll = lazy(() => import('./pages/demos/education/EducationEnroll'));
const EducationDashboard = lazy(() => import('./pages/demos/education/EducationDashboard'));

// Pet Centre Demo
const PetsLanding = lazy(() => import('./pages/demos/pets/PetsLanding'));
const PetsProfiles = lazy(() => import('./pages/demos/pets/PetsProfiles'));
const PetsBooking = lazy(() => import('./pages/demos/pets/PetsBooking'));
const PetsDashboard = lazy(() => import('./pages/demos/pets/PetsDashboard'));

// T-Shirt MVP
const Landing = lazy(() => import('./pages/Landing'));
const Browse = lazy(() => import('./pages/Browse'));
const ProductDetails = lazy(() => import('./pages/ProductDetails'));
const Login = lazy(() => import('./pages/Login'));
const Signup = lazy(() => import('./pages/Signup'));
const Cart = lazy(() => import('./pages/Cart'));

function PageLoader() {
  return (
    <div className="min-h-[50vh] flex items-center justify-center text-ink-muted">
      Loading...
    </div>
  );
}

function App() {
  return (
    <Suspense fallback={<PageLoader />}>
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

        {/* Marketing Demo */}
        <Route path="/demos/marketing" element={<MarketingLanding />} />
        <Route path="/demos/marketing/audits" element={<MarketingAudits />} />
        <Route path="/demos/marketing/keywords" element={<MarketingKeywords />} />
        <Route path="/demos/marketing/dashboard" element={<MarketingDashboard />} />

        {/* Education Demo */}
        <Route path="/demos/education" element={<EducationLanding />} />
        <Route path="/demos/education/tutors" element={<EducationTutors />} />
        <Route path="/demos/education/enroll" element={<EducationEnroll />} />
        <Route path="/demos/education/dashboard" element={<EducationDashboard />} />

        {/* Pet Centre Demo */}
        <Route path="/demos/pets" element={<PetsLanding />} />
        <Route path="/demos/pets/profiles" element={<PetsProfiles />} />
        <Route path="/demos/pets/booking" element={<PetsBooking />} />
        <Route path="/demos/pets/dashboard" element={<PetsDashboard />} />

        {/* Florist Demo */}
        <Route path="/demos/flowers" element={<FlowersLanding />} />
        <Route path="/demos/flowers/catalog" element={<FlowersCatalog />} />
        <Route path="/demos/flowers/order" element={<FlowersOrder />} />
        <Route path="/demos/flowers/dashboard" element={<FlowersDashboard />} />

        {/* T-Shirt MVP - All routes prefixed */}
        <Route path="/mvp/tshirt">
          <Route index element={<Layout><Landing /></Layout>} />
          <Route path="browse" element={<Layout><Browse /></Layout>} />
          <Route path="product/:id" element={<Layout><ProductDetails /></Layout>} />
          <Route path="cart" element={<Layout><Cart /></Layout>} />
          <Route path="login" element={<Layout><Login /></Layout>} />
          <Route path="signup" element={<Layout><Signup /></Layout>} />
        </Route>

        {/* HTTP error pages (explicit routes for testing and deep links) */}
        <Route path="/error/:code" element={<HttpErrorPage />} />
        <Route path="*" element={<HttpErrorPage code={404} />} />
      </Routes>
    </Suspense>
  );
}

export default App;
