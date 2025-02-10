let todo = [];
let query = prompt("Enter your query");

while(true){ 
    if(query == "quit")
    {
         console.log("Exiting...")
        break;
    } 
    else if(query == "list")
    {
        console.log("_____________");
        for(let i = 0;i<todo.length;i++)
        {
            console.log(i,todo[i]);
        }
        console.log("_____________");
    }
    else if(query == "add")
    {
        let task = prompt("Enter task");
        todo.push(task);
        console.log("task added");
    }
    else if(query == "delete")
    {
        let idx = prompt("Enter index of task you want to delete");
        todo.splice(idx,1);
        console.log("task deleted");
    }
    else{
        console.log("Invalid query");
    }
    
     
    query = prompt("Enter your query");
}