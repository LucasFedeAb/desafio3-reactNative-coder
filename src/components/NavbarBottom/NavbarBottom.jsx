import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Animated,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

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
              item.outlineIcon === "plus-circle"
                ? styles.linkItemPlus
                : styles.linkItem,
              activeIndex === index &&
                item.outlineIcon !== "plus-circle" &&
                styles.activeLinkItem,
            ]}
            onPress={() => handleTabPress(index)}
          >
            {item.outlineIcon === "plus-circle" ? (
              <FontAwesome
                name={item.outlineIcon}
                size={40}
                color={"#FFF"}
                style={styles.iconPlusStyle}
              />
            ) : (
              <FontAwesome
                name={
                  activeIndex === index ? item.filledIcon : item.outlineIcon
                }
                size={25}
                color={activeIndex === index ? "#00a884" : "#000"}
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
  { text: "Inicio", outlineIcon: "home", filledIcon: "home" },
  { text: "Mis Stickers", outlineIcon: "bookmark", filledIcon: "bookmark" },
  {
    text: "Crear",
    outlineIcon: "plus-circle",
    filledIcon: "plus-circle",
  },
  { text: "Alertas", outlineIcon: "bell", filledIcon: "bell" },
  { text: "Perfil", outlineIcon: "user", filledIcon: "user-circle" },
];

const styles = StyleSheet.create({
  nav: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    backgroundColor: "#FFF",
    padding: 5,
    shadowColor: "white",
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
    zIndex: 1500,
    /* borderTopLeftRadius: 40,
    borderTopRightRadius: 40, */
    /* borderRadius: 40, */
  },
  navContent: {
    flexDirection: "row",
    alignItems: "center",
    position: "relative",
  },

  linkItem: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },

  linkItemPlus: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    bottom: 5,
    /* backgroundColor: "#f2f2f2",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30, */
  },

  activeLinkItem: {
    transform: [{ translateY: -10 }],
  },
  linkText: {
    position: "absolute",
    fontSize: 10,
    fontWeight: "500",
    color: "#00a884",
    opacity: 0,
    transform: [{ translateY: 32 }],
    textAlign: "center",
  },
  activeLinkText: {
    opacity: 1,
  },
  linkTextPlus: {
    position: "absolute",
    fontSize: 10,
    fontWeight: "500",
    color: "#00a884",
    opacity: 0,
    transform: [{ translateY: 35 }],
  },
  /* iconPlusStyle: {
    width: 40,
    height: 40,
    borderRadius: 99,
    backgroundColor: "#008579",
  }, */
  iconPlusStyle: {
    /* position: "absolute", */
    /* width: 60,
    height: 60,
    borderRadius: 30, */
    /* backgroundColor: "#008579", */
    fontSize: 50,
    /* width: 100,
    height: 100, */
    color: "#00a884",
    backgroundColor: "#f2f2f2",
    padding: 8,
    /* marginBottom:10, */
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    /* transform: [{ translateY: -10 }], */
    /* borderTopRightRadius:30, */
    /* borderBottomStartRadius: 30,
    borderBottomEndRadius:30, */
    /* borderColor: "#F2F2F2", */
    /* borderCurve:50, */
    /* marginBottom: 20, */
    /* alignItems: "center",
    justifyContent: "center", */
    /* bottom: 30, */
    /* left: (windowWidth - 60) / 2, */
    /* elevation: 5, */
  },
  icon: {
    backgroundColor: "#f2f2f2",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    bottom: 5,
  },
  /* createButtonInner: {
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  }, */
});

export default NavbarBottom;
