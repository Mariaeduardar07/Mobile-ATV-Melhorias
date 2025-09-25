import React from "react";
import { View, Text, StyleSheet } from "react-native";
import PropTypes from "prop-types";

export default function StatCard({ number, label }) {
  return (
    <View style={styles.statCard}>
      <Text style={styles.statNumber}>{number}</Text>
      <Text style={styles.statLabel}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  statCard: {
    backgroundColor: "#261240",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 15,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#7C3AED",
    minWidth: 100,
  },
  statNumber: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#E8B5FF",
  },
  statLabel: {
    fontSize: 12,
    color: "#B299CC",
    marginTop: 4,
  },
});

StatCard.propTypes = {
  number: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
};