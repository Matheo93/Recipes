// src/types/index.ts
// src/types.ts

export interface Recipe {
  id: number;
  title: string;
  description: string;
  ingredients: string[];
  instructions: string[];
  image: string;
  preparationTime: string;
  type: string;
  isFavorite?: boolean;
}


export interface RecipeFilterProps {
  selectedType: string;
  onTypeChange: (type: string) => void;
}

export interface RecipeListProps {
  recipes: Recipe[];
}
