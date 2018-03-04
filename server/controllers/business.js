/**
 * Controller to handle :
     Adding a new business,
     Modify business profile
 */

import Business from '../model/business';

import businesses from '../tables/businesses';

const addBusiness = (req, res) => {
  const arrayOfId = businesses.map((business) => {
    return business.id;
  });
const businessId = parseInt(req.body.id, 10);
  if (arrayOfId.indexOf(businessId) !== -1) {
     return res.status(400).json({
      message: 'A business with this Id already exist, please choose another Id'
    });
  }
  if (!req.body.id || req.body.id.trim().length === 0) {
    return res.status(400).json({
      message: 'businessId cannot be empty, please Input centre Id.'
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
  const newBusiness = new Business(id, req.body.name, req.body.capacity, req.body.location);
  businesses.push(newBusiness);
  res.status(201).json({
     message: 'business created successfully',
     businesses
   });
};

const modifyBusinessProfile = (req, res) => {
    const businessId = parseInt(req.params.id, 10);
    const arrayOfId = businesses.map((business) => {
        return business.id;
      });
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
const businessController = { addBusiness, modifyBusinessProfile };

export default businessController;
