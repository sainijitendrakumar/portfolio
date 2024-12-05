
const username = "sainijitendrakumar"
const repoName = "Bootstrap-Projects"

const github_data = async () =>{
    const responce = await fetch(`https://api.github.com/users/${username}`)
    const json = await responce.json()
    console.log(json);
    return json
}

 export const github_repo_data = async () =>{
    const responce = await fetch(`https://api.github.com/repos/${username}/${repoName}/contents/food Delivary/index.html`)
    const json = await responce.json()
    console.log(json);
    return json
}



export default github_data