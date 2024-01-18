
import "../styles/Footer.scss";
import { LocationOn, LocalPhone, Email } from "@mui/icons-material";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_left">
        <a href="/">
          <img src="/assets/logo.png" alt="logo" />
        </a>
        <p style={{color: "black"}}>
          Roomlo is an online home rental aggregation platform executing tech
          enabled solutions for individuals in need of independent and
          comfortable living spaces in semi-urban cities by partnering with
          property owners availing benefits of RoomLelo’s end to end property
          management solution
        </p>
      </div>

      <div className="footer_center">
        <h3>Useful Links</h3>
        <ul>
          <li>About Us</li>
          <li>Terms and Conditions</li>
          <li>Return and Refund Policy</li>
        </ul>
      </div>

      <div className="footer_right">
        <h3>Contact</h3>
        <div className="footer_right_info">
          <LocalPhone />
          <p>9682823902</p>
        </div>
        <div className="footer_right_info">
          <Email />
          <p>geeksclubs@gmail.com</p>
        </div>
        <div className="footer_right_info">
          <LocationOn />
          <p>Airport road Gandhi Nagar Bhopal</p>
        </div>
        {/* <img src="#" alt="payment"/> */}
      </div>
    </div>
  );
};

export default Footer;
