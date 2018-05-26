import alertify from 'alertifyjs';

/**
* @description - method responsible for displaying success message
*
* @param {obj} message -alert message
*
* @return { obj } - actionable object containing payload and type
*/
export const alertSuccess = (message) => {
    alertify.set('notifier', 'position', 'top-right');
    alertify.success(message);
};

/**
* @description - method responsible for displaying warning message
*
* @param {obj} message -alert message
*
* @return { obj } - actionable object containing payload and type
*/
export const alertWarning = (message) => {
    alertify.set('notifier', 'position', 'top-right');
    alertify.success(message);
};