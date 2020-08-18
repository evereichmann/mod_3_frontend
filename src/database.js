function main(){
    renderUser()
}

function renderUser(){
    const userPage = document.getElementById("index-container")
    fetch("http://localhost:3000/users")
        .then(resp=> resp.json())
        .then(usersData=> {
            usersData.forEach(user=> {
                console.log(user)
            })
        })
        fetch("http://localhost:3000/wrapping_papers")
        .then(resp=> resp.json())
        .then(wrappingPaperData=> {
            wrappingPaperData.forEach(paper=> {
                console.log(paper)
            })
        })

}


main()