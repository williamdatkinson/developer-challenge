using System.Collections.Generic;
namespace developerchallenge.Models
{
    public class Award
    {
        public bool AwardWon { get; set; }
        public long AwardYear { get; set; }
        public List<string> Participants { get; set; }
        public string AwardAward { get; set; }
        public string AwardCompany { get; set; }
    }
}