import { Routes, Route } from "react-router-dom";
import Cart from "../components/cart/Cart";
import GuestLayout from "../layouts/GuestLayout";
import Home from "../pages/Home";
import Collection from "../pages/Collection";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import ProductView from "../pages/ProductView";

export default function AppRouter() {
    return (
    <>
    <GuestLayout>
        <Routes>
            <Route path="/" index={true} element={<Home></Home>}></Route>
            <Route path="/cart" element={<Cart></Cart>}></Route>
            <Route path="/collection" element={<Collection></Collection>}></Route>
            <Route path="/login" element={<Login></Login>}></Route>
            <Route path="/signup" element={<Signup></Signup>}></Route>
            <Route path="/productview" element={<ProductView></ProductView>}></Route>
            {/* <Route path="/login" element={<Login></Login>}></Route>
            <Route path="/about" element={<About></About>}></Route>
            <Route path="/ourTeam" element={<OurTeam></OurTeam>}></Route>
            <Route path="/contact" element={<Contact></Contact>}></Route>
            <Route path="/register" element={<Register></Register>}></Route>
            <Route path="/forgotPassword" element={<Forgotpassword></Forgotpassword>}></Route>
            <Route path="/otpcode" element={<OtpCode></OtpCode>}></Route>
            <Route path="/resetPassword" element={<Resetpassword></Resetpassword>}></Route> */}
        </Routes>
    </GuestLayout>
    </>
    )
}
