import { Hono } from 'hono'
import { Todos, TodosHandler } from './Data'
const app = new Hono()

app.get('/',(c) => {
  return c.text("thanks for visiting us. explore '/AddTodo' and '/GetTodos '")
})

app.get('/GetTodos', (c) => {
  return c.json(Todos)
})

app.post('/AddTodo',async (c) => {
  const {title,dis} = await c.req.json()
  const id = (Todos.length + 1)
  const todo = {id,title,dis}
  const res = TodosHandler(todo)
  
  if(res){
    return c.json({
      msg: "Todo added successfuly"
     })
  } else {
    return c.json({
      msg: "Bad request or wrong data entred"
     })
  }
})

export default app
