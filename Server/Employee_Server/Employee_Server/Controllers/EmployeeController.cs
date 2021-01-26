using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Employee.Core.Domain;
using Employee.Model;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Employee.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeController : EmployeeBaseController
    {
        private readonly IEmployeeReader _employeeReader;
        private readonly IEmployeeWriter _employeeWriter;
        public EmployeeController(IEmployeeReader employeeReader, IEmployeeWriter employeeWriter)
        {
            _employeeReader = employeeReader;
            _employeeWriter = employeeWriter;
        }

        [HttpGet]
        [ProducesResponseType(typeof(ListQueryResult<EmployeeModel>), StatusCodes.Status200OK)]
        public async Task<IActionResult> GetEmployees(CancellationToken cancellationToken = default(CancellationToken))
        {
            try
            {
                var qresult = await _employeeReader.ReadAllAsync(cancellationToken);
                return Ok(qresult);
            }
            catch(Exception ex)
            {
                throw ex;
            }
        }

        [HttpGet("{id}")]
        [ProducesResponseType(typeof(EmployeeModel), StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<IActionResult> Get(Guid id, CancellationToken cancellationToken = default(CancellationToken))
        {
            try
            {
                var employee = await _employeeReader.ReadAsync(id, cancellationToken);
                return Ok(employee);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }


        [HttpPost]
        [ProducesResponseType(StatusCodes.Status202Accepted)]
        public async Task<Guid> Post([FromBody] EmployeeModel employeeModel,
            CancellationToken cancellationToken = default(CancellationToken))
        {
            try
            {
                return await _employeeWriter.PostAsync(employeeModel, cancellationToken);
            } catch(Exception ex)
            {
                throw ex;
            }
        }

        [HttpPut]
        [ProducesResponseType(StatusCodes.Status202Accepted)]
        public async Task<IActionResult> Put(
            Guid id,
            [FromBody] EmployeeModel employeeModel,
            CancellationToken cancellationToken = default(CancellationToken))
        {
            try
            {
                await _employeeWriter.PutAsync(employeeModel, cancellationToken);
                return Updated();
            }
            catch(Exception ex)
            {
                throw ex;
            }
        }

        [HttpDelete("{id}")]
        [ProducesResponseType(StatusCodes.Status202Accepted)]
        [ProducesResponseType(StatusCodes.Status409Conflict)]
        public async Task<IActionResult> Delete(Guid id, CancellationToken cancellationToken = default(CancellationToken))
        {
            try
            {
                await _employeeWriter.DeleteAsync(id, cancellationToken);
                return Deleted();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}
