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
import { Slider } from "./Slider";
import { SliderCountArgs } from "./SliderCountArgs";
import { SliderFindManyArgs } from "./SliderFindManyArgs";
import { SliderFindUniqueArgs } from "./SliderFindUniqueArgs";
import { CreateSliderArgs } from "./CreateSliderArgs";
import { UpdateSliderArgs } from "./UpdateSliderArgs";
import { DeleteSliderArgs } from "./DeleteSliderArgs";
import { SliderService } from "../slider.service";
@graphql.Resolver(() => Slider)
export class SliderResolverBase {
  constructor(protected readonly service: SliderService) {}

  async _slidersMeta(
    @graphql.Args() args: SliderCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Slider])
  async sliders(@graphql.Args() args: SliderFindManyArgs): Promise<Slider[]> {
    return this.service.sliders(args);
  }

  @graphql.Query(() => Slider, { nullable: true })
  async slider(
    @graphql.Args() args: SliderFindUniqueArgs
  ): Promise<Slider | null> {
    const result = await this.service.slider(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Slider)
  async createSlider(@graphql.Args() args: CreateSliderArgs): Promise<Slider> {
    return await this.service.createSlider({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Slider)
  async updateSlider(
    @graphql.Args() args: UpdateSliderArgs
  ): Promise<Slider | null> {
    try {
      return await this.service.updateSlider({
        ...args,
        data: args.data,
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

  @graphql.Mutation(() => Slider)
  async deleteSlider(
    @graphql.Args() args: DeleteSliderArgs
  ): Promise<Slider | null> {
    try {
      return await this.service.deleteSlider(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
