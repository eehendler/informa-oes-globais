const getCSS = (variavel) => {
    const bodyStyles = getComputedStyle(document.body)
    return bodyStyles.getPropertyValue(variavel)
}

const tickConfig = {
    family: getCSS('--font'),
    size: 16,
    color: getCSS('--primary-color')
}

export {getCSS, tickConfig}
color: getCSS('-primary-color'),
size: 16,
family: getCSS('--font')
const getCSS = (variavel) => {
    return getComputedStyle(document.body).getPropertyValue(variavel)
  }
  
  const tickConfig = {
    color: getCSS('--primary-color'),
    size: 16,
    family: getCSS('--font')
  }
  
  export { getCSS, tickConfig }