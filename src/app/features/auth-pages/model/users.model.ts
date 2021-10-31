export interface UserModel {
  id: number;
  name: string;
  email: string;
  imageUrl: string;
  password: string;
  typeUser: string;
}

// TypeUser types:
//   user,
//   gestor,
//   empresa,
