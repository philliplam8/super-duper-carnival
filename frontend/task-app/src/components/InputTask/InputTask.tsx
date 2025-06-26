import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

interface InputTaskProps {
  newTaskName: string;
  setNewTask: (task: string) => void;
  addTask: () => Promise<void>;
}

export default function InputTask({
  newTaskName,
  setNewTask,
  addTask,
}: InputTaskProps) {
  return (
    <div className="flex gap-2">
      <Input
        placeholder="Add a new task..."
        value={newTaskName}
        onChange={(e) => setNewTask(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            addTask();
          }
        }}
        className="flex-1"
      />
      <Button onClick={addTask} size="icon">
        <Plus className="h-4 w-4" />
      </Button>
    </div>
  );
}
