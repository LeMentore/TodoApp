export const getTodos = () => (
    dispatch => (
        fetch('http://172.22.12.227:3000/todos', {
            headers: {
                'Accept': 'application/json'
            }
        })
            .then(res => res.json())
            .then(todos => dispatch({
                type: 'GET_TODOS', payload: todos
            }))
    )
)

export const createTodo = (todo) = (
    dispatch => (
        fetch('http://172.22.12.227:3000/todos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(todo)
        })
            .then(res => res.json())
            .then(todo => dispatch({
                type: 'CREATE_TODO', payload: todo
            }))
    )
)