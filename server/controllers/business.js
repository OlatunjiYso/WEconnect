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

const addBusiness = (req, res) => {
  const arrayOfId = businesses.map(business => business.id);
const businessId = parseInt(req.body.id, 10);
  if (arrayOfId.indexOf(businessId) !== -1) {
     return res.status(400).json({
      message: 'A business with this Id already exist, please choose another Id'
    });
  }
  if (!req.body.id || req.body.id.trim().length === 0) {
    return res.status(400).json({
      message: 'businessId cannot be empty, please Input Id.'
    });
  }
  if (!req.body.title || req.body.title.trim().length === 0) {
    return res.status(400).json({
      message: 'business title cannot be empty, please Input business title.'
    });
  }
  if (!req.body.category || req.body.category.trim().length === 0) {
    return res.status(400).json({
      message: 'business category cannot be empty, please Input business category.'
    });
  }
  if (!req.body.location || req.body.location.trim().length === 0) {
    return res.status(400).json({
      message: 'business location cannot be empty, please Input business location.'
    });
  }
  const id = parseInt(req.body.id, 10);
  const newBusiness = new Business(id, req.body.title, req.body.category, req.body.location);
  businesses.push(newBusiness);
  res.status(201).json({
     message: 'business created successfully',
     businesses
   });
};

const modifyBusinessProfile = (req, res) => {
    const businessId = parseInt(req.params.id, 10);
    const arrayOfId = businesses.map(business => business.id);
      if (arrayOfId.indexOf(businessId) < 0) {
        return res.status(404).json({
          message: 'no business exist with specified id',
        });
      }
      const indexToBeModified = arrayOfId.indexOf(businessId);
    if (req.body.id) {
      return res.status(400).json({
        message: 'Business Id cannot be changed!'
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
    return res.status(200).json({
      message: 'profile successfully modified',
      Now: businesses[indexToBeModified]
    });
  };

  const deleteBusiness = (req, res) => {
    const businessId = parseInt(req.params.id, 10);
    const arrayOfId = businesses.map(business => business.id);
    if (arrayOfId.indexOf(businessId) < 0) {
      return res.status(404).json({
        message: 'profile with specified id not found'
      });
    }
    const indexToBePopped = arrayOfId.indexOf(businessId);
    businesses.splice(indexToBePopped, 1);
    return res.status(200).json({
      message: 'profile successfully deleted'
    });
  };

  const getBusinesses = (req, res) => {
      if (req.query.location) {
        const desiredLocation = req.query.location;
        const matches = businesses.filter(business => business.location === desiredLocation);
        if (matches.length === 0) {
          return res.status(200).json({
            message: 'No matching business'
          });
        }
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
        return res.status(200).json({
          Business: matches
        });
      }
    if (businesses.length === 0) {
      return res.status(200).json({
        message: 'No Businesses yet'
      });
    }
    return res.status(200).json({
      businesses
    });
  };

  const getBusiness = (req, res) => {
    const businessId = parseInt(req.params.id, 10);
    const arrayOfId = businesses.map(business => business.id);
    if (arrayOfId.indexOf(businessId) < 0) {
      return res.status(404).json({
        message: 'profile with specified id not found'
      });
    }
    const profile = businesses.filter(business => business.id === businessId);
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