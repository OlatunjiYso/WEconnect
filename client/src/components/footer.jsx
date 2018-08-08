import React from 'react';

/**
 * @description renders the footer
 * @function Footer
 * 
 * @returns { jsx } jsx - a footer component
 */
const Footer = () => {
    return (
        <div>
            <footer className="page-footer pink darken-4 body-font white-text">
                <div class="footer-copyright">
                    <div className="container">
                        <div className="col m6">
                            <h5 className="Sofia white-text left">WEconnect</h5>
                        </div>
                        <div>
                            <a className="white-text right">© 2018 Andela, Lagos Nigeria</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;

