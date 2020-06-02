// @ts-nocheck
import React, {Component} from 'react';
import {StyleSheet, View, Dimensions} from 'react-native';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import CustomMarker from './CustomMarker';
import Item from './Item';

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

class CustomSlider extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      multiSliderValue: [this.props.min, this.props.max],
      first: this.props.min,
      second: this.props.max,
    };
  }

  render() {
    const {LRpadding, single, min, max} = this.props;
    const {multiSliderValue} = this.state;
    const multiSliderValues = single
      ? [multiSliderValue[1]]
      : [multiSliderValue[0], multiSliderValue[1]];
    const sliderLength = Dimensions.get('window').width - LRpadding * 25;

    return (
      <View>
        <View
          style={[styles.row, {marginLeft: LRpadding, marginRight: LRpadding}]}>
          {this.renderScale()}
        </View>
        <View style={styles.container}>
          <MultiSlider
            trackStyle={styles.trackStyle}
            selectedStyle={styles.trackStyle}
            values={multiSliderValues}
            sliderLength={sliderLength}
            onValuesChange={this.multiSliderValuesChange}
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
  }

  multiSliderValuesChange = (values: number[]) => {
    const callBack = () => {
      this.props.callBackSliderFunction(this.state.second);
    };
    if (this.props.single) {
      this.setState(
        {
          second: values[0],
        },
        callBack,
      );
    } else {
      this.setState({
        multiSliderValue: values,
        first: values[0],
        second: values[1],
      });
    }
  };

  renderScale = () => {
    const items = [];
    for (let i = this.props.min; i <= this.props.max; i++) {
      items.push(
        <Item value={i} first={this.state.first} second={this.state.second} />,
      );
    }
    return items;
  };
}

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
