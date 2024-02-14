export abstract class DioAccount {
  private readonly name: string
  private readonly accountNumber: number
  private balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }


  getName = (): string => {
    return this.name
  }

  deposit = (value: number): void => {
    if(this.validateStatus()){
      this.balance += value
      console.log('Depósito realizado com sucesso!')
    }
  }

  withdraw = (value: number): void => {
    if(this.validateStatus()){
      if( (this.balance - value) >= 0){
        this.balance -= value 
        console.log('Saque realizado com sucesso!')
      } else 
        console.log('Saldo insuficiente')
    }
  }

  getBalance = (): number => {
    return this.balance
  }

  protected setBalance = (value: number): void => {
    this.balance = value
  }

  protected validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }

  
}
