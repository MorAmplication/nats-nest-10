/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Work } from "@prisma/client";

export class WorkServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.WorkCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.WorkCountArgs>
  ): Promise<number> {
    return this.prisma.work.count(args);
  }

  async findMany<T extends Prisma.WorkFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.WorkFindManyArgs>
  ): Promise<Work[]> {
    return this.prisma.work.findMany(args);
  }
  async findOne<T extends Prisma.WorkFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.WorkFindUniqueArgs>
  ): Promise<Work | null> {
    return this.prisma.work.findUnique(args);
  }
  async create<T extends Prisma.WorkCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.WorkCreateArgs>
  ): Promise<Work> {
    return this.prisma.work.create<T>(args);
  }
  async update<T extends Prisma.WorkUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.WorkUpdateArgs>
  ): Promise<Work> {
    return this.prisma.work.update<T>(args);
  }
  async delete<T extends Prisma.WorkDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.WorkDeleteArgs>
  ): Promise<Work> {
    return this.prisma.work.delete(args);
  }
}
