// @ts-nocheck
import React, {useState} from 'react';
import {StyleSheet, View, Dimensions} from 'react-native';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import {CustomMarker} from './CustomMarker';
import {Item} from './Item';

interface Props {
  min: number;
  max: number;
  single: boolean;
  LRpadding: number;
  callBackSliderFunction: (arg: number) => void;
}

interface State {
  first: number;
  second: number;
  multiSliderValue: number[];
}

const CustomSlider: React.FC = (props: Props) => {
  const [state, setLocalState] = useState({
    multiSliderValue: [props.min, props.max],
    first: props.min,
    second: props.max,
  });

  const {LRpadding, single, min, max} = props;
  const {multiSliderValue} = state;
  const multiSliderValues = single
    ? [multiSliderValue[1]]
    : [multiSliderValue[0], multiSliderValue[1]];
  const sliderLength = Dimensions.get('window').width - LRpadding * 25;

  const renderScale = () => {
    const items = [];
    for (let i = props.min; i <= props.max; i++) {
      items.push(<Item value={i} first={state.first} second={state.second} />);
    }
    return items;
  };

  const multiSliderValuesChange = (values: number[]) => {
    const callBack = () => {
      props.callBackSliderFunction(state.second);
    };
    if (props.single) {
      setLocalState(
        {
          second: values[0],
        },
        callBack,
      );
    } else {
      setLocalState({
        multiSliderValue: values,
        first: values[0],
        second: values[1],
      });
    }
  };

  return (
    <View>
      <View
        style={[styles.row, {marginLeft: LRpadding, marginRight: LRpadding}]}>
        {renderScale()}
      </View>
      <View style={styles.container}>
        <MultiSlider
          trackStyle={styles.trackStyle}
          selectedStyle={styles.trackStyle}
          values={multiSliderValues}
          sliderLength={sliderLength}
          onValuesChange={multiSliderValuesChange}
          min={min}
          max={max}
          step={1}
          allowOverlap={false}
          customMarker={CustomMarker}
          snapped={true}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    bottom: -31.5,
    width: '100%',
  },
  trackStyle: {
    backgroundColor: '#D8D8D8',
    height: 5,
    width: '100%',
  },
});

export default CustomSlider;
