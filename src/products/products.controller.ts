import { Controller, Get, Req, Query, Headers, HttpCode } from '@nestjs/common';
import { Request } from 'express';

@Controller('products')
export class ProductsController {
  @Get('/all')
  @HttpCode(215)
  FindAll(@Req() request: Request, @Query() query, @Headers() headers): any {
    // const a = {};
    // console.log(request);
    const a = headers;
    console.log(query);
    return a;
  }
}
