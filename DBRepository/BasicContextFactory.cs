using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace DBRepository
{
    public class BasicContextFactory : IBasicContextFactrory
    {
        public BasicContext CreateDbContext(string connectionString)
        {
            var optionsBuilder = new DbContextOptionsBuilder<BasicContext>();
            optionsBuilder.UseSqlServer("Data Source='Localhost';Initial Catalog= TournamentsDB;Integrated Security=True");
            return new BasicContext(optionsBuilder.Options);
        }
    }
}
