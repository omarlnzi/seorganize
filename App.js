import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import LoginScreen from './src/screens/LoginScreen';
import Home from './src/screens/Home';
import Novo from './src/screens/Novo';

const StackNavigator = createStackNavigator({
  'Login': {
    screen: LoginScreen

  },
  'Home':{
    screen: Home, 
    
    navigationOptions: ({navigation}) => {
      return({
        title: 'Home',
        headerLeft: null,
        headerTitleStyle:{
          color: 'white',
          fontSize: 30,
        }
      })  
    } 
  },
  'Novo':{
    screen: Novo, 
    navigationOptions: ({navigation}) => {
      return({
        title: 'Novo Evento',
        headerTitleStyle:{
          color: 'white',
          fontSize: 30,
        }
      })  
    } 
  },
} , {
  defaultNavigationOptions: {
    title: "Login",
    headerTitleStyle: {
      color: 'white',
      fontSize: 30,
      flexGrow: 1,
      textAlign: 'center'
      
    }, headerStyle:{
      backgroundColor: '#25B5C4',
      borderBottomColor: '#C5C5C5',
      borderBottomWidht: 1
    }
  }

});

const AppContainer = createAppContainer(StackNavigator);
export default AppContainer;



