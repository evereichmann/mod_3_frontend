function main(){
    logIn()
    makingWrappingPaper()
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
            //gets name from form
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
                    console.log(newWrapPaper)
                })
        

        }
    })
}

main()