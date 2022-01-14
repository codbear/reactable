import faker from 'faker';

const getFakeData = (numberOfEmployees) => {
  const data = [];

  for (let i = 0; i < numberOfEmployees; i++) {
    const person = {
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      startDate: faker.date.past().toString(),
      department: faker.name.jobArea(),
      dateOfBirth: faker.date.past().toString(),
      street: faker.address.streetAddress(),
      city: faker.address.city(),
      state: faker.address.state(),
      zipCode: faker.address.zipCode(),
    };
    data.push(person);
  }

  return data;
};

const tableDataMock = getFakeData(50);

export default tableDataMock;
