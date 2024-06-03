import { Post, Body, Res } from '@nestjs/common';
import { Result } from 'typescript-result';
import { ApiExtraModels } from '@nestjs/swagger';
import { UsersService } from '../../../infrastructure/services/users.service';
import { SaveUserResource } from '../resources/save-user.resource';
import { AppNotification } from '../../../../../_common/application/exceptions/app-notification';
import { UserResource } from '../resources/user.resource';
import { ApiController } from '../../../../../_common/interfaces/api.controller';
import { UsersControllerSettings } from './settings/users-controller.settings';

@ApiExtraModels(UsersControllerSettings)
export class RegisterUserController extends UsersControllerSettings {
    constructor(
        private readonly usersService: UsersService,
    ) {
        super();
    }

    @Post('/register')
    async registerUser(
        @Body() saveUserResource: SaveUserResource,
        @Res({ passthrough: true }) response,
    ): Promise<object> {
        try {
            const result: Result<AppNotification, UserResource> = await this.usersService.register(saveUserResource);
            if (result.isSuccess()) {
                return ApiController.created(response, result.value);
            }
            return ApiController.error(response, result.error.getErrors());
        } catch (error) {
            return ApiController.serverError(response, error);
        }
    }
}