const form = document.querySelector('#form-habits')
const nlwSetup = new NLWSetup(form)
const button = document.querySelector('header button')

button.addEventListener('click', add)

function add() {
    const today = new Date().toLocaleDateString('pt-br').slice(0, -5)
    const dayExists = nlwSetup.dayExists(today)
    
    if(dayExists) {
        alert("Dia já incluso")
        return
    }

    nlwSetup.addDay('01/01')
}

// const data = {
//     run: ['01-02', '03-02'],
//     food: ['04-02'],
//     journal: ['02-02'],
//     takePills: ['01-02'],
    
// }

// nlwSetup.setData(data)
// nlwSetup.load()