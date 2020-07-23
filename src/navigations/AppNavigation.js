import { createAppContainer } from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer'
import {createStackNavigator} from 'react-navigation-stack'
import HomeScreen from '../screens/Home/HomeScreen';
import CitiesScreen from '../screens/Cities/CitiesScreen';
import PlaceScreen from '../screens/Place/PlaceScreen';
import PlacesListScreen from '../screens/PlacesList/PlacesListScreen';
import DrawerContainer from '../screens/DrawerContainer/DrawerContainer';
import SearchScreen from '../screens/Search/SearchScreen';


const MainNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Cities: CitiesScreen,
    Place: PlaceScreen,
    PlacesList: PlacesListScreen,
    Search: SearchScreen
  },
  {
    initialRouteName: 'Home',
    defaulfNavigationOptions: ({ navigation }) => ({
      headerTitleStyle: {
        fontWeight: 'bold',
        textAlign: 'center',
        alignSelf: 'center',
        flex: 1,
      }
    })
  }
); 


const DrawerStack = createDrawerNavigator(
  {
    Main: MainNavigator
  },
  {
    drawerPosition: 'left',
    initialRouteName: 'Main',
    drawerWidth: 250,
    contentComponent: DrawerContainer
  }
);

 
export default AppContainer = createAppContainer(DrawerStack);

console.disableYellowBox = true;