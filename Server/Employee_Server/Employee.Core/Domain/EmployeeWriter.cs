using Employee.Api.Data.Writer;
using Employee.Core.Mapping;
using Employee.Entity;
using Employee.Model;
using System;
using System.Threading;
using System.Threading.Tasks;

namespace Employee.Core.Domain
{
    public class EmployeeWriter: IEmployeeWriter
    {
        private readonly IEmployeeDataWriter _employeeDataWriter;
        private readonly IObjectMapper _objectMapper;

        public EmployeeWriter(
            IEmployeeDataWriter employeeDataWriter,
            IObjectMapper objectMapper)
        {
            _employeeDataWriter = employeeDataWriter;
            _objectMapper = objectMapper;
        }

        public async Task DeleteAsync(Guid id, CancellationToken cancellationToken)
        {
            await _employeeDataWriter.DeleteAsync(id, cancellationToken);
        }

        public async Task<Guid> PostAsync(EmployeeModel employeeModel, CancellationToken cancellationToken)
        {
            employeeModel.Created = DateTime.UtcNow;
            employeeModel.Modified = DateTime.UtcNow;
            var EmployeeModel = _objectMapper.Map<EmployeeModel, EmployeeEntity>(employeeModel);
            return await _employeeDataWriter.InsertAsync(EmployeeModel, cancellationToken);
        }

        public async Task PutAsync(EmployeeModel employeeModel, CancellationToken cancellationToken)
        {
            employeeModel.Modified = DateTime.UtcNow;
            var EmployeeModel = _objectMapper.Map<EmployeeModel, EmployeeEntity>(employeeModel);
            await _employeeDataWriter.UpdateAsync(EmployeeModel, cancellationToken);
        }
    }
}
