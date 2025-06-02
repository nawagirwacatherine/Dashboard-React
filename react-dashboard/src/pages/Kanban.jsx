import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {initialData} from  "../data/dummy"



const Kanban = () => {
  const [columns, setColumns] = useState(initialData);

  const handleAddTask = (columnId) => {
    const newTask = {
       id: `task-${Date.now()}`,
       title: 'New Task',

    };

    const updatedColumns = columns.map(column => {
      if (column.id === columnId) {
        return {
          ...column,
          tasks: [...column.tasks, newTask]
        };
      }

      return column;
    });
    setColumns (updatedColumns);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4">
      {columns.map((column) => (
        <Card key={column.id} className="bg-muted">
          <div className="p-4">
            <h2 className="text-lg font-semibold mb-2">{column.title}</h2>
            <CardContent className="space-y-3">
              {column.tasks.map((task) => (
                <div key={task.id} className="p-3 bg-background border rounded shadow-sm">
                  {task.title}
                </div>
              ))}
            </CardContent>
            <Button 
            variant="outline"
             className="mt-4 w-full"
             onClick = { () => handleAddTask(column.id)}
             >+ Add Task</Button>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default Kanban;
