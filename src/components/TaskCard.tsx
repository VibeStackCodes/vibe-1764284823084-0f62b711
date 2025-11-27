import React from 'react';

interface TaskCardProps {
  title: string;
  description: string;
  status: 'To Do' | 'In Progress' | 'Done';
}

const TaskCard: React.FC<TaskCardProps> = ({ title, description, status }) => {
  return (
    <div className="task-card">
      <h3 className="font-bold text-lg">{title}</h3>
      <p className="text-gray-600">{description}</p>
      <span className="text-sm text-gray-500">Status: {status}</span>
    </div>
  );
};

export default TaskCard;
