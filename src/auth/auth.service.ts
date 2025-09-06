import { Injectable } from '@nestjs/common';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { PrismaClient } from 'generated/prisma';

@Injectable()
export class AuthService {
  private prisma = new PrismaClient();

  async register(dto: RegisterDto) {
    const user = await this.prisma.user.create({
      data: {
        username: dto.email, // Assuming email as username for now
        password: dto.password,
      },
    });
    return user;
  }

  async login(dto: LoginDto) {
    const user = await this.prisma.user.findUnique({
      where: {
        username: dto.email, // Assuming email as username
      },
    });
    if (!user || user.password !== dto.password) {
      throw new Error('Credenciais inválidas');
    }
    return user;
  }
}
