using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using DBRepository;
using Models;
using Interfaces;


namespace NetCore.Controllers
{
    public class TournamentsConroller : Controller
    {
        private ITournamentRepository _tournamentRepository;
        private IRoundRepository _roundRepository;
        private ITaskRepository _taskRepository;

        public TournamentsConroller(ITournamentRepository tournamentRepository, IRoundRepository roundRepository, ITaskRepository taskRepository)
        {
            _tournamentRepository = tournamentRepository;
            _roundRepository = roundRepository;
            _taskRepository = taskRepository;
        }
        [Route("api/GetTournaments")]
        [HttpGet("[action]")]
        public async Task<IEnumerable<Tournament>> Get()
        {
            return await _tournamentRepository.GetTournamentsList();
        }

        [Route("api/GetRoundTasks")]
        [HttpGet]
        public async Task<IEnumerable<Models.Task>> GetTasks(Guid roundId)
        {
            return await _taskRepository.GetRoundTasksList(roundId);
        }
    }
}
