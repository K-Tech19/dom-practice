document.addEventListener('DOMContentLoaded', ()=>{
    // all the code inside of these curly bois will run
    // as soon as the DOMContentLoaded event fires
    // ie once the browser has finished loading the DOM
    console.log('DOM has been loaded!!!')

    // select a dom element by it's id
    let myDiv = document.getElementById('hello')
    // console.log(myDiv)

    // select all elements with the class name of square
    let theSquares = document.getElementsByClassName('square')
    // console.log(theSquares)
    // console.log(theSquares[1])

    // select all divs
    let theDivs = document.getElementsByTagName('div')
    // console.log(theDivs)

    // querySelector takes a string that is formatted
    // exactly the same as css selectors
    let myDiv2 = document.querySelector('#gb')
    // console.log(myDiv2)

    // select all elements whose css selector is whatever
    // you pass into the parentheses, in this case .square
    let myDivs2 = document.querySelectorAll('.square')
    console.log(myDivs2)

    // change styles
    myDiv.style.backgroundColor = 'chartreuse'
    myDiv2.style.height = '300px'

    // change content
    myDiv.innerText = 'I love SEI'
    myDiv2.innerHTML = '<h2>I love GA</h2>'

    // manipulating multiple DOM elements

    //  THIS WONT WORK:
    // theSquares.style.border = '2px dashed black'

    for (let i=0; i<theSquares.length; i++) {
        theSquares[i].style.border = 'dashed 2px black'
    }

    // grab the kitten photo
    let photo = document.querySelector('img')

    // console.log(photo.src)
    // console.log(photo.getAttribute('src'))

    photo.src = 'https://picsum.photos/200/200'
    photo.setAttribute('src', 'https://placebear.com/200/200')

    console.log(myDiv.className)
    console.log(myDiv.classList)

    // add a class to an element
    myDiv.classList.add('yellow')
    console.log(myDiv.classList)
    // check if myDiv has a class of random
    console.log(myDiv.classList.contains('random'))

    // remove yellow class
    myDiv.classList.remove('yellow')

    myDiv.addEventListener('click', (event)=>{
        console.log(event.clientX)
    })

    document.querySelector('form').addEventListener('submit', (e)=>{
        e.preventDefault() // prevents the browser from refreshing
        console.log(document.querySelector('#practice').value)
    })

    // CREATE AN ELEMENT AND STORE IT IN A VARIABLE
    let hackLink = document.createElement('a')
    hackLink.href = 'http://hackertyper.com/'
    hackLink.textContent = 'Hack!'

    document.body.appendChild(hackLink)
})