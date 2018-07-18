using System.Collections.Generic;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace developerchallenge.Models
{
    public class Title
    {
        public List<Award> Awards { get; set; }
        public List<string> Genres { get; set; }
        public List<OtherName> OtherNames { get; set; }
        public List<Participant> Participants { get; set; }
        public int ReleaseYear { get; set; }
        public List<Storyline> Storylines { get; set; }
        public int TitleId { get; set; }
        public string TitleName { get; set; }
        public string TitleNameSortable { get; set; }
        [BsonId]
        public ObjectId Id { get; set; }
        [BsonIgnoreIfNull]
        public List<string> Keywords { get; set; }
        public List<string> KeyGenres { get; set; }
    }
}