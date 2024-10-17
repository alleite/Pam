import React, { useState } from 'react';
import { View, ScrollView, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';

export default function List() {
    const names = [
        {
            id: 0, nome: 'Água Mineral',
            descricao: 'Água mineral natural sem gás 500ml',
            igredientes: 'Bicarbonato: 66,06mg/l; Cálcio: 8,080mg/l; Sódio: 17,700mg/l; Magnésio: 0,363mg/l; Sulfato: 0,17mg/l; Potássio: 2,060mg/l; Estrôncio: 0,353mg/l; Fluoreto: 0,04mg/l; Carbonato: 5,21mg/l; Nitrato: 0,06mg/l.',
            preco: 'R$1,99',
            valorCalorico: '0kcal'
        },
        {
            id: 1, nome: 'Cebolitos',
            descricao: 'Com seu irresistível sabor de cebola, é delicioso e crocante, perfeito para saborear com amigos.',
            igredientes: 'Batata em flocos, óleo vegetal de palma, amido de trigo, farinha de milho, dextrose, maltodextrina, aromatizante. (Contém cebola em pó irradiada e soro do leite).',
            preco: 'R$9,99',
            valorCalorico: '172kcal'
        },
        {
            id: 2, nome: 'Chá Gelado Leão',
            descricao: 'O Ice Tea Leão Pêssego é uma bebida refrescante e saborosa que combina o chá preto com o suco de pêssego, criando um equilíbrio perfeito entre a acidez e a doçura.',
            igredientes: 'Água, Açúcar, Extrato Aquoso De Mate, Suco Concentrado De Pêssego, Acidulante Ácido Cítrico, Aroma Sintético Idêntico Ao Natural, Antioxidante Ácido Ascórbico, Conservadores Sorbato De Potássio E Benzoato De Sódio.',
            preco: 'R$7,99',
            valorCalorico: '69 kcal'
        },
        {
            id: 3, nome: 'Cup Noodles',
            descricao: 'Cup Noodles é um tipo de macarrão instantâneo preparado num copo de plástico.',
            igredientes: 'Farinha de trigo enriquecida com ferro e ácido fólico, gordura vegetal, tempero sabor carne defumada*, fécula de mandioca, proteína de soja texturizada temperada*, sal, milho em flocos, cloreto de potássio, cenoura em tiras*, cebolinha em anéis*, alho em pó*, realçadores de sabor glutamato monossódico, inosinato dissódico e guanilato dissódico, antiumectante dióxido de silício, reguladores de acidez carbonato de potássio e ácido cítrico, corantes caramelo IV e sintético idêntico ao natural betacaroteno, estabilizantes hexametafosfato de sódio, tripolifosfato de sódio e pirofosfato tetrassódico, aromatizantes, espessantes goma xantana e goma guar.',
            preco: 'R$3,80',
            valorCalorico: '138kcal'
        },
        {
            id: 4, nome: 'Pão francês',
            descricao: 'Pão francês é o produto fermentado, de forma característica, preparado obrigatoriamente com farinha de trigo, cloreto de sódio e água que apresenta casca crocante, de cor uniforme castanho-dourada, miolo de cor branco-creme, textura e granulação fina.',
            igredientes: 'farinha de trigo, água, fermento, sal e, às vezes, açúcar.',
            preco: 'R$16,98 por Kg',
            valorCalorico: '310Kcal'
        },
        {
            id: 5, nome: 'Danoninho',
            descricao: 'Danoninho é um produto alimentício da Danone voltado para o público infantil.',
            igredientes: 'Leite desnatado, açúcar, preparado de morango (água, frutose, polpa de morango, fosfato tricálcico, citrato de cálcio, amido modificado, zinco, vitamina E, ferro, maltodextrina, vitamina D, acidulante ácido cítrico, espessantes goma xantana, carboximetilcelulose e goma carragena, aromatizante, conservador sorbato de potássio e corante natural carmim cochonilha), creme, cálcio, cloreto de cálcio, fermento lácteo, quimosina, estabilizantes goma guar, carboximetilcelulose, goma carregena e goma xantana.',
            preco: 'R$7,49',
            valorCalorico: '41kcal'
        },
        {
            id: 6, nome: 'Requeijão Cremoso',
            descricao: 'Requeijão Vigor é líder de vendas no Brasil. É cremoso e gostoso.',
            igredientes: 'Creme de leite, massa coalhada (leite fluido pasteurizado, cloreto de sódio (sal), cloreto de cálcio, coalho, fermento lácteo e sorbato de potássio), concentrado proteico de soro de leite e leite, cloreto de sódio (sal), estabilizantes difosfato de sódio e polifosfato de sódio e conservador ácido sórbico.',
            preco: 'R$6,85',
            valorCalorico: '82Kcal'
        },
        {
            id: 7, nome: 'Cereal Matinal NESCAU',
            descricao: 'Bolinhas supercrocantes feitas com milho integral e aquele sabor delicioso de nescau.',
            igredientes: 'Farinha de milho integral, açúcar, farinha de milho enriquecida com ferro e ácido fólico, xarope de glicose, cacau em pó, oleína de palma, minerais [cálcio (carbonato de cálcio), ferro (ferro eletrolítico) e zinco (óxido de zinco)] e vitaminas [vitamina B3 (niancina), vitamina B5 (ácido pantotênico), vitamina B2 (riboflavina), vitamina B6 (cloridrato de piridoxina) e vitamina B9 (ácido fólico)], sal, aromatizantes, antiumectante hidrogenofosfato di-cálcico, corante caramelo IV, estabilizante fosfato trissódico e antioxidante mistura concentrada de tocoferois.',
            preco: 'R$15,64',
            valorCalorico: '154.66 kcal'
        },
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
        alert("Nome do produto clicado: " + item.nome + "\nDescrição do produto:  " + item.descricao + "\nIngredientes que compem o produto: " +
            item.igredientes + "\nPreço do produto: " + item.preco + "\nValor calorico do produto: " + item.valorCalorico);
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.titulo}>Rosario Market</Text>
            {renderItems()}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 35
    },
    botao: {
        padding: 16,
        marginTop: 3,
        backgroundColor: '#FFC0CB',
        alignItems: 'center',
        borderBottomWidth: 7,
        borderBlockColor: '#FFC0CB'
    },
    texto: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff'
    },
    imagem: {
        width: 400,
        height: 90,
        resizeMode: 'cover'
    }, 
    titulo:{
        fontSize: 50,
        color: '#FFC0CB'
    }
});
