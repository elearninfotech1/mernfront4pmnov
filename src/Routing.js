import React from "react";
import { Route, Routes } from "react-router-dom";
import Nopage from "./StudentOpertations/Nopage";
import Home from "./InnerPages/Home";
import AboutUs from "./InnerPages/AboutUs";
import Treatments from "./InnerPages/Treatments";
import BookAppointment from "./InnerPages/BookAppointment";
import Offers from "./InnerPages/Offers";
import ContactUs from "./InnerPages/ContactUs";
import Admin from "./Admin/Admin";
import Register from "./Admin/Register";
import AdminDashboard from "./Admin/AdminDashboard";
import AddTreatments from "./Admin/AddTreatments";
import EditTreatment from "./Admin/EditTreatment";
import AddOffers from "./Admin/AddOffers";
import EditOffers from "./Admin/EditOffers";
import TreatementDetails from "./InnerPages/TreatementDetails";

const Routing = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/treatments" element={<Treatments />} />
        <Route path="/bookappointment" element={<BookAppointment />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/register" element={<Register />} />
        <Route path="/treatementdetails/:tid" element={<TreatementDetails />} />
        <Route path="/admindashboard" element={<AdminDashboard />}>
          <Route path="" element={<AddTreatments />} />
          <Route path="edittreatment" element={<EditTreatment />} />
          <Route path="addoffer" element={<AddOffers />} />
          <Route path="editoffer" element={<EditOffers />} />
        </Route>
        <Route path="*" element={<Nopage />} />
      </Routes>
    </div>
  );
};

export default Routing;
