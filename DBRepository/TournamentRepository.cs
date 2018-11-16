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
    public class TournamentRepository : BaseRepository, ITournamentRepository
    {
        private BasicContext db;

        public TournamentRepository(string connectionString, IBasicContextFactrory contextFactory) : base(connectionString, contextFactory)
        {
            this.db = contextFactory.CreateDbContext(ConnectionString);
        }

        public async Task<IEnumerable<Tournament>> GetTournamentsList()
        {
            return await db.Tournaments.Include(t => t.Rounds).ToListAsync();
        }

        public Tournament GetTournament(Guid id)
        {
            return db.Tournaments.Find(id);
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
