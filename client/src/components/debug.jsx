<SideNav
  trigger={<Button>More</Button>}
  options={{ closeOnClick: true }}
  >
  <SideNavItem href='#!second'>First Link</SideNavItem>
  <SideNavItem href='#!second'>Second Link</SideNavItem>
  <SideNavItem href='#!third'>Third Link</SideNavItem>
</SideNav>

                 <nav>
                    <div className="nav-wrapper nav-color">
                        <Link to="/" className=" Sofia brand-logo  logo white-text">WEconnect</Link>
                        <ul className="right hide-on-med-and-down head-font">
                            <li>
                                <Link to="/login" className="white-text">Sign In</Link>
                            </li>
                            <li>
                                <Link to="/signup" className="white-text">Sign Up</Link>
                            </li>
                            <li>
                                <Link to="/userProfile" className="white-text">My Profile</Link>
                            </li>
                            <li>
                                <Link to="/businesses" className="white-text">All</Link>
                            </li>
                        </ul>
                    </div>
                </nav>





<nav className="blue">
    <div className="nav-wrapper">
      <div className="">
        <Link to="/" className="brand-logo">
          WEconnect
        </Link>
        <ul className="right hide-on-med-and-down">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/aboutUs">About Us</Link>
          </li>
          <li>
            <Link to="/contactUs">Contact Us</Link>
          </li>
          <li>
            <Link to="/howitworks">How it Works</Link>
          </li>
          <li>
            <Link to="/login">Sign In</Link>
          </li>
          <li>
            <Link to="/signup">Sign Up</Link>
          </li>
          <li>
            <Link to="/businessListing">Business Listing</Link>
          </li>
        </ul>
        <SideNav
          trigger={
            <a href="" className="button-collapse">
              <i className="material-icons">menu</i>
            </a>
          }
          options={{ closeOnClick: true }}
        >
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/aboutUs">About Us</Link>
            </li>
            <li>
              <Link to="/contactUs">Contact Us</Link>
            </li>
            <li>
              <Link to="/howitworks">How it Works</Link>
            </li>
            <li>
              <Link to="/signup">Sign Up</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <SideNavItem divider />
            <SideNavItem subheader>Businesses</SideNavItem>
            <li>
              <Link to="/businessListing">Business Listing</Link>
            </li>
          </ul>
        </SideNav>
      </div>
    </div>
  </nav>