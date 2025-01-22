import styled from "styled-components";

export const StyledForm = styled.form`
  background-color: var(--color-grey-3);
  display: flex;
  flex-direction: column;
  align-self: center;
  justify-content: center;
  padding: 2rem;
  gap: 1rem;
  overflow-x: hidden;
  width: 100%;
  max-width: 26rem;

  .main-nav-active {
    color: var(--color-grey-0);
    text-align: center;
    background-color: var(--color-grey-1);
    height: 3rem;
    justify-content: center;
    padding-top: 0.75rem;
    border-radius: var(--radius-2);
  }
`;
