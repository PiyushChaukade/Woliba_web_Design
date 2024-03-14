import "./Footer.css";
import Wolibiawhite from "../../assets/wolibiawhte.png";
import fb from "../../assets/fb.png";
import yt from "../../assets/yt.png";
import x from "../../assets/x.png";
import linkedin from "../../assets/linkedin.png";
import insta from "../../assets/insta.png";

const Footer = () => {
  return (
    <>
      <div className="Footer">
        <div className="left">
          <div className="c1_footer">
            <div className="c1_footer_1">
              Company
              <div className="subNets">
                <a>Home</a>
                <a>About Us</a>
                <a>Why Us</a>
                <a>Pricing</a>
                <a>Demo</a>
                <a>Sign In</a>
              </div>
            </div>
            <div className="c1_footer_1_0">
              Products
              <div className="subNets">
                <a>Recognition</a>
                <a>Chllenges</a>
                <a>Wellness</a>
                <a>Surveys</a>
                <a>Events</a>
                <a>Rewards</a>
              </div>
            </div>
            <div className="c1_footer_1_0">
              Resources
              <div className="subNets">
                <a>Blogs</a>
                <a>Guides</a>
                <a>Newsletters</a>
                <a>KTs</a>
              </div>
            </div>
            <div className="c1_footer_1_0">
              Support
              <div className="subNets">
                <a>Contact Us</a>
                <a>FAQs</a>
                <a>Careers</a>
                <a>Terms & Condition</a>
                <a>Privacy Policy</a>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="c2_footer">
            <img src={Wolibiawhite} />
          </div>
          <div className="c1_vector1">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="c2_footer_2">
            <span>
              <img src={fb} />
            </span>
            <span>
              <img src={yt} />
            </span>
            <span>
              <img src={x} />
            </span>
            <span>
              <img src={linkedin} />
            </span>
            <span>
              <img src={insta} />
            </span>
          </div>
          <div className="c2_footer_3">
            <p>Contact Us</p>
            <p>Sales@woliba.io</p>
          </div>
        </div>
        <div className="c3_footer">
          <p>© 2020 Training Amigo Inc. All Rights Reserved</p>
        </div>
      </div>
    </>
  );
};
export default Footer;
