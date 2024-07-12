import { login } from './login';

describe('login', () => {
  it('Deve chamar a função onOpen', () => {
    const mockOnOpen = jest.fn();

    login(mockOnOpen);
    
    expect(mockOnOpen).toHaveBeenCalled();
  });
});
