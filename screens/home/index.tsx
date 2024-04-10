import { View, Image, TextInput, TouchableOpacity, Text } from "react-native";
import { styles } from "./styles";
import { useState } from "react";
import { TodoList } from "../components";

export function Home() {
    const [participants, setParticipants] = useState<string[]>([])
    const [newTask, setNewTask] = useState<string>("");
    const [isFocused, setIsFocused] = useState<boolean>(false)
    
    return(
        <View style={styles.rootContainer}>
            <View style={styles.container}>
                <Image style={styles.image} source={require("../../assets/Logo.png")} />
            </View>

            <View style={styles.containerInput}>
                <TextInput 
                    style={[styles.input, isFocused ? styles.inputFocused : null]}
                    placeholder="Adicionar uma nova tarefa"
                    placeholderTextColor="#808080"
                    onChangeText={setNewTask}
                    value={newTask}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                />

                <TouchableOpacity style={styles.buttonAdd}>
                    <Text style={styles.textButtonAdd}>
                        +
                    </Text>
                </TouchableOpacity>
            </View>

            <View style={styles.containerMakeDone}>
                <View style={styles.containerText}>
                    <Text style={styles.textMake}>
                        Criadas
                    </Text>
                    <View style={styles.numberView} >
                        <Text style={styles.number}>
                            0
                        </Text>
                    </View>
                </View>

                <View style={styles.containerText}>
                    <Text style={styles.textDone}>
                        Concluídas
                    </Text>
                    <View style={styles.numberView} >
                        <Text style={styles.number}>
                            0
                        </Text>
                    </View>
                </View>
            </View>

            <View style={styles.containerClipboard}>
                <Image style={styles.image} source={require("../../assets/Clipboard.png")} />
                <View style={styles.viewText}>
                    <Text style={styles.textClipboardBold}>
                        Você ainda não tem tarefas cadastradas
                    </Text>

                    <Text style={styles.textClipboard}>
                        Crie tarefas e organize seus itens a fazer
                    </Text>
                </View>
                <TodoList/>
            </View>

        </View>
    )
}