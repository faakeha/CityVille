import React from "react";
import {BsFacebook, BsInstagram, BsTwitter} from 'react-icons/bs';




const Footer = () => ( 
  <div className="footer">
    <p className="footer_support">Support : infoCF@cityville.com</p>
    <p className="footer_social">Social Media Networks</p>
    <div className="ftr">
    <div className="img_fb">
    <BsFacebook size={30}></BsFacebook>
    </div>
    <div className="img_ig">
    <BsInstagram size={30}></BsInstagram>
    </div>
    <div className="img_tw">
    <BsTwitter size={30}></BsTwitter>
    </div>
    </div>
    {/* <img className = "img_fb" src={fb} alt="Tesla" />
    <img className = "img_ig" src={ig} alt="Tesla" />
    <img  className = "img_tw" src={tw} alt="Tesla" /> */}
  </div>
);

export default Footer;