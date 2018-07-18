using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System.Collections.Generic;
namespace developerchallenge.Models
{
    public class Award
    {
        public bool AwardWon { get; set; }
        public int AwardYear { get; set; }
        public List<string> Participants { get; set; }
        [BsonElement("Award")]
        public string Category { get; set; }
        public string AwardCompany { get; set; }
    }
}