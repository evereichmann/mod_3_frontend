const formDiv = document.getElementById("next")
const currentUser = {id: 1, username: "evereichmann" , password: "1234Flatiron"}


function main(){
    formlistner()
    fetchReqestsWrappingPaper()
    logIn()
    makingWrappingPaper()
    deleteClickListner()
}


function logIn(){
    const signInForm = document.getElementById("login-form")
    signInForm.addEventListener('submit', function(event){
        event.preventDefault()
        const welcomeBanner = document.getElementById("description")
        const welcomeUser = document.createElement("h3")
        welcomeUser.innerText = `Welcome ${currentUser.username}`
        welcomeBanner.append(welcomeUser)
        event.target[0].value = ""
        event.target[1].value = ""
    })
}
//find form
function makingWrappingPaper(){
    const mainDiv = document.getElementById("main-div")
    mainDiv.addEventListener("click", function(event){
        if(event.target.className === "save"){
            
            const wrapperName = document.getElementById("wrapper-name")
            const layoutType = document.getElementById("layouts")
            
            const newPaper = {
                "name": wrapperName.value,
                "layout": layoutType.value,
                "user_id": 1,
            }
            
            const reqObj = {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newPaper)
            }

            fetch("http://localhost:3000/wrapping_papers", reqObj)
                .then(resp=> resp.json())
                .then(newWrapPaper=> {
                    // console.log(newWrapPaper.name)
                })
              }
        //else if(event.target.className === "home"){
            
        //     let div = document.getElementById("canvas")
        //     while(div.firstChild){
        //         div.removeChild(div.firstChild)
        //     }

        //     const wrappingPaperDiv = document.getElementById('wrapping-paper-card')
        //     fetch("http://localhost:3000/wrapping_papers")
        //         .then(resp=> resp.json())
        //         .then(wrappingPaperData=> {
        //             wrappingPaperData.forEach(paper=> {
        //             wrappingPaperDiv.innerHTML += (`<p>${paper.name}</p><button id="btn-all" data-id=${paper.id}>View</button>  <button id="btn-all" data-id=${paper.id} class="delete" >Delete</button>`)
        //     })
        // })
        //}
        else if(event.target.className === "delete"){
            
            let div = document.getElementById("canvas")
            while(div.firstChild){
            div.removeChild(div.firstChild)

            }
 
        }
    })
}

function deleteClickListner(){
    const findDeleteBtn = document.getElementById('index-container')
    findDeleteBtn.addEventListener('click', function(event){
        if(event.target.className === "delete"){
            const wrappingPaperDeleteId = event.target.dataset.id
            
            const reqObj = {
                    method: "DELETE"
                }
                
                fetch(`http://localhost:3000/wrapping_papers/${wrappingPaperDeleteId}`, reqObj)
                    .then(resp=> resp.text())
                    .then(data=> {
                        event.target.previousSibling.previousSibling.previousSibling.remove()
                        event.target.previousSibling.previousSibling.remove()
                        event.target.remove()
                })
        }
    })
}

function fetchReqestsWrappingPaper(){
    const wrappingPaperDiv = document.getElementById('wrapping-paper-card')
    fetch("http://localhost:3000/wrapping_papers")
        .then(resp=> resp.json())
        .then(wrappingPaperData=> {
            wrappingPaperData.forEach(paper=> {
                        wrappingPaperDiv.innerHTML += (`<p>${paper.name}</p><button id="btn-all" data-id=${paper.id}>View</button>  <button id="btn-all" data-id=${paper.id} class="delete" >Delete</button>`)
            })
        })
}



function canvasLayouts(layoutValue){
    if (layoutValue === "1"){
        const canvasContainer = document.getElementById("canvas")
                canvasContainer.innerHTML = (`
                    <canvas id="myCanvas" width="600" height="800" style="border:1px solid #c3c3c3;">
                        Your browser does not support the canvas element.
                    </canvas>
                    <br/>
                    `)

        const buttonContainer = document.getElementById("buttons")
            buttonContainer.innerHTML = (`
                    <button id="btn-all" class="print">Print</button>
                    </br>
                    <button id="btn-all" class="edit">Edit</button>
                    </br>
                    <button id="btn-all" class="save">Save</button>
                    </br>
                    <button id="btn-all" class="delete">Delete</button>
                    </br>
                    <button id="btn-all" class="home">Home</button>
            `)            

                let canvas = document.getElementById("myCanvas")
                    let ctx = canvas.getContext("2d")
                    ctx.fillStyle = "lightgrey"
                    ctx.fillRect(0,0,200,200)
                    ctx.fillRect(0,400,200,200)
                    ctx.fillRect(400,0,200,200)
                    ctx.fillRect(400,400,200,200)
                    ctx.fillRect(200,200,200,200)
                    ctx.fillRect(200,600,200,200)

                    let ct = canvas.getContext("2d")
                    ct.fillStyle = "white"
                    ct.fillRect(0,200,200,200)
                    ct.fillRect(0,600,200,200)
                    ct.fillRect(200,0,200,200)
                    ct.fillRect(200,400,200,200)
                    ct.fillRect(400,200,200,200)
                    ct.fillRect(400,600,200,200)
                
    }else if (layoutValue === "2"){

        const canvasContainer = document.getElementById("canvas")
                canvasContainer.innerHTML = (`
                    <canvas id="myCanvas" width="600" height="800" style="border:1px solid #c3c3c3;">
                        Your browser does not support the canvas element.
                    </canvas>
                    <br/>
                    <button>Print</button>
                    <button>Edit</button>
                    <button>Delete</button>
                `)
                let canvas = document.getElementById("myCanvas")
                    let ctx = canvas.getContext("2d")
                    ctx.fillStyle = "lightblue"
                    ctx.fillRect(0,0,200,200)
                    ctx.fillRect(0,400,200,200)
                    ctx.fillRect(400,0,200,200)
                    ctx.fillRect(400,400,200,200)
                    ctx.fillRect(200,200,200,200)
                    ctx.fillRect(200,600,200,200)

                    var ct = canvas.getContext("2d")
                    ct.fillStyle = "white"
                    ct.fillRect(0,200,200,200)
                    ct.fillRect(0,600,200,200)
                    ct.fillRect(200,0,200,200)
                    ct.fillRect(200,400,200,200)
                    ct.fillRect(400,200,200,200)
                    ct.fillRect(400,600,200,200)
                //console.log('2')
    }else if (layoutValue === "3"){

        const canvasContainer = document.getElementById("canvas")
                canvasContainer.innerHTML = (`
                    <canvas id="myCanvas" width="600" height="800" style="border:1px solid #c3c3c3;">
                        Your browser does not support the canvas element.
                    </canvas>
                    <br/>
                    <button>Print</button>
                    <button>Edit</button>
                    <button>Delete</button>
                `)
                let canvas = document.getElementById("myCanvas");
                let ctx = canvas.getContext("2d");
                ctx.fillStyle = "lightgreen";
                ctx.fillRect(0,0,200,200);
                ctx.fillRect(0,400,200,200);
                ctx.fillRect(400,0,200,200);
                ctx.fillRect(400,400,200,200);
                ctx.fillRect(200,200,200,200);
                ctx.fillRect(200,600,200,200);

                let ct = canvas.getContext("2d");
                ct.fillStyle = "lightblue";
                ct.fillRect(0,200,200,200)
                ct.fillRect(0,600,200,200)
                ct.fillRect(400,200,200,200)
                ct.fillRect(400,600,200,200)

                let c = canvas.getContext("2d");
                c.fillStyle = "white";
                c.fillRect(200,0,200,200)
                c.fillRect(200,400,200,200)
                // console.log('3')
    }else{

        const canvasContainer = document.getElementById("canvas")
        canvasContainer.innerHTML = (`
                    <canvas id="myCanvas" width="600" height="800" style="border:1px solid #c3c3c3;">
                     Your browser does not support the canvas element.
                    </canvas>
                    <br/>
                    <button>Print</button>
                    <button>Edit</button>
                    <button>Delete</button>
                `)
                let canvas = document.getElementById("myCanvas");
                let ctx = canvas.getContext("2d");
                ctx.fillStyle = "grey";
                ctx.fillRect(0,0,200,200);
                ctx.fillRect(0,400,200,200);
                ctx.fillRect(400,0,200,200);
                ctx.fillRect(400,400,200,200);
                ctx.fillRect(200,200,200,200);
                ctx.fillRect(200,600,200,200);

                let ct = canvas.getContext("2d");
                ct.fillStyle = "lightgrey";
                ct.fillRect(0,200,200,200)
                ct.fillRect(0,600,200,200)
                ct.fillRect(400,200,200,200)
                ct.fillRect(400,600,200,200)

                let c = canvas.getContext("2d");
                c.fillStyle = "white";
                c.fillRect(200,0,200,200)
                c.fillRect(200,400,200,200)        
        // console.log('4')
    }

}

function wrappingPaperImage(){
    const generatePic = document.getElementById("next")
    generatePic.addEventListener('click', function(event){
        event.preventDefault()
        if(event.target.className === "generate"){
            const imageChoice = document.getElementById('images-main')
            
            let div = document.getElementById("canvas")
            while(div.firstChild){
                div.removeChild(div.firstChild)
            } 
            
            //console.log(imageChoice.value)

            const newImage = document.createElement('img')
            newImage.src = `${imageChoice.value}`
            div.append(newImage)
        }
    })
}


function formlistner(){
    const form = document.getElementById("form")
    form.addEventListener("click", function(event){
        event.preventDefault()
        if(event.target.tagName === "BUTTON"){
            const formData = document.getElementById("layouts")
            let layoutValue = formData.value
            if(formData.value === "1"){

                let div = document.getElementById("index-container")
                while(div.firstChild){
                div.removeChild(div.firstChild)
                }

                const formOne = (`
                <form id="form-div">
                        <lable>wrapping paper text</lable>
                        <br/>
                        <input type="text" id="wrapping-inner-text">
                        <br/>
                        <label for="images-main">Image</label>
                        <br/>
                        <select name="images-main" id="images-main">
                            <option value="">Select Image</option>
                            <option value="https://i.ibb.co/GtzbBhC/Screen-Shot-2020-08-20-at-10-32-54-AM.png">Birthday Cake</option>
                            <option value="https://i.ibb.co/jfj4k3G/Screen-Shot-2020-08-20-at-10-38-23-AM.png">Snowflakes</option>
                            <option value="https://i.ibb.co/M6PqkpV/Screen-Shot-2020-08-20-at-10-42-12-AM.png">Hearts</option>
                            <option value="https://i.ibb.co/xFpKNp2/Screen-Shot-2020-08-20-at-10-51-42-AM.png">Clovers</option>
                            <option value="https://i.ibb.co/5njpVkR/Screen-Shot-2020-08-20-at-10-56-40-AM.png">Flowers</option>
                        </select>
                        <br/>
                        <button id="btn-all" class="generate">Generate</button>
                        </form>
                    `)
                formDiv.innerHTML = formOne
                // renderDropdown()
                canvasLayouts(layoutValue)
                wrappingPaperImage()
            }else if(formData.value === "2"){

                let div = document.getElementById("index-container")
                while(div.firstChild){
                div.removeChild(div.firstChild)
                }

                const formTwo =(`
                    <form id="form-div">
                    <label for="images-main">Image</label>
                    <br/>
                    <select name="images-main" id="images-main">
                        <option value="">Select Image</option>
                    </select>
                    <br/>
                    <label for="images-main">Image</label>
                    <br/>
                    <select name="images-main" id="images-secondary">
                        <option value="">Select Image</option>
                    </select>
                    </form>
                `)
                formDiv.innerHTML = formTwo
                // renderDropdownSecondary()
                canvasLayouts(layoutValue)
            }else if(formData.value === "3"){

                let div = document.getElementById("index-container")
                while(div.firstChild){
                div.removeChild(div.firstChild)
                }

                const formThree = (`
                <form id="form-div">
                        <lable>wrapping paper text</lable>
                        <br/>
                        <input type="text">
                        <br/>
                        <label for="images-main">Image</label>
                        <br/>
                            <select name="images-main" id="images-main">
                            <option value="">Select Image</option>
                            </select>
                        <br/>
                        <label for="image">Image</label>
                        <br/>
                            <select name="image" id="images-secondary">
                            <option value="">Select Image</option>
                            </select>
                    </form>
                    `)
                    formDiv.innerHTML = formThree
                    // renderDropdownSecondary()
                    canvasLayouts(layoutValue)
            }else if(formData.value === "4"){

                let div = document.getElementById("index-container")
                while(div.firstChild){
                div.removeChild(div.firstChild)
                }

                const formFour = (`
                <form id="form-div">
                        <label for="images-main">Image</label>
                        <br/>
                            <select name="images-main" id="images-main">
                            <option value="">Select Image</option>
                             </select>
                             <br/>
                        <label for="image">Image</label>
                        <br/>
                            <select name="image" id="images-secondary">
                            <option value="">Select Image</option>
                            </select>
                            <br/>
                        <label for="image">Image</label>
                        <br/>
                            <select name="image" id="images-tertiary">
                            <option value="">Select Image</option>
                            </select>
                    </form>
                    `)
                    formDiv.innerHTML = formFour
                    // renderDropdownTertiary()
                    canvasLayouts(layoutValue)
            }   
        }
    })
}

// function renderDropdownTertiary(){
//     let dropdown = document.getElementById('images-main')
//     let dropdownSecondary = document.getElementById('images-secondary')
//     let dropdownTertiary = document.getElementById('images-tertiary')

//     let defaultOption = document.createElement('option')
//     let defaultOptionSecondary = document.createElement('option')
//     let defaultOptionTertiary = document.createElement('option')

//     defaultOption.text = "Select Image"
//     defaultOptionSecondary.text = "Select Image"
//     defaultOptionTertiary.text = "Select Image"

//     dropdown.add(defaultOption)
//     dropdownSecondary.add(defaultOptionSecondary)
//     dropdownTertiary.add(defaultOptionTertiary)

//     fetch("http://localhost:3000/images")
//     .then(resp=> resp.json())
//     .then(images=> { 
//         for(let i = 0; i < images.length; i++){
//             let option = document.createElement('option')
//             option.innerHTML = images[i].name
//             option.value = images[i].img_url
//             dropdown.options.add(option)
            
//             let optionSecondary = document.createElement('option')
//             optionSecondary.innerHTML = images[i].name
//             optionSecondary.value = images[i].img_url
//             dropdownSecondary.options.add(optionSecondary)

//             let optionTertiary = document.createElement('option')
//             optionTertiary.innerHTML = images[i].name
//             optionTertiary.value = images[i].img_url
//             dropdownTertiary.options.add(optionTertiary)
//         }
//     }) 
// }

// function renderDropdownSecondary(){
//     let dropdown = document.getElementById('images-main')
//     let dropdownSecondary = document.getElementById('images-secondary')
//     let defaultOption = document.createElement('option')
//     let defaultOptionSecondary = document.createElement('option')
//     defaultOption.text = "Select Image"
//     defaultOptionSecondary.text = "Select Image"
//     dropdown.add(defaultOption)
//     dropdownSecondary.add(defaultOptionSecondary)

//     fetch("http://localhost:3000/images")
//     .then(resp=> resp.json())
//     .then(images=> { 
//         for(let i = 0; i < images.length; i++){
//             let option = document.createElement('option')
//             option.innerHTML = images[i].name
//             option.value = images[i].img_url
//             dropdown.options.add(option)
            
//             let optionSecondary = document.createElement('option')
//             optionSecondary.innerHTML = images[i].name
//             optionSecondary.value = images[i].img_url
//             dropdownSecondary.options.add(optionSecondary)
//         }
//     }) 
// }

// function renderDropdown(){
//     let dropdown = document.getElementById('images-main')
//     let defaultOption = document.createElement('option')
//     defaultOption.text = "Select Image"
//     dropdown.add(defaultOption)


//     fetch("http://localhost:3000/images")
//     .then(resp=> resp.json())
//     .then(images=> { 
//         for(let i = 0; i < images.length; i++){
//             let option = document.createElement('option')
//             option.innerHTML = images[i].name
//             option.value = images[i].img_url
//             dropdown.options.add(option)
//         }
//     }) 
// }


// function fetchReqestsUser(){
//     fetch("http://localhost:3000/users")
//         .then(resp=> resp.json())
//         .then(usersData=> {
//             usersData.forEach(user=> {
//                 //console.log(user)
//             })
//         })
//     }


// function fetchReqestsImage(){
//     fetch("http://localhost:3000/images")
//             .then(resp=> resp.json())
//             .then(imageData=> {
//                 imageData.forEach(image=> {
//                     image
//                     //console.log(image)
//                 })
//             })
// } 


main()