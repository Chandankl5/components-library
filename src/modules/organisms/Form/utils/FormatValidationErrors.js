const formatValidationErrors = (items) => {

  let formattedErrors = {};

  items.forEach(({path, errors}) =>  formattedErrors[path] = (errors && errors[0]) );

  console.log("🚀 ~ file: FormatValidationErrors.js ~ line 4 ~ formatValidationErrors ~ formattedErrors", formattedErrors)

  return formattedErrors
}

export default formatValidationErrors;