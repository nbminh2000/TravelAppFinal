import React from 'react';
import {
  FlatList,
  Text,
  View,
  Image,
  TouchableHighlight
} from 'react-native';
import styles from './styles';
import { cities } from '../../data/dataArrays';
import { getNumberOfPlaces } from '../../data/MockDataAPI';

export default class CitiesScreen extends React.Component {
  static navigationOptions = {
    title: 'Cities'
  };

  constructor(props) {
    super(props);
  }

  onPressCity = item => {
    const title = item.name;
    const city = item;
    this.props.navigation.navigate('PlacesList', { city, title });
  };

  renderCity = ({ item }) => (
    <TouchableHighlight underlayColor='rgba(73,182,77,1,0.9)' onPress={() => this.onPressCity(item)}>
      <View style={styles.citiesItemContainer}>
        <Image style={styles.citiesPhoto} source={{ uri: item.photo_url }} />
        <Text style={styles.citiesName}>{item.name}</Text>
        <Text style={styles.citiesInfo}>{getNumberOfPlaces(item.id)} places</Text>
      </View>
    </TouchableHighlight>
  );

  render() {
    return (
      <View>
        <FlatList
          data={cities}
          renderItem={this.renderCity}
          keyExtractor={item => `${item.id}`}
        />
      </View>
    );
  }
}
