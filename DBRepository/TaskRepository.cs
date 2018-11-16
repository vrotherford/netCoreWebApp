using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Interfaces;
using Microsoft.EntityFrameworkCore;
using Models;

namespace DBRepository
{
    public class TaskRepository : BaseRepository, ITaskRepository
    {
        private BasicContext db;

        public TaskRepository(string connectionString, IBasicContextFactrory contextFactory) : base(connectionString, contextFactory)
        {
            this.db = contextFactory.CreateDbContext(ConnectionString);
        }
        public async Task<IEnumerable<Models.Task>> GetTasksList()
        {
            return await db.Tasks.ToListAsync();
        }
        public async Task<IEnumerable<Models.Task>> GetRoundTasksList(Guid roundID)
        {
            return await db.Tasks.Where(t => t.RoundsId == roundID).ToListAsync();
        }
        public async Task<Models.Task> GetTaskById(Guid id)
        {
            return await db.Tasks.FirstOrDefaultAsync(t=>t.Id==id);
        }

        private bool disposed = false;
        public virtual void Dispose(bool disposing)
        {
            if (!this.disposed)
            {
                if (disposing)
                {
                    db.Dispose();
                }
            }
            this.disposed = true;
        }

        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }
    }
}
