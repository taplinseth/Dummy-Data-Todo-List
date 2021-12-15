    // We'll pre-populate this array with a couple objects just so it's not undefined if your internet connection isn't working properly.

    let arrayOfTodos = [
        {
        "userId": 14,
        "id": 1,
        "title": "delectus aut autem",
        "completed": false
    },
    {
        "userId": 20,
        "id": 2,
        "title": "delectus aut autem",
        "completed": false
    }]
    
    const fetchTodos = () => {
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then( (response) => response.json())
        .then( (json) => arrayOfTodos = json)
    }
    
    const logTodos = () => {
        console.log(arrayOfTodos)
    }
    
    const populateTodos = () => {
        var ol = document.getElementById('todo-list');

        for(let i = 0; i < arrayOfTodos.length; i++) {

            var userId = arrayOfTodos[i].userId;
            var li = document.createElement('li');

            ol.appendChild(li);

            var id = arrayOfTodos[i].id;
            var li = document.createElement('li');
            ol.appendChild(li);

            var title = arrayOfTodos[i].title;
            var li = document.createElement('li');
            li.appendChild(document.createTextNode(title));
            ol.appendChild(li);

            var completed = arrayOfTodos[i].userId;
            var li = document.createElement('li');

            ol.appendChild(li);
        }
    }