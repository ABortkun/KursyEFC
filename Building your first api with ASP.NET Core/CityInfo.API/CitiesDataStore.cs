using CityInfo.API.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CityInfo.API
{
    public class CitiesDataStore
    {
        public static CitiesDataStore Current { get; } = new CitiesDataStore();

        public List<CityDto> Cities { get; set; }

        public CitiesDataStore()
        {
            // init dummy data
            Cities = new List<CityDto>()
            {
                new CityDto()
                {
                     Id = 1,
                     Name = "New York City",
                     Description = "The one with that big park.",
                     Country = "United States of America",
                     PointsOfInterest = new List<PointOfInterestDto>()
                     {
                         new PointOfInterestDto() {
                             Id = 1,
                             Name = "Central Park",
                             Description = "The most visited urban park in the United States." },
                          new PointOfInterestDto() {
                             Id = 2,
                             Name = "Empire State Building",
                             Description = "A 102-story skyscraper located in Midtown Manhattan." },
                     }
                },
                new CityDto()
                {
                    Id = 2,
                    Name = "Antwerp",
                    Description = "The one with the cathedral that was never really finished.",
                    Country = "Belgium",
                    PointsOfInterest = new List<PointOfInterestDto>()
                     {
                         new PointOfInterestDto() {
                             Id = 3,
                             Name = "Cathedral of Our Lady",
                             Description = "A Gothic style cathedral, conceived by architects Jan and Pieter Appelmans." },
                          new PointOfInterestDto() {
                             Id = 4,
                             Name = "Antwerp Central Station",
                             Description = "The the finest example of railway architecture in Belgium." },
                     }
                },
                new CityDto()
                {
                    Id= 3,
                    Name = "Paris",
                    Description = "The one with that big tower.",
                    Country = "France",
                    PointsOfInterest = new List<PointOfInterestDto>()
                     {
                         new PointOfInterestDto() {
                             Id = 5,
                             Name = "Eiffel Tower",
                             Description = "A wrought iron lattice tower on the Champ de Mars, named after engineer Gustave Eiffel." },
                          new PointOfInterestDto() {
                             Id = 6,
                             Name = "The Louvre",
                             Description = "The world's largest museum." },
                     }
                },
                new CityDto()
                {
                Id= 4,
                Name = "Gdańsk",
                Description = "Big part of Tri-City with acces to the sea",
                Country = "Poland",
                PointsOfInterest = new List<PointOfInterestDto>()
                {
                    new PointOfInterestDto() {
                        Id = 7,
                        Name = "Neptun's Fountain",
                        Description = "historic fountain in Gdańsk" },
                    new PointOfInterestDto() {
                        Id = 8,
                        Name = "St. Mary's Basilica",
                        Description = "the largest brick temple in Europe" },
                }
            },
            new CityDto()
            {
                Id= 5,
                Name = "Warszawa",
                Description = "The one with that big tower.",
                Country = "Poland",
                PointsOfInterest = new List<PointOfInterestDto>()
                {
                    new PointOfInterestDto() {
                        Id = 9,
                        Name = "Palace of Culture and Science",
                        Description = "The palace is the seat of the Council of the Capital City of Of Warsaw, which deliberates in the Warsaw Hall." },
                    new PointOfInterestDto() {
                        Id = 10,
                        Name = "Museum of the Warsaw Uprising",
                        Description = "Historical museum in Warsaw" },
                }
            }
            };
        }

    }

}
