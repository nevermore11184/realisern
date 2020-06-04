import {loginColors} from '../../pages/Login/constants';

export const animatedLabelStyles = (
  isFieldActive: boolean,
  untouchedTitleSpacing: number | undefined,
) => ({
  // returns styles
  fontSize: isFieldActive ? 11.5 : 15,
  color: isFieldActive ? loginColors.shiftedLabel : loginColors.white,
  marginTop: isFieldActive ? 10 : untouchedTitleSpacing || 9,
  marginBottom: 30,
});

export const dynamicInputStyles = (isFieldActive: boolean): any => ({
  // returns styles
  backgroundColor: isFieldActive
    ? loginColors.white
    : loginColors.basicTransparentWhite,
});
