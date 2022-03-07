import styled from 'styled-components';

export const Label = styled.label`
  height: 93px;

  .label-text {
    font-size: 14px;
    padding-left: 6px;
    padding-bottom: 4px;
  }
`;

export const InputContainer = styled.div`
  position: relative;
  height: 40px;
  margin-top: 8px;

  @media screen and (max-width: 1365px) {
    height: 33px;
  }
`;

export const InputField = styled.input`
  width: 100%;
  height: 100%;

  padding: 8px 16px;

  font-size: 1rem;

  border-radius: 100px;
  border: 1px solid var(--complementary-gray02);

  &[disabled] {
    background-color: var(--complementary-gray01);
    color: var(--complementary-gray02);

    &::placeholder {
      color: var(--complementary-gray02);
    }

    & ~ button {
      background-color: transparent;
      pointer-events: none;

      & svg {
        background-color: var(--complementary-gray01);
      }
    }
  }

  @media screen and (max-width: 1365px) {
    height: 100%;
  }
`;

export const PasswordVisibilityButton = styled.button`
  position: absolute;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 40px;

  top: 0;
  bottom: 0;
  right: 10px;

  background-color: transparent;

  svg {
    width: 24px;
    height: 24px;

    padding: 0 5px;

    color: var(--complementary-gray04);
    background-color: #fff;

    box-sizing: content-box;
  }
`;
