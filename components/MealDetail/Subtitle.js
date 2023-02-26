import { View, Text, StyleSheet } from "react-native";

const Subtitle = ({ children }) => {
  return (
    <View style={styles.subtitleContainer}>
      <Text style={styles.subtitleText}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    subtitleContainer: {
        alignItems: 'center',
        marginHorizontal: 24,
        marginTop: 8
    },
    subtitleText: {
        fontSize: 18,
        color: 'hsl(23, 56%, 74%)',
        fontWeight: 'bold',
        textAlign: 'center',
    }
})

export default Subtitle;
