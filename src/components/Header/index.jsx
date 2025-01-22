import React from "react";

import { StyledText } from "../../styles/typhography";
import { StyledHeader } from "./styles";

const Header = () => {
  return (
    <StyledHeader>
      <StyledText tag="h1" fontSize="one" textAlign="center">
        Kenzie Hub
      </StyledText>
    </StyledHeader>
  );
};

export default Header;
