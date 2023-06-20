let btn = document.querySelector('.btn')
let view = document.querySelector('.view')
let mass = document.querySelector('.mass')
let selected = document.querySelector('#planet')
let h1= document.createElement('h1')
h1.style.fontSize = '25px'
h1.style.color = '#fff'
h1.setAttribute('id','h1')
btn.addEventListener('click', ()=>{
    let massValue = mass.value
    let selectedValue = selected.value
    if(massValue == ''){
        divCreator('Mass is Required')
    }else if(selectedValue == ''){
        divCreator("You didn't select planet yet")
    }else{
        if(selectedValue=='mercury'){
            calculator('images/mercury.png', 'Mercury',3.7,massValue)
        }else if(selectedValue=='venus'){
            calculator('images/venus.png','Venus',8.87,massValue)
        }else if(selectedValue=='earth'){
            calculator('images/earth.png','Earth',9.8,massValue)
        }else if(selectedValue=='jupiter'){
            calculator('images/jupiter.png','Jupiter',24.8,massValue)
        }else if(selectedValue=='mars'){
            calculator('images/mars.png','Mars',3.7,massValue)
        }else if(selectedValue=='saturn'){
            calculator('images/saturn.png','Saturn',10.4,massValue)
        }else if(selectedValue=='uranus'){
            calculator('images/uranus.png','Uranus',8.7,massValue)
        }else if(selectedValue=='neptune'){
            calculator('images/neptune.png','Neptune',11.2,massValue)
        }else if(selectedValue=='pluto'){
            calculator('images/pluto.png','Pluto',0.7,massValue)
        }

    }
})

function calculator(src,planet,gravity,massValue){
    view.innerHTML = ''
    let div1 = document.createElement('div')
    let div2 = document.createElement('div')
    let div3 = document.createElement('div')
    let h22 = document.createElement('h2')
    let img = document.createElement('img')
    let h2 = document.createElement('h2')
    h2.setAttribute('id','h2')
    img.setAttribute('id', 'image')
    h22.setAttribute('id','h22')
    h22.textContent = "The weight of an object on "
    div1.setAttribute('id','div1')
    div2.setAttribute('id', 'div2')
    div3.setAttribute('id','div3')
    div2.appendChild(h22)
    img.src = src
    div1.appendChild(img)
    h2.textContent = planet
    div2.appendChild(h2)
    div3.textContent = `${(massValue * gravity).toFixed(2)}N`
    div2.appendChild(div3)
    view.appendChild(div1)
    view.appendChild(div2)
}

function divCreator(text){
    view.innerHTML = ''
    let div = document.createElement('div')
    div.style.textAlign = "center"
    h1.textContent = text
    div.appendChild(h1)
    div.style.padding = '20px 30px'
    div.style.margin = '10px'
    div.style.backgroundColor = 'rgba(204, 193, 193, 0.2)'
    div.style.width = '50%'
    view.appendChild(div)
}