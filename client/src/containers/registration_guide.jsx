import React, { Component } from "react";
import { Link } from "react-router-dom";

import Footer from "../components/footer";
import Navbar from "./nav";

/**
 * @class RegistrationGuide
 *
 * @extends {React.Component}
 */
class RegistrationGuide extends Component {
  constructor(props) {
    super(props);
  }

  /**
   * @description renders a page for business registration guide
   * @method render
   *
   * @memberof RegistrationGuide component
   * @returns { jsx } business registration guide page
   */
  render() {
    return (
      <div>
        <Navbar />
        <main>
          <div className="row">
            <div className="top-pad col s12 m8 offset-m2">
              <h4 className="top-pad pink-text text-darken-3">
              <i className="material-icons medium hide-on-small-only">security</i> Business registration policy
              </h4>
              <ol>
                <li className="instructions">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                </li>
                <li className="instructions">
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa
                </li>
                <li className="instructions">
                  quae ab illo inventore veritatis et quasi architecto beatae
                </li>
                <li className="instructions">
                  vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                </li>
                <li className="instructions">
                  voluptas sit aspernatur aut odit aut fugit, sed quia
                </li>
                <li className="instructions">
                  consequuntur magni dolores eos qui ratione voluptatem sequi
                </li>
                <li className="instructions">
                  nesciunt. Neque porro quisquam est, qui dolorem ipsum quia
                  dolor
                </li>
                <li className="instructions">
                  sit amet, consectetur, adipisci velit, sed quia non numquam
                  eius
                </li>
              </ol>

              <Link to="/businessRegistration" id="businessReg">
                <h5 className=" pink-text text-darken-4 grey lighten-4 btn top-gap-much">
                  Proceed to Registration Form 
                </h5> 
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}

export default RegistrationGuide;
