    // We'll pre-populate this array with a couple objects just so it's not undefined if your internet connection isn't working properly.


    let arrayOfTodos = [];
    let userTodos = [];
    
    const fetchTodos = () => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then( (response) => response.json())
            .then( (json) => arrayOfTodos = json);
        userTodos = arrayOfTodos;
    }
    
    const logTodos = () => {
        console.log(arrayOfTodos)
    }

    const populateTodos = (todos) => {
        let ol = document.getElementById('todo-list');

        for(let i = 0; i < todos.length; i++) {
            let todo = todos[i];
            let liTodo = document.createElement('li');
            liTodo.appendChild(document.createTextNode(JSON.stringify(todo)));
            ol.appendChild(liTodo);
        }
    }

    let userId = "";
    
    const idInput = (idNum) => {
        userId = parseInt(idNum);
        console.log(idNum);
    }

    const showCurrentUser = () => {
        clear();
        userTodos = arrayOfTodos.filter(todo =>
            todo.userId == userId);
        populateTodos(userTodos);
    }

    const clearAll = () => {
        document.getElementById('todo-list').innerHTML = "";
    }

    const clear = () => {
        document.getElementById('todo-list').innerHTML = "";
    }

    const showComplete = () => {
        clear();
        let completed = userTodos.filter(function(todo){
            return todo.completed === true;
        })
        populateTodos(completed);
    }

    const showIncomplete = () => {
        clear();
        let notCompleted = userTodos.filter(function(todo){
            return todo.completed === false;
        })
        populateTodos(notCompleted);
    }
