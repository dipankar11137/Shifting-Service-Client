import { Route, Routes } from "react-router-dom";
import "./App.css";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from "./Components/Login/Login";
import RequireAuth from './Components/Login/RequireAuth';
import SignUp from "./Components/Login/SignUp";
import About from "./Components/Pages/About/About";
import Blogs from "./Components/Pages/Blogs/Blogs";
import Contact from "./Components/Pages/Contact/Contact";
import AddItem from './Components/Pages/Dashboard/AddItem';
import Dashboard from './Components/Pages/Dashboard/Dashboard';
import ManageItem from './Components/Pages/Dashboard/ManageItem';
import AppleInventory from './Components/Pages/Home/AppleInventory';
import Home from "./Components/Pages/Home/Home";
import Navbar from "./Components/Pages/Share/Navbar";
import NotFound from './Components/Pages/Share/NotFound';
// animation
import "animate.css/animate.min.css";
import Aos from "aos";
import BookServices from './Components/Pages/BookServices/BookServices';
import ManageOrders from './Components/Pages/Dashboard/Manage Order/ManageOrders';
import MonthlyReports from './Components/Pages/Dashboard/MonthlyReports';
import AcRepairServices from './Components/Pages/Home/Ac Repair Service/AcRepairServices';
import ApplianceRepairs from './Components/Pages/Home/Appliance Repair/ApplianceRepairs';
import Beautys from './Components/Pages/Home/Beauty And Salon/Beautys';
import CarCare from './Components/Pages/Home/Car Care/CarCare';
import Shiftings from './Components/Pages/Home/Shifting/Shiftings';
import TripsTravels from './Components/Pages/Home/Trips & Travel/TripsTravels';
import MyItems from "./Components/Pages/MyItems/MyItems";
import PayNow from "./Components/Pages/MyItems/PayNow";
import AddReview from './Components/Pages/Review/AddReview';

Aos.init();

function App() {
  return (
    <div>
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>

      <Routes>
        <Route
          path="/"
          element={
            <RequireAuth>
              <Home />
            </RequireAuth>
          }
        />

        <Route
          path="/blogs"
          element={
            <RequireAuth>
              <Blogs />
            </RequireAuth>
          }
        />

        <Route path="/inventory/:id" element={<AppleInventory />} />

        <Route path="/acRepairs" element={<AcRepairServices />} />
        <Route path="/tripsTravel" element={<TripsTravels />} />
        <Route path="/shifting" element={<Shiftings />} />
        <Route path="/carCare" element={<CarCare />} />
        <Route path="/beauty" element={<Beautys />} />
        <Route path="/applianceRepairs" element={<ApplianceRepairs />} />
        <Route
          path="/bookServices/:id"
          element={
            <RequireAuth>
              <BookServices />
            </RequireAuth>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/myItems"
          element={
            <RequireAuth>
              <MyItems />
            </RequireAuth>
          }
        />
        <Route
          path="/addAReview"
          element={
            <RequireAuth>
              <AddReview />
            </RequireAuth>
          }
        />
        {/* Dashboard */}
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        >
          <Route index element={<AddItem />} />
          <Route path="manageItem" element={<ManageItem />} />
          <Route path="reports" element={<MonthlyReports />} />
          <Route path="manageOrder" element={<ManageOrders />} />
        </Route>
        {/* Dashboard End */}

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/payNow" element={<PayNow />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
