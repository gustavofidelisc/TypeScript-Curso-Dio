import { PeopleAccount } from './class/PeopleAccount'
import { CompanyAccount } from './class/CompanyAccount'

const PeopleAccount1: PeopleAccount = new PeopleAccount(1, 'Gus', 103)
console.log(PeopleAccount1)

const companyAccount: CompanyAccount = new CompanyAccount('Dio', 104)
console.log(companyAccount)

PeopleAccount1.deposit()
companyAccount.deposit()

PeopleAccount1.setName('Gustavo Fidelis')

