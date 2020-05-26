import React, {useState} from 'react';
import {View, Text} from 'react-native';
import SignUpTeacherWalker from '../../../SignUpTeacherWalker';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamsList} from '../../../../../navigation/RootNavigation';
import ProgressBar from '../components/ProgressBar';

import {styles} from './styles';
import i18n from '../../../../../config/locales/customisation';
import {radioButtons} from './constants';
import RadioButton from '../../../../../components/RadioButton';
import FloatingTextInputField from '../../../../../components/FloatingTextInput';
import RNPickerSelect from 'react-native-picker-select';
import SelectArrowDown from '../../../../../assets/icons/SelectArrowDown';

type NavigationScreenProp = StackNavigationProp<
  RootStackParamsList,
  'AddressFormScreen'
>;

interface Props {
  navigation: NavigationScreenProp;
}

const AddressFormScreen: React.FC<Props> = ({navigation}) => {
  const [radioValue, setRadioValue] = useState('no');

  const [localState, setLocalState] = useState({
    postCode: '',
    firstAddressLine: '',
    secondAddressLine: '',
    city: '',
    country: '',
  });

  const onLeftButtonFunction = () => {
    navigation.goBack();
  };
  const onRightButtonFunction = () => {
    navigation.navigate('SignUpTeacher', {screen: 'IntermediaryInfoScreen'});
  };

  const onSetRadio = (value: string) => () => setRadioValue(value);

  const onSetLocalState = (fieldName: string) => (text: string) => {
    setLocalState(prevState => ({
      ...prevState,
      [fieldName]: text,
    }));
  };
  return (
    <SignUpTeacherWalker
      bottomBarContent={{leftButton: '< back', rightButton: 'next >'}}
      multiBottomBarContent
      bottomBarIncluded
      onLeftButtonFunction={onLeftButtonFunction}
      onRightButtonFunction={onRightButtonFunction}>
      <View style={styles.addressFormContainer}>
        <ProgressBar progress={35} />
        <View style={styles.formWrapper}>
          <Text style={styles.pageTitle}>
            {i18n.t('signUpFlow.teacherFlow.thirdScreen.pageTitle')}
          </Text>
          <View style={styles.radioButtonsWrapper}>
            {radioButtons.map((radioButton: {value: string; label: string}) => (
              <React.Fragment>
                <RadioButton
                  onClick={onSetRadio(radioButton.value)}
                  label={radioButton.label}
                  isActive={radioButton.value === radioValue}
                />
              </React.Fragment>
            ))}
          </View>
          <View style={styles.postCodeWrapper}>
            <FloatingTextInputField
              value={localState.postCode}
              title={'postcode'}
              inputStyles={styles.input}
              wrapperStyles={styles.postCodeInputWrapper}
              onChangeText={onSetLocalState('postCode')}
              name={'postcode'}
              label={'Postcode'}
            />
            <Text style={styles.postCodeText}>
              {i18n.t('signUpFlow.teacherFlow.thirdScreen.postCodeText')}
            </Text>
          </View>
          <View style={styles.selectWrapper}>
            <RNPickerSelect
              style={{
                inputIOS: styles.selectInputIOS,
                inputAndroid: styles.selectInputAndroid,
              }}
              onValueChange={value => console.log(value)}
              items={[]}
              placeholder={{}}
              value={{}}
            />
            <SelectArrowDown />
          </View>
          <Text style={styles.selectAuxiliaryText}>
            {i18n.t('signUpFlow.teacherFlow.thirdScreen.cantFind')}
          </Text>
        </View>
        <View style={styles.addressWrapper}>
          <FloatingTextInputField
            value={localState.firstAddressLine}
            title={'address line 1'}
            inputStyles={styles.input}
            wrapperStyles={styles.addressInputWrapper}
            onChangeText={onSetLocalState('firstAddressLine')}
            name={'firstAddressLine'}
            label={'Address line 1'}
          />
          <FloatingTextInputField
            value={localState.secondAddressLine}
            title={'address line 2'}
            inputStyles={styles.input}
            wrapperStyles={styles.addressInputWrapper}
            onChangeText={onSetLocalState('secondAddressLine')}
            name={'secondAddressLine'}
            label={'Address line 2'}
          />
          <View style={styles.extraInputsWrapper}>
            <FloatingTextInputField
              value={localState.city}
              title={'city'}
              inputStyles={styles.input}
              wrapperStyles={styles.additionalInputWrapper}
              onChangeText={onSetLocalState('city')}
              name={'city'}
              label={'City'}
            />
            <FloatingTextInputField
              value={localState.country}
              title={'country'}
              inputStyles={styles.input}
              wrapperStyles={styles.additionalInputWrapper}
              onChangeText={onSetLocalState('country')}
              name={'country'}
              label={'Country'}
            />
          </View>
        </View>
      </View>
    </SignUpTeacherWalker>
  );
};

export default AddressFormScreen;
