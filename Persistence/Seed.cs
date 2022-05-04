using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;

namespace Persistence
{
    public class Seed
    {
        public static async Task SeedData(DataContext context)
        {
            if (context.Users.Any()) return;
            
            var users = new List<User>
            {
                new User {
                    emri = "Filan",
                    mbiemri = "Fisteki",
                    email = "test@test.com",
                    password = "testing123",
                    usertype = "user"
                },
                new User {
                    emri = "Filan",
                    mbiemri = "Fisteki",
                    email = "test@test.com",
                    password = "testing123",
                    usertype = "user"
                },
                 new User {
                    emri = "Filan",
                    mbiemri = "Fisteki",
                    email = "test@test.com",
                    password = "testing123",
                    usertype = "user"
                },
            };
            await context.Users.AddRangeAsync(users);
            await context.SaveChangesAsync();
        }
    }
}
