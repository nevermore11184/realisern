import React, {useState} from 'react';
import {View} from 'react-native';
import Wrapper from '../../../Wrapper';
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

const CredentialsFormScreen: React.FC<Props> = () => {
  const [localState, setLocalState] = useState({
    firstName: '',
  });
  const onChangeText = (fieldName: string) => (text: string): void => {
    setLocalState(prevState => ({
      ...prevState,
      [fieldName]: text,
    }));
  };
  return (
    <Wrapper bottomBarIncluded>
      <View style={styles.credentialsFormWrapper}>
        <ProgressBar progress={25} />
        <View style={styles.formWrapper}>
          {inputs.map(input => (
            <View key={input.name} style={styles.inputWrapper}>
              <FloatingTextInputField
                value={localState.firstName}
                title={input.title}
                inputStyles={styles.input}
                wrapperStyles={{
                  width: input.name === 'mobile' ? '70%' : '100%',
                }}
                onChangeText={onChangeText(input.name)}
                name={input.name}
                label={input.label}
              />
              {input.name === 'mobile' && (
                <StandardButton
                  additionalWrapperStyles={{...styles.standardButtonWrapper}}
                  additionalStyles={{...styles.standardButton}}
                  onPress={() => 'test'}
                  title={'Verify'}
                />
              )}
            </View>
          ))}
        </View>
      </View>
    </Wrapper>
  );
};

export default CredentialsFormScreen;
