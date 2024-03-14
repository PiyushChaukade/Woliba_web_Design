import "./Navbar.css";
import Wolibo from "../../assets/Woliba.jpg";
import Vector from "../../assets/Vector.jpg";
import Vector1 from "../../assets/Vector1.jpg";
import Group from "../../assets/Group.jpg";

function ResponsiveAppBar() {
  return (
    <>
      <div className="container">
        <div className="imgContainer">
          <img src={Wolibo}></img>
        </div>
        <div className="buttonContainer">
          <button>
            Products
            <img src={Vector} />
          </button>
          <button>
            Solution <img src={Vector1} />
          </button>
          <button>Resources</button>
          <button>About</button>
        </div>
        <div className="buttonContainer2">
          <button>SIGN IN</button>
          <button>BOOK A CALL</button>
        </div>
        <div className="media">
          <img src={Group} />
        </div>
      </div>
    </>
  );
}
export default ResponsiveAppBar;
