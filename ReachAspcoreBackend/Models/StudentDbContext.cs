using Microsoft.EntityFrameworkCore;


namespace React_with_Asp.Net_Core_web_Api_Full_Stack_Crud_Application.Models
{
    public class StudentDbContext : DbContext
    {
        public StudentDbContext(DbContextOptions<StudentDbContext> options) : base(options)
        {
            
        }

        public DbSet<Student> Student { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
           optionsBuilder.UseSqlServer("Data Source=.; initial Catalog=lbs; User Id=sa; password=123; TrustServerCertificate=True");
        }

    }
}
