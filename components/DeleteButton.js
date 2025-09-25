import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import PropTypes from "prop-types";

export default function DeleteButton({ onPress }) {
  return (
    <TouchableOpacity
      style={styles.deleteButton}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <Text style={styles.deleteButtonText}>✕</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  deleteButton: {
    backgroundColor: "#DC2626",
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 16,
    borderWidth: 2,
    borderColor: "#FFFFFF",
  },
  deleteButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});

DeleteButton.propTypes = {
  onPress: PropTypes.func.isRequired,
};