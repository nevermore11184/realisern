import {buildStatusAction} from './utils/helpers';

const prefix = (text: string) => `login/${text}`;

const SET_USER = buildStatusAction(prefix('SET_USER'));

export default {
  SET_USER,
};
