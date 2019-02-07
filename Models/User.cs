using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Models
{
    public class User
    {
        public Guid Id { get; set; }
        public string Login { get; set; }
        public string Pass { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public Guid RolesID { get; set; }
        [ForeignKey("RolesID")]
        public Role Role { get; set; }
    }
}
