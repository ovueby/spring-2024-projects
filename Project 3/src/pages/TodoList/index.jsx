import { render } from 'preact'
import { useState, useEffect } from 'preact/hooks'

let currentId = 0
const useId = () => (currentId++).toString()

const makeItem = name => ({ name, id: useId(), completed: false })

const serializeState = s =>
  JSON.stringify(s.map(x => ({ name: x.name, completed: x.completed })))

const deserializeState = s =>
  JSON.parse(s).map(x => ({ name: x.name, completed: x.completed, id: useId() }))

export function TodoList() {
  const [theList, setTheList_] = useState([])
  const defaultList = () => '[{"name":"Walk the dog","completed":false},{"name":"Make dinner","completed":false}]'
  useEffect(() => {
    setTheList_(deserializeState(localStorage.getItem("todos") || defaultList()))
  })
  const setTheList = (x) => {
    localStorage.setItem("todos", serializeState(x))
    setTheList_(x)
  }
  const addItem = name => setTheList([...theList, makeItem(name)])
  const removeItem = id => () => setTheList(theList.filter(x => x.id !== id))
  const updateItem = id => upd => setTheList(theList.map(x => (x.id === id) ? { ...x, ...upd } : x))

  return (
    <div class="container">
    <h1>The Todo LIST!!!</h1>
    <section>
      <TodoInput addItem={addItem}/>
      <ul class="list-group">
        {theList.map(l => (
          <TodoItem {...l} remove={removeItem(l.id)} update={updateItem(l.id)}/>
        ))}
      </ul>
    </section>
    </div>
  );
}

function TodoInput({ addItem }) {
  const [input, setInput] = useState('')

  function add() {
    addItem(input)
    setInput('')
  }

  return (
    <div class="input-group mb-3">
      <input type="text" class="form-control" value={input} onInput={e => setInput(e.target.value)}/>
      <button class="btn btn-outline-secondary" type="button" onclick={add}>Add</button>
    </div>
  )
}

function TodoItem({ name, id, remove, update, completed }) {
  const idItemName = "todoItem-" + id
  function encheck(e) {
    update({ completed: e.target.checked })
  }
  return (
    <li class="list-group-item">
      <input type="checkbox" class="form-check-input me-1" checked={completed} id={idItemName} onChange={encheck} />
        <label for={idItemName} class={`${ completed ? "todo-completed" : ""}`}>{name}</label>
        <span class="ms-2 bi bi-trash3" onclick={remove}></span>
    </li>
  )
}
