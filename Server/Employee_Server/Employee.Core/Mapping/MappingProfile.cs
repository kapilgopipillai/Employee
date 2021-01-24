using Employee.Entity;
using Employee.Model;
using System;
using System.Collections.Generic;
using System.Text;

namespace Employee.Core.Mapping
{
    public class MappingProfile : AutoMapper.Profile
    {
        public override string ProfileName => GetType().FullName;

        public MappingProfile()
        {
            CreateMap<EmployeeModel, EmployeeEntity>();
            CreateMap<EmployeeEntity, EmployeeModel>();
            CreateMap<ListQueryResult<EmployeeEntity>, ListQueryResult<EmployeeModel>>();
            CreateMap<ListQueryResult<EmployeeModel>, ListQueryResult<EmployeeEntity>>();
        }

    }
}
