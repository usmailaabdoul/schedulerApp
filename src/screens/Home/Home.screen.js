import React, {useEffect} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import Moment from 'react-moment';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import styles from './Home.style';

const Home = () => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.headerContainer}>
        <Text style={styles.greetingText}>Meetings</Text>
        <View>
          <Image
            source={require('../../../res/img/img2.jpeg')}
            style={styles.profileImage}
          />
        </View>
      </View>
      <ScrollView style={styles.cardContainer}>
        <Moment element={Text} style={styles.dateText} format="dddd, MMM DD" />
        <TouchableOpacity
          style={[
            styles.card,
            {backgroundColor: '#3dc8d940', borderColor: '#3dc8d9'},
          ]}>
          <View>
            <Text style={styles.title}>Product Planning</Text>
            <Text style={styles.time}>10:00 AM - 11:00 AM</Text>
            <View style={styles.imagesContainer}>
              <View style={styles.imagesWrapper}>
                <Image
                  source={require('../../../res/img/img1.jpeg')}
                  style={styles.images}
                />
              </View>
              <View style={styles.imagesWrapper}>
                <Image
                  source={require('../../../res/img/img2.jpeg')}
                  style={styles.images}
                />
              </View>
              <View style={styles.imagesWrapper}>
                <Image
                  source={require('../../../res/img/img3.jpeg')}
                  style={styles.images}
                />
              </View>
              <View style={styles.imagesWrapper}>
                <Image
                  source={require('../../../res/img/img4.jpg')}
                  style={styles.images}
                />
              </View>
            </View>
          </View>
          <View style={styles.sideDetails}>
            <View style={styles.iconButton}>
              <Icon
                name={'book-open-page-variant'}
                size={22}
                color="#3dc8d9ee"
              />
            </View>
            <Text style={styles.sideDetailsText}>Planning</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.card,
            {backgroundColor: '#F89B2B40', borderColor: '#F89B2B'},
          ]}>
          <View>
            <Text style={styles.title}>Design Iteration</Text>
            <Text style={styles.time}>11:15 AM - 01:00 PM</Text>
            <View style={styles.imagesContainer}>
              <View style={styles.imagesWrapper}>
                <Image
                  source={require('../../../res/img/img1.jpeg')}
                  style={styles.images}
                />
              </View>
              <View style={styles.imagesWrapper}>
                <Image
                  source={require('../../../res/img/img2.jpeg')}
                  style={styles.images}
                />
              </View>
              <View style={styles.imagesWrapper}>
                <Image
                  source={require('../../../res/img/img3.jpeg')}
                  style={styles.images}
                />
              </View>
            </View>
          </View>
          <View style={styles.sideDetails}>
            <View style={styles.iconButton}>
              <Icon
                name={'smart-card-reader-outline'}
                size={22}
                color="#F89B2Bee"
              />
            </View>
            <Text style={styles.sideDetailsText}>Design</Text>
          </View>
        </TouchableOpacity>

        <Moment element={Text} style={styles.dateText} format="dddd, MMM DD" />
        <TouchableOpacity
          style={[
            styles.card,
            {backgroundColor: '#948bfe40', borderColor: '#948bfe'},
          ]}>
          <View>
            <Text style={styles.title}>Investors {'&'} Executives</Text>
            <Text style={styles.time}>10:00 AM - 11:00 AM</Text>
            <View style={styles.imagesContainer}>
              <View style={styles.imagesWrapper}>
                <Image
                  source={require('../../../res/img/img1.jpeg')}
                  style={styles.images}
                />
              </View>
              <View style={styles.imagesWrapper}>
                <Image
                  source={require('../../../res/img/img2.jpeg')}
                  style={styles.images}
                />
              </View>
              <View style={styles.imagesWrapper}>
                <Image
                  source={require('../../../res/img/img3.jpeg')}
                  style={styles.images}
                />
              </View>
              <View style={styles.imagesWrapper}>
                <Image
                  source={require('../../../res/img/img4.jpg')}
                  style={styles.images}
                />
              </View>
            </View>
          </View>
          <View style={styles.sideDetails}>
            <View style={styles.iconButton}>
              <Icon name={'briefcase-account'} size={22} color="#948bfeee" />
            </View>
            <Text style={styles.sideDetailsText}>Business</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.card,
            {backgroundColor: '#f86c6e40', borderColor: '#f86c6e'},
          ]}>
          <View>
            <Text style={styles.title}>Engineering Handover</Text>
            <Text style={styles.time}>10:00 AM - 11:00 AM</Text>
            <View style={styles.imagesContainer}>
              <View style={styles.imagesWrapper}>
                <Image
                  source={require('../../../res/img/img1.jpeg')}
                  style={styles.images}
                />
              </View>
              <View style={styles.imagesWrapper}>
                <Image
                  source={require('../../../res/img/img2.jpeg')}
                  style={styles.images}
                />
              </View>
            </View>
          </View>
          <View style={styles.sideDetails}>
            <View style={styles.iconButton}>
              <Ionicons name={'settings'} size={22} color="#f86c6eee" />
            </View>
            <Text style={styles.sideDetailsText}>Developer</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.card,
            {backgroundColor: '#F89B2B40', borderColor: '#F89B2B'},
          ]}>
          <View>
            <Text style={styles.title}>Product Planning</Text>
            <Text style={styles.time}>10:00 AM - 11:00 AM</Text>
            <View style={styles.imagesContainer}>
              <View style={styles.imagesWrapper}>
                <Image
                  source={require('../../../res/img/img1.jpeg')}
                  style={styles.images}
                />
              </View>
              <View style={styles.imagesWrapper}>
                <Image
                  source={require('../../../res/img/img2.jpeg')}
                  style={styles.images}
                />
              </View>
              <View style={styles.imagesWrapper}>
                <Image
                  source={require('../../../res/img/img3.jpeg')}
                  style={styles.images}
                />
              </View>
              <View style={styles.imagesWrapper}>
                <Image
                  source={require('../../../res/img/img4.jpg')}
                  style={styles.images}
                />
              </View>
            </View>
          </View>
          <View style={styles.sideDetails}>
            <View style={styles.iconButton}>
              <Icon name={'floor-plan'} size={22} color="#F89B2Bee" />
            </View>
            <Text style={styles.sideDetailsText}>Planning</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
