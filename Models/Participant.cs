using MongoDB.Bson.Serialization.Attributes;

namespace developerchallenge.Models
{
    public class Participant
    {
        public bool IsKey { get; set; }
        public string RoleType { get; set; }
        public bool IsOnScreen { get; set; }
        public string ParticipantType { get; set; }
        public string Name { get; set; }
        public int ParticipantId { get; set; }
        [BsonIgnoreIfNull]
        public int SortOrder { get; set; }
    }
}