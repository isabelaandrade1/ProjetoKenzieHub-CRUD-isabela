import React from "react";

import { StyledFieldset, StyledInput, StyledLabel } from "./styles";

const InputField = ({ id, label, type, register, placeholder, disabled }) => {
  return (
    <StyledFieldset>
      <StyledLabel htmlFor={id}>{label}</StyledLabel>
      <StyledInput
        id={id}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        {...register}
      />
    </StyledFieldset>
  );
};

export default InputField;
