import React, {useState} from 'react';
import {Platform, View} from 'react-native';
import SignUpTeacherWalker from '../../../SignUpTeacherWalker';
import ProgressBar from '../components/ProgressBar';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamsList} from '../../../../../navigation/RootNavigation';

import {styles} from './styles';
import {inputs} from './formConstants';
import FloatingTextInputField from '../../../../../components/FloatingTextInput';
import StandardButton from '../../../../../components/StandardButton';

type NavigationScreenProp = StackNavigationProp<
  RootStackParamsList,
  'CredentialsFormScreen'
>;

interface Props {
  navigation: NavigationScreenProp;
}

const CredentialsFormScreen: React.FC<Props> = props => {
  const {navigation} = props;
  const [localState, setLocalState] = useState({
    first_name: '',
    last_name: '',
    birth_date: '',
    role_title: '',
    mobile: '',
  } as {[key: string]: string});
  const onChangeText = (fieldName: string) => (text: string): void => {
    setLocalState(prevState => ({
      ...prevState,
      [fieldName]: text,
    }));
  };
  const onLeftButtonFunction = () => {
    navigation.goBack();
  };
  const onRightButtonFunction = () => {
    navigation.navigate('SignUpTeacher', {screen: 'AddressFormScreen'});
  };
  return (
    <SignUpTeacherWalker
      bottomBarContent={{leftButton: '< back', rightButton: 'next >'}}
      multiBottomBarContent
      bottomBarIncluded
      onLeftButtonFunction={onLeftButtonFunction}
      onRightButtonFunction={onRightButtonFunction}>
      <View style={styles.credentialsFormWrapper}>
        <ProgressBar progress={25} />
        <View style={styles.formWrapper}>
          {inputs.map(input => (
            <View key={input.name} style={styles.inputWrapper}>
              <FloatingTextInputField
                value={localState[input.value]}
                title={input.title}
                inputStyles={styles.input}
                wrapperStyles={{
                  width: input.name === 'mobile' ? '63%' : '100%',
                }}
                onChangeText={onChangeText(input.value)}
                name={input.name}
                label={input.label}
              />
              {input.name === 'mobile' && (
                <StandardButton
                  additionalWrapperStyles={{
                    ...styles.standardButtonWrapper,
                    marginTop: Platform.OS === 'ios' ? '7%' : '8%',
                  }}
                  additionalStyles={{...styles.standardButton}}
                  onPress={() => 'test'}
                  title={'Verify'}
                />
              )}
            </View>
          ))}
        </View>
      </View>
    </SignUpTeacherWalker>
  );
};

export default CredentialsFormScreen;
