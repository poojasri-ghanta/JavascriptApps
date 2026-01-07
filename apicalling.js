//API calling logic with async await
const getTodos = async () => {
    try {
         const result=await fetch("https://jsonplaceholder.typicode.com/todos/1");
        const data = await result.json();
        console.log(data);
    }
    catch(error) {
        console.log(error);
    }
};
getTodos();