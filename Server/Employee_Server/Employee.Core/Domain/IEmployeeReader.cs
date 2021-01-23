using Employee.Model;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace Employee.Core.Domain
{
    public interface IEmployeeReader
    {
        Task<EmployeeModel> ReadAsync(Guid Id, CancellationToken cancellationToken);
    }
}
