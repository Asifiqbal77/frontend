import React from "react";
function Footer(){
    return (

    <footer className="bg-dark text-light py-4">
      <div className="container">
        <div className="row">
          
          {/* Left Side */}
          <div className="col-6 mb-3">
            <h5>ChaloAsifKeSaath</h5>
            <p className="mb">📍 Address: Street 123, Abbottabad, Pakistan</p>
            <p className="mb">📧 Email: contact@chaloasif.com</p>
            <p className="mb">📞 Phone: +92 300 0000000</p>
          </div>

          {/* Right Side */}
          <div className="col-6 text-md-end">
            <h6>Follow us</h6>
            <a className="me-2 text-light" href="#" aria-label="Facebook">
              🔵 Facebook
            </a>
            <a className="me-2 text-light" href="#" aria-label="Instagram">
              📸 Instagram
            </a>
            <a className="me-2 text-light" href="#" aria-label="TikTok">
              🎵 TikTok
            </a>
             <p className="mt-3 small opacity-75">
               ChaloAsifKeSaath. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>

    );
} 
export  default Footer;