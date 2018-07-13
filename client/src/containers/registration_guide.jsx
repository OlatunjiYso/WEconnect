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
              <i class="material-icons medium">security</i> Our business registration policies
              </h4>
              <ol>
                <li class="instructions">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                </li>
                <li class="instructions">
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa
                </li>
                <li class="instructions">
                  quae ab illo inventore veritatis et quasi architecto beatae
                </li>
                <li class="instructions">
                  vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                </li>
                <li class="instructions">
                  voluptas sit aspernatur aut odit aut fugit, sed quia
                </li>
                <li class="instructions">
                  consequuntur magni dolores eos qui ratione voluptatem sequi
                </li>
                <li class="instructions">
                  nesciunt. Neque porro quisquam est, qui dolorem ipsum quia
                  dolor
                </li>
                <li class="instructions">
                  sit amet, consectetur, adipisci velit, sed quia non numquam
                  eius
                </li>
              </ol>

              <Link to="/businessRegistration">
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
