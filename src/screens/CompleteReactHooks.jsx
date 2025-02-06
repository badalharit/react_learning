// Import necessary hooks from React
import React, {
  useState,            // Manages state within a component
  useEffect,          // Runs side-effects (like saving data or fetching API)
  useRef,             // Creates references to elements without re-rendering
  useContext,         // Accesses global data using Context API
  useReducer,         // Manages complex state logic (like a task list)
  useMemo,           // Optimizes performance by memoizing values
  useCallback,       // Memoizes functions to prevent unnecessary re-renders
  useLayoutEffect,   // Runs effects synchronously before browser paint
  useImperativeHandle, // Controls component methods externally
  forwardRef,        // Allows parent components to access child component methods
  createContext,     // Creates a global state to share data across components
} from "react";

// Import SCSS for styling
import "../utils/ToDo.scss"

// Create a Theme Context for managing Light/Dark mode
const ThemeContext = createContext();

/**
 * Theme Provider Component
 * - Stores the selected theme ("light" or "dark")
 * - Provides a toggle function to switch themes
 */
function ThemeProvider({ children }) {
  // Use useState hook to store the selected theme in local storage
  const [theme, setTheme] = useState(() => {
    // Load theme from storage, default to "light" if not found
    return localStorage.getItem("theme") || "light";
  });

  // Use useEffect hook to save the theme to local storage when it changes
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]); // Re-run the effect when the theme changes

  // Define a function to toggle the theme
  const toggleTheme = () => {
    // Use the previous theme to determine the new theme
    setTheme(prevTheme => (prevTheme === "light" ? "dark" : "light"));
  };

  // Return the ThemeContext.Provider with the theme and toggle function
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

/**
 * Reducer function for managing tasks
 * - Handles adding, toggling, and deleting tasks
 */
function taskReducer(state, action) {
  // Use a switch statement to handle different action types
  switch (action.type) {
    case "ADD_TASK":
      // Add a new task to the state
      return [...state, { id: Date.now(), text: action.text, done: false }];
    case "TOGGLE_TASK":
      // Toggle the done status of a task
      return state.map(task =>
        task.id === action.id ? { ...task, done: !task.done } : task
      );
    case "DELETE_TASK":
      // Remove a task from the state
      return state.filter(task => task.id !== action.id);
    default:
      // Return the state unchanged if the action type is unknown
      return state;
  }
}

/**
 * Modal Component (uses `useImperativeHandle`)
 * - This allows the parent component to open/close the modal programmatically
 */
const Modal = forwardRef(({ message }, ref) => {
  // Use useState hook to store the modal's open state
  const [isOpen, setIsOpen] = useState(false);

  // Use useImperativeHandle hook to expose open and close methods to the parent
  useImperativeHandle(ref, () => ({
    open: () => setIsOpen(true),
    close: () => setIsOpen(false),
  }));

  // Use useState hook to store the current time
  const [currentTime, setCurrentTime] = useState(new Date());

  // Use useEffect hook to update the current time every second
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  // Return the modal component
  return isOpen ? (
    <div className="modal">
      <div className="modal-content">
        <p>Current Time: {currentTime.toLocaleTimeString()}</p>
        <button onClick={() => setIsOpen(false)}>Close</button>
      </div>
    </div>
  ) : null;
});

/**
 * Main To-Do Application Component
 */
function TodoApp() {
  // Use useState hook to store the task input field's value
  const [taskText, setTaskText] = useState("");

  // Use useReducer hook to manage the list of tasks
  const [tasks, dispatch] = useReducer(taskReducer, [], () => {
    // Load saved tasks from local storage, default to an empty array if not found
    return JSON.parse(localStorage.getItem("tasks")) || [];
  });

  // Use useEffect hook to save the tasks to local storage when they change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]); // Re-run the effect when the tasks change

  // Use useRef hook to create a reference to the input field
  const inputRef = useRef(null);

  // Use useContext hook to access the theme and toggle function from the ThemeContext
  const { theme, toggleTheme } = useContext(ThemeContext);

  // Use useRef hook to create a reference to the Modal component
  const modalRef = useRef();

  // Use useMemo hook to compute the number of pending tasks efficiently
  const pendingTasks = useMemo(() => tasks.filter(task => !task.done), [tasks]);

  // Use useCallback hook to memoize the addTask function to prevent unnecessary re-renders
  const addTask = useCallback(() => {
    // Check if the task text is empty, if so, do nothing
    if (taskText.trim() === "") return;
    // Dispatch an action to add the task to the state
    dispatch({ type: "ADD_TASK", text: taskText });
    // Clear the input field
    setTaskText("");
  }, [taskText]); // Re-run the effect when the task text changes

  // Use useLayoutEffect hook to log a message to the console when the tasks change
  useLayoutEffect(() => {
    console.log("Task list updated!");
  }, [tasks]); // Re-run the effect when the tasks change

  // Return the TodoApp component
  return (
    <div className={`app ${theme}`}>
      <h2>📝 To-Do List</h2>

      {/* Theme Toggle Button */}
      <button className="theme-toggle" onClick={toggleTheme}>
        Switch to {theme === "light" ? "Dark" : "Light"} Mode
      </button>

      {/* Task Input Section */}
      <div className="input-container">
        <input
          ref={inputRef} // Use the inputRef to focus the input field
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
          placeholder="Enter task..."
        />
        <button onClick={addTask}>Add Task</button>
        <button onClick={() => inputRef.current.focus()}>Focus</button>
      </div>

      {/* Display Pending Tasks */}
      <h3>📌 Pending Tasks ({pendingTasks.length})</h3>
      <ul className="task-list">
        {tasks.map(task => (
          <li key={task.id} className={task.done ? "done" : ""}>
            {task.text}
            <button onClick={() => dispatch({ type: "TOGGLE_TASK", id: task.id })}>
              {task.done ? "Undo" : "Done"}
            </button>
            <button onClick={() => dispatch({ type: "DELETE_TASK", id: task.id })}>❌</button>
          </li>
        ))}
      </ul>

      {/* Open Modal Button */}
      <button className="modal-btn" onClick={() => modalRef.current.open()}>
        Open Modal
      </button>

      {/* Modal Component */}
      <Modal ref={modalRef} message="This is a React Modal!" />
    </div>
  );
}

// Wrap App with Theme Provider
export default function App() {
  return (
    <ThemeProvider>
      <TodoApp />
    </ThemeProvider>
  );
}

/**
 * Logical Flow of the Code:

  The TodoApp component is rendered with an empty task list and an input field.
  When the user types in the input field, the taskText state is updated.
  When the user clicks the "Add Task" button, the addTask function is called, which dispatches an action to add the task to the state.
  The taskReducer function handles the action and updates the state accordingly.
  The useEffect hook saves the updated tasks to local storage.
  The useMemo hook computes the number of pending tasks efficiently.
  The useLayoutEffect hook logs a message to the console when the tasks change.
  The user can toggle the theme by clicking the theme toggle button.
  The user can open the modal by clicking the open modal button.
  The user can close the modal by clicking the close button.

Variables and Functions:

  taskText: The state variable that stores the input field's value.
  tasks: The state variable that stores the list of tasks.
  addTask: The function that dispatches an action to add a task to the state.
  taskReducer: The function that handles actions and updates the state accordingly.
  toggleTheme: The function that toggles the theme.
  inputRef: The reference to the input field.
  modalRef: The reference to the Modal component.
  pendingTasks: The computed value that stores the number of pending tasks.

Algorithm:

  Initialize the state variables and references.
  Render the TodoApp component with an empty task list and an input field.
  Handle user input and update the state accordingly.
  Save the updated tasks to local storage.
  Compute the number of pending tasks efficiently.
  Log a message to the console when the tasks change.
  Handle theme toggle and modal open/close events.
 */