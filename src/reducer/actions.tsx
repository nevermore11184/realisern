import {createActionByTypes} from './utils/helpers';
import types from './types';

export default {
  setUser: createActionByTypes(types.SET_USER),
};
