import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Image,
  StatusBar,
} from 'react-native';
import {Actions} from 'react-native-router-flux';

import styles from './Splash.style';

const Splash = () => {
  return (
    <View style={styles.mainContainer}>
      <StatusBar barStyle="light-content" />
      <View style={styles.imageContainer}>
        <Image
          source={require('../../../res/img/splash_Img.png')}
          style={styles.image}
        />
      </View>
      <View style={styles.bodyContainer}>
        <View style={styles.welcomeContainer}>
          <Text style={styles.welcomeText}>
            Welcome to your meetings calendar
          </Text>
          <Text style={styles.bodyText}>
            Best way to list your meetings. Here you can create and see all your
            meetings schedule with the time.
          </Text>
        </View>

        <TouchableOpacity
          onPress={() => Actions.home()}
          style={styles.buttonWrapper}>
          <Text style={styles.buttonText}>Get started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Splash;
