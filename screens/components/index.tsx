import { View, Text, Image, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { useState } from "react";

interface taskProps {
    task: string;
    onRemove: () => void;
}

export function TodoList({task, onRemove}: taskProps) {
    const [isSelected, setIsSelected] = useState<boolean>(false)
    
    return (
        <View style={styles.container}>
            { isSelected === true ? 
                <TouchableOpacity style={styles.isSelected} onPress={() =>{isSelected === true ? setIsSelected(false): setIsSelected(true)}}> 
                    <Image style={styles.vector} source={require("../../assets/Vector.png")}/>
                </TouchableOpacity> 
            : 
                <TouchableOpacity style={styles.radio} onPress={() =>{isSelected === false ? setIsSelected(true): setIsSelected(false)}}/>}
             { isSelected === true ? 
             <Text 
             style={styles.textLineThrough}
             numberOfLines={3}

             >
                {task}
             </Text>
             :
             <Text 
            style={styles.text}
            numberOfLines={3}
            >
               {task}
            </Text>
             }
            
            <TouchableOpacity onPress={onRemove}>
                <Image style={styles.Image} source={require("../../assets/trash.png")}/>
            </TouchableOpacity>
        </View>
    );
}
