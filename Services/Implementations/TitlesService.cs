using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using developerchallenge.Data.Interfaces;
using developerchallenge.Models;
using developerchallenge.Services.Interfaces;
using Microsoft.Extensions.Configuration;
using MongoDB.Bson;
using MongoDB.Driver;

namespace developerchallenge.Services.Implementations
{
    public class TitlesService : ITitleService
    {
        IMongoCollection<Title> _titlesCollection;

        public TitlesService(IMongoDbClient client)
        {
            var database = client.GetDatabase();
            _titlesCollection = database.GetCollection<Title>("Titles");
        }

        public IEnumerable<Title> Find(Expression<Func<Title, bool>> predicate)
        {
            return _titlesCollection.Find(predicate) as List<Title>;
        }

        public IEnumerable<Title> Find(string partialTitle)
        {
            return _titlesCollection.AsQueryable<Title>().Where(t => t.TitleName.ToLower().Contains(partialTitle)).ToList();
        }

        public Title Get(string id)
        {
            var filter = Builders<Title>.Filter.Eq("Id", id);
            return _titlesCollection.Find(filter).FirstOrDefault();
        }

        public  IEnumerable<Title> GetAll() => _titlesCollection.AsQueryable().ToList();

    }
}