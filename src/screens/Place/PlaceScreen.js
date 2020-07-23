import React from 'react';
import {
  FlatList,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
  TouchableHighlight
} from 'react-native';
import styles from './styles';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { getIngredientName, getCityName, getCityById } from '../../data/MockDataAPI';
import BackButton from '../../components/BackButton/BackButton';
// import ViewIngredientsButton from '../../components/ViewIngredientsButton/ViewIngredientsButton';

const { width: viewportWidth } = Dimensions.get('window');

export default class PlaceScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTransparent: 'true',
      headerLeft: (
        <BackButton
          onPress={() => {
            navigation.goBack();
          }}
        />
      )
    };
  };

  constructor(props) {
    super(props);
    this.state = {
      activeSlide: 0
    };
  }

  renderImage = ({ item }) => (
    <TouchableHighlight>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: item }} />
      </View>
    </TouchableHighlight>
  );

  

  render() {
    const { activeSlide } = this.state;
    const { navigation } = this.props;
    const item = navigation.getParam('item');
    const city = getCityById(item.cityId);
    const title = getCityName(city.id);

    return (
      <ScrollView style={styles.container}>
        <View style={styles.carouselContainer}>
          <View style={styles.carousel}>
            <Image style={styles.image} source={{ uri: item.photo_url }} />
            
          </View>
        </View>
        <View style={styles.infoPlaceContainer}>
          <Text style={styles.infoPlaceName}>{item.title}</Text>
          <View style={styles.infoContainer}>
            <TouchableHighlight
              onPress={() => navigation.navigate('PlacesList', { city, title })}
            >
              <Text style={styles.city}>{getCityName(item.cityId).toUpperCase()}</Text>
            </TouchableHighlight>
          </View>

          <View style={styles.infoContainer}>
            <Text style={styles.infoDescriptionPlace}>{item.description}</Text>
          </View>
        </View>
      </ScrollView>
    );
  }
}
