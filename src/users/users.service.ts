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
}
