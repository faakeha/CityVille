import React, {useContext} from 'react'
import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import NotAuth from "./NotAuth";
import Events from "./Events";
import Homepage from "./Homepage";
import Searchbox from "./Searchbox";
import { DataProvider, GlobalState } from "../GlobalState";
import Header from "./Header";
import Footer from "./Footer";
import Services from "./Services";
import CommunityReports from "./CommunityReports";
import CustomerAppointments from "./CustomerAppointments";
import SellerAppointments from "./SellerAppointments";
import Individual_listing from "./Individual_Listings";
import PostListing from "./PostListing";
import CustomerProfile from "./CustomerProfile";
import SellerRequests from "./SellerRequests";
import Header1 from "./Header1";
import Header2 from "./Header2";
import Header3 from "./Header3";
import SellerProfile from "./SellerProfile";

function PageRoutes() {

    const state = useContext(GlobalState);
	
	const [role] = state.globalUser.role
	console.log('app', role)
    
  return (
        <Routes>
						<Route path="" element={<Homepage />} />
						<Route path="/Listing" element={<Individual_listing />} />
						<Route path="/Homepage" element={<Homepage />} />
						<Route path="/Searchbox" element={<Searchbox />} />
						<Route path="/Register/:role" element={<Register />} />
						<Route path="/Login" element={<Login />} />
						<Route path="/NotAuth" element={<NotAuth />} />
						<Route path="/Services" element={<Services />} />
						<Route path="/Events" element={<Events />} />
						<Route path="/PostListing" element={<PostListing />} />
						<Route path="/CustomerProfile" element={<CustomerProfile />} />
						<Route path="/SellerProfile" element={<SellerProfile />} />
						<Route path="/SellerProfile/:id" element={<SellerProfile />} />


						<Route
							path="/Individual_Listing/:id/:uid"
							element={<Individual_listing />}
						/>
						<Route path="/PostListing" element={<PostListing />} />
						<Route path="/SellerRequests" element={<SellerRequests />} />
						<Route path="/CommunityReports" element={<CommunityReports />} />
						<Route
							path="/CustomerAppointments"
							element={<CustomerAppointments />}
						/>
						<Route
							path="/SellerAppointments"
							element={<SellerAppointments />}
						/>
						<Route path="/SellerProfile" element={<SellerProfile />} />

						
					</Routes>
  )
}

export default PageRoutes