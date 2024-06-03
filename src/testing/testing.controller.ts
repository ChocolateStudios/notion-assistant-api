import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('_Testing')
@Controller('testing')
export class TestingController {

    @Get()
    getHello(): string {
        return 'Hello World je!';
    }
}
