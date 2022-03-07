import { Input } from '../../components/Input';

import { Container, LoginArea, Form, ImageContainer } from './styles';
import Button from '../../components/Button';

import { FormEvent, useRef, useState } from 'react';

export function Login() {
  const emailInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const [inputAlert, setInputAlert] = useState(false);

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    if (!emailInputRef.current?.value) {
      emailInputRef.current!.style.outlineColor = '#eb5757';
      emailInputRef.current!.style.borderColor = '#eb5757';
      emailInputRef.current?.focus();
      setInputAlert(true);
    } else if (!passwordInputRef.current?.value) {
      passwordInputRef.current!.style.outlineColor = '#eb5757';
      passwordInputRef.current!.style.borderColor = '#eb5757';
      passwordInputRef.current?.focus();
      setInputAlert(true);
    } else {
      alert(`Logged in as ${emailInputRef.current?.value}.`);
      emailInputRef.current!.style.outlineColor = '#000';
      passwordInputRef.current!.style.outlineColor = '#000';
      emailInputRef.current!.style.borderColor = '#ADADAD';
      passwordInputRef.current!.style.borderColor = '#ADADAD';
      setInputAlert(false);

      formRef.current?.reset();
    }
  }

  return (
    <>
      <Container>
        <LoginArea>
          <div className='page-info'>
            <h1>LOGIN</h1>
            <p>Use your registered e-mail and password to login.</p>
          </div>
          <Form onSubmit={handleSubmit} ref={formRef}>
            <Input
              inputAlert={inputAlert}
              type='email'
              labelName='Email'
              isRequired={true}
              placeholder='your email here'
              ref={emailInputRef}
              pattern='[^@\s]+@[^@\s]+\.[^@\s]+'
            />
            <Input
              inputAlert={inputAlert}
              type='password'
              passwordInput
              labelName='Password'
              isRequired={true}
              placeholder='your password here'
              ref={passwordInputRef}
            />

            <Button type='submit' solid primary>
              LOGIN
            </Button>

            <div className='forgot-password'>
              <a href='/forgot-my-password'>Forgot my password</a>
            </div>
          </Form>
          <Button
            type='button'
            onClick={(e) => {
              e.preventDefault();
              alert('## Register ##');
            }}
            outlined
            secondary
          >
            REGISTER
          </Button>
        </LoginArea>

        <ImageContainer>
          <span>
            Image by{' '}
            <a
              href='https://unsplash.com/@sumaidsingh'
              target='_blank'
              rel='noreferrer'
            >
              {' '}
              Sumaid pal Singh Bakshi
            </a>
          </span>
        </ImageContainer>
      </Container>
    </>
  );
}
