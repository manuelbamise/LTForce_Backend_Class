interface users {
  name: string;
  email: string;
}

export class UsersService {
  constructor() {}

  async getUsers(): Promise<users[]> {
    return [
      { name: "sjd", email: "sjd@example.com" },
      { name: "john", email: "john@example.com" },
      { name: "jane", email: "jane@example.com" },
    ];
  }

  async getDataForMark() {
    const markData = await fetch("https://api.genderize.io/?name=mark");

    const data = await markData.json();
    return data;
  }

  async queryGenderizeApi(name: string) {
    const response = await fetch(`https://api.genderize.io/?name=${name}`);
    const data = await response.json();
    return data;
  }
}
