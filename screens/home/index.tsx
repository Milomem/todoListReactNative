import { View, Image, TextInput, TouchableOpacity, Text } from "react-native";
import { styles } from "./styles";
import { useState } from "react";

export function Home() {
    const [newTask, setNewTask] = useState<string>("");
    return(
        <View style={styles.rootContainer}>
            <View style={styles.container}>
                <Image style={styles.image} source={require("../../assets/Logo.png")} />
            </View>

                <View style={styles.containerInput}>
                    <TextInput 
                    style={styles.input}
                    placeholder="Adicionar uma nova tarefa"
                    placeholderTextColor="#808080"
                    onChangeText={setNewTask}
                    value={newTask}
                    />

                    <TouchableOpacity style={styles.buttonAdd}>
                        <Text style={styles.textButtonAdd}>
                            +
                        </Text>
                    </TouchableOpacity>
                </View>

                <View>
                    
                </View>
        </View>
    )
}