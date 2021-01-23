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
            //CreateMap<EmployeeModel, EmployeeEntity>()
            //    .ForMember(user => user.Id, opt => opt.Ignore())
            //    .ForMember(user => user.Name, opt => opt.Ignore())
            //    .ForMember(user => user.Notes, opt => opt.Ignore())
            //    .ForMember(user => user.Description, opt => opt.Ignore())
            //    .ForMember(user => user.PhoneNumber, opt => opt.MapFrom((model, user) => true))
            //    .ForMember(user => user.City, opt => opt.MapFrom((model, user) => true))
            //    .ForMember(user => user.State, opt => opt.MapFrom((model, user) => true))
            //    .ForMember(user => user.EmailAddress, opt => opt.MapFrom((model, user) => true))
            //    .ForMember(user => user.Address, opt => opt.MapFrom((model, user) => true))
            //    .ForMember(user => user.PostalCode, opt => opt.MapFrom((model, user) => true))
            //    .ForMember(user => user.Disabled, opt => opt.MapFrom((model, user) => true));


            CreateMap<EmployeeModel, EmployeeEntity>();
        }

    }
}
