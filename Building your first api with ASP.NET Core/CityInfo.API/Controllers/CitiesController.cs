using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using CityInfo.API.Models;
using CityInfo.API.Services;
using Microsoft.AspNetCore.Mvc;

namespace CityInfo.API.Controllers
{
    [ApiController]
    [Route("api/cities")]
    public class CitiesController : Controller
    {
        private readonly ICityInfoRepository _cityInfoRepository;


        public CitiesController(ICityInfoRepository cityInfoRepository)
        {
            _cityInfoRepository = cityInfoRepository ?? throw new ArgumentNullException(nameof(CityInfoRepository));
        }

        [HttpGet]
        public IActionResult GetCities()
        {
            return View();
        }

        [HttpPost("city")]
        public IActionResult PostCity(string name, string description, string country)
        {
            var modelStateIsValid = ModelState.IsValid;
            if (!modelStateIsValid)
            {
                return NotFound();
            }

            try
            {
                _cityInfoRepository.AddCity(name, description, country);
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                return StatusCode(500);
            }
            return Ok();
        }

        [HttpGet("citiesOnly")]
        public List<CityWithoutPointsOfInterestDto> GetCitiesOnly()
        {
            var cityEntities = _cityInfoRepository.GetCities();

            var results = new List<CityWithoutPointsOfInterestDto>();

            foreach (var cityEntity in cityEntities)
            {
                results.Add(new CityWithoutPointsOfInterestDto
                {
                    Id = cityEntity.Id,
                    Description = cityEntity.Description,
                    Name = cityEntity.Name,
                    Country = cityEntity.Country
                });
            }

            return results;
        }

        [HttpGet("{id}")]
        public IActionResult GetCity(int id, bool includePointsOfInterest = false)
        {
            var city = _cityInfoRepository.GetCity(id, includePointsOfInterest);

            if (city == null)
            {
                return NotFound();
            }

            if (includePointsOfInterest)
            {
                var cityResult = new CityDto()
                {
                    Id = city.Id,
                    Name = city.Name,
                    Description = city.Description,
                    Country = city.Country
                };

                foreach (var poi in city.PointsOfInterest)
                {
                    cityResult.PointsOfInterest.Add(
                        new PointOfInterestDto()
                        {
                            Id = poi.Id,
                            Name = poi.Name,
                            Description = poi.Description
                        });
                }

                return Ok(cityResult);
            }

            var cityWithoutPointsOfInterestResult =
                new CityWithoutPointsOfInterestDto()
                {
                    Id = city.Id,
                    Description = city.Description,
                    Name = city.Name,
                    Country = city.Country
                };
            return Ok(cityWithoutPointsOfInterestResult);

        }
    }
}
