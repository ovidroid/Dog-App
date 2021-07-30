async function start(){

    const response = await fetch("https://dog.ceo/api/breeds/list/all")
    const data = await response.json()
    createBreedList(data.message)
}

start()

function createBreedList(breesList){
    document.getElementById("breed").innerHTML = `
    <select onchange="loadByBreed(this.value)">
    <option > Choose a Dog breed</option>
    ${Object.keys(breesList).map(function (breed){
        return `<option>${breed}</option>`
    }).join("")}
</select>`

}


async function loadByBreed(breed){
if(breed !="Choose a Dog breed"){
    const response = await fetch(`https://dog.ceo/api/breed/${breed}/images`)
    const data = await response.json()
    // console.log(data.message)
    loadImages(data.message)
}}

function loadImages(image){
    document.getElementById("slideshow").innerHTML = `
    <div class="slide" style="background-image : url('${image[0]}')"></div>
    `
}