import {Platform} from 'react-native';

const styles = {
  tabBar: {
    opacity: 0.98,
    height: 50,
    justifyContent: 'space-between',
    // borderRadius: 99,
    // marginTop: 2,
    borderTopWidth: 1,
    borderTopColor: '#E4E6EB',

    ...Platform.select({
      ios: {
        // height: 25,
        // marginHorizontal: 20,
        // marginBottom: 20,
      },
      android: {
        // marginHorizontal: 10,
        // marginBottom: 10,
      },
    }),
  },

  legacyTab: {
    backgroundColor: '#fff',
    color: '#ccc',
    borderTopColor: '#E4E6EB',
    borderTopWidth: 1,
  },
};

export default styles;
