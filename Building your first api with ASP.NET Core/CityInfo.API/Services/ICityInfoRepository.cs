using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CityInfo.API.Entities;

namespace CityInfo.API.Services
{
    public interface ICityInfoRepository
    {
        IEnumerable<City> GetCities();

        City GetCity(int cityId, bool includePointsOfInterest);

        IEnumerable<PointOfInterest> GetPointsOfInterestForCity(int cityId);

        PointOfInterest GetPointOfInterestForCity(int cityId, int pointsOfInterestId);

        bool CityExists(int cityId);
        void AddCity(string name, string description, string country);
    }
}
