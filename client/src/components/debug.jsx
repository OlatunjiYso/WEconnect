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

