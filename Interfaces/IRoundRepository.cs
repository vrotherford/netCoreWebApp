using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Models;

namespace Interfaces
{
    public interface IRoundRepository : IDisposable
    {
        Task<IEnumerable<Round>> GetRoundsList();
        Task<IEnumerable<Round>> GetRoundsInTournamentList(Guid TournamentsID);
        Round GetRound(Guid Id);
        int GetRoundsInTournamentCount(Guid TournamentsID);
    }
}
