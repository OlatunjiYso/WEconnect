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
        const displayedCategory = (category !== 'category') ? category : 'All'
        const chosenState = selectedFilter.state;
        const displayedLocation = (chosenState !== 'location') ? `in ${chosenState}` : 'for you!';
        const displayTitle = (businessList.length > 0) ? 
        <span> {displayedCategory} businesses {displayedLocation} </span> : null
        return (
            <div>
                <div className="row black-text">
                    <div className="col s12 body-font center-align grey-text text-darken-2">
                        <h4>Our Collection Of Businesses and Professionals for You</h4>
                    </div>
                    <div className="row center-align underlined bottom-pad">
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
                    </div>
                </div>
                <div className="row head-font">
                    <div className="col s12">
                        <h5 className="center-align pink-text">
                        {displayTitle}
                        </h5>
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