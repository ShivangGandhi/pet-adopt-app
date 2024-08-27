import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Header from '../../components/Home/Header'
import Slider from '../../components/Home/Slider'
import PetListByCategory from '../../components/Home/PetListByCategory'
import Colors from '../../constants/Colors'
import { MaterialIcons } from '@expo/vector-icons'
import { Link } from 'expo-router'

export default function Home() {
    return (
        <View style={{ flex: 1, padding: 20, marginTop: 40 }}>
            <Header />
            <Slider />
            <PetListByCategory />
            <Link href={'/add-new-pet'} style={styles.addNewPetContainer}>
                <MaterialIcons name='pets' size={24} color={Colors.PRIMARY} />
                <Text style={{
                    fontFamily: 'outift-medium',
                    color: Colors.PRIMARY,
                    fontSize: 18
                }}>
                    Add New Pet
                </Text>
            </Link>
        </View>
    )
}

const styles = StyleSheet.create({
    addNewPetContainer: {
        display: 'flex',
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center',
        padding: 20,
        marginTop: 20,
        backgroundColor: Colors.LIGHTPRIMARY,
        borderWidth: 1,
        borderColor: Colors.PRIMARY,
        borderRadius: 15,
        borderStyle: 'dashed',
        justifyContent: 'center',
        textAlign: 'center'
    }
})