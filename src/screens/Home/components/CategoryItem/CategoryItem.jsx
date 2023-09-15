import {
  View,
  Image,
  Pressable,
  Text,
  useWindowDimensions,
} from "react-native";
import React, { useEffect } from "react";
import styles from "./CategoryItem.style";
import gifsData from "../../../../data/gifsData";

const CategoryItem = ({ category, setCategorySelected }) => {
  const { height, width } = useWindowDimensions();

  useEffect(() => {
    console.log(height, width);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{category}</Text>
      <Pressable onPress={() => setCategorySelected(category)}>
        <View style={styles.containerImg}>
          <Image
            source={{
              uri: gifsData.find((item) => item.category === category)
                ?.imageCategory,
            }}
            style={styles.imageCategory}
          />
        </View>
      </Pressable>
    </View>
  );
};

export default CategoryItem;
