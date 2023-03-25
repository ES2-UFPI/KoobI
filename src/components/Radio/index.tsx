import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";

import styles from "./styles";

interface radioProps {
  options: Array<string>;
  horizontal: boolean;
  onChangeSelect: Function;
  selected: string;
}

export default function Radio({ ...props }: radioProps) {
  return (
    <View style={styles.horizontal}>
      {props.options.map((opt) => (
        <TouchableOpacity
          onPress={() => {
            props.onChangeSelect(opt);
          }}
          style={styles.optContainer}
        >
          <View style={styles.outlineCircle}>
            {props.selected === opt && <View style={styles.innerCircle} />}
          </View>
          <Text style={styles.optText}>{opt}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}
