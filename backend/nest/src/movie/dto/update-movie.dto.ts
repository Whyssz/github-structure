import { IsArray, IsNumber, IsObject, IsString } from 'class-validator';

class Parameters {
	@IsNumber()
	year: number;

	@IsNumber()
	duration: number;

	@IsString()
	country: string;
}

export class UpdateMovieDto {
	@IsString()
	poster: string;

	@IsString()
	bigPoster: string;

	@IsString()
	title: string;

	@IsString()
	slug: string;

	@IsString()
	videoUrl: string;

	@IsObject()
	parameters?: Parameters;

	@IsArray()
	@IsString({ each: true })
	genres: string[];

	@IsArray()
	@IsString({ each: true })
	actors: string[];

	isSendTelegram?: boolean;
}
