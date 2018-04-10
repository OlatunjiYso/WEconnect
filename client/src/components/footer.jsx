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
                <footer className="page-footer blue-grey darken-4 body-font">
                    <div>
                        <div className="row">
                            <div className="col m3 s12">
                                <h5 className="pink-text text-lighten-4 Sofia">WEconnect</h5>
                            </div>
                            <div className="col m4 s12">
                                <a className=" pink-text text-lighten-4 right">© 2018 Andela, Lagos Nigeria</a>
                            </div>
                            <div className="col m4 s12">
                                <a className="pink-text text-lighten-4 right">Andela Bootcamp project cycle xxx</a>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        )
    }
}

export default Footer;