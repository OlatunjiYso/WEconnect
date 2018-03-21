/**
 * Controllers to handle :
            Adding a new business,
            Modifying business profile
            Deleting a business,
            Getting a business,
            Getting all business
            Getting business by category
            Getting business by location
 */

import Business from '../model/business';

import businesses from '../tables/businesses';
import comments from '../tables/comments';

/**
  * @description adds a new business
  *
  * @param {object} req -api request
  * @param {object} res -api response
  *
  * @return {object} -created business
  */
const addBusiness = (req, res) => {
  const lastItem = businesses[businesses.length - 1];
  const id = lastItem.id + 1;
  const newBusiness = new Business(
    id,
    req.body.title,
    req.body.category,
    req.body.location,
    req.body.description,
    req.body.phone,
    req.body.email,
    req.body.ownerId
  );
  console.log(newBusiness);
  businesses.push(newBusiness);
  return res.status(201).json({
    message: 'business created successfully',
    'Your Business': newBusiness
  });
};

/**
   * @description modifies an existing business
   *
   * @param {object} req - api request
   * @param {object} res - api response
   *
   * @return {object} -modified business
   */
const modifyBusinessProfile = (req, res) => {
  const businessId = parseInt(req.params.businessId, 10);
  const arrayOfId = businesses.map(business => business.id);
  const indexToBeModified = arrayOfId.indexOf(businessId);
  if (req.body.id) {
    return res.status(400).json({
      message: 'Business Id cannot be changed!'
    });
  }
  if (req.body.ownerId) {
    return res.status(400).json({
      message: 'Business ownerId cannot be changed!'
    });
  }
  if (req.body.title) {
    businesses[indexToBeModified].title = req.body.title;
  }
  if (req.body.category) {
    businesses[indexToBeModified].category = req.body.category;
  }
  if (req.body.location) {
    businesses[indexToBeModified].location = req.body.location;
  }
  if (req.body.description) {
    businesses[indexToBeModified].title = req.body.description;
  }
  if (req.body.phone) {
    businesses[indexToBeModified].category = req.body.phone;
  }
  if (req.body.email) {
    businesses[indexToBeModified].location = req.body.email;
  }
  const indexThatWasModified = indexToBeModified;
  return res.status(200).json({
    message: 'profile successfully modified',
    'updated business': businesses[indexThatWasModified]
  });
};

/**
  * @description deletes a business
  *
  * @param {object} req -api request
  * @param {object} res -api response
  *
  * @return {object} -message
  */
const deleteBusiness = (req, res) => {
  const businessId = parseInt(req.params.businessId, 10);
  const arrayOfId = businesses.map(business => business.id);

  const indexToBePopped = arrayOfId.indexOf(businessId);
  businesses.splice(indexToBePopped, 1);
  return res.status(200).json({
    message: 'business was successfully deleted'
  });
};

/**
  * @description gets all businesses
  *
  * @param {object} req -api request
  * @param {object} res -api response
  *
  * @return {object} -all business
  */
const getBusinesses = (req, res) => {
  if (req.query.location && req.query.category) {
    const desiredLocation = req.query.location;
    const Locationmatches = businesses.filter(business => business.location === desiredLocation);
    if (Locationmatches.length === 0) {
      return res.status(200).json({
        message: 'No matching business in this search combination'
      });
    }
    const desiredCategory = req.query.category;
    const Finalmatches = Locationmatches.filter(business => business.category === desiredCategory);
    if (Finalmatches.length === 0) {
      return res.status(200).json({
        message: 'No matching business in this search combination'
      });
    }
    Finalmatches.forEach((business) => {
      const businessId = business.id;
      const Mycomments = comments.filter(comment => comment.businessId === businessId);
      business.comments = Mycomments;
    });
    return res.status(200).json({
      Business: Finalmatches
    });
  }
  if (req.query.location) {
    const desiredLocation = req.query.location;
    const matches = businesses.filter(business => business.location === desiredLocation);
    if (matches.length === 0) {
      return res.status(200).json({
        message: 'No matching business'
      });
    }
    matches.forEach((business) => {
      const businessId = business.id;
      const Mycomments = comments.filter(comment => comment.businessId === businessId);
      business.comments = Mycomments;
    });
    return res.status(200).json({
      Business: matches
    });
  }
  if (req.query.category) {
    const desiredCategory = req.query.category;
    const matches = businesses.filter(business => business.category === desiredCategory);
    if (matches.length === 0) {
      return res.status(200).json({
        message: 'No matching business'
      });
    }
    matches.forEach((business) => {
      const businessId = business.id;
      const Mycomments = comments.filter(comment => comment.businessId === businessId);
      business.comments = Mycomments;
    });
    return res.status(200).json({
      Business: matches
    });
  }
  if (businesses.length === 0) {
    return res.status(200).json({
      message: 'No Businesses yet'
    });
  }
   businesses.forEach((business) => {
    const businessId = business.id;
    const Mycomments = comments.filter(comment => comment.businessId === businessId);
    business.comments = Mycomments;
  });
  return res.status(200).json({
    businesses
  });
};

/**
  * @description -gets a specified business
  *
  * @param {object} req -api request
  * @param {object} res -api response
  *
  * @return {object} -the business
  */
const getBusiness = (req, res) => {
  const businessId = parseInt(req.params.businessId, 10);

  const profile = businesses.filter(business => business.id === businessId);
  const Mycomments = comments.filter(comment => comment.businessId === businessId);
  profile[0].comments = Mycomments;
  return res.status(200).json({
   profile
  });
};

const businessController = {
  addBusiness,
  modifyBusinessProfile,
  deleteBusiness,
  getBusinesses,
  getBusiness
};

export default businessController;