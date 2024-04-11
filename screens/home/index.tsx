import { View, Image, TextInput, TouchableOpacity, Text, Alert, FlatList } from "react-native";
import { styles } from "./styles";
import { useState } from "react";
import { TodoList } from "../components";

export function Home() {
    const [task, setTask] = useState<string[]>([])
    const [newTask, setNewTask] = useState<string>("");
    const [isFocused, setIsFocused] = useState<boolean>(false)
    
    function handleAddTask() {
        if (task.includes(newTask)) {
            return Alert.alert("Task ja existe", "Já existe uma task na lista com esse nome.");
          }

        if(newTask === "") return;

        setTask(prevState => [...prevState, newTask])
        setNewTask("")
    }

      function handleTaskRemove(taskRemove: string) {
        Alert.alert("Remover", `Remover a task ?`, [
          {
            text: 'Sim',
            onPress: () => setTask(prevState => prevState.filter(task => task !== taskRemove))
          },
          {
            text: 'Não',
            style: 'cancel'
          }
        ])
      }

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

                <TouchableOpacity style={styles.buttonAdd} onPress={handleAddTask}>
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
                            {task.length}
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

            <View style={styles.containerTask}>
                <FlatList
                data={task}
                keyExtractor={(item) => item}
                renderItem={({ item }) => (
                    <TodoList
                    key={item} 
                    task={item} 
                    onRemove={() => handleTaskRemove(item)}/>
                )}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                ListEmptyComponent={()=> (
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
                    </View> 
                )}
                />
            </View>
        </View>
    )
} 