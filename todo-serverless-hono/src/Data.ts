
export let Todos = [{
    id:1,
    title: "Gym",
    dis: "You should go gym",
}]
interface TodosHandlerProps {
    id: number; 
    title: string;
    dis: string;
}
export function TodosHandler (props:TodosHandlerProps) {
    const {id,title,dis} = props;
    let newTodo = {
        id,
        title,
        dis
    }
    Todos.push(newTodo)

    return "todo added successfully"
}
