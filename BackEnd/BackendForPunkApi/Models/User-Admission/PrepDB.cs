using System.Security.Cryptography.X509Certificates;
using BackendForPunkApi.Data;
using Microsoft.AspNetCore.Builder;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using BackendForPunkApi.Controllers;
using PunkApiApp;

namespace BackendForPunkApi.Models{
    public static class PrepDB{
        public static byte[] PasswordSalt { get; private set; }

        public static void PrepPopulation(IApplicationBuilder app){
            using (var serviceScope = app.ApplicationServices.CreateAsyncScope()){
                SeedData(serviceScope.ServiceProvider.GetService<PunkDbContext>());
            }

        }

        public static void SeedData(PunkDbContext context){
            Console.WriteLine("Appling Migrations...");
            context.Database.Migrate();

            if(!context.User.Any()){ 
                Console.WriteLine("Adding data - seeding ...");
                var passwordCrypt = new SecurePasswordWithHMACSHA512("string");
                context.User.Add(new User(){
                    UserId = 1,
                    UserName = "string",
                    EMail = "string",
                    PhoneNumber = 0,
                    Gender = "string",
                    PasswordHash = passwordCrypt.GetPasswordHash(),
                    PasswordSalt =  passwordCrypt.GetPasswordSalt(),
                    RefreshToken = "",
                    TokenCreated = DateTime.Now,
                    TokenExpires = DateTime.Now.AddDays(99),
                });
            }
            else{
                Console.WriteLine("Db not empty - not seeding...");
            }
        
        }
    }
}