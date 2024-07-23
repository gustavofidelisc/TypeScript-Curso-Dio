import { login } from './login';
describe('login', () => {

  const mockAlert = jest.fn();
  window.alert = mockAlert;

  const mockEmail = 'gustavo@gmail.com'
  it('Deve exibir um aler com boas vindas caso o email seja valido', async() => {
    await login(mockEmail);
    expect(mockAlert).toHaveBeenCalledWith(`Bem vindo ao Dio Bank ${mockEmail}`);
  });

  it('Não deve exibir a mensagem de boas vindas sem o email', async() => {
    await  login(mockEmail)
    expect(mockAlert).not.toHaveBeenCalledWith('Bem vindo ao Dio Bank')
  });

  it('Deve exibir um erro caso o email seja invalido', async() => {
    await login('email@invalido.com')
    expect(mockAlert).toHaveBeenCalledWith('Email inválido')
  })
});
