import {Platform} from 'react-native';

const styles = {
  mainContainer: {
    flex: 1,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginVertical: 15,
  },
  greetingText: {
    fontSize: 25,
    fontWeight: '700',
    color: '#25265e',
  },
  profileImage: {
    width: 45,
    height: 45,
    borderRadius: 99,
    borderWidth: 2,
    borderColor: '#4565EC',
  },
  cardContainer: {
    paddingHorizontal: 20,
  },
  dateText: {
    color: '#00000080',
    fontSize: 15,
    marginVertical: 7,
    fontWeight: '500',
  },
  card: {
    marginVertical: 10,
    padding: 15,
    borderLeftWidth: 4,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    color: '#25265e',
    fontWeight: '500',
  },
  time: {
    color: '#00000080',
    paddingVertical: 10,
  },
  imagesContainer: {
    flexDirection: 'row',
  },
  imagesWrapper: {
    paddingRight: 10,
  },
  images: {
    width: 40,
    height: 40,
    borderRadius: 99,
    borderWidth: 1.5,
    borderColor: '#f1f1f1',
  },
  sideDetails: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconButton: {
    backgroundColor: '#fff',
    padding: 7,
    borderRadius: 99,
    shadowColor: '#b9b900',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.3,
    elevation: 0.5,
    position: 'relative',
    marginVertical: 5,
  },
  sideDetailsText: {
    color: '#00000080',
    fontSize: 16,
  },
};

export default styles;
