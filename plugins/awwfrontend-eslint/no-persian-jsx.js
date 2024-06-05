/* eslint-disable no-restricted-syntax */
module.exports = {
  meta: {
    type: 'problem',
    hasSuggestions: true,
  },
  create: (context) => ({
    ReturnStatement(node) {
      const regex = /^[\u0600-\u06FF\s]+$/;
      if (node.argument.type === 'JSXElement') {
        const returnFunc = (obj) => {
          if (regex.test(obj.raw)) {
            context.report({
              node,
              message: 'Do not use persian character in jsx elements',
            });
          }
          if (obj.children) {
            for (const item of obj.children) {
              returnFunc(item);
            }
          }
        };
        returnFunc(node.argument);
      }
    },
  }),
};
