using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

public class User 
{
    public Guid UserId {get;set;}
    public String Username {get;set;} = string.Empty;
    public String Password {get;set;} = string.Empty;
    public String Email { get; set; } = string.Empty;
    public String? Phone { get; set; }
    public String Role { get; set; } = string.Empty;
    public DateTime CreatedAt { get; set; } = DateTime.Now;
}

public class UserConfiguration : IEntityTypeConfiguration<User>
{
    public void Configure(EntityTypeBuilder<User> builder)
    {
        throw new NotImplementedException();
    }
}