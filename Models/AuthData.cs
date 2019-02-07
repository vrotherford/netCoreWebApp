using System;
using System.Collections.Generic;
using System.Text;

namespace Models
{
    public class AuthData
    {
        public string Token { get; set; }
        public long TokenExpirationTime { get; set; }
        public string UserId { get; set; }
    }
}
