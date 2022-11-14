 

var todoservice = require('./todo.service.js');
describe('todo test suite', () => {

    test("truth_value", () => {
        expect(true).toBe(true);
    });
    
    let todo_service = new todoservice();

    test("if service instance is created", () => {
        expect(todo_service instanceof todoservice).toBe(true);
    });

    
    // Initial length of the todo list is 3 // 3 default tasks
    test("get_todos", () => {
        expect(todo_service.get_todos().todo.length).toEqual(3);
    });

    

    // Write all your test cases here that corresponds to software requirements
    test("add_todo", () => {
        todo = {
            "title": "T2",
            "description": "D2",
            "done": false
        }
        todo_service.add_todo(todo);
        expect(todo_service.get_todos().length).toEqual(4);
    });

    test("delete_todo", () => {
        todo_service.delete_todo("T1");
        expect(todo_service.get_todos().length).toEqual(1);
    });

    test("update_todo", () => {
        todo_service.update_todo("T2", "T3");
        expect(todo_service.get_todos().filter(tmp => tmp.title === "T3").length).toEqual(1);
        //console.log(_tmp);
        //expect(todo_service.get_todos().todo.filter(data => data.title === "T3").length).toEqual(1);
        //expect("T3" in todo_service.get_todos().todo_data).toBe(true);
    }); 

    

});