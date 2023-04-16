// ここの部分にrequireはかけない
// htmlにコーディングする必要あり

const board = document.getElementById("board");
const titleData = document.getElementById("title");
const bodyData = document.getElementById("message");
const submit = document.getElementById("submit");
console.log()

const get = async () => {
    try{
        let gets = await axios.get("/get/api");
        let getsLength = gets.data.length;
        console.log(getsLength);
        for(let i = 0; i < getsLength; i++){
            let title = gets.data[i].title
            let body = gets.data[i].body
            let date = gets.data[i].date
            const obj = `
            <ul>
            <li>
                <h3>${title}</h3>
                <p>${body}</p>
                <p>${date}</p>
            </li>
            </ul> `;  
            board.innerHTML += obj;
        }
    }catch(err) {
        console.log(err);
    }
}
// htmlを追加することが可能
get();

submit.addEventListener("click", async (e) => {
    e.preventDefault();
    try{
        const body = {
            title: titleData.value,
            body: bodyData.value,
        }
        const response = await axios.post("/post/api", body);
        console.log(response);
    }catch (err) {
        console.log(err);
    }
    get();
});
