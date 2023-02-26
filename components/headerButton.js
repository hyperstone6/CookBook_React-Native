import { Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const HeaderButton = ({ handlePress, color, size, icon }) => {
  return (
    <Pressable onPress={handlePress} style={({pressed}) => pressed && styles.pressed} >
      <Ionicons name={icon} color={color} size={size} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
    pressed: {
        opacity: 0.7
    }
});

export default HeaderButton;
