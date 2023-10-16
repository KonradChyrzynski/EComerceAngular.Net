using AuthenticationService.Models;
using Microsoft.EntityFrameworkCore;

namespace AuthenticationService.Data{
    public class AuthenticationServiceDbContext : DbContext{
        public AuthenticationServiceDbContext(DbContextOptions options) : base(options){}

        public DbSet<User> Users { get; set; }
    }
}