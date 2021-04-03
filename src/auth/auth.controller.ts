import { Body, Controller, Post, Req, Res, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './strategy/jwt-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async login(@Req() req, @Res() res, @Body() body) {
    const auth = await this.authService.login(body);
    res.status(auth.status).json(auth.msg);
  }

  @UseGuards(JwtAuthGuard)
  @Post('register')
  async register(@Req() req, @Res() res, @Body() body) {
    const auth = await this.authService.createUser(body);
    res.status(auth.status).json(auth.content);
  }
}
