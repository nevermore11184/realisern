import I18n from 'react-native-i18n';
import {Platform} from 'react-native';
import en from './en';

const key = Platform.OS === 'ios' ? 'en' : 'en-US';

I18n.translations = {
  [key]: en,
};

export default I18n;
