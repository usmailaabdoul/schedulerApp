import {Platform} from 'react-native';

const styles = {
  mainContainer: {
    flex: 1,
  },
  greetingText: {
    fontSize: 25,
    fontWeight: '700',
    color: '#25265e',
    marginHorizontal: 25,
    // marginVertical: 20,
  },
  titleTextInputWrapper: {
    marginHorizontal: 25,
    backgroundColor: '#948bfe40',
    paddingVertical: 20,
    paddingHorizontal: 35,
    borderRadius: 12,
  },
  detailsContainer: {
    marginHorizontal: 25,
    marginVertical: 30,
  },
  detailsWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 7,
  },
  detailsIcon: {
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    shadowColor: '#b9b900',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    elevation: 0.5,
    position: 'relative',
    marginVertical: 5,
    marginRight: 20,
  },
  dateText: {
    color: '#25265e',
    fontSize: 16,
    fontWeight: '500',
    marginLeft: 20,
  },
  titleTextInput: {
    flex: 1,
    height: 50,
  },
  descriptionTextInputWrapper: {
    marginVertical: 25,
    backgroundColor: '#f86c6e40',
    paddingVertical: 20,
    paddingLeft: 35,
    borderRadius: 18,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  descriptionIcon: {
    padding: 7,
    backgroundColor: '#fff',
    borderRadius: 99,
    shadowColor: '#b9b9b9',
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.5,
    elevation: 0.5,
    position: 'relative',
    marginVertical: 5,
    marginRight: 20,
  },
  footerTitle: {
    color: '#00065e',
    fontWeight: '600',
    fontSize: 16,
    marginHorizontal: 25,
  },
  buttons: {
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginRight: 10,
    marginVertical: 5,
  },
  buttonsWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: 25,
    marginVertical: 15,
  },
  buttonsText: {
    color: '#fff',
  },
  addButton: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#4565EC',
    marginVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  addButtonText: {
    color: '#4565EC',
  },
  footerButton: {
    backgroundColor: '#4565EC',
    paddingVertical: 13,
    marginHorizontal: 55,
    borderRadius: 8,
  },
  footerButtonText: {
    color: '#fff',
    fontWeight: '600',
    textAlign: 'center',
    fontSize: 18,
  },
};

export default styles;
