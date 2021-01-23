using Employee.Model;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace Employee.Core.Domain
{
    public interface IEmployeeWriter
    {
        Task<Guid> PostAsync(EmployeeModel employeeModel, CancellationToken cancellationToken);

        Task PutAsync(EmployeeModel employeeModel, CancellationToken cancellationToken);

        Task DeleteAsync(Guid id, CancellationToken cancellationToken);
    }
}
