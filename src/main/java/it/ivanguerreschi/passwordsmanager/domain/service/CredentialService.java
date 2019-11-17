/*
  passwords-manager use Quarkus for back-end and Angular for front-end.
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

package it.ivanguerreschi.passwordsmanager.domain.service;

import java.util.List;

import javax.enterprise.context.ApplicationScoped;
import javax.ws.rs.WebApplicationException;

import io.quarkus.panache.common.Sort;

import it.ivanguerreschi.passwordsmanager.domain.model.Credential;

@ApplicationScoped
public class CredentialService implements ServiceInterface {

	@Override
	public List<Credential> get() {
		return Credential.listAll(Sort.by("name"));
	}

	@Override
	public void create(Credential credential) {
		if (credential.id != null) {
			throw new WebApplicationException("Id was invalidly set on request.", 422);
		}
		credential.persist();
	}

	@Override
	public Credential getSingle(Long id) {
		Credential entity = Credential.findById(id);
		if (entity == null) {
            throw new WebApplicationException("Credential with id of " + id + " does not exist.", 404);
        }
		return entity;
	}

	@Override
	public Credential update(Long id, Credential credential) {
		if (credential.name == null) {
            throw new WebApplicationException("Credential Name was not set on request.", 422);
        }
		
		if (credential.email == null) {
            throw new WebApplicationException("Credential Email was not set on request.", 422);
        }
		
		if (credential.password == null) {
            throw new WebApplicationException("Credential Password was not set on request.", 422);
        }		
		
		Credential entity = Credential.findById(id);
		
		if (entity == null) {
            throw new WebApplicationException("Credential with id of " + id + " does not exist.", 404);
        }
		
		entity.name = credential.name;
		entity.email = credential.email;
		entity.password = credential.password;
		return entity;
	}

	@Override
	public void delete(Long id) {
		Credential entity = Credential.findById(id);
		if (entity == null) {
			throw new WebApplicationException("Credential with id of " + id + " does not exist.", 404);
		}
		entity.delete();
	}

}
