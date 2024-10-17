import React, { useState } from 'react';
import { View, ScrollView, StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function List() {
    const names = [
        { id: 0, nome: 'Richard Rios'},
        { id: 1, nome: 'Tae Moo' },
        { id: 2, nome: 'Elize' },
        { id: 3, nome: 'Chico Moedas' },
        { id: 4, nome: 'Beltrão' },
        { id: 5, nome: 'Maciel' },
        { id: 6, nome: 'Marolento' },
        { id: 7, nome: 'Bella' },
        { id: 8, nome: 'Jaden' },
        { id: 9, nome: 'Kai' }
    ]

    const renderItems = () => {
        return names.map((item) =>

            <TouchableOpacity
                key={item.id}
                style={styles.botao}
                onPress={() => alertItemName(item)}
            >
                <View style={styles.item}>
                    <Text style={styles.texto}>
                        {item.nome}
                    </Text>
                </View>
            </TouchableOpacity>

        );
    };
    const alertItemName = (item) => {
        alert("Você clicou em \n " + item.nome);
    };

    return (
        <ScrollView contentContainerStyle = {styles.container}>
            {renderItems()}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 35
    },
    botao:{
        padding: 16,
        marginTop: 3,
        backgroundColor: '#ADD8E6',
        alignItems: 'center',
        borderBottomWidth: 7,
        borderBlockColor: '#B0E0E6'
    },
    texto:{
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff'
    }
});
