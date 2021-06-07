
export interface RequestQueryItem {
  key: string;
  value: string | number;
}

export interface MovieResponse {
    page: number;
    total_results: number;
    total_pages: number;
    results: Array<Media>;
}

export interface Media {
  id: number;
  title: string;
  vote_count: number;
  vote_average: number;
  release_date: string;
  original_language: string;
  original_title: string;
  backdrop_path: string;
  adult: boolean;
  overview: string;
  poster_path: string;
  popularity: number;
  genre: Array<number>;
}

export interface ConfigurationResponse {
    images: Configuration;
}

export interface Configuration {
    base_url: string;
    secure_base_url: string;
    backdrop_sizes: Array<string>;
    logo_sizes: Array<string>;
    poster_sizes: Array<string>;
    profile_sizes: Array<string>;
    still_sizes: Array<string>;
}

export interface Genre {
  id: number;
  name: string;
}

export interface GenreResponse {
    genres: Array<Genre>;
}

export interface ProductionCompany {
    id: number;
    name: string;
    logo_path: string|null;
    origin_country: string;
}

export interface MovieDetails {
    adult: boolean;
    backdrop_path: string|null;
    budget: number;
    genres: Array<Genre>;
    homepage: string|null;
    overview: string|null;
    release_date: string;
    popularity: number;
    revenue: number;
    runtime: number|null;
    production_companies: Array<ProductionCompany>;
    title: string;
    video: boolean;
    status: string;
    vote_average: number;
    vote_count: number
}
