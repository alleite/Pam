import React, {useState} from "react";
import { StyleSheet, Text, View, Button, ScrollView, TextInput} from "react-native";
import Slider from "@react-native-community/slider";


export default function Tela1({ navigation }) {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [Rg, setRg] = useState('');
    const [dias, setDias] = useState(365);

    return (
        <View style={styles.container}>
            <ScrollView>
                <Text style={styles.titulo}>Cadastro do Hotel</Text>
                <View style={styles.areaformulario}>
                    <Text style={styles.textoNome}>Nome: </Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={nome => setNome(nome)}
                        placeholder='Digite aqui o seu nome:'></TextInput>
                    <Text style={styles.texto}>Email </Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={email => setEmail(email)}
                        placeholder='Digite aqui o seu Email:'></TextInput>
                    <Text style={styles.textoNome}>Telefone: </Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={telefone => setTelefone(telefone)}
                        placeholder='Digite aqui o seu telefone:'></TextInput>

                    <Text style={styles.textoNome}>RG: </Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={Rg => setRg(Rg)}
                        placeholder='Digite aqui o seu RG: '></TextInput>
                    <View style={styles.valorCarro}>
                        <Text style={styles.textoNome}>Quantidade de dias:</Text>
                        <Text style={styles.carroTexto}>{dias.toFixed(0)}</Text>
                    </View>
                    <View style={styles.areaSlider}>
                        <Slider
                            minimumTrackTintColor='#BEF0BC'
                            minimumValue={1}
                            maximumValue={365}
                            value={dias}
                            onValueChange={(dias) => setDias(dias)}>
                        </Slider>
                    </View>
                </View>
            </ScrollView>

            <Button
                title="Próximo"
                onPress={() => navigation.navigate("Tela2")}>

            </Button>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#add8e6',
        alignItems: 'center',
        justifyContent: 'center',
    },
});