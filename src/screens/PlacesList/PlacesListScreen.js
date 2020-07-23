import React from 'react';
import {
  FlatList,
  Text,
  View,
  TouchableHighlight,
  Image
} from 'react-native';
import styles from './styles';
import { getPlaces, getCityName } from '../../data/MockDataAPI';

export default class PlacesListScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('title')
    };
  };

  constructor(props) {
    super(props);
  }

  onPressPlace = item => {
    this.props.navigation.navigate('Place', { item });
  };

  renderPlaces = ({ item }) => (
    <TouchableHighlight underlayColor='rgba(73,182,77,1,0.9)' onPress={() => this.onPressPlace(item)}>
      <View style={styles.container}>
        <Image style={styles.photo} source={{ uri: item.photo_url }} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.city}>{getCityName(item.cityId)}</Text>
      </View>
    </TouchableHighlight>
  );

  render() {
    const { navigation } = this.props;
    const item = navigation.getParam('city');
    const placesArray = getPlaces(item.id);
    return (
      <View>
        <FlatList
          vertical
          showsVerticalScrollIndicator={false}
          numColumns={2}
          data={placesArray}
          renderItem={this.renderPlaces}
          keyExtractor={item => `${item.placeId}`}
        />
      </View>
    );
  }
}
