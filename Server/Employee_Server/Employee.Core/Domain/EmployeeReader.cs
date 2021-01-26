using Employee.Api.Data.Reader;
using Employee.Core.Mapping;
using Employee.Entity;
using Employee.Model;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace Employee.Core.Domain
{
    public class EmployeeReader: IEmployeeReader
    {

        private readonly IEmployeeDataReader _employeeDataReader;
        private readonly IObjectMapper _objectMapper;

        public EmployeeReader(
            IEmployeeDataReader employeeDataReader,
            IObjectMapper objectMapper)
        {
            _employeeDataReader = employeeDataReader;
            _objectMapper = objectMapper;
        }

        public async Task<EmployeeModel> ReadAsync(Guid Id, CancellationToken cancellationToken)
        {
            var model = await _employeeDataReader.ReadAsync(Id, cancellationToken);
            var entry = _objectMapper.Map<EmployeeEntity, EmployeeModel>(model);
            return entry;
        }

        public async Task<List<EmployeeModel>> ReadAllAsync(CancellationToken cancellationToken)
        {
            var model = await _employeeDataReader.ReadAllAsync(cancellationToken);
            var entry = _objectMapper.Map<List<EmployeeEntity>, List<EmployeeModel>>(model);
            return entry;
        }
    }
}
