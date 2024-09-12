import {
    View,
    Text,
    Image,
    Pressable,
    StyleSheet,
    Platform,
  } from "react-native";
  
  import { useNavigation } from "@react-navigation/native";
  import MeanlDetail from "../MealDetails";
  
  const MealItem = ({
    id,
    title,
    imageUrl,
    duration,
    complexity,
    affordability,
  }) => {
    const navigation = useNavigation();
  
    function selectMealItemHandler() {
      navigation.navigate("MealDetails", {
        mealId: id,
      });
    }
  
    return (
      <View style={styles.mealItem}>
        <Pressable
          android_ripple={{ color: "#ccc" }}
          style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
          onPress={selectMealItemHandler}
        >
          <View style={styles.innerContainer}>
            <View>
              <Image source={{ url: imageUrl }} style={styles.image} />
              <Text style={styles.title}>{title}</Text>
            </View>
            <MeanlDetail
              complexity={complexity}
              affordability={affordability}
              duration={duration}
            />
          </View>
        </Pressable>
      </View>
    );
  };
  
  export default MealItem;
  const styles = StyleSheet.create({
    mealItem: {
      margin: 16,
      borderRadius: 8,
      overflow: Platform.OS === "android" ? "hidden" : "visible",
      backgroundColor: "white",
      elevation: 4,
      shadowColor: "black",
      shadowOpacity: 0.35,
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 8,
    },
    innerContainer: {
      borderRadius: 8,
      overflow: "hidden",
    },
    image: {
      width: "100%",
      height: 200,
    },
    title: {
      fontWeight: "bold",
      textAlign: "center",
      fontSize: 18,
      margin: 8,
    },
    details: {
      flexDirection: "row",
      alignItems: "center",
      padding: 8,
      justifyContent: "center",
    },
  });
  