import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";

function App() {
  return (
    <div className="min-h-screen  p-4" style={{backgroundColor:"#d6542c"}}>
      <div className="max-w-2xl mx-auto shadow-md rounded-md p-6" style={{backgroundColor:"#eda28a"}}>
        <h1 className="text-2xl font-bold mb-4 text-center" style={{color:"#124c81"}}>To Do Management App</h1>
        <AddTask />
        <TaskList />
      </div>
    </div>
  );
}

export default App;
