function seletorGeral(){
    let form = document.querySelector('.form');
    let dados = ['Abaixo do peso','Peso normal','Sobrepeso','Obesidade grau 1','Obesidade grau 2','Obesidade grau 3']; //6 elements

    function verificaImc(e){
        e.preventDefault();
        let peso = document.querySelector('#peso');
        let altura = document.querySelector('#altura');
        let resultado = document.querySelector('.status-result');
        let somaImc = (Number(peso.value) / Number(altura.value^2)).toFixed(1);
        // console.log(form,peso,altura,calcula,somaImc, resultado);

            if(!peso.value || !altura.value ===0 || null || undefined || '' || NaN || false){
               resultado.style.display ='block';
               resultado.style.background ='#b41313';
               resultado.innerHTML = `<p><strong>Nenhum dos itens foi preenchido!</strong></p>`;
            }else if(peso.value ==='' || altura.value ===''){
               resultado.style.display ='block';
               resultado.style.background ='#b41313';
               resultado.innerHTML = `<p><strong>Um ou mais campos precisam ser preenchidos!</strong></p>`;
            }else if(somaImc <= 18.5){
                resultado.style.display='block';
                resultado.style.background ='green';
                resultado.innerHTML = `<p>Seu IMC é ${somaImc}.  <strong>Status:  ${dados[0]}</strong>`;
            }else if(somaImc > 18.5 && somaImc <= 24.9){
                resultado.style.display='block';
                resultado.style.background ='green';
                resultado.innerHTML = `<p>Seu IMC é ${somaImc}.  <strong>Status:  ${dados[1]}</strong>`;
            }else if(somaImc >= 25 && somaImc <= 29.9){
                resultado.style.display='block';
                resultado.style.background ='green';
                resultado.innerHTML = `<p>Seu IMC é ${somaImc}.  <strong>Status:  ${dados[2]}</strong>`;
            }else if(somaImc >= 30 && somaImc <= 34.9){
                resultado.style.display='block';
                resultado.style.background ='green';
                resultado.innerHTML = `<p>Seu IMC é ${somaImc}.  <strong>Status:  ${dados[3]}</strong>`;
            }else if(somaImc >= 35 && somaImc <= 39.9){
                resultado.style.display='block';
                resultado.style.background ='green';
                resultado.innerHTML = `<p>Seu IMC é ${somaImc}.  <strong>Status:  ${dados[4]}</strong>`;
            }else if(somaImc >= 40){
                resultado.style.display='block';
                resultado.style.background ='green';
                resultado.innerHTML = `<p>Seu IMC é ${somaImc}.  <strong>Status:  ${dados[5]}</strong>`;
            }
    }
    form.addEventListener('submit', verificaImc);
}
seletorGeral();
