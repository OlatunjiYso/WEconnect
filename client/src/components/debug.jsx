return (
  <div>
    <div>
      <div>
        <h3> Products</h3>
        <ul> {linkList} </ul>
      </div>
    </div>
    <Route path={`${match.url}/:productId`}
      render={(props) => <Product data={productsData} {...props} />} />
    <Route exact path={match.url}
      render={() => (
        <div>Please select a product.</div>
      )}
    />
  </div>
)


business: {
  businessName: '', category: '', slogan: '', address: '',
  city: '', state: '',phone: '', email: '', whatsapp: '', twitter: '',
  facebook: '', instagram: '', heading1: '', body1: '', heading2: '',
  body2: '', heading3: '', body3: ''
},

