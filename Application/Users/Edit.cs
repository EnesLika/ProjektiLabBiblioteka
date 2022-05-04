using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MediatR;
using Domain;
using System.Threading;
using Persistence;
using AutoMapper;

namespace Application.Users
{
    public class Edit
    {
        public class Command : IRequest 
        {
            public User Users { get; set;}

        }
        public class Handler : IRequestHandler<Command>
        {
        private readonly DataContext _context;
        private readonly IMapper _mapper;
            public Handler(DataContext context, IMapper mapper)
            {
                _mapper = mapper;
                _context = context;
            }

            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                var dbUsers = await _context.Users.FindAsync(request.Users.user_id);
                
                _mapper.Map(request.Users, dbUsers);

                /*dbUsers.username = request.Users.username ?? dbUsers.username;
                dbUsers.email = request.Users.email ?? dbUsers.email;
                dbUsers.password = request.Users.password ?? dbUsers.password;
                dbUsers.firstname = request.Users.firstname ?? dbUsers.firstname;
                dbUsers.lastname = request.Users.lastname ?? dbUsers.lastname;
                dbUsers.address = request.Users.address ?? dbUsers.address;
                dbUsers.zip = request.Users.zip;
                dbUsers.usertype = request.Users.usertype ?? dbUsers.usertype;
                */

                await _context.SaveChangesAsync();
                return Unit.Value;
            }
        }
    }
}