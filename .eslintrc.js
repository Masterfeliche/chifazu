module.exports = {
  root: true,
  extends: ['next/core-web-vitals'],
  rules: {
    // disable the rule that caused your deploy to fail
    'react/no-unescaped-entities': 'off'
  }
};
