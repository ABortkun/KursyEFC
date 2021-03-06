using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CityInfo.API.Models;
using CityInfo.API.Services;
using Microsoft.AspNetCore.JsonPatch;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace CityInfo.API.Controllers
{
    [ApiController]
    [Route("api/cities/{cityId}/pointsofinterest")]
    public class PointsOfInterestController : ControllerBase
    {
        private readonly ILogger<PointsOfInterestController> _logger;
        private readonly IMailService _mailService;
        private readonly ICityInfoRepository _cityInfoRepository;

        public PointsOfInterestController(ILogger<PointsOfInterestController> logger, IMailService mailService, ICityInfoRepository cityInfoRepository)
        {
            _logger = logger ??
                      throw new ArgumentNullException(nameof(logger));
            _mailService = mailService ??
                           throw new ArgumentNullException(nameof(mailService));
            _cityInfoRepository = cityInfoRepository 
                                  ?? throw new ArgumentNullException(nameof(cityInfoRepository));
        }

        [HttpGet]
        public List<PointOfInterestDto> GetPointsOfInterest(int cityId)
        {

            var pointsOfInterestForCity = _cityInfoRepository.GetPointsOfInterestForCity(cityId);

                var pointsOfInterestForCityResults = new List<PointOfInterestDto>();
                foreach (var poi in pointsOfInterestForCity)
                {
                    pointsOfInterestForCityResults.Add(new PointOfInterestDto()
                    {
                        Id = poi.Id,
                        Name = poi.Name,
                        Description = poi.Description
                    });
                }

                return pointsOfInterestForCityResults;
            }
    }
        //[HttpGet("{id}", Name="GetPointOfInterest")]
        //public IActionResult GetPointsOfInterest(int cityId, int id)
        //{
        //    if (!_cityInfoRepository.CityExists(cityId))
        //    {
        //        return NotFound();
        //    }

        //    var pointOfInterest = _cityInfoRepository.GetPointOfInterestForCity(cityId, id);

        //    if (pointOfInterest == null)
        //    {
        //        return NotFound();
        //    }

        //    var pointOfInterestResult = new PointOfInterestDto()
        //    {
        //        Id = pointOfInterest.Id,
        //        Name = pointOfInterest.Name,
        //        Description = pointOfInterest.Description
        //    };
        //    return Ok(pointOfInterestResult);
        //}

        //[HttpPost]
        //public IActionResult CreatePointOfInterest(int cityId, [FromBody] PointOfInterestForCreationDto pointOfInterest)
        //{

        //    if (pointOfInterest.Description == pointOfInterest.Name)
        //    {
        //        ModelState.AddModelError(
        //            "Description",
        //            "The provided description should be different from the name.");
        //    }

        //    if (!ModelState.IsValid)
        //    {
        //        return BadRequest(ModelState);
        //    }

        //    var city = CitiesDataStore.Current.Cities
        //        .FirstOrDefault(c => c.Id == cityId);

        //    if (city == null)
        //    {
        //        return NotFound();
        //    }

        //    var maxPointOfInterestId =
        //        CitiesDataStore.Current.Cities.SelectMany(c => c.PointsOfInterest).Max(p => p.Id);

        //    var finalPointOfInterest = new PointOfInterestDto()
        //    {
        //        Id = ++maxPointOfInterestId,
        //        Name = pointOfInterest.Name,
        //        Description = pointOfInterest.Description
        //    };

        //    city.PointsOfInterest.Add(finalPointOfInterest);

        //    return CreatedAtRoute(
        //        "GetPointOfInterest",
        //        new {cityId, id = finalPointOfInterest.Id},
        //        finalPointOfInterest);
        //}

        //[HttpPut("{id}")]
        //public IActionResult UpdatePointOfInterest(int cityId, int Id,
        //    [FromBody] PointOfInterestForUpdateDto pointOfInterest)
        //{
        //    if (pointOfInterest.Description == pointOfInterest.Name)
        //    {
        //        ModelState.AddModelError(
        //            "Description",
        //            "The provided description should be different from the name.");
        //    }

        //    if (!ModelState.IsValid)
        //    {
        //        return BadRequest(ModelState);
        //    }

        //    var city = CitiesDataStore.Current.Cities
        //        .FirstOrDefault(c => c.Id == cityId);

        //    if (city == null)
        //    {
        //        return NotFound();
        //    }

        //    var pointOfInterestFromStore = city.PointsOfInterest.FirstOrDefault(p => p.Id == Id);
        //    if (pointOfInterest == null)
        //    {
        //        return NotFound();
        //    }

        //    pointOfInterestFromStore.Name = pointOfInterest.Name;
        //    pointOfInterestFromStore.Description = pointOfInterest.Description;

        //    return NoContent();
        //}

        //[HttpPatch("{id}")]
        //public IActionResult PartiallyUpdatePointOfInterest(int cityId, int Id,
        //    [FromBody] JsonPatchDocument<PointOfInterestForUpdateDto> patchDoc)
        //{
        //    var city = CitiesDataStore.Current.Cities
        //        .FirstOrDefault(c => c.Id == cityId);

        //    if (city == null)
        //    {
        //        return NotFound();
        //    }

        //    var pointOfInterestFromStore = city.PointsOfInterest.FirstOrDefault(p => p.Id == Id);
        //    if (pointOfInterestFromStore == null)
        //    {
        //        return NotFound();
        //    }

        //    var pointOfInterestToPatch = new PointOfInterestForUpdateDto()
        //    {
        //        Name = pointOfInterestFromStore.Name,
        //        Description = pointOfInterestFromStore.Description
        //    };
        //    patchDoc.ApplyTo(pointOfInterestToPatch, ModelState);

        //    if (!ModelState.IsValid)
        //    {
        //        return BadRequest(ModelState);
        //    }

        //    if (pointOfInterestToPatch.Description == pointOfInterestToPatch.Name)
        //    {
        //        ModelState.AddModelError(
        //            "Description",
        //            "The provided description should be different from the name.");
        //    }

        //    if (!TryValidateModel(pointOfInterestToPatch))
        //    {
        //        return BadRequest(ModelState);
        //    }

        //    pointOfInterestFromStore.Name = pointOfInterestToPatch.Name;
        //    pointOfInterestFromStore.Description = pointOfInterestToPatch.Description;

        //    return NoContent();
        //}

        //[HttpDelete("{id}")]
        //public IActionResult DeletePointOfInterest(int cityId, int Id)
        //{
        //    var city = CitiesDataStore.Current.Cities
        //        .FirstOrDefault(c => c.Id == cityId);

        //    if (city == null)
        //    {
        //        return NotFound();
        //    }

        //    var pointOfInterestFromStore = city.PointsOfInterest.FirstOrDefault(p => p.Id == Id);
        //    if (pointOfInterestFromStore == null)
        //    {
        //        return NotFound();
        //    }

        //    city.PointsOfInterest.Remove(pointOfInterestFromStore);

        //    _mailService.Send("Point of interest delected.",
        //        $"Point of interest {pointOfInterestFromStore.Name} with id {pointOfInterestFromStore.Id} was deleted.");

        //    return NoContent();
        //}
    
}
