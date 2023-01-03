import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { Container } from "../components/Container";
import Heading from "../components/Heading";
import { SpacerFixed } from "../components/SpacerFixed";
import { RootStackParamList } from "../routes/MainStack";

type Props = NativeStackScreenProps<RootStackParamList, "HomeScreen">;

export const HomeScreen = ({ route }: Props) => {
  return (
    <Container>
      <SpacerFixed />
      <Heading>Home</Heading>
    </Container>
  );
};
