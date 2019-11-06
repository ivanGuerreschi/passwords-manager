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

package it.ivanguerreschi.passwordsmanager.domain.model;

import java.time.LocalDate;

import javax.persistence.Entity;

import io.quarkus.hibernate.orm.panache.PanacheEntity;

@Entity
public class Credential extends PanacheEntity {

	public String name;
	public String email;
	public String password;
	public LocalDate create;
}
