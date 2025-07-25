export type task={
    id:string;
    title:string
}
export type tasksData=task[];
//base type with all the common properties
type BaseTodoProps = {
    tasks: tasksData;
    completed: tasksData;
    updateTasks: React.Dispatch<React.SetStateAction<tasksData>>;
};
//extended base type (DRY)

export type TodoListProps = BaseTodoProps & {
    updateCompleted: React.Dispatch<React.SetStateAction<tasksData>>;
};

export type CreateTodoProps = BaseTodoProps & {
    setAdd: React.Dispatch<React.SetStateAction<boolean>>;
};
export type formikValueType={
    input:string
}
export type updateStateType={
    updateCompleted: React.Dispatch<React.SetStateAction<tasksData>>;
    updateTasks: React.Dispatch<React.SetStateAction<tasksData>>;
};