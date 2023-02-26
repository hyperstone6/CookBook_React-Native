import { View, Text, StyleSheet } from "react-native";

const List = ({ data }) => {
  return (
    <View>
      {data.map((item) => (
        <View key={item} style={styles.listContainer}>
          <Text style={styles.listText}>
            {item}
          </Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    backgroundColor: "hsl(23, 56%, 74%)",
    marginVertical: 4,
    marginHorizontal: 24,
    borderRadius: 6,
  },
  listText: {
    paddingVertical: 2,
    paddingHorizontal: 13,
    color: "hsl(17, 42%, 29%)",
    fontWeight: "bold",
    textAlign: 'justify'
  },
});

export default List;
