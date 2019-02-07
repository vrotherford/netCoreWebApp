using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Models;
using NetCore.ViewModels;

namespace NetCore.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        IAuthService authService;
        IBasicRepository<User> userRepository;
        public AuthController(IAuthService authService, IBasicRepository<User> userRepository)
        {
            this.authService = authService;
            this.userRepository = userRepository;
        }

        [HttpPost("login")]
        public ActionResult<AuthData> Post([FromBody]LoginModel model)
        {
            if (!ModelState.IsValid) return BadRequest(ModelState);

            var user = userRepository.GetSingle(model.Login);

            if (user == null)
            {
                return BadRequest(new { email = "no user with this email" });
            }

            var passwordValid = authService.VerifyPassword(model.Password, user.Result.Pass);
            if (!passwordValid)
            {
                return BadRequest(new { password = "invalid password" });
            }

            return authService.GetAuthData(user.Result.Id.ToString());
        }

        [HttpPost("register")]
        public ActionResult<AuthData> Post([FromBody]RegisterModel model)
        {
            if (!ModelState.IsValid) return BadRequest(ModelState);
            var id = Guid.NewGuid();
            Guid roleID = Guid.NewGuid();
            Guid.TryParse("9FEE7DA3-01AA-4198-B068-AFD27AE3B7AC",out roleID);
            var user = new User
            {
                Id = id,
                Login = model.Login,
                FirstName = model.FName,
                LastName = model.LName,
                Pass = authService.HashPassword(model.Password),
                RolesID = roleID
            };
            userRepository.Add(user);
            userRepository.Commit();

            return authService.GetAuthData(id.ToString());
        }
    }
}