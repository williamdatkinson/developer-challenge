using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using developerchallenge.Models;
using developerchallenge.Services.Interfaces;
using MongoDB.Driver;

namespace developerchallenge.Services.Implementations
{
    public class TitlesService : ITitleService
    {
        IMongoCollection<Title> titlesCollection;

        // need to injuect the configuration here
        public TitlesService()
        {
            const string cs = "ds043348.mongolab.com";
            var database = new MongoClient(cs).GetDatabase("dev-challenge");
            titlesCollection = database.GetCollection<Title>("titles");
        }

        public IEnumerable<Title> Find(Expression<Func<Title, bool>> predicate) => titlesCollection.Find(predicate) as List<Title>;

        public Title Get(int Id) => titlesCollection.Find(t => t.Id == Id).FirstOrDefault();

        public IEnumerable<Title> GetAll() => titlesCollection.AsQueryable<Title>();
    }
}