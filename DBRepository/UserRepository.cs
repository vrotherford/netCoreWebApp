using System;
using System.Collections.Generic;
using System.Text;
using Models;
using Interfaces;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;

namespace DBRepository
{
    public class UserRepository : BaseRepository, IBasicRepository<User>
    {
        private BasicContext db;
        public UserRepository(string connectionString, IBasicContextFactrory contextFactory) : base(connectionString, contextFactory)
        {
            this.db = contextFactory.CreateDbContext(connectionString);
        }
        public async Task<IEnumerable<User>> GetListAsync()
        {
            return await db.Users.ToListAsync();
        }

        public async Task<User> GetSingle(string login)
        {
            return await db.Users.FirstAsync(u => u.Login == login);
        }

        public void Add(User user)
        {
           db.Users.Add(user);
        }

        public void Commit()
        {
            db.SaveChanges();
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
