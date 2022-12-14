import React from 'react';
import { View, Image, ScrollView, FlatList } from 'react-native';

import logoImg from '../../assets/logo-nlw-esports.png'
import { GameCard } from '../../components/GameCard';
import { Heading } from '../../components/Heading';

import { styles } from './styles';

import { GAMES } from "../../utils/games";

export function Home() {
    return (
        <ScrollView>
            <View style={styles.container}>
                <Image 
                    source={logoImg} 
                    style={styles.logo}
                />

                <Heading 
                    title="Encontre seu duo!" 
                    subtitle="Selecione o game que deseja jogar..." 
                />

                <FlatList 
                    contentContainerStyle={styles.contentList}
                    data={GAMES}
                    keyExtractor={item => item.id}
                    horizontal
                    renderItem={({item}) => (
                        <GameCard data={item} />
                    )}
                />
            </View>
        </ScrollView>
    );
}