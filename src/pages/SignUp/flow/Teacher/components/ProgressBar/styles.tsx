import {StyleSheet} from 'react-native';
import {progressBarColors} from './constants';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 12,
    backgroundColor: progressBarColors.container,
  },
  progressBar: {
    flex: 1,
    backgroundColor: progressBarColors.tracker,
  },
});
