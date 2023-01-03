import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { useForm } from "react-hook-form";
import { ActivityIndicator, Button, StyleSheet, View } from "react-native";
import * as yup from "yup";
import { useLoginMutation } from "../store/api";
import { SpacerFixed } from "./SpacerFixed";
import TextInput from "./TextInput";

type LoginFormType = {
  email: string;
  password: string;
};

export const LoginForm = () => {
  const navigation = useNavigation();
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
  } = useForm<LoginFormType>({
    resolver: yupResolver(schema),
  });

  const [login, { isLoading }] = useLoginMutation();

  const onSubmit = (data: LoginFormType) => {
    login(data)
      .unwrap()
      .then(() => {
        navigation.navigate("HomeScreen");
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
          title="Login"
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
