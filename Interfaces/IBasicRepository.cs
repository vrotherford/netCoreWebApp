using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Interfaces
{
    public interface IBasicRepository<T> : IDisposable where T : class
    {
        Task<IEnumerable<T>> GetListAsync();
        Task<T> GetSingle(string login);
        void Add(T entity);
        void Commit();
    }
}
