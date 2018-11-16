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
    public class RoundRepository : BaseRepository, IRoundRepository
    {
        private BasicContext db;

        public RoundRepository(string connectionString, IBasicContextFactrory contextFactory) : base(connectionString, contextFactory)
        {
            this.db = contextFactory.CreateDbContext(ConnectionString);
        }

        public async Task<IEnumerable<Round>> GetRoundsList()
        {
            return await db.Rounds.ToListAsync();
        }

        public async Task<IEnumerable<Round>> GetRoundsInTournamentList(Guid TournamentsID)
        {
            return await db.Rounds.Where(r => r.TournamentsID == TournamentsID).ToListAsync();
        }

        public int GetRoundsInTournamentCount(Guid TournamentsID)
        {
            return db.Rounds.Where(r => r.TournamentsID == TournamentsID).Count();
        }

        public Round GetRound(Guid Id)
        {
            return db.Rounds.Find(Id);
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
