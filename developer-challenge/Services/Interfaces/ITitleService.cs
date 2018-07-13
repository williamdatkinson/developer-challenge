using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using developerchallenge.Models;

namespace developerchallenge.Services.Interfaces
{
    public interface ITitleService
    {
        Title Get(int Id);
        IEnumerable<Title> GetAll();
        IEnumerable<Title> Find(Expression<Func<Title, bool>> predicate);
    }
}