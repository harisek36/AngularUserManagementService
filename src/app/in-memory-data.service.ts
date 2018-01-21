import { InMemoryDbService } from 'angular-in-memory-web-api';


export class InMemoryUserDataService implements InMemoryDbService {

  createDb() {
    console.log('fron DB');
     let userDictionary = [
      { id: '1', buyer_id: '1', first_name: 'Fred', last_name: 'Flintstone', email: 'fred.flintstone@slaterockandgravel.com' },
      { id: '2', buyer_id: '2', first_name: 'Barney', last_name: 'Rubble', email: 'barney.rubble@slaterockandgravel.com' },
      { id: '3', buyer_id: '3', first_name: 'Wilma', last_name: 'Flintstone', email: 'wilma.flinstone@dailygranite.com' },
       { id: '4', buyer_id: '3', first_name: 'Wilma', last_name: 'Flintstone', email: 'wilma.flinstone@dailygranite.com' }
,
       { id: '5', buyer_id: '3', first_name: 'Wilma', last_name: 'Flintstone', email: 'wilma.flinstone@dailygranite.com' }

     ];

    return {userDictionary};
  }

}
