using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using React_with_Asp.Net_Core_web_Api_Full_Stack_Crud_Application.Models;

namespace React_with_Asp.Net_Core_web_Api_Full_Stack_Crud_Application.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StudentController : ControllerBase
    {
        public readonly StudentDbContext _studentDbContext;

        // underscore used because in the consturctor use this.student.... when use _ it dont need this.


        //constructor

        public StudentController(StudentDbContext studentDbContext)
        {
           _studentDbContext = studentDbContext;
        }


        [HttpGet]
        [Route("Get Student")]

        //Asynchronous methods allow for the execution of other code while waiting for certain operations to complete
        //The IEnumerator interface provides methods to traverse the elements in the collection one by one.

        public async Task<IEnumerable<Student>> GetStudents()
        {
            return await _studentDbContext.Student.ToListAsync();
        }


    }
}
