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
            let wrapperName = document.getElementById("wrapper-name")
            let layoutType = document.getElementById("layouts")
            let wrapperInnerText = document.getElementById("wrapping-inner-text")
            let imageSelection = document.getElementById("images-main")
            console.log(wrapperName.value)
            console.log(layoutType.value)
            console.log(wrapperInnerText.value)
            console.log(imageSelection.value)
        }
    })
}

main()