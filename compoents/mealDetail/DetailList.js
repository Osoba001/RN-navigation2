import { Text, View, StyleSheet } from "react-native";
const DetailList = ({ list }) => {
  return list.map((item) => (
    <View style={styles.listItem}>
      <Text key={item} style={styles.itemText}>
        {item}
      </Text>
    </View>
  ));
};

export default DetailList;
const styles = StyleSheet.create({
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 4,
    marginHorizontal: 12,
    backgroundColor: "#e2b497",
  },
  itemText: {
    color: "#35141",
    textAlign: "center",
  },
});
