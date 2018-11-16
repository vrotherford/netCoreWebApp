using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Models
{
    public class Task
    {
        public Guid Id { get; set; }
        public string Image { get; set; }
        public string Text { get; set; }
        public string Answer { get; set; }
        public Guid RoundsId { get; set; }
        [ForeignKey("RoundsID")]
        public Round Round { get; set; }
    }
}
