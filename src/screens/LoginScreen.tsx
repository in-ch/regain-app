import {View, useColorScheme, StatusBar, ScrollView} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

export default function LoginScreen() {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  return (
    <View style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView style={backgroundStyle}>
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
            paddingHorizontal: '5%',
            paddingBottom: '5%',
          }}></View>
      </ScrollView>
    </View>
  );
}
