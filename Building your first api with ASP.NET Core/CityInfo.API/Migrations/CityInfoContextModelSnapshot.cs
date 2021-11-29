﻿// <auto-generated />
using CityInfo.API.Contexts;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace CityInfo.API.Migrations
{
    [DbContext(typeof(CityInfoContext))]
    partial class CityInfoContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.1.14-servicing-32113")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("CityInfo.API.Entities.City", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Description")
                        .HasMaxLength(200);

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasMaxLength(50);

                    b.HasKey("Id");

                    b.ToTable("Cities");

                    b.HasData(
                        new { Id = 1, Description = "The one with that big park.", Name = "New York City" },
                        new { Id = 2, Description = "The one with the cathedral that was never really finished.", Name = "Antwerp" },
                        new { Id = 3, Description = "The one with that big tower.", Name = "Paris" },
                        new { Id = 4, Description = "Big part of Tri-City with acces to the sea", Name = "Gdańsk" },
                        new { Id = 5, Description = "The one with that big tower.", Name = "Warszawa" }
                    );
                });

            modelBuilder.Entity("CityInfo.API.Entities.PointOfInterest", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("CityId");

                    b.Property<string>("Description")
                        .HasMaxLength(200);

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasMaxLength(50);

                    b.HasKey("Id");

                    b.HasIndex("CityId");

                    b.ToTable("PointsOfInterests");

                    b.HasData(
                        new { Id = 1, CityId = 1, Description = "The most visited urban park in the United States.", Name = "Central Park" },
                        new { Id = 2, CityId = 1, Description = "A 102-story skyscraper located in Midtown Manhattan.", Name = "Empire State Building" },
                        new { Id = 3, CityId = 2, Description = "A Gothic style cathedral, conceived by architects Jan and Pieter Appelmans.", Name = "Cathedral" },
                        new { Id = 4, CityId = 2, Description = "The the finest example of railway architecture in Belgium.", Name = "Antwerp Central Station" },
                        new { Id = 5, CityId = 3, Description = "A wrought iron lattice tower on the Champ de Mars, named after engineer Gustave Eiffel.", Name = "Eiffel Tower" },
                        new { Id = 6, CityId = 3, Description = "The world's largest museum.", Name = "The Louvre" },
                        new { Id = 7, CityId = 4, Description = "historic fountain in Gdańsk", Name = "Neptun's Fountain" },
                        new { Id = 8, CityId = 4, Description = "the largest brick temple in Europe", Name = "St. Mary's Basilica" },
                        new { Id = 9, CityId = 5, Description = "The palace is the seat of the Council of the Capital City of Of Warsaw, which deliberates in the Warsaw Hall.", Name = "Palace of Culture and Science" },
                        new { Id = 10, CityId = 5, Description = "Historical museum in Warsaw", Name = "Museum of the Warsaw Uprising" }
                    );
                });

            modelBuilder.Entity("CityInfo.API.Entities.PointOfInterest", b =>
                {
                    b.HasOne("CityInfo.API.Entities.City", "City")
                        .WithMany("PointsOfInterest")
                        .HasForeignKey("CityId")
                        .OnDelete(DeleteBehavior.Cascade);
                });
#pragma warning restore 612, 618
        }
    }
}
