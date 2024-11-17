import React, { useEffect, useState } from "react";
import { Button, View, StyleSheet, Text, TextInput,  ImageBackground } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function HomePage(props) {
    const navigation = useNavigation();
    const onJoinPress = (isHost) => {
        navigation.navigate(isHost ? 'HostPage' : 'AudiencePage', {
            userID: userID,
            userName: userID,
            liveID: liveID,
        })
    }
    const [userID, setUserID] = useState('');
    const [liveID, setLiveID] = useState('');
    useEffect(() => {
        setUserID(String(Math.floor(Math.random() * 100000)));
        setLiveID(String(Math.floor(Math.random() * 10000)));
    }, [])
    const insets = useSafeAreaInsets();
    return (
        <ImageBackground
        source={{ uri: 'https://wallpaperaccess.com/full/1567759.jpg' }}
        style={styles.background}
      >
        <View style={[styles.container, { paddingTop: insets.top, paddingBottom: insets.bottom }]}>
            <Text style={styles.userID}>Your User ID: {userID}</Text>
            <Text style={[styles.liveID, styles.leftPadding]}>Live ID:</Text>
            <TextInput
                placeholder="Enter the Live ID. e.g. 6666"
                style={[styles.input]}
                onChangeText={text => setLiveID(text.replace(/[^0-9A-Za-z_]/g, ''))}
                maxLength={4}
                value={liveID}
                placeholderTextColor='black'
            >
            </TextInput>
            <View style={[styles.buttonLine, styles.leftPadding]}>
                <Button disabled={liveID.length == 0} style={styles.button} title="Start a live" onPress={() => { onJoinPress(true) }} />
                <View style={styles.buttonSpacing} />
                <Button  disabled={liveID.length == 0} style={styles.button} title="Watch a live" onPress={() => { onJoinPress(false) }} />
            </View>
            {/* <View style={styles.buttonLine}>
                <Button title="Disconnect SDK" onPress={() => { ZegoUIKit.disconnectSDK() }} />
            </View> */}
        </View>
        </ImageBackground>
        
    )
}

const styles = StyleSheet.create({
    background: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 20,
    },
    buttonLine: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 20,
    },
    buttonSpacing: {
      width: 15,
    },
    input: {
      height: 50,
      width: '90%',
      borderWidth: 1,
      borderRadius: 12,
      borderColor: '#666',
      paddingLeft: 16,
      paddingRight: 16,
      fontSize: 16,
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
      color: 'black',
      marginBottom: 20,
      fontFamily:'serif',
    },
    userID: {
      fontSize: 16,
      color: '#ffffff',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      padding: 10,
      borderRadius: 10,
      marginBottom: 20,
      fontFamily:'serif',

    },
    liveID: {
      fontSize: 16,
      color: '#ffffff',
      alignSelf: 'flex-start',
      marginBottom: 10,
      marginLeft: 20,
      backgroundColor: 'rgba(50, 10, 50, 0.6)',
      padding: 10,
      fontFamily:'serif',

      borderRadius: 10,
    },
    button: {
      flex: 1,
      height: 50,
      borderRadius: 12,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#007BFF',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
      
    },
    buttonText: {
      color: '#ffffff',
      fontSize: 16,
      fontWeight: 'bold',
      
    },
    leftPadding: {
      width: '90%',
    },
  });
  