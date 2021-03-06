using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CityInfo.API.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace CityInfo.API.Contexts
{
    public class CityConfiguration : IEntityTypeConfiguration<City>
    {
        public void Configure(EntityTypeBuilder<City> builder)
        {
         
        }
    }
    public class CityInfoContext : DbContext
    {
        public DbSet<City> Cities { get; set; }
        public DbSet<PointOfInterest> PointsOfInterests { get; set; }

        public CityInfoContext(DbContextOptions<CityInfoContext> options)
            : base(options)
        {
           // Database.EnsureCreated();
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {

            modelBuilder.ApplyConfiguration(new CityConfiguration());
            modelBuilder.Entity<City>()
                .HasData(
                    new City()
                    {
                        Id = 1,
                        Name = "New York City",
                        Description = "The one with that big park.",
                        Country = "United States of America",
                    },
                    new City()
                    {
                        Id = 2,
                        Name = "Antwerp",
                        Description = "The one with the cathedral that was never really finished.",
                        Country = "Belgium",
                    },
                    new City()
                    {
                        Id = 3,
                        Name = "Paris",
                        Description = "The one with that big tower.",
                        Country = "France",
                    },
                    new City()
                    {
                        Id = 4,
                        Name = "Gdańsk",
                        Description = "Big part of Tri-City with acces to the sea",
                        Country = "Poland",
                    },
                    new City()
                    {
                        Id = 5,
                        Name = "Warszawa",
                        Description = "The one with that big tower.",
                        Country = "Poland"
                    });

            modelBuilder.Entity<PointOfInterest>()
              .HasData(
                new PointOfInterest()
                {
                    Id = 1,
                    CityId = 1,
                    Name = "Central Park",
                    Description = "The most visited urban park in the United States."

                },
                new PointOfInterest()
                {
                    Id = 2,
                    CityId = 1,
                    Name = "Empire State Building",
                    Description = "A 102-story skyscraper located in Midtown Manhattan."
                },
                  new PointOfInterest()
                  {
                      Id = 3,
                      CityId = 2,
                      Name = "Cathedral",
                      Description = "A Gothic style cathedral, conceived by architects Jan and Pieter Appelmans."
                  },
                new PointOfInterest()
                {
                    Id = 4,
                    CityId = 2,
                    Name = "Antwerp Central Station",
                    Description = "The the finest example of railway architecture in Belgium."
                },
                new PointOfInterest()
                {
                    Id = 5,
                    CityId = 3,
                    Name = "Eiffel Tower",
                    Description = "A wrought iron lattice tower on the Champ de Mars, named after engineer Gustave Eiffel."
                },
                new PointOfInterest()
                {
                    Id = 6,
                    CityId = 3,
                    Name = "The Louvre",
                    Description = "The world's largest museum."
                },
            new PointOfInterest()
                {
                Id = 7,
                CityId = 4,
                Name = "Neptun's Fountain",
                Description = "historic fountain in Gdańsk"
            },
            new PointOfInterest()
                {
                Id = 8,
                CityId = 4,
                Name = "St. Mary's Basilica",
                Description = "the largest brick temple in Europe"
            },
            new PointOfInterest()
                {
                Id = 9,
                CityId = 5,
                Name = "Palace of Culture and Science",
                Description = "The palace is the seat of the Council of the Capital City of Of Warsaw, which deliberates in the Warsaw Hall."
            },
            new PointOfInterest()
                {
                Id = 10,
                CityId = 5,
                Name = "Museum of the Warsaw Uprising",
                Description = "Historical museum in Warsaw"
            }
                );
            base.OnModelCreating(modelBuilder);
        }
        //protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        //{
        //    optionsBuilder.UseSqlServer("connectionstring");
        //    base.OnConfiguring(optionsBuilder);
        //}

    }
}
