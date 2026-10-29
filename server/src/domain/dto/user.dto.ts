export interface CreateUserDto {
  email: string;
  name: string;
  password: string;
  createdAt: Date;
}

export interface UpdateUserDto {
  email?: string;
  name?: string;
  password?: string;
  createdAt?: Date;
}

export interface UserResponseDto {
  id: string;
  email: string;
  name: string;
  createdAt: Date;
}

export interface UserListResponseDto {
  users: UserResponseDto[];
}