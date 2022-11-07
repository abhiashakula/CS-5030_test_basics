class todoservice{
    todo_data = {
        "todo":[{
            "title": "T1",
            "description": "D1",
            "done": false
        },{
            "title": "T1",
            "description": "D1",
            "done": false
        },{
            "title": "T1",
            "description": "D1",
            "done": false
            },
        ]
    }
    constructor(){
        this.todos=this.todo_data;
    }

    get_todos() {
        //console.log(this.todos);
        return this.todos;
        
    }

    add_todo(todo) {
        this.todos = this.todos.todo.concat(todo);
        // Your code here
    }

    delete_todo(id) {

        this.todos = this.todos.filter(todo => todo.title !== id);
        //console.log(this.todos);
        // Your code here
    }

    update_todo(id, todo) {
        //console.log(this.todos);
        this.todos.map(todo_1 => {
            if (todo_1.title === id) {
                todo_1.title = todo;
            }
           
        })
        //console.log(this.todos);
        // Your code here
    }
}


module.exports= todoservice;