import { Injectable } from '@nestjs/common';
import { CreateTestimonialDto } from './dto/create-testimonial.dto';

@Injectable()
export class TestimonialsService {
  private testimonials: CreateTestimonialDto[] = [
    {
      name: 'Sarah Johnson',
      title: 'Senior Developer',
      quote: 'An exceptional developer who consistently delivers high-quality work. Their attention to detail and problem-solving skills are outstanding.',
      imageUrl: 'https://placehold.co/400x400?text=Sarah+Johnson'
    },
    {
      name: 'Michael Chen',
      title: 'Project Manager',
      quote: 'Working with this developer has been a pleasure. They are reliable, communicative, and always meet deadlines with excellent results.',
      imageUrl: 'https://placehold.co/400x400?text=Michael+Chen'
    }
  ];

  findAll(): CreateTestimonialDto[] {
    return this.testimonials;
  }

  create(createTestimonialDto: CreateTestimonialDto): CreateTestimonialDto {
    this.testimonials.push(createTestimonialDto);
    return createTestimonialDto;
  }

  findOne(index: number): CreateTestimonialDto {
    return this.testimonials[index];
  }

  update(index: number, updateTestimonialDto: CreateTestimonialDto): CreateTestimonialDto {
    this.testimonials[index] = updateTestimonialDto;
    return updateTestimonialDto;
  }

  remove(index: number): void {
    this.testimonials.splice(index, 1);
  }
} 