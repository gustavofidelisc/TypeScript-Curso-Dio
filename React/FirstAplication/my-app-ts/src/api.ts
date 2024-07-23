const conta ={
    email: "gustavo@gmail.com",
    password: "123456",
    name: "Gustavo"
}

export const api = new Promise((resolve) =>{
    setTimeout(() => {
        resolve(conta)
    }, 3000)
})