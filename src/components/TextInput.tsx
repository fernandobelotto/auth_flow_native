import React from "react";
import { Controller } from "react-hook-form";
import {
  StyleSheet,
  Text,
  TextInput as RNTextInput,
  TextInputProps,
} from "react-native";

type Props = TextInputProps & {
  name: string;
  control: any;
  label?: string;
  errors: any;
};

const TextInput = ({ name, control, label, errors, ...props }: Props) => {
  const borderColor = errors?.[name] ? "#e53e3e" : "#cbd5e0";
  const borderWidth = errors?.[name] ? 2 : 1;

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, onBlur, value } }) => {
        return (
          <>
            {label && <Text style={styles({}).label}>{label}</Text>}
            <RNTextInput
              style={styles({ borderColor, borderWidth }).input}
              onBlur={onBlur}
              onChangeText={(value) => onChange(value)}
              value={value}
              keyboardType="default"
              {...props}
            />
            {errors?.[name]?.message && (
              <Text style={styles({}).error}>{errors?.[name]?.message}</Text>
            )}
          </>
        );
      }}
    />
  );
};

const styles = ({ borderColor, borderWidth }: any) =>
  StyleSheet.create({
    input: {
      borderWidth,
      borderColor,
      padding: 10,
      borderRadius: 5,
    },
    label: {
      color: "#1a202c",
      fontSize: 16,
      marginBottom: 5,
    },
    error: {
      color: "#e53e3e",
      fontSize: 14,
      marginTop: 5,
    },
  });

export default TextInput;
