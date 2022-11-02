module.exports = {
  plugins: [
    {
      name: 'removeAttrs',
      params: {
        attrs: '(fill|stroke|fill-rule)',
      },
    },
  ],
}
// svgo版本：v1.0用yml，v2.0用js
// https://github.com/svg/svgo
