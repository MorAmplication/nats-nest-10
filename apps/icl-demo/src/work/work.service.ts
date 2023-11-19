import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { WorkServiceBase } from "./base/work.service.base";

@Injectable()
export class WorkService extends WorkServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
