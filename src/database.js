function main(){
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
                    console.log(newWrapPaper.name)
                })
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




main()