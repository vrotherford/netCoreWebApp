using System;
using Microsoft.EntityFrameworkCore;
using Models;

namespace DBRepository
{
    public class BasicContext : DbContext
    {
        public BasicContext(DbContextOptions<BasicContext> options) : base(options) { }
        public DbSet<Tournament> Tournaments { get; set; }
        public DbSet<Round> Rounds { get; set; }
        public DbSet<Task> Tasks { get; set; }
    }
}
