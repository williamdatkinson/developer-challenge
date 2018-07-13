using System.Collections.Generic;
namespace developerchallenge.Models
{
    public class Title
    {
        public List<Award> Awards { get; set; }
        public List<string> Genres { get; set; }
        public List<OtherName> OtherNames { get; set; }
        public List<Participant> Participants { get; set; }
        public long ReleaseYear { get; set; }
        public List<Storyline> Storylines { get; set; }
        public long TitleId { get; set; }
        public string TitleName { get; set; }
        public string TitleNameSortable { get; set; }
        public int Id { get; set; }
    }
} 