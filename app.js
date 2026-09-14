let url = "http://universities.hipolabs.com/search?country=india";

let list = document.querySelector("#list");
let btn = document.querySelector("button");
let p = document.createElement("p");
document.querySelector("body").appendChild(p);

btn.addEventListener("click", async () => {
    let state = document.querySelector("input").value;
    let colleges = await getCollege();
    list.innerHTML = "";
    p.innerHTML = "";
    let matchCount = 0;

    for(col of colleges) {
        if(col["state-province"] != null && col["state-province"].toLowerCase() == state) {
            let li = document.createElement("li");
            li.innerText = col["name"];
            list.appendChild(li);
            matchCount++;
        }
    }
    
    if(matchCount == 0) {
        p.innerHTML = "No University found";      
    }
})

async function getCollege() {
    try {
        let res = await axios.get(url);
        return res.data;
    } catch(err) {
        return err;
    }   
}