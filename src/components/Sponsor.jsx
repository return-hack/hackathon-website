import React, { Component } from "react";
import "../css/sponsor.css";
import Sponsor_1 from "../img/sponsor_1.png";
import Sponsor_2 from "../img/sponsor_2.jpeg";
import Sponsor_3 from "../img/sponsor_3.png";
import Sponsor_4 from "../img/sponsor_4.jpg";
import Sponsor_dell from "../img/sponsor-dell.jpg";
class Sponsor extends Component {
  render() {
    return (
      <>
        <div className="sponsorBg">
          <h1 className="header-text text-gradient">Sponsors</h1>
          <div className="row">
            <img
              className="github"
              src="http://pngimg.com/uploads/github/github_PNG20.png"
            />
          </div>
          <div className="row">
            <img
              className="devfolio"
              src="https://blobscdn.gitbook.com/v0/b/gitbook-28427.appspot.com/o/spaces%2F-LX2wpUXI1eWMY46nkHR%2Favatar-rectangle.png?generation=1570189666128075&alt=media"
            />
          </div>
          <div className="row">
          <img
                  className="matic"
                  src="https://cryptologos.cc/logos/matic-network-matic-logo.png"
                />
          </div>
          <div className="row">
              <img className="mlh" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Major_League_Hacking_logo.svg/1200px-Major_League_Hacking_logo.svg.png"/>
          </div>
        </div>
      </>
    );
  }
}

export default Sponsor;
