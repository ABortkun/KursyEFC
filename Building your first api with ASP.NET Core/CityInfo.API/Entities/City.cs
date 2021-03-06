using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;
using CityInfo.API.Models;

namespace CityInfo.API.Entities
{
    public class City
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        [Required(ErrorMessage = "You should provide a name value")]
        [MaxLength(30, ErrorMessage = "Max length of this value is 50")]
        public string Name { get; set; }
        [MaxLength(200)]
        public string Description { get; set; }
        [MaxLength(30, ErrorMessage = "Max length of this value is 50")]
        public string Country { get; set; }

        public ICollection<PointOfInterest> PointsOfInterest { get; set; } = new List<PointOfInterest>();

    }
}
