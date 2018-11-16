using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Models
{
    public class Round
    {
        public Guid Id { get; set; }
        public int Number { get; set; }
        public bool IsFinal { get; set; }
        public int WinnersCount { get; set; }
        public bool IsStarted { get; set; }
        public Guid TournamentsID { get; set; }
        [ForeignKey("TournamentsID")]
        public Tournament Tournament { get; set; }
        public ICollection<Task> Tasks { get; set; }
    }
}
