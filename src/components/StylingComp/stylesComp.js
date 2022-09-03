import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fafafa',
  },
  wrapper: {
    padding: 12,
    backgroundColor: '#ecf0f1',
    borderRadius: 8,
  },
  image: {
    borderRadius: 8,
    width: 188,
    height: 107,
  },
  titleText: {
    textTransform: 'uppercase',
    color: '#2c3e50',
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 8,
  },
  price: {
    fontSize: 14,
    color: '#e67e22',
  },
  location: {
    marginTop: 5,
    fontSize: 10,
    color: '#2c3e50',
  },
  button: {
    marginTop: 12,
    backgroundColor: '#1abc9c',
    padding: 4,
    borderRadius: 50,
  },
  textButton: {
    fontSize: 14,
    textAlign: 'center',
  },
});

export default styles;
