import { View, Text, Pressable } from 'react-native'
import React, { useState } from 'react'
import Colors from '../../constants/Colors'

export default function AboutPet({ pet }) {

    const [readMore, setReadMore] = useState(true)


    return (
        <View style={{
            padding: 10,
        }}>
            <View style={{
                backgroundColor: Colors.WHITE,
                paddingVertical: 20,
                paddingHorizontal: 10,
                margin: 5,
                borderRadius: 8,
                gap: 10,
            }}>
                <Text style={{
                    fontFamily: 'outfit-medium',
                    fontSize: 20
                }}>About {pet.name}</Text>
                <Text numberOfLines={readMore ? 4 : 20} style={{
                    fontFamily: 'outfit',
                    fontSize: 16,
                    color: Colors.GRAY
                }}>About {pet.about}</Text>
                {readMore && <Pressable onPress={() => setReadMore(false)}>
                    <Text style={{
                        fontFamily: 'outfit-medium',
                        fontSize: 16,
                        color: Colors.SECONDARY
                    }}>Read More</Text></Pressable>}
            </View>
        </View>

    )
}