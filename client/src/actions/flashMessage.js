import alertify from 'alertifyjs';

/**
 * @description - method responsible for displaying success message
 *
 * @param {obj} message -alert message
 *
 * @return { obj } - actionable object containing payload and type
 */
export const alertSuccess = (message) => {
  alertify.set('notifier', 'position', 'top-center');
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
  alertify.set('notifier', 'position', 'top-center');
  alertify.warning(message);
};

/**
 * @description - method responsible for displaying error message
 *
 * @param {obj} message -alert message
 *
 * @return { obj } - actionable object containing payload and type
 */
export const alertError = (message) => {
  alertify.set('notifier', 'position', 'top-center');
  alertify.error(message);
};
