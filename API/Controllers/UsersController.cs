using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Cors;
using Microsoft.EntityFrameworkCore;
using Persistence;
using Application.Users;
using System.Threading.Tasks;
using System.Collections.Generic;
using Domain;
using MediatR;

namespace API.Controllers
{   
    
    public class UsersController : BaseApiController
    {
     
        [HttpGet]
        public async Task<ActionResult<List<User>>> GetAllUsers()
        {
            return await Mediator.Send(new List.Query());
        }
        
        [HttpGet("{id}")]
        public async Task<ActionResult<User>> GetSingleUser(int id)
        {
            return await Mediator.Send(new Details.Query{Id=id});
        }
        
        [HttpPost]
        public async Task<IActionResult> AddUser(User addUser)
        {    
            return Ok(await Mediator.Send(new Create.Command{Users = addUser}));
        }
        
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateUser(int id, User updateusers)
        {
           updateusers.user_id = id;
           return Ok(await Mediator.Send(new Edit.Command{Users=updateusers}));
        }
        
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteUser(int id)
        {
            return Ok(await Mediator.Send(new Delete.Command{Id = id}));
        }
    }
}
