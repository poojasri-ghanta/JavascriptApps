//API calling logic usingasync await
const getdetails = async () => {
    //request data gathering logic
    let userid = document.getElementById("userid").value;
    let para = document.getElementById("simple");
    let result = document.getElementById("sample");
    //valiation logic
    if (userid == "") {
        alert("hey please enter the userid")
        return;
    }
    para.style.display = "block";
    //business logic
    try {
        const [userRes, postRes] = await Promise.all([
            fetch(`https://jsonplaceholder.typicode.com/users/${userid}`),
            fetch(`https://jsonplaceholder.typicode.com/posts?userid=${userid}`)
        ]);
        const userData = await userRes.json();
        const postData = await postRes.json();
        result.innerHTML = `
        <h3>${userData.name}</h3>
        <p>${userData.email}</p/>
            <h3> posts</h3>
            <ul>
            ${postData.map((item) => `
                <li>${item.title}</li>`)}</ul>`;
            
    }
    catch(error) {
        result.innerHTML = "<h3>something went worng</h3>";
    }
};