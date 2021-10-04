import React from 'react';

const Email = () => {
  
// contact details

    return (
      <div className="mt-5 pt-5">
        <h1>Contact Us</h1>
        <hr />

        <div className="row py-5">
          <div className="col-sm-12 col-md-6 col-lg-4 about">
            <h2>Office Address</h2>
            <p>
              1-13 St Giles High St, <br /> pabna , Bangladesh
            </p>
          </div>

          <div className="col-sm-12 col-md-6 col-lg-4 about">
            <h2>Email Address</h2>
            <p>
              companyinfo@gmail.com <br /> info@gmail.com
            </p>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4 about">
            <h2> Office Time</h2>
                    <p> Mon - Sat 9:00 - 5:00
                        <br />
                        Sunday - Closed</p>
          </div>
        </div>
        <hr />
      </div>
    );
};

export default Email;