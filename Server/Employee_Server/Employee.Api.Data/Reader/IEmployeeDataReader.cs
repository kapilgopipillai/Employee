using Employee.Entity;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace Employee.Api.Data.Reader
{
    public interface IEmployeeDataReader
    {
        Task<EmployeeEntity> ReadAsync(Guid Id, CancellationToken cancellationToken);
    }
}
