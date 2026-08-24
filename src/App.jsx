import { useState, useEffect } from 'react'

function App() {
  console.log("TaskFlow App is loading");
  const [todos, setTodos] = useState(() => {
      const saved = localStorage.getItem("todos")
          return saved? JSON.parse(saved) : []
            })
              const [input, setInput] = useState("")
                const [filter, setFilter] = useState("all")

                  useEffect(() => {
                      localStorage.setItem("todos", JSON.stringify(todos))
                        }, [todos])

                          const addTodo = () => {
                              if(input.trim() === "") return
                                  setTodos([...todos, {id: Date.now(), text: input, done: false}])
                                      setInput("")
                                        }

                                          const toggleTodo = (id) => {
                                              setTodos(todos.map(todo =>
                                                    todo.id === id? {...todo, done:!todo.done} : todo
                                                        ))
                                                          }

                                                            const deleteTodo = (id) => {
                                                                setTodos(todos.filter(todo => todo.id!== id))
                                                                  }

                                                                    const filteredTodos = todos.filter(todo => {
                                                                        if(filter === "active") return!todo.done
                                                                            if(filter === "completed") return todo.done
                                                                                return true
                                                                                  })

                                                                                    const remaining = todos.filter(t =>!t.done).length

                                                                                      return (
                                                                                          <div className="app">
                                                                                                <div className="card">
                                                                                                        <h1>📝 TaskFlow</h1>
                                                                                                                <p className="subtitle">Stay organized, get things done</p>

                                                                                                                        <div className="input-area">
                                                                                                                                  <input
                                                                                                                                              value={input}
                                                                                                                                                          onChange={(e) => setInput(e.target.value)}
                                                                                                                                                                      onKeyPress={(e) => e.key === 'Enter' && addTodo()}
                                                                                                                                                                                  placeholder="What needs to be done?"
                                                                                                                                                                                            />
                                                                                                                                                                                                      <button onClick={addTodo}>Add</button>
                                                                                                                                                                                                              </div>

                                                                                                                                                                                                                      <div className="filters">
                                                                                                                                                                                                                                <button className={filter === "all"? "active" : ""} onClick={() => setFilter("all")}>All</button>
                                                                                                                                                                                                                                          <button className={filter === "active"? "active" : ""} onClick={() => setFilter("active")}>Active</button>
                                                                                                                                                                                                                                                    <button className={filter === "completed"? "active" : ""} onClick={() => setFilter("completed")}>Done</button>
                                                                                                                                                                                                                                                            </div>

                                                                                                                                                                                                                                                                    <ul className="todo-list">
                                                                                                                                                                                                                                                                              {filteredTodos.length === 0? (
                                                                                                                                                                                                                                                                                          <li className="empty">No tasks yet. Add one! ✨</li>
                                                                                                                                                                                                                                                                                                    ) : filteredTodos.map(todo => (
                                                                                                                                                                                                                                                                                                                <li key={todo.id} className={todo.done? "done" : ""}>
                                                                                                                                                                                                                                                                                                                              <div className="todo-left" onClick={() => toggleTodo(todo.id)}>
                                                                                                                                                                                                                                                                                                                                              <div className={`checkbox ${todo.done? "checked" : ""}`}></div>
                                                                                                                                                                                                                                                                                                                                                              <span>{todo.text}</span>
                                                                                                                                                                                                                                                                                                                                                                            </div>
                                                                                                                                                                                                                                                                                                                                                                                          <button className="delete" onClick={() => deleteTodo(todo.id)}>🗑️</button>
                                                                                                                                                                                                                                                                                                                                                                                                      </li>
                                                                                                                                                                                                                                                                                                                                                                                                                ))}
                                                                                                                                                                                                                                                                                                                                                                                                                        </ul>

                                                                                                                                                                                                                                                                                                                                                                                                                                <div className="footer">
                                                                                                                                                                                                                                                                                                                                                                                                                                          <span>{remaining} tasks left</span>
                                                                                                                                                                                                                                                                                                                                                                                                                                                    <button onClick={() => setTodos(todos.filter(t =>!t.done))}>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                Clear Completed
                                                                                                                                                                                                                                                                                                                                                                                                                                                                          </button>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  </div>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        </div>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            </div>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              )
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              }

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              export default App
