using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Interfaces;
using Microsoft.EntityFrameworkCore;
using Models;

namespace DBRepository
{
    public class RoleRepository : BaseRepository
    {
        private BasicContext db;
        public RoleRepository(string connectionString, IBasicContextFactrory contextFactory) : base(connectionString, contextFactory)
        {
            this.db = contextFactory.CreateDbContext(connectionString);
        }
        public async Task<IEnumerable<Role>> GetListAsync()
        {
            return await db.Roles.ToListAsync();
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
