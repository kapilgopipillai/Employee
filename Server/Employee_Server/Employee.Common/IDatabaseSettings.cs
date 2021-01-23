using System;
using System.Collections.Generic;
using System.Text;

namespace Employee.Common
{
    public interface IDatabaseSettings
    {

        string Tenant { get; }

        string GetTenantConnectionString(string tenantId);
    }
}
