import React, { Component } from "react";
import { Link } from "react-router-dom";

import Footer from "../components/footer";
import Navbar from "./nav";
import customStyles from "../css/style.css";

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
   *
   * @returns {JSX} JSX
   *
   * @memberof RegistrationGuideComponent
   */
  render() {
    return (
      <div>
        <Navbar />
        <main>
          <div className="row">
            <div className="top-pad col s12 m8 offset-m2">
              <h4 className="left-align green-text text-darken-2">
                Few things to note
              </h4>
              <h5 className="top-pad grey-text text-darken-1">
                Our business registration policies
              </h5>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione voluptatem sequi
                nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
                sit amet, consectetur, adipisci velit, sed quia non numquam eius
                modi tempora incidunt ut labore et dolore magnam aliquam quaerat
                voluptatem. Ut enim ad minima veniam, quis nostrum
                exercitationem ullam corporis suscipit laboriosam, nisi ut
                aliquid ex ea commodi consequatur?
              </p>

              {/* <div className="grey lighten-3">
              <h5 className="top-pad grey-text text-darken-1">
                AgreementOur business registration policies
              </h5>
              <div className="padded-border grey lighten-3">
                Yes I have read and agreed to the weconnect business policy
                <p>
                  <button className="btn-edit btn left-align right-gap"> Yes </button>

                  <button className="btn-edit btn right-align left-gap"> No </button>
                </p>
              </div>
              </div> */}

              <Link to="/businessRegistration">
                <h5 className="center amber-text text-darken-4 top-pad-much">
                  {" "}
                  Proceed to Registration Form{" "}
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
