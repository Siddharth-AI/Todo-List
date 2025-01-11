# React + Vite
# TodoAppV2

A simple and efficient React-based Todo List application. This app allows users to manage their tasks with features such as task addition, deletion, marking as completed, and clearing all tasks.

## Features

- Add new tasks.
- Mark tasks as completed or ongoing.
- Delete individual tasks.
- Clear all tasks with a single click.
- Task persistence using local storage.
- Interactive notifications using `react-toastify`.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/todoappv2.git
   ```
2. Navigate to the project directory:
   ```bash
   cd todoappv2
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

## Scripts

- **Development Server:**  
  Start the application in development mode:  
  ```bash
  npm run dev
  ```

- **Build:**  
  Create a production build:  
  ```bash
  npm run build
  ```

- **Lint:**  
  Run ESLint for code quality checks:  
  ```bash
  npm run lint
  ```

- **Preview:**  
  Preview the production build:  
  ```bash
  npm run preview
  ```

## Dependencies

### Core Libraries
- **React**: ^18.3.1
- **React DOM**: ^18.3.1

### Styling
- **Styled Components**: ^6.1.14
- **TailwindCSS**: ^3.4.17

### Utilities
- **React Icons**: ^5.4.0
- **React Toastify**: ^11.0.2

### Development Tools
- **Vite**: ^6.0.5
- **ESLint**: ^9.17.0 (with plugins for React)

## Components

### `Todo.jsx`
This is the main component that orchestrates the app's functionality. It manages the task list and integrates subcomponents:
- **`TodoForm`**: For adding new tasks.
- **`TodoList`**: For displaying tasks with options to delete or mark as completed.
- **`TodoDate`**: Displays the current date.

### `TodoList.jsx`
Handles individual task display and actions:
- Displays the task content.
- Buttons for marking tasks as completed or deleting them.
- Utilizes React Icons for button icons.

## Local Storage Integration

- **`getlocalStorageTodoData`**: Fetches stored tasks from local storage.
- **`setlocalStorageTodoData`**: Saves the current tasks to local storage, ensuring data persistence.

## Styling

The app uses both TailwindCSS for utility-based styling and additional custom styles defined in `Todo.css`.

## Notifications

The app uses `react-toastify` to display success, warning, and error messages for user interactions such as:
- Adding a task.
- Deleting a task.
- Clearing all tasks.
- Task status changes.

## How to Use

1. Start the app using `npm run dev`.
2. Add tasks using the input form.
3. Manage tasks using the provided buttons:
   - Mark as complete/incomplete.
   - Delete individual tasks.
   - Clear all tasks at once.

## License

This project is licensed under the MIT License.
