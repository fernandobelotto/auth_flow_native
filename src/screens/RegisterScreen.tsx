import React from "react";
import { Container } from "../components/Container";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../routes/MainStack";
import Heading from "../components/Heading";
import { SpacerFixed } from "../components/SpacerFixed";
import { RegisterForm } from "../components/RegisterForm";
import { Button } from "react-native";

type Props = NativeStackScreenProps<RootStackParamList, "RegisterScreen">;

export const RegisterScreen = ({ navigation }: Props) => {
  return (
    <Container>
      <SpacerFixed />
      <Heading>Register</Heading>
      <SpacerFixed />
      <RegisterForm />
      <SpacerFixed />
      <Button
        title="Go to Login"
        onPress={() => navigation.navigate("LoginScreen")}
      />
    </Container>
  );
};
