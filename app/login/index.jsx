import { View, Text, Image, Pressable } from 'react-native';
import React, { useCallback } from 'react';
import Colors from '../../constants/Colors';
import * as WebBrowser from 'expo-web-browser';
import { useOAuth } from '@clerk/clerk-expo';
import * as Linking from 'expo-linking';

export const useWarmUpBrowser = () => {
  React.useEffect(() => {
    const warmUp = async () => {
      try {
        await WebBrowser.warmUpAsync();
        console.log("Browser warmed up");
      } catch (error) {
        console.error('Warm-up error', error);
      }
    };

    warmUp();

    return () => {
      const coolDown = async () => {
        try {
          await WebBrowser.coolDownAsync();
          console.log("Browser cooled down");
        } catch (error) {
          console.error('Cool-down error', error);
        }
      };

      coolDown();
    };
  }, []);
};

WebBrowser.maybeCompleteAuthSession();

export default function LoginScreen() {
  useWarmUpBrowser();

  const { startOAuthFlow } = useOAuth({ strategy: 'oauth_google' });

  const onPress = useCallback(async () => {
    try {
      console.log("OAuth flow started");

      const { createdSessionId, signIn, signUp, setActive } = await startOAuthFlow({
        redirectUrl: Linking.createURL('/(tabs)/home', { scheme: 'myapp' }),
      });

      if (createdSessionId) {
        console.log("OAuth session created: ", createdSessionId);
        // await setActive({ sessionId: createdSessionId });
        console.log("Session activated with createdSessionId");
      } else if (signIn?.createdSessionId || signUp?.createdSessionId) {
        const sessionId = signIn?.createdSessionId || signUp?.createdSessionId;
        console.log("OAuth signIn or signUp session: ", sessionId);
        await setActive({ sessionId });
        console.log("Session activated with signIn/signUp session");
      } else {
        console.error("No session created, unable to set active session");
      }
    } catch (err) {
      console.error('OAuth error', err);
    }
  }, []);

  return (
    <View style={{ backgroundColor: Colors.WHITE, height: '100%' }}>
      <Image source={require('./../../assets/images/login.png')} style={{ width: '100%', height: 500 }} />
      <View style={{ padding: 20, display: 'flex', alignItems: 'center' }}>
        <Text style={{ fontFamily: 'outfit-bold', fontSize: 30, textAlign: 'center' }}>
          Ready to make a new friend?
        </Text>
        <Text style={{ fontFamily: 'outfit', fontSize: 18, textAlign: 'center', color: Colors.GRAY }}>
          Let's adopt the pet which you like and make their life happy again
        </Text>
        <Pressable onPress={onPress} style={{ padding: 14, marginTop: 100, backgroundColor: Colors.PRIMARY, width: '100%', borderRadius: 14 }}>
          <Text style={{ textAlign: 'center', fontFamily: 'outfit-medium', fontSize: 20 }}>
            Get Started
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
