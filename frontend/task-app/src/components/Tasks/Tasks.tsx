"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import TaskItem from "@/components/Task/Task";
import InputTask from "../InputTask/InputTask";
import { useTasks } from "@/hooks/useTasks";

export default function Tasks() {
  const { tasks, loading, fetchTasks } = useTasks();
  const [newTask, setNewTask] = useState("");

  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);

  const addTask = async () => {
    if (newTask.trim() !== "") {
      const task = {
        Title: newTask.trim(),
        Description: "",
        IsCompleted: false,
      };
      try {
        await axios.post("/api/tasks", task);
        await fetchTasks();
      } catch (error) {
        console.error("Error adding task:", error);
      } finally {
        setNewTask("");
      }
    }
  };

  const toggleTask = async (id: number) => {
    const task = tasks.find((t) => t.id === id);
    if (!task) return;
    try {
      await axios.patch(`/api/tasks/${id}`, {
        isCompleted: !task.completed,
      });
      await fetchTasks();
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };

  const deleteTask = async (id: number) => {
    try {
      await axios.delete(`/api/tasks/${id}`);
      await fetchTasks();
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  const completedCount = tasks.filter((task) => task.completed).length;
  const totalCount = tasks.length;

  const TaskSummary = () => {
    return (
      <div className="pt-4 border-t">
        <div className="flex justify-between text-sm text-muted-foreground">
          <span>{tasks.filter((t) => !t.completed).length} remaining</span>
          <span>{completedCount} completed</span>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-md mx-auto">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center">
              Task List
            </CardTitle>
            <p className="text-sm text-muted-foreground text-center">
              {completedCount} of {totalCount} tasks completed
            </p>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Add new task */}
            <InputTask
              newTaskName={newTask}
              setNewTask={setNewTask}
              addTask={addTask}
            />

            {/* Task list */}
            <div className="space-y-2">
              {loading ? (
                <p className="text-center text-muted-foreground py-8">
                  Loading...
                </p>
              ) : tasks.length === 0 ? (
                <p className="text-center text-muted-foreground py-8">
                  No tasks yet. Add one above!
                </p>
              ) : (
                tasks.map((task) => (
                  <TaskItem
                    key={task.id}
                    id={task.id}
                    text={task.text}
                    completed={task.completed}
                    toggleTask={toggleTask}
                    deleteTask={deleteTask}
                  />
                ))
              )}
            </div>

            {/* Summary */}
            {tasks.length > 0 && <TaskSummary />}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
