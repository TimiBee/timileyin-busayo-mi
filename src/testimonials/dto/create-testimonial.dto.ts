import { IsString, IsNotEmpty, IsUrl, IsOptional } from 'class-validator';

export class CreateTestimonialDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  quote: string;

  @IsUrl()
  @IsOptional()
  imageUrl?: string;
} 