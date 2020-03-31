window.setTimeout(function() {
  const todos = ['Sleep'];

  let input = prompt('What would you like to do?');
  while (input !== 'quit') {
    if (input === 'list') {
      listTodos();
    } else if (input === 'new') {
      addTodo();
    } else if (input === 'delete') {
      deleteTodo();
    }
    input = prompt('What would you like to do?');
  }
  console.log('Ok, you quit the app');

  function listTodos() {
    console.log('**********');
    todos.forEach(function(todo, i) {
      console.log(`${i}: ${todo}`);
    });
    console.log('**********');
  }

  function addTodo() {
    const newTodo = prompt('Enter new todo');
    todos.push(newTodo);
    console.log('Added Todo');
  }

  function deleteTodo() {
    // display the list with index
    console.log('**********');
    todos.forEach(function(todo, i) {
      console.log(`${i}: ${todo}`);
    });
    console.log('**********');
    // ask for index of todo to be deleted
    const index = prompt('Enter index of todo to delete');

    // delete that todo
    todos.splice(index, 1);
    console.log('Deleted Todo');
  }
}, 500);
