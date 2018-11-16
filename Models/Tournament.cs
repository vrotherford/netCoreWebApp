using System;
using System.Collections.Generic;

namespace Models
{
    public class Tournament
    {
        public Guid Id { get; set; }
        public string Caption { get; set; }
        public string Info { get; set; }
        public ICollection<Round> Rounds { get; set; }
    }
}
