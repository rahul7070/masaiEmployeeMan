let form = document.querySelector("form");

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    checking();
})
function checking(){
    let obj = {
        email : document.getElementById("emailid").value,
        password : document.getElementById("pass").value
    }
    fetch("https://reqres.in/api/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(obj)
    }).then((res)=>{
        if(res.ok){
            return res.json();
        }
    }).then((data)=>{
        localStorage.setItem("token",data.token);
        window.location.assign("./employeePage.html")
    })
    .catch((error)=>console.log(error))
}


// form.addEventListener("submit",function(e){
//     e.preventDefault();
//     login();
// });
// async function login(){
    
//     let obj = {
//         email : document.getElementById("emailid").value,
//         password : document.getElementById("pass").value
//     }
//     try {
//         let res = await fetch("https://reqres.in/api/login", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify(obj)
//         })
//         console.log(res);
//         if(res.ok){
//             let data = await res.json();
//             localStorage.setItem("token",data.token);
//             window.location.assign("./employeePage.html")
//         }
//     } catch (error) {
//         console.log(error)
//     }
// }