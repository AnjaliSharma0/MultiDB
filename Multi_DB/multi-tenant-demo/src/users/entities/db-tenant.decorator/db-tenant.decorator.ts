import {
  createParamDecorator,
  ExecutionContext,
  BadRequestException,
} from '@nestjs/common';

export const Tenant = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {

    const request = ctx.switchToHttp().getRequest();

    const tenant = request.headers['x-tenant-id'];

    if (!tenant) {
      throw new BadRequestException(
        'x-tenant-id header is required',
      );
    }

    return tenant;
  },
);