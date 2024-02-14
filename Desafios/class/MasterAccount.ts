import { DioAccount } from "./DioAccount";

export class MasterAccount extends DioAccount {
    constructor(name: string, accountNumber: number){
        super(name, accountNumber)
    }

    deposit = (value: number): void => {
        if(this.validateStatus()){
            const balance = this.getBalance() + value + 10
            this.setBalance(balance)
            console.log('Depósito realizado com sucesso!')
        }
    }

}