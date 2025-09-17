
import AsyncStorage from "@react-native-async-storage/async-storage";

export default class ContadorIds{
    static contador = 0;
    static async InicializarContador() {
        const jsonValue = await AsyncStorage.getItem("Contador");
        ContadorIds.contador = jsonValue ? JSON.parse(jsonValue) : 0;
        console.log("Contador inicializado com valor:", ContadorIds.contador);
    }

    static async SalvarContador(){
        await AsyncStorage.setItem("Contador", JSON.stringify(ContadorIds.contador));
    }
}
