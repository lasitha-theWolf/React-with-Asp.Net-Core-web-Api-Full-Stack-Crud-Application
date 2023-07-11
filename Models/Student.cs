using System.ComponentModel.DataAnnotations;

namespace React_with_Asp.Net_Core_web_Api_Full_Stack_Crud_Application.Models
{
    public class Student
    {
        [Key]
        public int id { get; set; }

        public string stName { get; set; }

        public string course { get; set; }

    }
}
