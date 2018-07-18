using MongoDB.Driver;

namespace developerchallenge.Data.Interfaces
{
    public interface IMongoDbClient
    {
        IMongoDatabase GetDatabase();
    }
}