import React from 'react';
import { StyleSheet, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


const FloatButton = props => {

  const { onPress} = props;   
  return(
    <TouchableOpacity
			activeOpacity={0.7}
			onPress={onPress}
			style={styles.TouchableOpacityStyle}>

      <Icon
        name="plus-circle"
        type="font-awesome"
        size={60}
        color= '#25B5C4'
        style ={{
          backgroundColor:'white',
       
        }}
       
      />
			{/* <Image
				//We are making FAB using TouchableOpacity with an image
				//We are using online image here
				

				source={{
					uri:
						'https://raw.githubusercontent.com/AboutReact/sampleresource/master/plus_icon.png',
				}}
				//You can use you project image Example below
				//source={require('./images/float-add-icon.png')}
				style={styles.FloatingButtonStyle}
		/> */}
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    MainContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      //backgroundColor:'black'
      backgroundColor: '#F5F5F5',
    },
  
    TouchableOpacityStyle: {
      position: 'absolute',
      width: 60,
      height: 60,
      alignItems: 'center',
      justifyContent: 'center',
      right: 20,
      bottom: 20,
      
      //borderWidth: 1,
      //borderColor:'black'
    },
  
    FloatingButtonStyle: {
      resizeMode: 'contain',
      width: 50,
      height: 50,
      //color:'black',
      //backgroundColor:'white'
     
    },
  });

export default FloatButton;