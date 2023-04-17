const btnAtualizar = document.querySelector('#btnAtualizar')
btnAtualizar.addEventListener('click', getCripto)


async function getCripto(){
    const response = await fetch(`https://www.mercadobitcoin.net/api/BTC/ticker/`)
    const data = await response.json()
    setTimeout(() => {
        console.log(data.ticker)
        document.querySelector('#highPrice').innerHTML = `Maior preço: ${(data.ticker.high)}`
        document.querySelector('#lowPrice').innerHTML = `Menor preço: ${data.ticker.low}`
        document.querySelector('#priceforNegociation').innerHTML = `Quantidade negociada: ${data.ticker.vol}`
        document.querySelector('#precoMaiorOferta').innerHTML = `Maior preço de oferta: ${data.ticker.buy}`
        document.querySelector('#precoMenorOferta').innerHTML = `Menor preço de oferta: ${data.ticker.sell}`
    }, 2000);
   
}

