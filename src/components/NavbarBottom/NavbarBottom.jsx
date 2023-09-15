import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Animated,
} from "react-native";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { colors } from "../../constants/colors";
import styles from "./NavbarBottom.style";

const windowWidth = Dimensions.get("window").width;

const NavbarBottom = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const createButtonY = useState(new Animated.Value(0))[0];

  const handleTabPress = (index) => {
    setActiveIndex(index);
    animateCreateButton(index);
  };

  const animateCreateButton = (index) => {
    Animated.spring(createButtonY, {
      toValue: index === 2 ? -60 : 0,
      useNativeDriver: false,
    }).start();
  };

  return (
    <View style={styles.nav}>
      <View style={styles.navContent}>
        {tabItems.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={[
              /* styles.linkItem, */
              item.outlineIcon === "add-circle"
                ? styles.linkItemPlus
                : styles.linkItem,
              activeIndex === index && styles.activeLinkItem,
              /* activeIndex === index &&
                item.outlineIcon !== "add-circle" &&
                styles.activeLinkItem, */
            ]}
            onPress={() => handleTabPress(index)}
          >
            {item.outlineIcon === "add-circle" ? (
              <Ionicons
                name={item.outlineIcon}
                size={25}
                color={"#FFF"}
                style={styles.iconPlusStyle}
              />
            ) : (
              <Ionicons
                name={
                  activeIndex === index ? item.filledIcon : item.outlineIcon
                }
                size={25}
                color={activeIndex === index ? colors.primary : "#000"}
                style={styles.icon}
              />
            )}
            <Text
              style={[
                item.text === "Crear" ? styles.linkTextPlus : styles.linkText,
                activeIndex === index && styles.activeLinkText,
                ,
              ]}
            >
              {item.text.toUpperCase()}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const tabItems = [
  { text: "Inicio", outlineIcon: "home-outline", filledIcon: "home" },
  {
    text: "Mis Stickers",
    outlineIcon: "bookmark-outline",
    filledIcon: "bookmarks",
  },
  {
    text: "Crear",
    outlineIcon: "add-circle",
    filledIcon: "add-circle",
  },
  { text: "Buscar", outlineIcon: "search-outline", filledIcon: "search" },
  { text: "Perfil", outlineIcon: "person-outline", filledIcon: "person" },
];

export default NavbarBottom;
