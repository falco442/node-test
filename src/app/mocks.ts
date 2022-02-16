import {Company} from "./models/company";
import {Vacancy} from "./models/vacancy";
import {Candidate} from "./models/candidate";
import {User} from "./models/user";

const companies: Company[] = [
  {id: 1, name: 'Enterprise', email: 'ent@gmail.com'},
  {id: 2, name: 'BigData SRC', email: 'BG@bigdata.com'},
  {id: 3, name: 'Helios Inc.', email: 'heliosinc@me.com'},
  {id: 4, name: 'Microsoft', email: 'microsoftservice@microsoft.com'},
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
  {id: 1, firstName: 'Luigi', lastName: 'Pirelli', birthDate: '1982-02-06'},
  {id: 2, firstName: 'Mario', lastName: 'Rossi', birthDate: '1964-06-07'},
  {id: 3, firstName: 'Paolo', lastName: 'Bonelli', birthDate: '1993-12-12'},
  {id: 4, firstName: 'Gianluigi', lastName: 'Scatti', birthDate: '1998-03-12'},
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
