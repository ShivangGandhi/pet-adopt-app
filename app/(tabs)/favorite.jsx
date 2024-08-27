import { View, Text, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useUser } from '@clerk/clerk-expo';
import shared from '../../shared/shared';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../config/FirebaseConfig';
import PetListItem from '../../components/Home/PetListItem';

export default function Favorite() {
    const { user } = useUser();
    const [favIds, setFavIds] = useState([]);
    const [favPetList, setFavPetList] = useState([]);

    useEffect(() => {
        user && GetFavPetIds();
    }, [user]);

    const GetFavPetIds = async () => {
        const result = await shared.GetFavList(user);
        console.log(result);
        setFavIds(result.favorites || []);
        GetFavPetList(result.favorites)
    };

    const GetFavPetList = async (favIds) => {
        const q = query(collection(db, 'Pets'), where('id', 'in', favIds));
        const querySnapshot = await getDocs(q);
        const pets = [];
        querySnapshot.forEach((doc) => {
            pets.push(doc.data());
        });

        setFavPetList(prev => {
            const existingIds = new Set(prev.map(pet => pet.id));
            const newPets = pets.filter(pet => !existingIds.has(pet.id));
            return [...prev, ...newPets];
        });
    };

    return (
        <View style={{
            padding: 20,
            marginTop: 50
        }}>
            <Text style={{
                fontFamily: 'outfit-medium',
                fontSize: 30
            }}>Favorites</Text>

            <FlatList
                style={{ paddingTop: 20 }}
                data={favPetList}
                numColumns={2}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <PetListItem pet={item} />
                )}
            />
        </View>
    );
}
