using Microsoft.EntityFrameworkCore;
using Task = TaskApi.Models.Task;

namespace TaskApi.Data
{
    public class TaskDb : DbContext
    {
        public TaskDb(DbContextOptions<TaskDb> options) : base(options) { }
        public DbSet<Task> Tasks => Set<Task>();
    }
}
