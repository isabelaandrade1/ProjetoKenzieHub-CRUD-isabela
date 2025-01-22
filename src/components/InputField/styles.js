import styled from "styled-components";

export const StyledFieldset = styled.fieldset`
  border: none;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
`;

export const StyledLabel = styled.label`
  color: var(--color-grey-0);
`;

export const StyledInput = styled.input`
  border: none;
  border-radius: var(--radius-1);
  background-color: var(--color-grey-2);
  color: var(--color-grey-0);
  padding: 0 1rem;
  height: 3.5rem;
  width: 100%;

  &:focus {
    outline: 2px solid var(--color-primary-focus);
  }

  &:disabled {
    cursor: not-allowed;
  }
`;

export const StyledSelect = styled.select`
  outline: none;
  border: none;
  border-radius: var(--radius-1);
  background-color: var(--color-grey-2);
  color: var(--color-grey-0);
  padding: 0 1rem;
  height: 3.5rem;
  width: 100%;

  &:focus {
    outline: 2px solid var(--color-primary-focus);
  }

  &:disabled {
    cursor: not-allowed;
  }
`;
