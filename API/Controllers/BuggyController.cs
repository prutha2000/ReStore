using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace API.Controllers
{
    public class BuggyController : BaseApiController
    {
        [HttpGet]
        [Route("not-found")]
        public ActionResult GetNotFound()
        {
            return NotFound();
        }

        [HttpGet]
        [Route("bad-request")]
        public ActionResult GetBadRequest()
        {
            return BadRequest(new ProblemDetails{Title = "This is a Bad Request"});
        }

        [HttpGet]
        [Route("unauthorized")]
        public ActionResult GetUnauthorized()
        {
            return Unauthorized();
        }

        [HttpGet]
        [Route("validation-error")]
        public ActionResult GetValidationError()
        {
            ModelState.AddModelError("Problem1", "This is the first Error");
            ModelState.AddModelError("Problem2", "This is the Second Error");
            return ValidationProblem();
        }

        [HttpGet]
        [Route("server-error")]
        public ActionResult GetServerError()
        {
            throw new Exception("This is Server Error");
        }
    }
}