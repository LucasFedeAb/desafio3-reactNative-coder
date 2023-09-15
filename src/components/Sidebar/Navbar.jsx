import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const Navbar = () => {
  const [searchActive, setSearchActive] = useState(false);
  const [sidebarActive, setSidebarActive] = useState(false);

  const toggleSearch = () => {
    setSearchActive((prevSearch) => !prevSearch);
  };

  const toggleSidebar = () => {
    setSidebarActive(true);
  };

  const closeSidebar = () => {
    setSidebarActive(false);
  };

  return (
    <View style={styles.nav}>
      <View style={styles.navBar}>
        <TouchableOpacity style={styles.sidebarIcon} onPress={toggleSidebar}>
          <FontAwesome name="align-left" size={25} color="#FFF" />
        </TouchableOpacity>
        {!searchActive && <Text style={styles.logo}>Stickers</Text>}
        {searchActive && (
          <View style={styles.searchFieldContainer}>
            <TextInput
              style={styles.searchField}
              placeholder="Search..."
              placeholderTextColor="#010718"
            />
            <TouchableOpacity onPress={toggleSearch} style={styles.closeIcon}>
              <FontAwesome name="times" size={22} color="#010718" />
            </TouchableOpacity>
          </View>
        )}
        {!searchActive && (
          <TouchableOpacity style={styles.searchIcon} onPress={toggleSearch}>
            <FontAwesome
              name={searchActive ? "times" : "search"}
              size={22}
              color="#FFF"
            />
          </TouchableOpacity>
        )}
      </View>
      {sidebarActive && (
        <View style={styles.sidebar}>
          <View style={styles.sidebarHeader}>
            <Text style={styles.sidebarLogo}>Stickers</Text>
            <TouchableOpacity
              style={styles.sidebarCloseIcon}
              onPress={closeSidebar}
            >
              <FontAwesome name="times" size={24} color="#FFF" />
            </TouchableOpacity>
          </View>
          <View style={styles.sidebarNavLinks}>
            <TouchableOpacity style={styles.sidebarNavLink}>
              <Text style={styles.sidebarNavLinkText}>Perfil</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.sidebarNavLink}>
              <Text style={styles.sidebarNavLinkText}>Configuracion</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.sidebarNavLink}>
              <Text style={styles.sidebarNavLinkText}>
                Terminos y condiciones
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.sidebarNavLink}>
              <Text style={styles.sidebarNavLinkText}>Services</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.sidebarNavLink}>
              <Text style={styles.sidebarNavLinkText}>Contact</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  nav: {
    position: "absolute",
    top: 20,
    left: 0,
    width: "100%",
    height: 75,
    /* backgroundColor: "#0c7075", */
    /* backgroundColor: "#008579", */
    backgroundColor: "#00a884",
    borderBottomStartRadius: 20,
    borderBottomEndRadius: 20,
    paddingVertical: 10,
    zIndex: 999,
  },
  navBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    height: 70,
  },
  sidebarIcon: {
    padding: 5,
  },
  logo: {
    fontSize: 20,
    fontWeight: "500",
    color: "#FFF",
  },
  searchBox: {
    flexDirection: "row",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  searchFieldContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    backgroundColor: "#F2F2F2",
    borderRadius: 8,
    flex: 1,
    marginStart: 30,
  },
  searchField: {
    flex: 1,
    paddingVertical: 8,
    paddingHorizontal: 10,
    backgroundColor: "#F2F2F2",
    borderRadius: 8,
    color: "#010718",
  },
  closeIcon: {
    padding: 5,
  },
  searchIcon: {
    padding: 5,
  },
  sidebar: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 280,
    height: 1500,
    padding: 20,
    backgroundColor: "#00a884",
    zIndex: 1000,
  },
  sidebarHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 5,
  },
  sidebarCloseIcon: {
    alignSelf: "flex-end",
    padding: 5,
  },
  sidebarLogo: {
    fontSize: 25,
    fontWeight: "500",
    color: "#FFF",
  },
  sidebarNavLinks: {
    paddingHorizontal: 5,
    marginTop: 50,
  },
  sidebarNavLink: {
    marginBottom: 15,
  },
  sidebarNavLinkText: {
    fontSize: 17,
    fontWeight: "400",
    color: "#FFF",
  },
});

export default Navbar;
