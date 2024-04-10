import { View, Text, Image, TouchableOpacity } from "react-native";
import { styles } from "./styles";

export function TodoList() {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.radio}/>
            <Text 
            style={styles.text}
            numberOfLines={3}
            >
                Integer urna interdum massa libero auctor neque turpis turpis semper.
            </Text>
            <TouchableOpacity>
                <Image style={styles.Image} source={require("../../assets/trash.png")}/>
            </TouchableOpacity>
        </View>
    );
}
