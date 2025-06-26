# README

  * [Demo](#demo)
  * [Backend](#backend)
    + [Note](#note)
    + [Requirements](#requirements)
    + [Things to do](#things-to-do)
  * [Frontend](#frontend)
    + [Note](#note-1)
    + [Requirements](#requirements-1)
    + [Things to do](#things-to-do-1)
  * [Misc](#misc)
    + [Features Missing](#features-missing)
    + [Assumptions](#assumptions)
    + [Future Things to do](#future-things-to-do)

## Demo
https://github.com/user-attachments/assets/1837b764-a678-4339-907a-2af06136b7ea




## Backend


### Note
This is the first time I will be working with .NET and with C#
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

### Note
Design help from V0 was used to quickly craft the baseline UI.

### Requirements

1. View the list of tasks
2. Add a new task
3. Toggle task completion by clicking on a checkbox or the task name

### Things to do

1. Create single Task component
2. Create TaskList component
3. Create hook to fetch tasks and update tasks status (or name)
4. Create form to add a new task

## Misc

### Features Missing
1. Implementing metadata dates > createdAt, updatedAt, deletedAt

### Assumptions
- Deleted tasks will be hard deleted (alternatively this could be a soft delete, where we show and store deleted tasks)
- Toggle Task completion -> this can be toggled on or off to "undo" completion
- Tasks only have a string title (no other details added, due date, images, tags, etc)

### Future Things to do

1. Dockerize the app
2.  Adding user profile entity to store user specific tasks
- Backend:
  - adding new table for users
  - updating schema of tasks to include userId
  - adding routes to create user, authenticate login, etc.
- Frontend
  - add login page
  - fetch tasks specific to logged in user
