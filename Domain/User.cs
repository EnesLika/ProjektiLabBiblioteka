using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Domain
{
    public class User
    {
        [Key]
        public int user_id { get; set; }
        public string emri { get; set; } = string.Empty;
        public string mbiemri { get; set; } = string.Empty;
        public string email { get; set; } = string.Empty;
        public string password { get; set; } = string.Empty;
        public string usertype { get; set; } = string.Empty;
    }
}