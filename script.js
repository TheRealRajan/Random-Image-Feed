const container  = document.querySelector('.container')
const unsplashUrl = 'https://source.unsplash.com/random/'
const getmoreImagesButton = document.querySelector('.moreImagesButton')
const parent = document.querySelector('.parent')
const rows = 10

for(let i = 0; i < rows * 3 ; i++){
    const img = document.createElement('img')
    img.src = `${unsplashUrl}${getRandomSize()}`
    container.appendChild(img)
}

function getRandomNum(){
    return Math.floor(Math.random()*15) + 400
}

function getRandomSize(){
    return `${ getRandomNum()}x${ getRandomNum()}`
}

function getmoreImages(){
    const newContainer = document.createElement('div')
    newContainer.classList.add('container')
    for(let i = 0; i < rows * 3 ; i++){
    const img = document.createElement('img')
    img.src = `${unsplashUrl}${getRandomSize()}`
    newContainer.appendChild(img)
    parent.appendChild(newContainer)
    }
}
getmoreImagesButton.addEventListener('click',()=>{
    console.log("Loading more images...")      
    getmoreImages()
})