import { Injectable } from "@nestjs/common";
import { CommandBus } from "@nestjs/cqrs";
import { Result } from "typescript-result";
import { SaveUserResource } from "../../interfaces/REST/resources/save-user.resource";
import { AppNotification } from "../../../../_common/application/exceptions/app-notification";
import { UserResource } from "../../interfaces/REST/resources/user.resource";
import { RegisterUserCommand } from "../../domain/models/commands/register-user.command";

@Injectable()
export class UsersService {

    constructor(
        private _commandBus: CommandBus,
    ) { }

    async register(
        saveUserResource: SaveUserResource
    ): Promise<Result<AppNotification, UserResource>> {
        const registerUserCommand: RegisterUserCommand = new RegisterUserCommand(
            saveUserResource.username,
            saveUserResource.email,
            saveUserResource.password
        );

        const resource: UserResource = await this._commandBus.execute(registerUserCommand);
        return Result.ok(resource);
    }

}