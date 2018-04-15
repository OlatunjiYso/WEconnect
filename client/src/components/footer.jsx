import React, { Component } from 'react';

/**
 * @s FooterComponent
 * 
 * @extends {React.Component}
 */
class Footer extends Component {
    /** 
    *
    *
    * @returns {JSX} JSX
    * 
    * @memberof FooterComponent
    */
    render() {
        return (
            <div>
                <footer className="page-footer green lighten-3 body-font">
                    <div className="row">
                        <div className="col m3 s12">
                            <h5 className="black-text  Sofia">WEconnect</h5>
                        </div>
                        <div className="col m4 s12">
                            <a className=" black-text right">© 2018 Andela, Lagos Nigeria</a>
                        </div>
                        <div className="col m4 s12">
                            <a className="black-text right">Andela Bootcamp project cycle xxx</a>
                        </div>
                    </div>
                </footer>
            </div>
        )
    }
}

export default Footer;