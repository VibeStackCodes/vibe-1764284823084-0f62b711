import React from 'react';
import TaskCard from './TaskCard';

const tasks = [
  { id: 1, title: 'Task 1', description: 'Description for Task 1', status: 'To Do' },
  { id: 2, title: 'Task 2', description: 'Description for Task 2', status: 'In Progress' },
  { id: 3, title: 'Task 3', description: 'Description for Task 3', status: 'Done' },
];

const KanbanBoard: React.FC = () => {
  const columns = ['To Do', 'In Progress', 'Done'];

  return (
    <div className="kanban-board">
      {columns.map((column) => (
        <div key={column} className="kanban-column">
          <h2 className="font-bold text-xl mb-2">{column}</h2>
          {tasks.filter(task => task.status === column).map(task => (
            <TaskCard key={task.id} title={task.title} description={task.description} status={task.status} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default KanbanBoard;
