const formDiv = document.getElementById("next")
const currentUser = {id: 1, username: "evereichmann" , password: "1234Flatiron"}


function main(){
    formlistner()
    // fetchReqestsImage()
    fetchReqestsWrappingPaper()
    // fetchReqestsUser()
   // displayText();
}

function fetchReqestsWrappingPaper(){
    const wrappingPaperDiv = document.getElementById('wrapping-paper-card')
    fetch("http://localhost:3000/wrapping_papers")
        .then(resp=> resp.json())
        .then(wrappingPaperData=> {
            wrappingPaperData.forEach(paper=> {
                    console.log(paper)
                        const editWrapingPaper =  (()=>{return paper.user_id === currentUser.id} ) ? 'view' : 'edit'
                        wrappingPaperDiv.innerHTML += (`<p>${paper.name}</p><button data-id=${paper.user_id}>${editWrapingPaper}</button>`)
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
                    <button id="btn-all" class="print">Print</button>
                    <button id="btn-all" class="edit">Edit</button>
                    <button id="btn-all" class="save">Save</button>
                    <button id="btn-all" class="delete">Delete</button>
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
                    ct.fillStyle =  "white"
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

function wrappingPaperImage(){
    const generatePic = document.getElementById("next")
    generatePic.addEventListener('submit', function(event){
        event.preventDefault()
        if(event.target.tagName === "BUTTON")
        // console.log(imageField.name)
        const imageField = document.getElementById("images-main")
        console.log(event.target.previousElementSibling.value)
        console.log(event.target.previousSibling.innerHTML)
        console.log("hello world")
        console.log(imageField.value)
              
        //this works!!!!!!!!!!!!!!!!!
        // let div = document.getElementById("canvas")
        //         while(div.firstChild){
        //         div.removeChild(div.firstChild)
        //         }
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
                            <option value="https://ibb.co/k9NWkdq">Birthday Cake</option>
                            <option value="https://ibb.co/qj21Ym9">Snowflakes</option>
                            <option value="https://ibb.co/HdGmTYz">Hearts</option>
                            <option value="https://ibb.co/9ZFm7Fp">Clovers</option>
                            <option value="https://ibb.co/b2vwnFK">Flowers</option>
                        </select>
                        <br/>
                        <button id="btn-all" class="Generate">Generate</button>
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

//display text function
let olderText, w;
window.document.addEventListener('DOMContentLoaded', function(e) {
    
    
        window.addEventListener('load', (ev)=>{
        //displayText(); not working?
       // textInput.addEventListener('input', displayText); not working
    });
    function displayText(){
        canvas = document.getElementById('canvas');
        ctx = canvas.getContext('2d'); 
        //pulling font info from import in css file
        let fontFamily = 'Alata';
        ctx.font = `normal 30px xyz, ${fontFamily}`;
        ctx.fillStyle = 'black';
        //textAlign center, left, right, end, start
        ctx.textAlign = 'start';
        //textBaseline top, hanging, middle, bottom,ideographic, alphabetic
        ctx.textBaseline = 'alphabetic';
        //direction ltr, rtl, inherit
        ctx.direction = 'ltr';
        let txt = textInput.value;
        let metrics = ctx.measureText(olderTxt);
        let w = metrics.width;
        //this should let us delete letters
            ctx.clearRect(50, 110, w, -40);
    
            if( txt == '' ){
             txt = 'Text here';
        }
        ctx.fillText(txt, 100, 100);
        ctx.fillText(txt, 200,200);
        oldTxt = txt;
    }
});

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