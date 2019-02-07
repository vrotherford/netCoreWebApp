using System;
using System.Collections.Generic;
using System.Text;
using Models;

namespace Interfaces
{
    public interface IAuthService
    {
        AuthData GetAuthData(string userId);
        string HashPassword(string password);
        bool VerifyPassword(string actualPassword, string hashedPassword);
    }
}
