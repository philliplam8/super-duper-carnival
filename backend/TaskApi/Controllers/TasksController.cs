using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TaskApi.Models;
using TaskApi.DTOs;
using TaskApi.Data;

[ApiController]
[Route("tasks")]
public class TasksController : ControllerBase
{
    private readonly TaskDb _db;
    public TasksController(TaskDb db)
    {
        _db = db;
    }

    [HttpGet("")]
    public async Task<IActionResult> GetAllTasks()
    {
        var tasks = await _db.Tasks.Select(x => new TaskItemDTO(x)).ToArrayAsync();
        return Ok(tasks);
    }

    [HttpGet("complete")]
    public async Task<IActionResult> GetCompleteTasks()
    {
        var tasks = await _db.Tasks.Where(t => t.IsCompleted).Select(x => new TaskItemDTO(x)).ToListAsync();
        return Ok(tasks);
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> GetTask(int id)
    {
        var task = await _db.Tasks.FindAsync(id);
        if (task is null) return NotFound();
        return Ok(new TaskItemDTO(task));
    }

    [HttpPost("")]
    public async Task<IActionResult> CreateTask(TaskItemDTO taskItemDTO)
    {
        var taskItem = new TaskApi.Models.Task
        {
            IsCompleted = taskItemDTO.IsCompleted,
            Title = taskItemDTO.Title ?? string.Empty,
            Description = taskItemDTO.Description ?? string.Empty
        };
        _db.Tasks.Add(taskItem);
        await _db.SaveChangesAsync();
        var createdTaskItemDTO = new TaskItemDTO(taskItem);
        return Created($"/taskItems/{taskItem.Id}", createdTaskItemDTO);
    }

    [HttpPatch("{id}")]
    public async Task<IActionResult> UpdateTask(int id, TaskItemDTO TaskItemDTO)
    {
        var task = await _db.Tasks.FindAsync(id);
        if (task is null) return NotFound();
        task.IsCompleted = TaskItemDTO.IsCompleted;
        await _db.SaveChangesAsync();
        return NoContent();
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteTask(int id)
    {
        var task = await _db.Tasks.FindAsync(id);
        if (task is null) return NotFound();
        _db.Tasks.Remove(task);
        await _db.SaveChangesAsync();
        return NoContent();
    }
}
