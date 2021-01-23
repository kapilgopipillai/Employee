using System;

namespace Employee.Entity
{
    public class EmployeeEntity
    {
        public Guid Id { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }

        public string ContactName { get; set; }

        public string PhoneNumber { get; set; }

        public string City { get; set; }

        public string State { get; set; }

        public string Notes { get; set; }

        public string EmailAddress { get; set; }

        public string Address1 { get; set; }

        public string Address2 { get; set; }

        public string Address3 { get; set; }

        public string PostalCode { get; set; }

        public bool Disabled { get; set; }

        public DateTime Created { get; set; }

        public string CreatedBy { get; set; }

        public DateTime Modified { get; set; }

        public string ModifiedBy { get; set; }
    }
}
