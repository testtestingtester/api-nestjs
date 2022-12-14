import {
  Injectable,
  NestMiddleware,
} from '@nestjs/common';

@Injectable()
export class LoggingMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    console.time(`${req.ip}`);

    res.on('finish', () => console.timeEnd(`${req.ip}`));
    next();
  }
}