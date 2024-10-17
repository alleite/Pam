import React, { useState } from 'react';
import { View, ScrollView, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';

export default function List() {
    const names = [
        { id: 0, nome: 'Princípe Cruel', autor: 'Holly Black'},
        { id: 1, nome: 'A culpa é das estrelas', autor: 'John Green'},
        { id: 2, nome: 'Criaturas e criadores', autor: 'Raphael Draccon, Carolina Munhoz, Frini Georgakopoulos e Raphael Montes'},
        { id: 3, nome: 'O código da Vinci', autor: 'Dan Brown' },
        { id: 4, nome: 'Uma ponte entre dois espiões', autor: 'Francis Gary Powers'},
        { id: 5, nome: 'Tartarugas até lá em baixo', autor: 'John Green'},
        { id: 6, nome: 'O canto mais escuro da floresta', autor:'Holly Black'},
        { id: 7, nome: 'Para todas as pessoas intensas', autor: 'Iandê Albuquerque' },
        { id: 8, nome: 'A cinco passos de você', autor: 'Rachael Lippincott'},
        { id: 9, nome: 'Desculpe o exagero, mas não sei sentir pouco', autor: 'Geffo Pinheiro'}
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
        alert("Você clicou no livro " + item.nome + " e seu autor ou autores são " + item.autor);
    };

    return (
        <ScrollView contentContainerStyle = {styles.container}>
            <Image style = {styles.imagem} source={require('../assets/image.png')}></Image>
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
    },
    imagem:{
        width:400,
        height:90,
        resizeMode:'cover'
    }
});
