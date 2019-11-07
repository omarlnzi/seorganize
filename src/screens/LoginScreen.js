import React  from 'react';
import { View, StyleSheet, ImageBackground, ImageBackgroundBase } from 'react-native';
//import Home from '../screens/Home'

import { Input, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

type Props = {};
export default class LoginScreen extends React.Component<Props>{
	constructor(props) {
    super(props);
    this.state = {
      teste: false,
    };
	}
	
	static navigationOptions = {
		header: null
	}
	render(){
		return(
			<View style={{flex: 1}}>
				<ImageBackground
					resizeMode={'cover'} // or cover
          style={{flex: 1}} // must be passed from the parent, the number may vary depending upon your screen size
          source={require('../img/fundo2.png')}
				>

					<View style={styles.container}>
						
						<Input
							style={styles.Input}
							placeholder={'Email'}
							placeholderTextColor='white'
							inputStyle={{ marginLeft: 10,  color: 'white' }}
								containerStyle={{
								borderBottomColor: 'white',
							}}
							labelStyle ={{marginLeft: 10 , color: 'white'}}
							leftIcon={
								<Icon
									name="envelope"
									type="font-awesome"
									size={25}
									color='white'
								/>
							}
							containerStyle={{ marginVertical: 10 }}
							label='Email ou Usuario'
						/>	
						<Input
							style={styles.Input}
							placeholder='Senha'
							placeholderTextColor='white'
							inputStyle={{ marginLeft: 18 , color: 'white' }}
							containerStyle={{
								//borderBottomColor: 'black',
								elevation: 1,
							}}
							labelStyle ={{marginLeft: 10 , color: 'white'}}
							leftIcon={
								<Icon
									name="lock"
									type="font-awesome"
									size={25}
									color='white'
									
								/>
							}
							secureTextEntry={true}
							label='Senha'
						/>
						<View style={styles.ButtonLoginView}>
							<Button
								buttonStyle={styles.loginButton}
								titleStyle={styles.loginTextButton}
								title="Login"
								containerStyle={{ marginTop: 32, flex: 0,  }}
								onPress={(parameters)=> this.props.navigation.navigate('Home', parameters)}
							/>

						</View>
					</View>
					
					
					
				</ImageBackground>
				
				
			</View>
		
		);
	}
}

const styles = StyleSheet.create({
	ButtonLoginView: {
		justifyContent: 'center',
		alignItems: 'center',
	},

	loginTextButton: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
  loginButton: {
    backgroundColor: '#25B5C4',
    borderRadius: 10,
    height: 50,
    width: 200,
	},
	container:{
		flex: 1,
		//alignItems: "center",
		justifyContent:"center"
	}
	
}); 