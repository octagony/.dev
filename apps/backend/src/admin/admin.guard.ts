import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';
import { jwtDecrypt } from 'jose';
import { hkdfSync } from 'node:crypto';

@Injectable()
export class AdminGuard implements CanActivate {
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const authHeader: string | undefined = request.headers.authorization;

    if (!authHeader?.startsWith('Bearer ')) {
      throw new UnauthorizedException('No token authorization');
    }

    const token = authHeader.slice(7);
    const secret = process.env.NEXTAUTH_SECRET;

    if (!secret) {
      throw new UnauthorizedException('NEXTAUTH_SECRET not provided');
    }

    try {
      const derivedKey = new Uint8Array(
        hkdfSync(
          'sha256', 
          secret, 
          '',
          'NextAuth.js Generated Encryption Key',
          32 
        )
      );

      const { payload } = await jwtDecrypt(token, derivedKey);

      if (payload.email !== process.env.ADMIN_EMAIL) {
        throw new UnauthorizedException('Unknown email');
      }

      request.user = payload;
      return true;
    } catch (err) {
      throw new UnauthorizedException('Unauthorized token');
    }
  }
}