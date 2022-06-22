import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;

  padding: 10px;

  background: #f5f5f5;

  @media (min-width: 480px) {
    padding: 0;
  }
`;
