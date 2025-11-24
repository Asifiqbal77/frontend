
import weblogo from "./assets/weblogo.png";
import { Link } from "react-router-dom";
function Navigationbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-success sticky-top shadow-sm ">
      <div className="container">
        {/* Brand */}
        <a className="navbar-brand text-white fw-bold" d-flex align-items-center href="#">
          <img src={weblogo} alt="Logo" width="70" height="60" className="me-2 rounded-circle" />
          Pakistan Peaks and Plains
        </a>

        {/* Toggler (visible on small screens only) */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#main-nav"
          aria-controls="main-nav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu items */}
        <div className="collapse navbar-collapse" id="main-nav">
          <ul className="navbar-nav ms-auto align-items-lg-center">
            <li className="nav-item">
              <a className="nav-link text-white" href="#home">
                Home
              </a>
            </li>
           
            <li className="nav-item dropdown">
  <a
    className="nav-link dropdown-toggle text-white" 
    href="#"
    role="button"
    data-bs-toggle="dropdown"
    aria-expanded="false"
  >
    Tours 
  </a>
  <ul className="dropdown-menu">
    <li><a className="dropdown-item" href="#">Hunza Tours</a></li>
    <li><a className="dropdown-item" href="#">Swat Tours</a></li>
    <li><a className="dropdown-item" href="#">Fairy Meadows Tours</a></li>
    <li><a className="dropdown-item" href="#">Azad Kashmir Tours</a></li>
    <li><a className="dropdown-item" href="#">Lahore Tours</a></li>
  </ul>
</li>

            <li className="nav-item">
              <a className="nav-link text-white" href="#">
                Honeymoon Tours
              </a>
            </li>

             <li className="nav-item">
              <a className="nav-link text-white" href="#">
                Cars
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link text-white" href="#">
                Blog
              </a>
            </li>
           
            <li className="nav-item">
              <Link to ='/aboutus' className="nav-link text-white">
                About Us
              </Link>
            </li>

            {/* On large screens → Login button shows normally 
                On medium screens → smaller button 
                On small screens → full width button */}
            <li className="nav-item mt-2 mt-lg-0">
              <Link to = '/login'
                className="btn btn-outline-light btn-sm ms-lg-2 w-100 w-md-auto"
              >
                Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
      );
      }

 export default Navigationbar;
