import React from "react";
import { useForm } from "react-hook-form";
import { ActivityIndicator, Button, StyleSheet, View } from "react-native";
import { useRegisterMutation } from "../store/api";
import { SpacerFixed } from "./SpacerFixed";
import TextInput from "./TextInput";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

type RegisterFormType = {
  email: string;
  password: string;
};

export const RegisterForm = () => {
  const schema = yup
    .object({
      email: yup.string().email().required(),
      password: yup.string().required(),
    })
    .required();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormType>({
    resolver: yupResolver(schema),
  });

  const [register, { isLoading }] = useRegisterMutation();

  const onSubmit = (data: RegisterFormType) => {
    register(data)
      .unwrap()
      .then(() => {
        console.log("Registered");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <View style={styles.wrapper}>
      <SpacerFixed />
      <TextInput
        label="Email"
        control={control}
        name="email"
        editable={!isLoading}
        errors={errors}
        keyboardType="email-address"
      />
      <SpacerFixed />
      <TextInput
        label="Password"
        control={control}
        name="password"
        secureTextEntry
        editable={!isLoading}
        errors={errors}
      />
      <SpacerFixed />

      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <Button
          title="Register"
          onPress={handleSubmit(onSubmit)}
          disabled={isLoading}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  wrapper: {
    borderWidth: 1,
    borderColor: "#cbd5e0",
    padding: 20,
    borderRadius: 10,
  },
});
