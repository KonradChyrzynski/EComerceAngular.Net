using System.ComponentModel.DataAnnotations;

namespace AuthenticationService.Models
{
    public class User
    {
        [Key]
        public int UserId { get; set; }
        public string? UserName { get; set; } 
        public string? EMail { get; set; } 
        public int PhoneNumber { get; set; }
        public string? Gender { get; set; } 
        public byte[]? PasswordHash { get; set; } 
        public byte[]? PasswordSalt { get; set; }
        public string? RefreshToken { get; set; } 
        public DateTime TokenCreated { get; set; }
        public DateTime TokenExpires { get; set; }
    }
}
