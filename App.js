/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  StyleSheet,
  View,
  ImageBackground,
  Text,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
  Button,
  Alert,
} from 'react-native';

// Utils
import {getCurrentTemp, getNextByInput} from './utils/api';
import getImageForWeather from './utils/getImageForWeather';
import getIconForWeather from './utils/getIconForWeather';

// Search component

// MomentJS
import moment from './moment';

// CLASS
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: '',
      next: '',
      nextByInput: '',
    };
  }

  // Life cycle
  componentDidMount() {
    getCurrentTemp().then(res => {
      console.log('hello', res);
      this.setState({
        current: res.current,
      });
    });
    getNextByInput().then(res => {
      this.setState({
        nextByInput: res.next,
      });
    });
  }
  // RENDERING
  render() {
    // GET values of state
    const {current, nextByInput} = this.state;

    // Activity
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <StatusBar barStyle="light-content" />

        <ImageBackground
          source={getImageForWeather('Light Cloud')}
          style={styles.imageContainer}
          imageStyle={styles.image}>
          <View style={styles.detailsContainer}>
            <View>
              <View>
                <Text style={[styles.largeText, styles.textStyle]}>
                  Hồ Chí Minh
                </Text>
                <Text style={[styles.largeText, styles.textStyle]}>
                  {getIconForWeather('Light Cloud')}
                  {`${Math.round(current)}°C`}
                </Text>
              </View>
              <View style={{flexDirection: 'row'}} />

              <View style={{flex: 1}}>
                <View style={{height: 64}} />
              </View>
              <Button
                color="#f100ff"
                onPress={() => {
                  Alert.alert(
                    'Get Weather Future!',
                    'Temperature  after 60p is ' +
                      `${Math.round(nextByInput)}°C`,
                    [{text: 'OK', onPress: () => console.log('OKPress')}],
                    {cancelable: false},
                  );
                }}
                title="Get Weather Future"
              />
            </View>
          </View>
        </ImageBackground>
      </KeyboardAvoidingView>
    );
  }
}
/* StyleSheet */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#34495E',
  },
  imageContainer: {
    flex: 1,
  },
  image: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
  },
  detailsContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.2)',
    paddingHorizontal: 20,
  },
  textStyle: {
    textAlign: 'center',
    fontFamily: Platform.OS === 'ios' ? 'AvenirNext-Regular' : 'Roboto',
    color: 'white',
  },
  largeText: {
    fontSize: 44,
  },
  smallText: {
    fontSize: 18,
  },
});
export default App;
