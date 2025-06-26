import { useState, useCallback } from "react";
import axios from "axios";
import { Task } from "@/components/Task/Task";

export function useTasks() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchTasks = useCallback(async () => {
    setLoading(true);
    try {
      const res = await axios.get("/api/tasks");
      const data = res.data;
      const parsedData = data.map(
        (task: {
          id: number;
          title: string;
          description: string;
          isCompleted: boolean;
        }) => ({
          id: task.id,
          text: task.title,
          description: task.description || "",
          completed: task.isCompleted || false,
        })
      );
      setTasks(parsedData);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  return { tasks, setTasks, loading, fetchTasks };
}
