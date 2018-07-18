using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using developerchallenge.Models;
using MongoDB.Bson;

namespace developerchallenge.Services.Interfaces
{
    public interface ITitleService
    {
        Title Get(string id);
        IEnumerable<Title> GetAll();
        IEnumerable<Title> Find(string partialTitle);
    }
}