import { IsEmail, IsString } from 'class-validator';

export class UsersDTO {
  @IsEmail()
  email: string;
  @IsString()
  password: string;
}
