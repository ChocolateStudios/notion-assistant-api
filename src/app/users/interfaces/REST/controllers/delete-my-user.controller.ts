import { Delete } from '@nestjs/common';
import { UsersControllerSettings } from './settings/users-controller.settings';
import { ApiExtraModels } from '@nestjs/swagger';
import { UsersService } from '../../../infrastructure/services/users.service';

@ApiExtraModels(UsersControllerSettings)
export class DeleteMyUserController extends UsersControllerSettings {
    constructor(
        private readonly usersService: UsersService,
    ) {
        super();
    }

    @Delete()
    async deleteUser(): Promise<object> {
        return {lol: 'Siuu!'};
    }
}
