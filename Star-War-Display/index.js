let mainDiv=document.querySelector("#details")
fetch("https://swapi.dev/api/people")
.then(res => res.json())
.then(data => {
    console.log(data.results)
    show(data.results)
    })
.catch((error) => {
    console.log(error)
})



const show = (dataToShow) => {

    let display = document.getElementById('details');
    
    let htmlElement = '';

    dataToShow.forEach((element) => {
        console.log(element.name)

        
        let box = document.createElement('div')
        let imgTag = document.createElement('img')
        let btnTag = document.createElement('button')
        let paraTag = document.createElement('p')

        imgTag.setAttribute('src',`img/${element.height}.jpg`)
        imgTag.setAttribute('class', 'img')
        box.setAttribute('class', 'box')
        box.setAttribute('class', 'box')

        btnTag.innerText = `${element.name}`
        paraTag.innerText = `Name: ${element.name} \n Gender: ${element.gender} \n Height: ${element.height}`

        box.appendChild(imgTag)
        box.appendChild(btnTag)
        box.appendChild(paraTag)

        mainDiv.appendChild(box)

        btnTag.addEventListener('click', () =>{
            if(paraTag.style.visibility === 'hidden'){
                paraTag.style.visibility = 'visible'
            }else{
                paraTag.style.visibility = 'hidden'
            }
        })
        
    });
    
}
