import { FlatList, View } from "react-native";
import React, { useState } from "react";
import gifsData from "../../data/gifsData";
import styles from "./Home.style";
import { CategoryDetail } from "../index";
import CategoryItem from "./components/CategoryItem/CategoryItem";
import { Sidebar } from "../../components";

const Home = () => {
  const [categoriesSelected, setCategoriesSelected] = useState([]);
  const [screenHome, setScreenHome] = useState(true);

  const handleCategorySelected = (category) => {
    if (categoriesSelected.includes(category)) {
      setCategoriesSelected(
        categoriesSelected.filter((item) => item !== category)
      );
    } else {
      setCategoriesSelected([...categoriesSelected, category]);
    }
  };

  const uniqueCategories = [];

  for (const item of gifsData) {
    if (!uniqueCategories.includes(item.category)) {
      uniqueCategories.push(item.category);
    }
  }

  return (
    <View style={styles.container}>
      {categoriesSelected.length > 0 ? (
        <>
          <Sidebar
            title={`${categoriesSelected}`}
            setScreenHome={setScreenHome}
            setCategoriesSelected={setCategoriesSelected}
          />
          <View style={styles.cardCategory}>
            {categoriesSelected.map((category) => (
              <CategoryDetail key={category} category={category} />
            ))}
          </View>
        </>
      ) : (
        <>
          <Sidebar title={"Home"} setScreenHome={setScreenHome} />
          <FlatList
            data={uniqueCategories}
            keyExtractor={(item) => item}
            renderItem={({ item }) => {
              return (
                <CategoryItem
                  category={item}
                  setCategorySelected={handleCategorySelected}
                />
              );
            }}
          />
        </>
      )}
    </View>
  );
};

export default Home;
