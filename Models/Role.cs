using System;
using System.Collections.Generic;
using System.Text;

namespace Models
{
    public class Role
    {
        public Guid Id { get; set; }
        public string Code { get; set; }
        public string Caption { get; set; }
        public ICollection<User> Users { get; set; }
    }
}
