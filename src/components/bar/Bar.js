import React from "react";
import faker from "faker";
import { Container, Location, Image, AppBar, Name } from "./Style.style";

function Bar() {
  return (
    <>
      <Container>
        <Location></Location>
        <AppBar></AppBar>
        <Image className="image" src={faker.image.avatar()}></Image>
        <Name>{faker.name.firstName()}</Name>
      </Container>
    </>
  );
}

export default Bar;
