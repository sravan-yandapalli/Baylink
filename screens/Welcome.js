import React, { useEffect } from "react";
import { StyleSheet, View, Image } from "react-native";
import { useNavigation } from '@react-navigation/native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default function Welcome() {
    const navigation = useNavigation(); // Get the navigation prop

    useEffect(() => {
        // Set a timer to navigate after 2 seconds
        const timer = setTimeout(() => {
            navigation.navigate('Log');
        }, 2000); // 2000 milliseconds = 2 seconds

        // Clean up the timer when the component is unmounted
        return () => clearTimeout(timer);
    }, [navigation]);

    return (
        <View style={styles.container}>
            <View style={{ paddingTop: hp("30%"), flex: 1 }}>
                <Image 
                    source={require("../assets/images/Group-1.png")} 
                    style={{
                        width: 250,
                        height: 250,
                        resizeMode: 'contain'
                    }} 
                />
                <View style={styles.container}>
                    <Image 
                        source={require("../assets/images/shnpl.png")} 
                        style={{ 
                            marginTop: 10,  
                            width: 250,
                            height: 100,
                            resizeMode: 'contain'
                        }} 
                    />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        alignItems: "center",
    },
});
