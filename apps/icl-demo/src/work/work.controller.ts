import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { WorkService } from "./work.service";
import { WorkControllerBase } from "./base/work.controller.base";

@swagger.ApiTags("works")
@common.Controller("works")
export class WorkController extends WorkControllerBase {
  constructor(
    protected readonly service: WorkService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
