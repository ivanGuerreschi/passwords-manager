/*
  passwords-manager use Quarkus for back-end and Angular for fron-tend.
  Copyright (C) 2019  Ivan Guerreschi

  This program is free software: you can redistribute it and/or modify
  it under the terms of the GNU General Public License as published by
  the Free Software Foundation, either version 3 of the License, or
  (at your option) any later version.

  This program is distributed in the hope that it will be useful,
  but WITHOUT ANY WARRANTY; without even the implied warranty of
  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
  GNU General Public License for more details.

  You should have received a copy of the GNU General Public License
  along with this program.  If not, see <https://www.gnu.org/licenses/>.

  Email ivanguerreschi86@gmail.com
*/

package it.ivanguerreschi.passwordsmanager.api;

import java.util.List;

import javax.inject.Inject;
import javax.transaction.Transactional;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import it.ivanguerreschi.passwordsmanager.domain.model.Credential;
import it.ivanguerreschi.passwordsmanager.domain.service.CredentialService;

@Produces(MediaType.APPLICATION_JSON)
@Path("/api")
public class PasswordResource {
	
	@Inject
	private CredentialService credentialService;

    @GET
    @Produces(MediaType.TEXT_PLAIN)
    public String hello() {
        return "hello";
    }
        
    @GET
    @Path("/credentials")
    public List<Credential> credentials() {
		return credentialService.credentials();    	
    }
    
    @POST
    @Transactional
    @Consumes(MediaType.APPLICATION_JSON)
    public void save() {
    	credentialService.save(new Credential());
    }
    
}