# README

## Backend

Note: This is the first time I will be working with .NET and with C#
I will mainly be referencing the boilerplate code setup/tutorial provided by Microsoft here: https://learn.microsoft.com/en-us/aspnet/core/tutorials/min-web-api?view=aspnetcore-9.0&tabs=visual-studio-code

### Requirements

1. Returns a list of all tasks --> GET all tasks
2. Creates a new task --> POST a new task
3. Toggles the completed status of a task --> PATCH an existing task

### Things to do

1. Create Database Schema for Task

```
TASK: {
  name: string
  status: boolean
  metadata: {
      createdAt: Date
      updatedAt: Date
      deletedAt?: Date
  }
}
```

2. Create router endpoints

- `GET /tasks`
- `POST /tasks`
- `PATCH /tasks/:id`
- `DELETE /tasks/:id` (if time permits)

3. Implement handler functions for each endpoint

## Frontend

### Requirements

1. View the list of tasks
2. Add a new task
3. Toggle task completion by clicking on a checkbox or the task name

### Things to do

1. Create single Task component
2. Create TaskList component
3. Create hook to fetch tasks and update tasks status (or name)
4. Create form to add a new task
5. Add user profile entity if time permits

## Misc

### Things to do

1. Dockerize the app
