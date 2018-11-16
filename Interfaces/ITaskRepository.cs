using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Models;

namespace Interfaces
{
    public interface ITaskRepository : IDisposable
    {
        Task<IEnumerable<Models.Task>> GetTasksList();
        Task<IEnumerable<Models.Task>> GetRoundTasksList(Guid roundID);
        Task<Models.Task> GetTaskById(Guid id);
    }
}
