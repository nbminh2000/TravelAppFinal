import { StyleSheet } from 'react-native';
import { PlaceCard } from '../../AppStyles';

const styles = StyleSheet.create({
  container: PlaceCard.container,
  photo: PlaceCard.photo,
  title: PlaceCard.title,
  city: PlaceCard.city,
  DarkOverlay: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    height: 270,
    backgroundColor: '#000',
    opacity: 0.2,
    borderBottomRightRadius: 65
  },
  searchContainer:{
    paddingTop: 100
  },
  UserGreet: {
    fontSize: 38,
    fontWeight: 'bold',
    color: 'white'
  },
  userText: {
    fontSize: 16,
    fontWeight: 'normal',
    color: 'white'
  },
  searchbox: {
    marginTop: 16,
    backgroundColor: '#fff',
    paddingLeft: 24,
    padding: 12,
    borderTopRightRadius: 40,
    borderBottomRightRadius: 40,
    width: '90%'
  }
});

export default styles;
