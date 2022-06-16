/* 
The users and todos variables have all the data for you to work with
Check your console to see the result of the following console.logs, 
and inspect the data
*/

console.log("users: ", window.users);

console.log("todos: ", window.todos);

for (let user of users) {
  alert(
    `User Id :  ${user.id}   Name : ${user.name}  Place : ${user.address.city}`
  );
  for (let todo of todos)
    if (todo.completed === false) {
      console.log(`User Name :  ${user.name}  Needs to do: ${todo.title}`);
    }
}
