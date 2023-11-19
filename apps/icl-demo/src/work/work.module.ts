import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { WorkModuleBase } from "./base/work.module.base";
import { WorkService } from "./work.service";
import { WorkController } from "./work.controller";
import { WorkResolver } from "./work.resolver";

@Module({
  imports: [WorkModuleBase, forwardRef(() => AuthModule)],
  controllers: [WorkController],
  providers: [WorkService, WorkResolver],
  exports: [WorkService],
})
export class WorkModule {}
