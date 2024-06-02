import { Controller, Get } from '@nestjs/common';

@Controller('testing')
export class TestingController {

    @Get()
    getHello(): string {
        return 'Hello World je!';
    }
}
