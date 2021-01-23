using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Employee.Api.Controllers
{
    public class EmployeeBaseController : ControllerBase
    {
        protected IActionResult Updated() => StatusCode(StatusCodes.Status202Accepted);

        protected IActionResult Deleted() => StatusCode(StatusCodes.Status202Accepted);

        protected IActionResult Created() => StatusCode(StatusCodes.Status201Created);

        protected IActionResult Created(Guid newId) => StatusCode(StatusCodes.Status201Created, newId);

        protected IActionResult SendMail(string newId) => StatusCode(StatusCodes.Status200OK, newId);
    }
}
