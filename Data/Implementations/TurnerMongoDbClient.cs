using developerchallenge.Data.Interfaces;
using Microsoft.Extensions.Configuration;
using MongoDB.Driver;

namespace developerchallenge.Data.Implementations
{
    public class TurnerMongoDbClient : IMongoDbClient
    {
        private IConfiguration _configuration;
        private IMongoClient _client;

        public TurnerMongoDbClient(IConfiguration configuration, IMongoClient client)
        {
            _configuration = configuration;
            _client = client;
        }

        public IMongoDatabase GetDatabase()
        {
            _client = new MongoClient(_configuration["ConnectionStrings:DevChallengDbConnectionString"]);
            return _client.GetDatabase(_configuration["ConnectionStrings:DatabaseName"]);
        }
    }
}