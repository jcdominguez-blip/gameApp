import { StyleSheet } from "react-native";
import { colors } from "../../constants";

export const styles = StyleSheet.create({
  container: {
    width: 55,
    height: 55,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.secondary,
    borderColor: colors.secondary,
    borderWidth: 4,
    borderRadius: 14,
  },
  number: {
    color:"#ffffff",
    fontSize: 22,
    fontFamily: "Montserrat-Bold",
  },
});
