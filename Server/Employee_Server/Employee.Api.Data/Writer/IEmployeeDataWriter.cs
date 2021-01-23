using Employee.Entity;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace Employee.Api.Data.Writer
{
    public interface IEmployeeDataWriter
    {
        Task<Guid> InsertAsync(EmployeeEntity employeeEntity, CancellationToken cancellationToken);

        Task UpdateAsync(EmployeeEntity employeeEntity, CancellationToken cancellationToken);

        Task DeleteAsync(Guid id, CancellationToken cancellationToken);
    }
}
