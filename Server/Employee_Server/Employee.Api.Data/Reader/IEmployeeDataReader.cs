using Employee.Entity;
using Employee.Model;
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
        Task<List<EmployeeEntity>> ReadAllAsync(CancellationToken cancellationToken);
    }
}
