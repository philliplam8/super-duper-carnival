namespace TaskApi.DTOs
{
    public class TaskItemDTO
    {
        public int Id { get; set; }
        public string? Title { get; set; }
        public string? Description { get; set; }
        public bool IsCompleted { get; set; }

        public TaskItemDTO() { }
        public TaskItemDTO(TaskApi.Models.Task task)
        {
            Id = task.Id;
            Title = task.Title;
            Description = task.Description;
            IsCompleted = task.IsCompleted;
        }
    }
}
