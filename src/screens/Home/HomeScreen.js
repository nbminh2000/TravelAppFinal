import React from 'react';
import { FlatList, ScrollView, Text, View, TouchableHighlight, Image, ImageBackground } from 'react-native';
import styles from './styles';
import { places } from '../../data/dataArrays';
import MenuImage from '../../components/MenuImage/MenuImage';
import DrawerActions from 'react-navigation';
import { getCityName } from '../../data/MockDataAPI';
import { TextInput } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons'
import MenuButton from '../../components/MenuButton/MenuButton';

const image = { uri: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4635bcd4-4a1d-4e83-bbe4-9edf40e125d0/dbueus7-0b7c8ef4-937b-42dd-80b7-796b55cd0d28.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvNDYzNWJjZDQtNGExZC00ZTgzLWJiZTQtOWVkZjQwZTEyNWQwXC9kYnVldXM3LTBiN2M4ZWY0LTkzN2ItNDJkZC04MGI3LTc5NmI1NWNkMGQyOC5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.gVAxNOm20E86PCfVkhR-m-pi1CbJk3GRC8uZkTA9rQg" }




// export default Home;
export default class HomeScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Home',
    headerLeft: (
      <MenuImage
        onPress={() => {
          navigation.openDrawer();
        }}
      />
    )
  });

  constructor(props) {
    super(props);
  }
  onPressPlace = item => {
    this.props.navigation.navigate('Place', { item });
  };

  Navbar = () => {
    <View>
      <View>
        <ImageBackground
          source={image}
          style={{ width: '100%', height: 270 }}
          imageStyle={{ borderBottomRightRadius: 65 }}
        >
          <View style={styles.Dark}></View>
          <View style={styles.searchContainer}>
            <Text style={styles.UserGreet}>Hello my friend,</Text>
            <Text style={styles.userText}>Where would you like to go today?</Text>
          </View>
          <View>
            <TextInput
              style={styles.searchbox}
              placeholder='Search Destination'
              placeholderTextColor='#666'
            >
            </TextInput>
            <Feather name='search' size={22} color='#666' style={{ position: 'absolute', top: 30, right: 60, opacity: 0.6 }} />
          </View>
        </ImageBackground>
      </View>
    </View>
  }

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
    return (
      <View>
        <View>
          <View>
            <ImageBackground
              source={image}
              style={{ width: '100%', height: 270 }}
              imageStyle={{ borderBottomRightRadius: 65 }}
            >
              <View style={styles.Dark}></View>
              <View style={styles.searchContainer}>
                <Text style={styles.UserGreet}>Hello my friend</Text>
                <Text style={styles.userText}>Where would you like to go today?</Text>
              </View>

              <TouchableHighlight
              onPress={() => {
                navigation.navigate('Search');
                navigation.closeDrawer();
              }}
              >
                <View>
                  <Text
                    style={styles.searchbox}
                    TextColor='#666'>
                    Search Destination
                  </Text>
                  <Feather name='search' size={22} color='#666' style={{ position: 'absolute', top: 30, right: 60, opacity: 0.6 }} />
                </View>
              </TouchableHighlight>
            </ImageBackground>
          </View>
        </View>
        <FlatList
          vertical
          showsVerticalScrollIndicator={false}
          numColumns={2}
          data={places}
          renderItem={this.renderPlaces}
          keyExtractor={item => `${item.placeId}`}
        />
      </View>
    );
  }
}
