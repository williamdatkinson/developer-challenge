using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using developerchallenge.Models;
using developerchallenge.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace developerchallenge.Controllers
{
    [Route("api/[controller]")]
    public class TitlesController : Controller
    {
        private ITitleService _titleService;

        public TitlesController(ITitleService titleService)
        {
            _titleService = titleService;
        }

        [HttpGet("{id}")]
        Title Get(int id)
        {
            return _titleService.Get(id);
        }

        [HttpGet]
        public IEnumerable<Title> GetAll()
        {
            return _titleService.GetAll();
        }

        [HttpGet("title")]
        public IEnumerable<Title> Find(string title)
        {
            return _titleService.Find(x => x.TitleName.Contains(title));
        }
    }
} 