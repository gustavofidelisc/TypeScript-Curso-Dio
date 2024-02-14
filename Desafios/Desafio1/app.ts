import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { MasterAccount } from './class/MasterAccount'


// --------------------PRIMEIRO CLIENTE-------------------------
const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
console.log(peopleAccount)

// ---------------------------DEPOSITANDO--------------------------------
peopleAccount.deposit(100)
console.log(peopleAccount)

// ---------------------------SACANDO--------------------------------
peopleAccount.withdraw(50)
console.log(peopleAccount)

// ----------------- TENTANDO SACAR MAIS DO QUE TEM NA CONTA -----------------

peopleAccount.withdraw(100)
console.log(peopleAccount)

// ----------------------------------

// --------------------SEGUNDO CLIENTE-------------------------
const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
companyAccount.getLoan(100)
console.log(companyAccount)

// --------------------------- tERCEIRO CLIENTE--------------------------------

const masterAccount: MasterAccount = new MasterAccount('Prime', 233)
console.log(masterAccount)
masterAccount.deposit(100)
console.log(masterAccount)