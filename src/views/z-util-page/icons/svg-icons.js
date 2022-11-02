// const req = require.context('@/icons/svg', false, /\.svg$/)
// const requireAll = (requireContext) => requireContext.keys()
//
// const re = /\.\/(.*)\.svg/
//
// const svgIcons = requireAll(req).map((i) => {
//   return i.match(re)[1]
// })
//
// export default svgIcons
const req = require.context('@/icons/svg', false, /\.svg$/)
const reqColor = require.context('@/icons/svg/color-svg', false, /\.svg$/)
const requireAll = (requireContext) => requireContext.keys()

const re = /\.\/(.*)\.svg/

export const svgIcons = requireAll(req).map((i) => {
  return i.match(re)[1]
  // return i.split('/').pop().split('.').shift()
})
export const svgColorIcons = requireAll(reqColor).map((i) => {
  return i.match(re)[1]
})
