const form = document.querySelector('#form-habits')
const nlwSetup = new NLWSetup(form)

const data = {
    run: ['01-02', '03-02'],
    food: ['04-02'],
    journal: ['02-02'],
    takePills: ['01-02'],
    
}

nlwSetup.setData(data)
nlwSetup.load()