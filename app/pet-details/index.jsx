import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import { useLocalSearchParams, useNavigation } from 'expo-router'
import PetInfo from '../../components/PetDetails/PetInfo';
import PetSubInfo from '../../components/PetDetails/PetSubInfo';
import AboutPet from '../../components/PetDetails/AboutPet';
import OwnerInfo from '../../components/PetDetails/OwnerInfo';
import Colors from '../../constants/Colors';


export default function PetDetails() {

    const petParams = useLocalSearchParams();
    const pet = JSON.parse(petParams.pet);
    const navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions({
            headerTransparent: true,
            headerTitle: ''
        })
    })

    return (
        <View>
            <ScrollView>
                <PetInfo pet={pet} />
                <PetSubInfo pet={pet} />
                <AboutPet pet={pet} />
                <OwnerInfo pet={pet} />
                <View style={{
                    height: 90
                }}></View>
            </ScrollView>
            <View style={styles.bottomContainer}>
                <TouchableOpacity style={styles.adoptBtn}>
                    <Text style={{
                        textAlign: 'center',
                        fontFamily: 'outfit-medium',
                        fontSize: 20
                    }}>Adopt Me</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    adoptBtn: {
        margin: 5,
        gap: 20,
        borderWidth: 1,
        borderRadius: 15,
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: Colors.PRIMARY
    },
    bottomContainer: {
        paddingHorizontal: 20,
        position: 'absolute',
        width: '100%',
        bottom: 30
    }
})