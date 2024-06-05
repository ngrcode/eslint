module.exports = {
  meta: {
    type: 'problem',
    hasSuggestions: true,
    fixable: true,
  },
  create: (context) => ({
    CallExpression(node) {
      if (node.callee.name === 'oldMethod') {
        context.report({
          node,
          message: 'Do not use old method',
          fix(fixer) {
            return [
              fixer.replaceTextRange([node.start, node.start], 'newMethod()'),
            ];
          },
        });
      }
    },
  }),
};
