import messaging from '@react-native-firebase/messaging';
import React, {useEffect} from 'react';
import {useColorScheme, View} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {IS_DARK_MODE} from '@constants/enum';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === IS_DARK_MODE.dark;
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  useEffect(() => {
    // 알림 권한 요청 (iOS 전용)
    const requestPermission = async () => {
      const authStatus = await messaging().requestPermission();
      console.log('FCM Permission Status:', authStatus);
    };

    // FCM 토큰 가져오기
    const getFCMToken = async () => {
      try {
        const token = await messaging().getToken();
        console.log('FCM Token:', token);
      } catch (error) {
        console.error('Error getting FCM token:', error);
      }
    };

    requestPermission();
    getFCMToken();

    // 포그라운드 메시지 수신 처리
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      console.log('FCM Message Received:', remoteMessage);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return <View style={backgroundStyle}></View>;
}

export default App;
