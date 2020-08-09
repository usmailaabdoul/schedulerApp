import React from 'react';
import {View} from 'react-native';

import Icon from 'react-native-vector-icons/AntDesign';

import Screens from './../TabIcons/Screens';
import styles from './Tabicons.style';

const TabIcon = ({title, focused, selected}) => {
  let iconName = '';
  switch (title) {
    case Screens.HOME:
      iconName = 'appstore1';
      break;
    case Screens.NewSchedule:
      iconName = 'plus';
      break;
    case Screens.Drawer:
      iconName = 'menuunfold';
      break;
  }

  return (
    <View style={[styles.mainWrapper]}>
      <View
        style={[
          styles.iconContainer,
          focused && title !== 'NewSchedule' ? styles.iconFocused : null,
        ]}>
        {title === 'NewSchedule' ? (
          <View style={styles.newSchedule}>
            <Icon name={iconName} size={25} color="#fff" />
          </View>
        ) : (
          <Icon name={iconName} size={25} color="#4565ec" />
        )}
      </View>
    </View>
  );
};

export default TabIcon;
