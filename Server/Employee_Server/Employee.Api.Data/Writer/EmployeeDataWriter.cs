using Dapper;
using Employee.Common;
using Employee.Entity;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace Employee.Api.Data.Writer
{
    public class EmployeeDataWriter: IEmployeeDataWriter
    {
        private readonly IDatabaseSettings _databaseSettings;
        public EmployeeDataWriter(IDatabaseSettings databaseSettings)
        {
            _databaseSettings = databaseSettings;
        }

        public async Task DeleteAsync(Guid id, CancellationToken cancellationToken)
        {
            using (var connection = new SqlConnection(_databaseSettings.Tenant))
            {
                await connection.OpenAsync(cancellationToken);

                var execParams = new DynamicParameters(new { Id = id });


                var command = new CommandDefinition(
                    "dbo.DeleteEmployee",
                    execParams,
                    commandType: System.Data.CommandType.StoredProcedure);

                await connection.ExecuteAsync(command);
            }
        }

        public async Task<Guid> InsertAsync(EmployeeEntity employeeEntity, CancellationToken cancellationToken)
        {
            using (var connection = new SqlConnection(_databaseSettings.Tenant))
            {
                await connection.OpenAsync(cancellationToken);

                var execParams = CreateParameters(employeeEntity);

                var command = new CommandDefinition(
                    "dbo.InsertEmployee",
                    execParams,
                    commandType: System.Data.CommandType.StoredProcedure);

                return await connection.QuerySingleAsync<Guid>(command);
            }
        }

        public async Task UpdateAsync(EmployeeEntity employeeEntity, CancellationToken cancellationToken)
        {
            using (var connection = new SqlConnection(_databaseSettings.Tenant))
            {
                await connection.OpenAsync(cancellationToken);

                var execParams = CreateParameters(employeeEntity);
                execParams.AddDynamicParams(new { Id = employeeEntity.Id });

                var command = new CommandDefinition(
                    "dbo.UpdateEmployee",
                    execParams,
                    commandType: System.Data.CommandType.StoredProcedure);

                await connection.ExecuteAsync(command);
            }
        }
        private static DynamicParameters CreateParameters(EmployeeEntity employeeEntity) =>
            new DynamicParameters(
                new
                {
                    employeeEntity.Name,
                    employeeEntity.Description,
                    employeeEntity.EmailAddress,
                    employeeEntity.PhoneNumber,
                    employeeEntity.Address,
                    employeeEntity.City,
                    employeeEntity.State,
                    employeeEntity.PostalCode,
                    employeeEntity.Notes,
                    employeeEntity.Disabled,
                    employeeEntity.Created,
                    employeeEntity.CreatedBy,
                    employeeEntity.Modified,
                    employeeEntity.ModifiedBy
                });
    }
}
