import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import Colors from '../../constants/Colors'
import Feather from '@expo/vector-icons/Feather';

export default function OwnerInfo({ pet }) {

    const user = pet.user;
    return (
        <View style={{
            padding: 10,
        }}>
            <View style={styles.container}>
                <View style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: 20
                }}>
                    <Image source={{ uri: pet.user.imageUrl }} style={{
                        width: 50,
                        height: 50,
                        borderRadius: 99
                    }} />
                    <View>
                        <Text style={{
                            fontFamily: 'outfit-medium',
                            fontSize: 17
                        }}>{pet.user.name}</Text>
                        <Text style={{
                            fontFamily: 'outfit',
                            color: Colors.GRAY,
                        }}>Pet Owner</Text>
                    </View>
                </View>
                <Feather name="send" size={24} color={Colors.PRIMARY} />
            </View>
        </View>


    )
}

const styles = StyleSheet.create({
    container: {
        margin: 5,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20,
        borderWidth: 1,
        borderRadius: 15,
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: Colors.WHITE,
        borderColor: Colors.PRIMARY,
        justifyContent: 'space-between'
    }
})