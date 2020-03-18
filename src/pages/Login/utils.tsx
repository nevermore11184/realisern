import { LoginColors } from './constants';

export const validateEmail = (value: string, expression: RegExp) => expression.test(value);

export const animatedLabelStyles = (isFieldActive: boolean) => ({ // returns styles
  fontSize: isFieldActive ? 11.5 : 15,
  color: isFieldActive ? LoginColors.shiftedLabel : LoginColors.white,
  marginTop: isFieldActive ? 10 : 9,
  marginBottom: 30,
});

export const dynamicInputStyles = (isFieldActive: boolean): any => ({ // returns styles
  backgroundColor: isFieldActive ? LoginColors.white : LoginColors.basicTransparentWhite,
});
