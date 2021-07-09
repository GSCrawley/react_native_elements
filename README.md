# react_native_elements

## just a place to experiment with elements i may use in my final project

###  import { Image } from 'react-native';
### export default function App() {
###  return (
###  <SafeAreaProvider>
    
###      <Image source={require('./images/banksy.jpeg')} 
###              style={{ width: 300, height: 300, borderRadius:150,
###                        margin: 80}}/>
    
###   </SafeAreaProvider>
###  );
### } 

### ^ that code produced the following image:
### ![alt text](./images/banksycircle.jpeg)

### Avatar as Button:

  <Avatar
			overlayContainerStyle={{backgroundColor: 'orange'}}
			size='xlarge'
			rounded
			source={require('./images/banksy.jpeg')}
            title="GC"
            onPress={() => console.log("Works!")}
            activeOpacity={0.2}

			/>
