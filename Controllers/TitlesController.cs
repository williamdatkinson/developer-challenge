using System.Collections.Generic;
using developerchallenge.Models;
using developerchallenge.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace developerchallenge.Controller
{
    //[Route("api/[controller]")]
    public class TitlesController : ControllerBase
    {
        public ITitleService _titlesService;

        public TitlesController(ITitleService titlesService)
        {
            _titlesService = titlesService;
        }

        // GET: api/titles
        [HttpGet("api/titles")]
        public IEnumerable<Title> Get()
        {
            return _titlesService.GetAll();
        }

        // GET api/titles/5
        [HttpGet("api/titles/{id}")]
        public Title Get(string id)
        {
            return _titlesService.Get(id);
        }

        //[Route("{partialTitle}/find")]
        [Route("api/titles/find/{partialTitle}")]
        public IEnumerable<Title> Find(string partialTitle)
        {
            return _titlesService.Find(partialTitle);
        }
    }
}
