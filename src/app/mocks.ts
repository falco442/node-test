import {Company} from "./models/company";
import {Vacancy} from "./models/vacancy";
import {Candidate} from "./models/candidate";
import {User} from "./models/user";

const companies: Company[] = [
  {id: 1, name: 'Enterprise'},
  {id: 2, name: 'BigData SRC'},
  {id: 3, name: 'Helios Inc.'},
  {id: 4, name: 'Microsoft'},
];

const vacancies: Vacancy[] = [
  {id: 1, company: companies[0], description: 'Sviluppatore frontend'},
  {id: 2, company: companies[1], description: 'Sviluppatore backend'},
  {id: 3, company: companies[1], description: 'Sviluppatore fullstack'},
  {id: 4, company: companies[1], description: 'Sistemista CISCO'},
  {id: 5, company: companies[2], description: 'Sistemista CISCO'},
  {id: 6, company: companies[2], description: 'Tecnico di rete'},
  {id: 7, company: companies[1], description: 'Ingegnere logistico'},
  {id: 8, company: companies[3], description: 'Sviluppatore frontend Angular'},
  {id: 9, company: companies[3], description: 'Sviluppatore frontend React'},
];

const candidates: Candidate[] = [
  {firstName: 'Luigi', lastName: 'Pirelli', birthDate: '1982-02-06'},
  {firstName: 'Mario', lastName: 'Rossi', birthDate: '1964-06-07'},
  {firstName: 'Paolo', lastName: 'Bonelli', birthDate: '1993-12-12'},
  {firstName: 'Gianluigi', lastName: 'Scatti', birthDate: '1998-03-12'},
];

const users: User[] = [
  {username: 'Utente collegato'}
];

export const mock: { [key: string]: any } = {
  companies: companies,
  users: users,
  candidates: candidates,
  vacancies: vacancies
};
