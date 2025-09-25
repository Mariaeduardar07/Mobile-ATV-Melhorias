import React from "react";
import { View, Text, StyleSheet } from "react-native";
import PropTypes from "prop-types";

export default function StatusBadge({ recruited }) {
  return (
    <View style={styles.statusContainer}>
      <Text style={styles.statusIcon}>
        {recruited ? "🎉" : "💙"}
      </Text>
      <Text style={[styles.statusText, recruited && styles.statusInPartyText]}>
        {recruited ? "Na Party" : "Disponível"}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  statusContainer: {
    alignItems: "center",
  },
  statusIcon: {
    fontSize: 20,
    marginBottom: 4,
  },
  statusText: {
    fontSize: 12,
    color: "#B299CC",
    fontWeight: "500",
  },
  statusInPartyText: {
    color: "#E8B5FF",
    fontWeight: "bold",
  },
});

StatusBadge.propTypes = {
  recruited: PropTypes.number.isRequired,
};