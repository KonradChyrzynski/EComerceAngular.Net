using BackendForPunkApi.Data;
using BackendForPunkApi.Models.User_Admission;
using BackendForPunkApi.Models.User_Admission.Login;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PunkApiApp;
using System.Security.Cryptography;

namespace BackendForPunkApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserAdmission : ControllerBase
    {
        private readonly PunkDbContext _context;

        public UserAdmission(PunkDbContext context)
        {
            _context = context;
        }

        [HttpGet("GetUser")]
        public async Task<ActionResult<IEnumerable<User>>> GetUserProfile()
        {
            return await _context.User.ToListAsync();
        }

        [HttpPost]
        public async Task<ActionResult<User>> Register(UserRegisterDto model)
        {
            User user = new ();
            User AssignUser = TransferDataFromUserDtoToUser.AssignDataToUser(user, model.UserName,model.EMail,model.PhoneNumber,model.Gender);

            SecurePasswordWithHMACSHA512 ComputedPassword =  new (model.Password);

            AssignUser.PasswordSalt = ComputedPassword.GetPasswordSalt();
            AssignUser.PasswordHash = ComputedPassword.GetPasswordHash();

            AssignUser.UserName = model.UserName;

            _context.User.Add(AssignUser); 

            await _context.SaveChangesAsync();

            return CreatedAtAction("GetUserProfile", new { id = AssignUser.UserId }, AssignUser);
        }

        [HttpPost("Login")]
        public async Task<ActionResult<UserLoginResponse>> Login(UserLoginRequest user)
        {
            var UserData = await _context.User.Where(u => u.UserName == user.LoginUserName).FirstOrDefaultAsync();

            if(UserData != null)
            {
                bool CheckPasswordHash = VerifyPasswordHash(user.LoginPassword, UserData.PasswordHash!, UserData.PasswordSalt!);

                if (CheckPasswordHash == true)
                {
                    return CreatedAtAction("GetUserProfile", new { id = UserData.UserId }, UserData);
                }
                else
                {
                    return NotFound();
                }
            }

            return BadRequest("User not found");
        }

        private bool VerifyPasswordHash(string password, byte[] passwordHash, byte[] passwordSalt)
        {
            using var hmac = new HMACSHA512(passwordSalt);
            var computedHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));

            return computedHash.SequenceEqual(passwordHash);
        }

        //This might be used in the future, because I have written it long time ago, and I didn't finished, so I'm not sure how it works, but ill find out! :)

        // private string CreateToken(User user)
        // {

        //     List<Claim> claims = new List<Claim>
        //     {
        //          new Claim(ClaimTypes.Name, user.UserName),
        //     };

        //     var key = new SymmetricSecurityKey(System.Text.Encoding.UTF8.GetBytes(
        //         _configuration.GetSection("AppSettings:Token").Value));

        //     var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha512Signature);

        //     var token = new JwtSecurityToken(
        //         claims: claims,
        //         expires: DateTime.Now.AddDays(1),
        //         signingCredentials: creds);

        //     var jwt = new JwtSecurityTokenHandler().WriteToken(token);

        //     return jwt;
        // }

        // private RefreshToken GenerateRefreshToken()
        // {
        //     var refreshToken = new RefreshToken
        //     {
        //         Token = Convert.ToBase64String(RandomNumberGenerator.GetBytes(64)),
        //         Expires = DateTime.Now.AddDays(7),
        //         Created = DateTime.Now
        //     };

        //     return refreshToken;
        // }

        // private void SetRefreshToken(RefreshToken newRefreshToken, User user)
        // {
        //     var cookieOptions = new CookieOptions
        //     {
        //         HttpOnly = true,
        //         Expires = newRefreshToken.Expires
        //     };

        //     Response.Cookies.Append("refreshToken", newRefreshToken.Token, cookieOptions);

        //     user.RefreshToken = newRefreshToken.Token;
        //     user.TokenCreated = newRefreshToken.Created;
        //     user.TokenExpires = newRefreshToken.Expires;
        // }
    }
}
