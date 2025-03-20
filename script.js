const select1 = document.getElementById('first')
const select2 = document.getElementById('second')
const input = document.getElementById('input')
const result = document.getElementById('result')
const btn = document.getElementById('btn')
// const flag1 = document.getElementById('flag1');
// const flag2 = document.getElementById('flag2'); 
const key= "70c8c11f5ab356410c2569fc"
const ul = `https://v6.exchangerate-api.com/v6/${key}/latest/USD`

// function setFlag(select, flagSpan) {
//     const selectedCurrency = select.value.toLowerCase();
//     flagSpan.innerHTML = `<img src="https://flagcdn.com/48x36/${selectedCurrency}.png" alt="Flag" />`;
// }

async function fetCurrenc() {
    try{
        const resp = await fetch(ul)
        const res = await resp.json()
        console.log(res)
        const currencies= Object.keys(res.conversion_rates) 
        select1.innerHTML = '';
        select2.innerHTML = '';
        
        currencies.forEach(valuta =>{
            
            select1.innerHTML += `<option value="${valuta}"> ${valuta}</option>`
            select2.innerHTML += `<option value="${valuta}"> ${valuta}</option>`

        })
        select1.value = 'USD'
        select2.value= 'UZS'
        // setFlag(select1, flag1);
        // setFlag(select2, flag2);
    }catch(error){
        console.log(error)
    }
}


async function convert() {
    try{
        const from = select1.value;
        const to = select2.value;
        const amount= parseFloat(input.value);
    
        const url = `https://v6.exchangerate-api.com/v6/${key}/pair/${from}/${to}/${amount}`;
        const response = await fetch(url);
    
        const data = await response.json();
    
        result.textContent= data.conversion_result;
    }catch(error){
        console.log(error)
    }

}

// select1.addEventListener('change', () => setFlag(select1, flag1));
// select2.addEventListener('change', () => setFlag(select2, flag2));
btn.addEventListener('click', convert)

fetCurrenc()
