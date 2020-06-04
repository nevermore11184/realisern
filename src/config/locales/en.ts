import SearchIcon from "../../assets/icons/SignUpTeacherFlow_Finish/SearchIcon";
import UnlockIcon from "../../assets/icons/SignUpTeacherFlow_Finish/UnlockIcon";
import ReadIcon from "../../assets/icons/SignUpTeacherFlow_Finish/ReadIcon";
import JoinIcon from "../../assets/icons/SignUpTeacherFlow_Finish/JoinIcon";
import React from "react";

export default {
  loginFlow: {
    forgotPassword: 'Forgotten password?',
    rememberMe: 'Remember me?',
    or: 'OR',
    notMember: 'Not a member? Sign up',
    here: 'here',
    resetPassword: {
      firstStep: {
        resetPasswordTitle: 'Reset your password',
        resetPasswordText:
          'Enter your mobile number or email address you signed up with, we`ll send you a code to reset your password.',
      },
      secondStep: {
        enterCode: 'Please enter the code and confirm your new password',
        bottomHelpText: {
          firstString: 'Haven`t received an email?',
          secondString:
            'If you cannot see the email in your inbox, please check your spam folder. Contact us info@realiseme.com',
        },
      },
      thirdStep: {
        title: 'You have reset your password',
      },
    },
    social: {
      buttonContentFacebook: 'Login with Facebook',
      buttonContentTwitter: 'Login with Twitter',
      buttonContentGoogle: 'Login with Google',
    },
  },
  signUpFlow: {
    homePage: {
      title: 'SIGN UP',
      iconsTitle: {
        teacher: 'I am a teacher',
        school: 'I am a school',
      },
    },
    teacherFlow: {
      firstScreen: {
        welcome: 'Welcome',
        pageContent:
          'We need some information from you to create your account. You can always edit or add additional information in the future!',
      },
      thirdScreen: {
        pageTitle: 'Are you looking for supply work?',
        postCodeText: 'find address',
        cantFind: "can't find? add manually",
      },
      fourthScreen: {
        title:
          'Answer the next 5 questions to help us match you with your perfect school',
      },
      facts: {
        contentTitle: 'Profiling questions',
        contentText: 'How would you describe what drives you?',
        sliderTitle: 'Facts',
      },
      academicallyFocused: {
        contentTitle: 'Profiling questions',
        contentText: 'What do you look for in a school`s environment',
        sliderTitle: 'Academically focused',
      },
      methodical: {
        contentTitle: 'Profiling questions',
        contentText:
          'Do you work in a structured, methodical way or are you more flexible and adaptable?',
        sliderTitle: 'Methodical',
      },
      networking: {
        contentTitle: 'Profiling questions',
        contentText: 'How would you describe your behaviour management style?',
        sliderTitle: 'Strict',
      },
      target: {
        contentTitle: 'Profiling questions',
        contentText:
          'Do you enjoy working in a collaborative environment or prefer working independently?',
        sliderTitle: 'Strict',
      },
      confirmation: {
        coreContent:
          'I confirm by creating this account that I agree to RealiseMe’s',
        privacy: ' Privacy Policy',
        and: ' and',
        termsConditions: ' Terms and Conditions',
        agree: 'I agree',
        notAgree: 'I don`t agree',
      },
      finishScreen: {
        title: 'You`re all set!',
        thanks: 'Thanks for registering at RealiseMe, you can now:',
        search: 'search for your next teaching job',
        unlock: 'unlock more features by updating your account',
        read: 'read informative blogs written by teachers for teachers',
        join: 'join our supportive community forum',
      },
    },
  },
};
