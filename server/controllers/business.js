/**
 * Controller to handle :
     Adding a new business
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

const businessController = { addBusiness };

export default businessController;
