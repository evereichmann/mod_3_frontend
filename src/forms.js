const formDiv = document.getElementById("next")


function main(){
    formlistner()
}

function formlistner(){
    const form = document.getElementById("form")
    form.addEventListener("click", function(event){
        event.preventDefault()
        if(event.target.tagName === "BUTTON"){
            const canvasContainer = document.getElementById("canvas")
            canvasContainer.innerHTML = (`<canvas id="myCanvas" width="600" height="800" style="border:1px solid #c3c3c3;">
    Your browser does not support the canvas element.</canvas><br/><button>Print</button><button>Edit</button><button>Delete</button>`)
            const formData = document.getElementById("layouts")
            if(formData.value === "1"){
                const formOne = (`
                <form id="form-div">
                        <lable>wrapping paper text</lable>
                        <input type="text">
                        <label for="layouts">Choose a Layout</label>
                            <select name="layouts" id="layouts">
                            <option value="">Image</option>
                            <option value="">Image</option>
                            <option value="">Image</option>
                            <option value="">Image</option>
                        </select>
                    </form>
                    `)
                formDiv.innerHTML = formOne
            }else if(formData.value === "2"){
                const formTwo =(`
                    <form id="form-div">
                         <label for="images-main">main image</label>
                            <select name="images-main" id="images-main">
                            <option value="">Image</option>
                            <option value="">Image</option>
                            <option value="">Image</option>
                            <option value="">Image</option>
                        </select>

                        <label for="image">image</label>
                            <select name="image" id="image">
                            <option value="">Image</option>
                            <option value="">Image</option>
                            <option value="">Image</option>
                            <option value="">Image</option>
                        </select>
                    </form>
                `)
                formDiv.innerHTML = formTwo
            }else if(formData.value === "3"){
                const formThree = (`
                <form id="form-div">
                        <lable>wrapping paper text</lable>
                        <input type="text">
                        <label for="images-main">main image</label>
                            <select name="images-main" id="images-main">
                            <option value="">Image</option>
                            <option value="">Image</option>
                            <option value="">Image</option>
                            <option value="">Image</option>
                        </select>

                        <label for="image">image</label>
                            <select name="image" id="image">
                            <option value="">Image</option>
                            <option value="">Image</option>
                            <option value="">Image</option>
                            <option value="">Image</option>
                        </select>
                    </form>
                    `)
                    formDiv.innerHTML = formThree
            }else if(formData.value === "4"){
                const formFour = (`
                <form id="form-div">
                        <label for="images-main">main image</label>
                            <select name="images-main" id="images-main">
                            <option value="">Image</option>
                            <option value="">Image</option>
                            <option value="">Image</option>
                            <option value="">Image</option>
                        </select>

                        <label for="image">image</label>
                            <select name="image" id="image">
                            <option value="">Image</option>
                            <option value="">Image</option>
                            <option value="">Image</option>
                            <option value="">Image</option>
                        </select>

                        <label for="image">image</label>
                            <select name="image" id="image">
                            <option value="">Image</option>
                            <option value="">Image</option>
                            <option value="">Image</option>
                            <option value="">Image</option>
                        </select>
                    </form>
                    `)
                    formDiv.innerHTML = formFour
            }
        }
    })
}
