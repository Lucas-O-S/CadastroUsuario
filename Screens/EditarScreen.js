import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useCallback, useState } from 'react';
import styles from "../Styles/TelaCadastroStyles";
import UsuarioController from '../Controller/UsuarioController';
import { useFocusEffect } from '@react-navigation/native';
import UsuarioModel from '../Models/UsuarioModel';


export default function TelaCadastroScreens({ navigation, route }) {
    const usuarioModel = route.params?.usuario;
    const [codigo, setCodigo] = useState("");
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [repetirSenha, setRepetirSenha] = useState("");
    const [mostrarSenha, setMostrarSenha] = useState(false);
    const [readOnly, setReadOnly] = useState(true);
    const [usuarioAntigo, setUsuarioAntigo] = useState(null);
    function LimparCampos() {
        setNome("");
        setEmail("");
        setSenha("");
        setRepetirSenha("");
    }

    function ChangeReadOnly() {
        setReadOnly(!readOnly);
    }



    function RestaurarDadosAntigo() {
        setCodigo(usuarioAntigo.id || "");
        setNome(usuarioAntigo.nome || "");
        setEmail(usuarioAntigo.email || "");
        setSenha(usuarioAntigo.senha || "");
        setRepetirSenha(usuarioAntigo.senha || "");
    }

    function SalvarUsuarioAntigo(){
        ///o {...} serve para criar uma copia do objeto
        setUsuarioAntigo({...usuarioModel});
        
    }

    useFocusEffect(
        useCallback(() => {
            setCodigo(usuarioModel.id?.toString() || "");
            setNome(usuarioModel.nome || "");
            setEmail(usuarioModel.email || "");
            setSenha(usuarioModel.senha || "");
        }, [])
    );


    return (
        <View style={styles.container}>

            <View style={styles.inputGroup}>
                <Text style={styles.label}>Código</Text>
                <TextInput
                    style={[styles.input, { backgroundColor: '#eee' }]}
                    value={(Number.parseInt(codigo) + 1).toString()}
                    editable={false}
                />
            </View>


            <View style={styles.inputGroup}>
                <Text style={styles.label}>Nome</Text>
                <TextInput
                    style={styles.input}
                    value={nome}
                    onChangeText={setNome}
                    editable = {!readOnly}
                />
            </View>

            <View style={styles.inputGroup}>
                <Text style={styles.label}>Email</Text>
                <TextInput
                    style={styles.input}
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    editable = {!readOnly}

                />
            </View>

            <View style={styles.inputGroup}>
                <Text style={styles.label}>Senha</Text>
                <View style={styles.senhaContainer}>
                    <TextInput
                        style={styles.inputSenha}
                        value={senha}
                        onChangeText={setSenha}
                        secureTextEntry={!mostrarSenha}
                        editable = {!readOnly}

                    />
                    <TouchableOpacity
                        style={styles.toggleButton}
                        onPress={() => setMostrarSenha(!mostrarSenha)}
                    >
                        <Text style={styles.toggleButtonText}>{mostrarSenha ? "Ocultar" : "Mostrar"}</Text>
                    </TouchableOpacity>
                </View>
            </View>

            {
                !readOnly && (<>

                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Repetir senha</Text>
                        <View style={styles.senhaContainer}>
                            <TextInput
                                style={styles.inputSenha}
                                value={repetirSenha}
                                onChangeText={setRepetirSenha}
                                secureTextEntry={!mostrarSenha}
                            />
                            <TouchableOpacity
                                style={styles.toggleButton}
                                onPress={() => setMostrarSenha(!mostrarSenha)}
                            >
                                <Text style={styles.toggleButtonText}>{mostrarSenha ? "Ocultar" : "Mostrar"}</Text>
                            </TouchableOpacity>
                        </View>

                        <TouchableOpacity style={styles.button}
                            onPress={() => {
                                const tempUser = {
                                    id: Number.parseInt(codigo),
                                    nome,
                                    email,
                                    senha
                                };
                                tempUser.id = Number(codigo);
                                UsuarioController.Editar(tempUser, repetirSenha);

                            }}>
                            <Text style={styles.buttonText}>Salvar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button} onPress={LimparCampos}>
                            <Text style={styles.buttonText}>Limpar</Text>
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity style={styles.button} onPress={() => {
                        ChangeReadOnly()
                        RestaurarDadosAntigo()
                    }}>
                        <Text style={styles.buttonText}>Cancelar</Text>
                    </TouchableOpacity>


                </>)
            }


            {
                readOnly &&
                (<>

                    <TouchableOpacity style={styles.button} onPress={ () =>{
                            ChangeReadOnly();
                            SalvarUsuarioAntigo();
                    }}>
                        <Text style={styles.buttonText}>Editar</Text>
                    </TouchableOpacity>

                </>)
            }


            <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
                <Text style={styles.buttonText}>Voltar</Text>
            </TouchableOpacity>


            <StatusBar style="auto" />
        </View>
    );
}

