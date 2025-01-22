import styled from "styled-components";

export const StyledHomePage = styled.main`
  background-color: var(--color-grey-4);
  display: flex;
  flex-direction: column;
  border: none;
  width: 100vw;
  min-height: 100vh;
  overflow-x: hidden;

  .lines {
    padding: 3.2rem 0;
    border-top: 1px solid var(--color-grey-2);
    border-bottom: 1px solid var(--color-grey-2);
    position: absolute;
    top: 7rem;
    width: 100%;
  }

  .intro {
    padding: 3rem 0;
    margin-bottom: 1rem;
    align-items: center;

    @media (max-width: 600px) {
      flex-direction: column;
      gap: 1rem;
      align-items: flex-start;
    }
  }

  .btn-plus {
    height: 2.25rem;
    padding: 0.75rem;
  }
`;
