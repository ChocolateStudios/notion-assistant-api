import { Post } from '@nestjs/common';
import { UsersControllerSettings } from './settings/users-controller.settings';
import { ApiExtraModels } from '@nestjs/swagger';
import { UsersService } from '../../../infrastructure/services/users.service';

@ApiExtraModels(UsersControllerSettings)
export class LoginUserController extends UsersControllerSettings {
    constructor(
        private readonly usersService: UsersService,
    ) {
        super();
    }

    @Post('/login')
    async loginUser(): Promise<object> {
        return {lol: 'Siuu!'};
    }
}
