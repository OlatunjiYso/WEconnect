import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Input } from 'react-materialize';
/**
 * @s FooterComponent
 * 
 * @extends {React.Component}
 */
class BusinessCatalogTop extends Component {
    /** 
    *
    *
    * @returns {JSX} JSX
    * 
    * @memberof BusinessCatalogTop Component
    */
    render() {
        const { proposedFilter, selectedFilter, handleChange, handleSubmit, businessList } = this.props
        const { category } = selectedFilter;
        const displayedCategory = (category !== 'category') ? category : ''
        const chosenState = selectedFilter.state;
        const displayedLocation = (chosenState !== 'location') ? `in ${chosenState}` : 'for you!';
        const displayTitle = (businessList.length > 0) ?
            <span> Our collection of {displayedCategory} businesses {displayedLocation} </span> : <span> Business Gallery </span>
        return (
            <div>
                <div className="row top-gap bottom-gap">
                    <div className="col s12 body-font center-align grey-text text-darken-2 bottom-gap">
                        <h4>{displayTitle}</h4>
                    </div>
                    {/* <div className="row center-align bottom-pad">
                        <form onSubmit = { handleSubmit }>
                            <div className="col s5 offset-s1 m3 offset-m1 l2 offset-l1 cursor">
                                <div className="input-field col s12">
                                    <Input s={12} type='select' value={proposedFilter.state} onChange={handleChange} name="state">
                                        <option value='location'>Location</option>
                                        <option value="lagos">Lagos</option>
                                        <option value="abuja">Abuja</option>
                                        <option value="ogun">Ogun</option>
                                    </Input>
                                </div>
                            </div>
                            <div className="col s5 offset-s1 m3 offset-m1 l2 offset-l1 cursor">
                                <div className="input-field col s12">
                                    <Input s={12} type='select' value={proposedFilter.category} onChange={handleChange} name="category">
                                        <option value='category'>Category</option>
                                        <option value='fashion'>Fashion</option>
                                        <option value='technology'>Technology</option>
                                        <option value='housing'>Housing</option>
                                    </Input>
                                </div>
                            </div>
                            <div className="col s8 offset-s2 m4 l2 offset-l1 push-down">
                                <input type="submit" value="Get Businesses" className="green-text text-darken-4 btn grey lighten-4" />
                            </div>
                        </form>
                    </div> */}
                    <div className="row center-align container search-section">
                        <form onSubmit={handleSubmit}>
                            <h5 className="col s2 pink-text"> Find  </h5>
                            <div className="input-field col s3">
                            <Input s={12} type='select' value={proposedFilter.category} onChange={handleChange} name="category" className="select-borders faint-pink-hover">
                            <option value='category'>All categories of</option>
                                    <option value='fashion'>Fashion</option>
                                    <option value='technology'>Technology</option>
                                    <option value='housing'>Housing</option>
                                </Input>
                            </div>
                            <h5 className="col s2 pink-text "> Businesses in </h5>
                            <div className="input-field col s2">
                                <Input s={12} type='select' value={proposedFilter.state} onChange={handleChange} name="state" className="select-borders faint-pink-hover">
                                    <option value='location'>All locations</option>
                                    <option value="lagos">Lagos</option>
                                    <option value="abuja">Abuja</option>
                                    <option value="ogun">Ogun</option>
                                </Input>
                            </div>
                            <div className="col s2 push-down">
                                <input type="submit" value="Search" className=" form-btn btn  select-borders" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

BusinessCatalogTop.propTypes = {
    selectedFilter: PropTypes.object.isRequired
}

export default BusinessCatalogTop;