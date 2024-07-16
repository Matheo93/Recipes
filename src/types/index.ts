export interface Recipe {
    id: string;
    title: string;
    description: string;
    ingredients: string[];
    instructions: string[];
    category: string;
    cuisine: string;
    prepTime: number;
    servings: number;
    image: string;
  }