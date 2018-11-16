using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Models;


namespace Interfaces
{
    public interface ITournamentRepository : IDisposable
    {
        Task<IEnumerable<Tournament>> GetTournamentsList();
        Tournament GetTournament(Guid id);
    }
}
