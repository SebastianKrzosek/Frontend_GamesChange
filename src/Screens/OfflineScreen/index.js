import React from "react";
import { Container, SmallText, Text, Wrapper } from "./style";
import NavigationBar from "../../Components/NavigationBar";

const OfflineScreen = () => {
  return (
    <Container>
      <Wrapper>
        <Text>Oooo nie!</Text>
        <SmallText>
          Wyglada na to, ze straciles polaczenie sieciowe, a ta strona nie
          zostala wczesniej zapisana.
        </SmallText>
        <SmallText>Wroc tutaj pozniej!</SmallText>
      </Wrapper>
      <NavigationBar></NavigationBar>
    </Container>
  );
};

export default OfflineScreen;
