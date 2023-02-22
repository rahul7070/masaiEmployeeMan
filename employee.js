let url = "https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees";
let total_item = 0;
let page_wrapper = document.getElementById("page_wrapper");
let table_wrapper = document.getElementById("table_wrapper");

fetchdata();
function fetchdata(pagenum=1) {
    let data = fetch(`${url}?limit=10&page=${pagenum}`)
    data.then((res) => {
        total_item = 100;
        return res.json();
    })
        .then((data) => {
            // console.log(data)
            display(data.data);
            pagination(total_item);
        })
        .catch((err) => {
            console.log(err)
        })
}
function display(data) {
    let str = "";
    data.forEach((el)=>{
        // document.body.innerHTML = `<img src="${el.image}">`
        str += `<tr>
            <td>
                <img src="${el.image}">
            </td>
            <td>${el.name}</td>
            <td>${el.department}</td>
            <td>${el.gender}</td>
            <td>${el.salary}</td>
        </tr>`
    })
    table_wrapper.innerHTML = `
    <div>
        <table>
            <tr>
                <th>Company</th>
                <th>Contact</th>
                <th>Country</th>
            </tr>
            ${str}
        </table>
    </div>`
}
function pagination(total_item){
    let pages = total_item/10;
    // console.log(pages)
    let str = "";
    for(let i=0; i<pages; i++){
        str += `<button class="pageNo" data-pagenumber="${i+1}">${i+1}</button>`
    }
    page_wrapper.innerHTML = str;
    let btnArr = document.querySelectorAll(".pageNo")
    for(let i=0; i<btnArr.length; i++){
        btnArr[i].addEventListener("click",(e)=>{
            console.log(e.target.dataset.pagenumber);
            fetchdata(e.target.dataset.pagenumber);
        })
    }
}


