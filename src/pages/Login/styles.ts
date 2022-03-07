import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  background-color: var(--complementary-offwhite);

  @media screen and (max-width: 1365px) {
    flex-direction: column-reverse;
    justify-content: start;
    width: 100%;
    height: 100vh;
  }
`;

export const LoginArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 529px;

  padding: 10px 50px;

  .page-info {
    width: 429px;
    padding: 0 60px;
    margin: 30px 0;
    color: var(--secondary03);
    text-align: center;

    h1 {
      font-size: 2.25rem;
      line-height: 2.375rem;
      font-weight: 700;
    }

    p {
      font-size: 1rem;
      line-height: 1.5rem;
    }
  }

  @media screen and (min-width: 1366px) and (max-width: 1919px) {
    width: 425px;
  }

  @media screen and (max-width: 1365px) {
    max-width: 425px;
    width: 100%;
    margin: 0 auto;
    padding: 0;

    .page-info {
      width: 306px;
      padding: 0;
    }

    > [type='button'] {
      width: 100%;
      max-width: 245px;
      margin-bottom: 30px;
    }
  }
`;

export const Form = styled.form`
  width: 429px;
  padding: 0 60px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  .forgot-password {
    display: flex;
    justify-content: center;
    margin-top: 10px;
    margin-bottom: 20px;

    a {
      text-decoration: none;
      font-size: 0.75em;
      color: var(--secondary03);
    }
  }

  @media screen and (min-width: 1366px) and (max-width: 1919px) {
    .forgot-password {
      a {
        text-decoration: underline;
      }
    }
  }

  @media screen and (max-width: 1365px) {
    width: 100%;
    padding: 0 40px;

    .forgot-password {
      a {
        text-decoration: underline;
      }
    }
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url('https://images.unsplash.com/photo-1646043388105-3102a5013b80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  span {
    position: absolute;
    right: 10px;
    bottom: 10px;
    color: #fff;
    font-size: 10px;
    a {
      color: var(--secondary01);
      text-decoration: none;
    }
  }

  @media (max-width: 480px), handheld and (orientation: portrait) {
    height: 40%;
    max-height: 200px;
  }
`;
