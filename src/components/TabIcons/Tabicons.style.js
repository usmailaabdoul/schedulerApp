import {Platform} from 'react-native';

const styles = {
  mainWrapper: {
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',

    ...Platform.select({
      ios: {
        position: 'absolute',
        top: 2,
      },
      android: {},
    }),
  },
  iconContainer: {
    alignItems: 'center',
    paddingBottom: 10,
    paddingHorizontal: 3,
    bottom: -10,
  },
  iconFocused: {
    borderBottomWidth: 3,
    borderBottomColor: '#1022D6',
  },
  iconName: {
    ...Platform.select({
      ios: {
        width: 30,
        height: 30,
      },
      android: {
        width: 25,
        height: 25,
      },
    }),
  },
  newSchedule: {
    backgroundColor: '#4565ec',
    borderRadius: 99,
    position: 'absolute',
    borderWidth: 6,
    borderColor: 'transparent',

    shadowColor: '#4565ec',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.5,
    elevation: 0.5,
    // position: 'relative',
    // marginVertical: 5,

    ...Platform.select({
      ios: {
        bottom: 8,
        padding: 15,
      },
      android: {
        bottom: 10,
        padding: 10,
      },
    }),
  },
  newScheduleWrapper: {
    borderRadius: 99,
    backgroundColor: '#1022D6',

    ...Platform.select({
      ios: {
        padding: 12,
      },
      android: {
        padding: 10,
      },
    }),
  },
  plusIcon: {
    ...Platform.select({
      ios: {
        width: 23,
        height: 23,
      },
      android: {
        width: 21,
        height: 21,
      },
    }),
    tintColor: '#fff',
  },
};

export default styles;
