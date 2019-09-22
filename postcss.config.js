module.exports = {
  plugins: [
    require('autoprefixer'),
    require('postcss-modules')({
      scopeBehaviour: 'global'
    })
  ]
};
