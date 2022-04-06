import { mapValues } from "lodash";
export const action_types = {
  UPDATE_INPUT_VALUE: 'UPDATE_INPUT_VALUE',
  UPDATE_INPUT_ERROR: 'UPDATE_INPUT_ERROR',
  UPDATE_INPUT_ERRORS: 'UPDATE_INPUT_ERRORS',
  RESET_INPUT_ERROR: 'RESET_INPUT_ERROR',
  RESET_FORM: 'RESET_FORM'
}
const { UPDATE_INPUT_VALUE, UPDATE_INPUT_ERROR, UPDATE_INPUT_ERRORS, RESET_INPUT_ERROR, RESET_FORM } = action_types;

export const updateInputValue = (payload) => {
  return { 
    type: UPDATE_INPUT_VALUE,
    payload
  }
}

export const updateInputError = (payload) => {
  return { 
    type: UPDATE_INPUT_ERROR,
    payload
  }
}

export const resetInputError = (payload) => {
  return {
    type: RESET_INPUT_ERROR,
    payload
  }
}

export const updateInputErrors = (payload) => {
  return {
    type: UPDATE_INPUT_ERRORS,
    payload
  }
}

export const resetForm = (payload) => {
  return {
    type: RESET_FORM,
    payload
  } 
}

const onUpdateInputValue = (state, action) => {

  const { name, value } = action.payload || {};

  state.values[name] = value;
}

const onUpdateInputError = (state, action) => {

  const { name, error } = action.payload || {};

  state.errors[name] = error;
}

const onUpdateInputErrors = (state, action) => {

  const errors = action.payload || {};

  state.errors = errors;
}

const onResetInputError = (state, action) => {

  const { name } = action.payload || {};

  state.values[name] = ''
}

const onResetForm = (state, payload) => {

  const values = mapValues(state.values, () => '');
  const errors = mapValues(state.errors, () => '');

  state.values = values;
  state.errors = errors;
}

const actionHandlers = {
  [RESET_FORM]: onResetForm,
  [RESET_INPUT_ERROR]: onResetInputError,
  [UPDATE_INPUT_ERRORS]: onUpdateInputErrors,
  [UPDATE_INPUT_VALUE]: onUpdateInputValue,
  [UPDATE_INPUT_ERROR]: onUpdateInputError
}

const formReducer = (state, action) => {
  
  const actionHandler = actionHandlers[action.type];

  return actionHandler ? actionHandler(state, action) : state;
}

export default formReducer;