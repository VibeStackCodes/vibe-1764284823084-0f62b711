import { Task } from '@/hooks/useTaskState';

export const filterTasks = (tasks: Task[], status: string) => {
  return tasks.filter(task => task.status === status);
};

export const sortTasks = (tasks: Task[], key: keyof Task) => {
  return [...tasks].sort((a, b) => (a[key] > b[key] ? 1 : -1));
};
