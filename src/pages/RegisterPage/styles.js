import styled from "styled-components";

export const StyledRegisterPage = styled.main`
  background-color: var(--color-grey-4);
  display: flex;
  flex-direction: column;
  border: none;
  width: 100vw;
  min-height: 100vh;
  overflow-x: hidden;
  padding: 2rem;

  .main-nav-active {
    color: var(--color-grey-0);
    text-align: center;
    justify-content: center;
    background-color: var(--color-grey-2);
    height: 2.5rem;
    border-radius: var(--radius-2);
    padding: 0.5rem 1rem;
  }
`;

export const StyledFlexBox = styled.div`
  display: flex;
  justify-content: center;
  gap: 9rem;
  align-items: center;

  @media (max-width: 450px) {
    gap: 7rem;
  }

  @media (max-width: 375px) {
    gap: 3rem;
  }
`;
