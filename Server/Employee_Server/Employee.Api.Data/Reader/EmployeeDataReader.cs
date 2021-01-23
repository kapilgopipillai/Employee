using Dapper;
using Employee.Common;
using Employee.Entity;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace Employee.Api.Data.Reader
{
    public class EmployeeDataReader: IEmployeeDataReader
    {
        private readonly IDatabaseSettings _databaseSettings;
        public EmployeeDataReader(IDatabaseSettings databaseSettings)
        {
            _databaseSettings = databaseSettings;
        }

        public async Task<EmployeeEntity> ReadAsync(Guid Id, CancellationToken cancellationToken)
        {
            using (var connection = new SqlConnection(_databaseSettings.Tenant))
            {
                await connection.OpenAsync(cancellationToken);

                var execParams = new DynamicParameters(new { Id });

                var command = new CommandDefinition(
                    "dbo.GetEmployee",
                    execParams,
                    commandType: System.Data.CommandType.StoredProcedure);

                var data = await connection.QuerySingleOrDefaultAsync<EmployeeEntity>(command);

                if (data == null)
                {
                    //throw new PfepNotFoundException("Employee");
                }

                return data;
            }
        }
    }
}
