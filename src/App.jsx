import { Routes, Route } from 'react-router-dom';

import Home from "./pages/home.jsx";
import AboutUs from "./pages/aboutus.jsx";
import ContactUs from "./pages/contactus.jsx";
import Dashboard from "./pages/dashboard.jsx";
import HowItWorks from "./pages/howitworks.jsx";
import SignUp from './pages/signup.jsx';
import SignIn from './pages/signin.jsx';
import SendMoney from "./components/DashboardComponent/sendmoney.jsx";
import DashboardComponent from './components/DashboardComponent/dashboardComponent.jsx';

import Navbar from "./components/navbar.jsx";
import Footer from './components/footer.jsx';
import NotFound from './components/notfound.jsx';
import Recipients from './components/DashboardComponent/recipients.jsx';




function App() {
  return (
    <>
      <Navbar />
      <div>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/aboutus' element={<AboutUs />} />
            <Route path='/contactus' element={<ContactUs />} />
            <Route path='/dashboard' element={<Dashboard />}>
              <Route index element={<DashboardComponent />} />
              <Route path='sendmoney' element={<SendMoney />} />
              <Route path='recipients' element={<Recipients />} />
            </Route>
            <Route path='/howitworks' element={<HowItWorks />} />
            <Route path='/signup' element={<SignUp />}/>
            <Route path='/signin' element={<SignIn />}/>
            <Route path='*' element={<NotFound />}/>
          </Routes>
      </div>
      <Footer />
    </>
    
  )
}

export default App
