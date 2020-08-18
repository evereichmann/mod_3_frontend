const formDiv = document.getElementById("next")

function main(){
    formlistner()
    // fetchReqestsImage()
    // fetchReqestsWrappingPaper()
    // fetchReqestsUser()
}

function canvasLayouts(layoutValue){
    if (layoutValue === "1"){

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
                    ctx.fillStyle = "lightgrey"
                    ctx.fillRect(0,0,200,200)
                    ctx.fillRect(0,400,200,200)
                    ctx.fillRect(400,0,200,200)
                    ctx.fillRect(400,400,200,200)
                    ctx.fillRect(200,200,200,200)
                    ctx.fillRect(200,600,200,200)
                console.log('1')
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
                console.log('2')
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
                console.log('3')
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
        console.log('4')
    }

}

function formlistner(){
    const form = document.getElementById("form")
    form.addEventListener("click", function(event){
        event.preventDefault()
        if(event.target.tagName === "BUTTON"){
            const formData = document.getElementById("layouts")
            let layoutValue = formData.value
            if(formData.value === "1"){
                const formOne = (`
                <form id="form-div">
                        <lable>wrapping paper text</lable>
                        <input type="text">
                        <label for="images-main">Image</label>
                        <select name="images-main" id="images-main">
                        </select>
                    </form>
                    `)
                formDiv.innerHTML = formOne
                renderDropdown()
                canvasLayouts(layoutValue)
            }else if(formData.value === "2"){
                const formTwo =(`
                    <form id="form-div">
                    <label for="images-main">Image</label>
                    <select name="images-main" id="images-main">
                    </select>

                    <label for="images-main">Image</label>
                    <select name="images-main" id="images-secondary">
                    </select>
                    </form>
                `)
                formDiv.innerHTML = formTwo
                renderDropdownSecondary()
                canvasLayouts(layoutValue)
            }else if(formData.value === "3"){
                const formThree = (`
                <form id="form-div">
                        <lable>wrapping paper text</lable>
                        <input type="text">
                        <label for="images-main">Image</label>
                            <select name="images-main" id="images-main">
                            
                        </select>

                        <label for="image">Image</label>
                            <select name="image" id="images-secondary">
                        </select>
                    </form>
                    `)
                    formDiv.innerHTML = formThree
                    renderDropdownSecondary()
                    canvasLayouts(layoutValue)
            }else if(formData.value === "4"){
                const formFour = (`
                <form id="form-div">
                        <label for="images-main">Image</label>
                            <select name="images-main" id="images-main">
                            
                        </select>

                        <label for="image">Image</label>
                            <select name="image" id="images-secondary">
                            </select>

                        <label for="image">Image</label>
                            <select name="image" id="images-tertiary">
                            </select>
                    </form>
                    `)
                    formDiv.innerHTML = formFour
                    renderDropdownTertiary()
                    canvasLayouts(layoutValue)
            }   
        }
    })
}

function renderDropdownTertiary(){
    let dropdown = document.getElementById('images-main')
    let dropdownSecondary = document.getElementById('images-secondary')
    let dropdownTertiary = document.getElementById('images-tertiary')

    let defaultOption = document.createElement('option')
    let defaultOptionSecondary = document.createElement('option')
    let defaultOptionTertiary = document.createElement('option')

    defaultOption.text = "Select Image"
    defaultOptionSecondary.text = "Select Image"
    defaultOptionTertiary.text = "Select Image"

    dropdown.add(defaultOption)
    dropdownSecondary.add(defaultOptionSecondary)
    dropdownTertiary.add(defaultOptionTertiary)

    fetch("http://localhost:3000/images")
    .then(resp=> resp.json())
    .then(images=> { 
        for(let i = 0; i < images.length; i++){
            let option = document.createElement('option')
            option.innerHTML = images[i].name
            option.value = images[i].img_url
            dropdown.options.add(option)
            
            let optionSecondary = document.createElement('option')
            optionSecondary.innerHTML = images[i].name
            optionSecondary.value = images[i].img_url
            dropdownSecondary.options.add(optionSecondary)

            let optionTertiary = document.createElement('option')
            optionTertiary.innerHTML = images[i].name
            optionTertiary.value = images[i].img_url
            dropdownTertiary.options.add(optionTertiary)
        }
    }) 
}

function renderDropdownSecondary(){
    let dropdown = document.getElementById('images-main')
    let dropdownSecondary = document.getElementById('images-secondary')
    let defaultOption = document.createElement('option')
    let defaultOptionSecondary = document.createElement('option')
    defaultOption.text = "Select Image"
    defaultOptionSecondary.text = "Select Image"
    dropdown.add(defaultOption)
    dropdownSecondary.add(defaultOptionSecondary)

    fetch("http://localhost:3000/images")
    .then(resp=> resp.json())
    .then(images=> { 
        for(let i = 0; i < images.length; i++){
            let option = document.createElement('option')
            option.innerHTML = images[i].name
            option.value = images[i].img_url
            dropdown.options.add(option)
            
            let optionSecondary = document.createElement('option')
            optionSecondary.innerHTML = images[i].name
            optionSecondary.value = images[i].img_url
            dropdownSecondary.options.add(optionSecondary)
        }
    }) 
}

function renderDropdown(){
    let dropdown = document.getElementById('images-main')
    let defaultOption = document.createElement('option')
    defaultOption.text = "Select Image"
    dropdown.add(defaultOption)


    fetch("http://localhost:3000/images")
    .then(resp=> resp.json())
    .then(images=> { 
        for(let i = 0; i < images.length; i++){
            let option = document.createElement('option')
            option.innerHTML = images[i].name
            option.value = images[i].img_url
            dropdown.options.add(option)
        }
    }) 
}


// function fetchReqestsUser(){
//     fetch("http://localhost:3000/users")
//         .then(resp=> resp.json())
//         .then(usersData=> {
//             usersData.forEach(user=> {
//                 //console.log(user)
//             })
//         })
//     }

// function fetchReqestsWrappingPaper(){
//     fetch("http://localhost:3000/wrapping_papers")
//         .then(resp=> resp.json())
//         .then(wrappingPaperData=> {
//             wrappingPaperData.forEach(paper=> {
//                 //console.log(paper)
//             })
//         })
// }
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