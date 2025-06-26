import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";

export interface Task {
  id: number;
  text: string;
  description?: string;
  completed: boolean;
}

interface TaskProps extends Task {
  toggleTask: (id: number) => void;
  deleteTask: (id: number) => void;
}

export default function TaskItem({
  id,
  completed,
  text,
  toggleTask,
  deleteTask,
}: TaskProps) {
  return (
    <div
      key={id}
      className={`flex items-center gap-3 p-3 rounded-lg border transition-colors ${
        completed
          ? "bg-muted/50 border-muted"
          : "bg-background border-border hover:bg-muted/20"
      }`}
    >
      <Checkbox
        id={`task-${id}`}
        checked={completed}
        onCheckedChange={() => toggleTask(id)}
      />
      <label
        htmlFor={`task-${id}`}
        className={`flex-1 cursor-pointer ${
          completed ? "line-through text-muted-foreground" : "text-foreground"
        }`}
      >
        {text}
      </label>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => deleteTask(id)}
        className="h-8 w-8 text-muted-foreground hover:text-destructive"
      >
        <Trash2 className="h-4 w-4" />
      </Button>
    </div>
  );
}
