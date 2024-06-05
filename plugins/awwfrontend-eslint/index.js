const noOldMethod = require('./no-old-method');
const noPersianJsx = require('./no-persian-jsx');
const noPersianVar = require('./no-persian-var');

module.exports = {
  rules: {
    'no-old-method': noOldMethod,
    'no-persian-jsx': noPersianJsx,
    'no-persian-var': noPersianVar,
  },
};
