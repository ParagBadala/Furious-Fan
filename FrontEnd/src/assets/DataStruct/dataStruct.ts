export interface User{
    name:string;
    loggedInStatus:string;
}

export interface Movie {
    id: number | null;
    approvalRating: number | null;
    description: string;
    director: string;
    imageurl: string;
    mpaa: string;
    price: number | null;
    releaseDate: string;
    starRating: number | null;
    title: string;
    category: string;
    tags?: string[];
  }

  export class Poster{
      display:boolean=true;
  }
  