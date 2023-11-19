/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { CreateWorkArgs } from "./CreateWorkArgs";
import { UpdateWorkArgs } from "./UpdateWorkArgs";
import { DeleteWorkArgs } from "./DeleteWorkArgs";
import { WorkCountArgs } from "./WorkCountArgs";
import { WorkFindManyArgs } from "./WorkFindManyArgs";
import { WorkFindUniqueArgs } from "./WorkFindUniqueArgs";
import { Work } from "./Work";
import { Product } from "../../product/base/Product";
import { WorkService } from "../work.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Work)
export class WorkResolverBase {
  constructor(
    protected readonly service: WorkService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Work",
    action: "read",
    possession: "any",
  })
  async _worksMeta(
    @graphql.Args() args: WorkCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Work])
  @nestAccessControl.UseRoles({
    resource: "Work",
    action: "read",
    possession: "any",
  })
  async works(@graphql.Args() args: WorkFindManyArgs): Promise<Work[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Work, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Work",
    action: "read",
    possession: "own",
  })
  async work(@graphql.Args() args: WorkFindUniqueArgs): Promise<Work | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Work)
  @nestAccessControl.UseRoles({
    resource: "Work",
    action: "create",
    possession: "any",
  })
  async createWork(@graphql.Args() args: CreateWorkArgs): Promise<Work> {
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        product: args.data.product
          ? {
              connect: args.data.product,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Work)
  @nestAccessControl.UseRoles({
    resource: "Work",
    action: "update",
    possession: "any",
  })
  async updateWork(@graphql.Args() args: UpdateWorkArgs): Promise<Work | null> {
    try {
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          product: args.data.product
            ? {
                connect: args.data.product,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Work)
  @nestAccessControl.UseRoles({
    resource: "Work",
    action: "delete",
    possession: "any",
  })
  async deleteWork(@graphql.Args() args: DeleteWorkArgs): Promise<Work | null> {
    try {
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Product, {
    nullable: true,
    name: "product",
  })
  @nestAccessControl.UseRoles({
    resource: "Product",
    action: "read",
    possession: "any",
  })
  async resolveFieldProduct(
    @graphql.Parent() parent: Work
  ): Promise<Product | null> {
    const result = await this.service.getProduct(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
