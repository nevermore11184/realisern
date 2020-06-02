import React from 'react';
import {Text} from 'react-native';
import i18n from '../../../../../../config/locales/customisation';

const Confirmation = () => {
  return (
    <Text>{i18n.t('signUpFlow.teacherFlow.confirmation.coreContent')}</Text>
  );
};

export default Confirmation;
