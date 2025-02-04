import React from 'react';
import RecipeList from './RecipeList';
import { Recipe } from '../types';

const RecipesPage: React.FC = () => {
  // Assurez-vous que chaque recette a le champ 'type'
  const sampleRecipes: Recipe[] = [
    {
      "id": 1,
      "title": "Lasagne Maison",
      "description": "Une lasagne maison délicieuse, parfaitement stratifiée avec du fromage doré sur le dessus.",
      "ingredients": [
        "500g de viande hachée de boeuf",
        "12 feuilles de lasagne",
        "800g de tomates concassées",
        "2 oignons", 
        "3 gousses d'ail",
        "200g de mozzarella râpée",
        "100g de parmesan râpé",
        "50g de beurre",
        "50g de farine",
        "500ml de lait",
        "Sel, poivre, basilic frais"
      ],
      "instructions": [
        "Préchauffez le four à 180°C.",
        "Faites revenir les oignons et l'ail hachés dans un peu d'huile d'olive.",
        "Ajoutez la viande hachée et faites cuire jusqu'à ce qu'elle soit dorée.",
        "Ajoutez les tomates concassées, salez, poivrez, et laissez mijoter pendant 30 minutes.",
        "Préparez la béchamel en faisant fondre le beurre dans une casserole, ajoutez la farine et mélangez bien.",
        "Versez le lait petit à petit tout en remuant jusqu'à ce que la sauce épaississe. Salez et poivrez.",
        "Dans un plat à gratin, alternez les couches de feuilles de lasagne, de sauce bolognaise, de béchamel et de fromage râpé.",
        "Terminez par une couche de fromage et enfournez pendant 45 minutes.",
        "Servez chaud, décoré de feuilles de basilic frais."
      ],
      "image": "/images/recipes/url_lasagne.png",
      "preparationTime": "1 heure 30 minutes",
      "type": "plat"
    },
    {
      "id": 2,
      "title": "Salade Caprese",
      "description": "Une salade Caprese fraîche et appétissante composée de tranches de tomates mûres, de mozzarella fraîche et de feuilles de basilic.",
      "ingredients": [
        "4 tomates mûres",
        "250g de mozzarella",
        "1 bouquet de basilic frais",
        "4 cuillères à soupe d'huile d'olive",
        "2 cuillères à soupe de vinaigre balsamique",
        "Sel et poivre"
      ],
      "instructions": [
        "Lavez et tranchez les tomates en rondelles.",
        "Tranchez la mozzarella en rondelles.",
        "Disposez les tranches de tomates et de mozzarella en alternance sur une assiette de service.",
        "Parsemez de feuilles de basilic frais.",
        "Arrosez d'huile d'olive et de vinaigre balsamique.",
        "Salez et poivrez selon votre goût.",
        "Servez immédiatement."
      ],
      "image": "/images/recipes/url_caprese.png",
      "preparationTime": "15 minutes",
      "type": "entrée"
    },
    {
      "id": 3,
      "title": "Gâteau au Chocolat Décadent",
      "description": "Un gâteau au chocolat riche et moelleux, couvert d'une ganache au chocolat brillant et garni de baies fraîches.",
      "ingredients": [
        "200g de chocolat noir",
        "200g de beurre",
        "200g de sucre",
        "5 œufs",
        "100g de farine",
        "1 cuillère à café de levure chimique",
        "200ml de crème liquide",
        "Baies fraîches pour la décoration (fraises, framboises, myrtilles)"
      ],
      "instructions": [
        "Préchauffez le four à 180°C.",
        "Faites fondre le chocolat et le beurre au bain-marie.",
        "Dans un bol, fouettez les œufs et le sucre jusqu'à ce que le mélange blanchisse.",
        "Ajoutez le chocolat fondu au mélange d'œufs et de sucre, puis incorporez la farine et la levure.",
        "Versez la pâte dans un moule à gâteau beurré et fariné, et enfournez pendant 25-30 minutes. Laissez refroidir.",
        "Pour la ganache, faites chauffer la crème liquide et versez-la sur le chocolat haché. Mélangez jusqu'à obtenir une texture lisse et brillante.",
        "Couvrez le gâteau refroidi avec la ganache et décorez avec des baies fraîches.",
        "Servez à température ambiante."
      ],
      "image": "/images/recipes/url_chocolate_cake.png",
      "preparationTime": "1 heure",
      "type": "dessert"
    },
    {
      "id": 4,
      "title": "Poulet Tikka Masala",
      "description": "Un poulet tikka masala épicé et crémeux, avec une sauce tomate riche et aromatique.",
      "ingredients": [
        "500g de poulet",
        "200ml de yaourt",
        "2 cuillères à soupe de pâte de curry tikka masala",
        "400g de tomates concassées",
        "200ml de crème de coco",
        "1 oignon",
        "3 gousses d'ail",
        "1 morceau de gingembre",
        "1 cuillère à soupe de garam masala",
        "1 cuillère à café de cumin",
        "Sel et poivre"
      ],
      "instructions": [
        "Marinez le poulet avec le yaourt et la pâte de curry pendant au moins 30 minutes.",
        "Faites revenir l'oignon, l'ail et le gingembre hachés dans une poêle avec un peu d'huile.",
        "Ajoutez le poulet mariné et faites-le cuire jusqu'à ce qu'il soit doré.",
        "Ajoutez les tomates concassées, les épices, et laissez mijoter pendant 20 minutes.",
        "Incorporez la crème de coco et laissez mijoter encore 10 minutes.",
        "Servez chaud avec du riz basmati."
      ],
      "image": "/images/recipes/url_poulet_tikka.png",
      "preparationTime": "50 minutes",
      "type": "plat"
    },
    {
      "id": 5,
      "title": "Soupe à l'Oignon",
      "description": "Une soupe à l'oignon traditionnelle française, riche et réconfortante, garnie de croûtons et de fromage fondu.",
      "ingredients": [
        "6 gros oignons",
        "2 cuillères à soupe de beurre",
        "1 litre de bouillon de bœuf",
        "200ml de vin blanc",
        "1 baguette",
        "200g de gruyère râpé",
        "Sel et poivre"
      ],
      "instructions": [
        "Émincez les oignons et faites-les revenir dans le beurre jusqu'à ce qu'ils soient dorés et caramélisés.",
        "Ajoutez le vin blanc et laissez réduire.",
        "Ajoutez le bouillon de bœuf, salez et poivrez, et laissez mijoter pendant 30 minutes.",
        "Coupez la baguette en tranches et faites-les griller.",
        "Versez la soupe dans des bols, ajoutez des croûtons et du fromage râpé, et faites gratiner au four jusqu'à ce que le fromage soit fondu et doré.",
        "Servez chaud."
      ],
      "image": "/images/recipes/url_soupe_oignon.png",
      "preparationTime": "1 heure",
      "type": "entrée"
    },
    {
      "id": 6,
      "title": "Crème Brûlée",
      "description": "Une crème brûlée classique, crémeuse et délicieuse, avec une croûte de sucre caramélisé.",
      "ingredients": [
        "500ml de crème liquide",
        "6 jaunes d'œufs",
        "100g de sucre",
        "1 gousse de vanille",
        "Sucre pour caraméliser"
      ],
      "instructions": [
        "Préchauffez le four à 150°C.",
        "Faites chauffer la crème avec la gousse de vanille fendue et grattée.",
        "Fouettez les jaunes d'œufs avec le sucre jusqu'à ce que le mélange blanchisse.",
        "Versez la crème chaude sur le mélange d'œufs en remuant constamment.",
        "Versez la préparation dans des ramequins et faites cuire au bain-marie pendant 45 minutes.",
        "Laissez refroidir puis réfrigérez pendant au moins 2 heures.",
        "Saupoudrez de sucre et caramélisez avec un chalumeau avant de servir."
      ],
      "image": "/images/recipes/url_creme_brulee.png",
      "preparationTime": "1 heure 30 minutes",
      "type": "dessert"
    },
    {
      "id": 7,
      "title": "Curry de Légumes",
      "description": "Un curry de légumes coloré et épicé, parfait pour un repas végétarien.",
      "ingredients": [
        "2 pommes de terre",
        "2 carottes",
        "1 courgette",
        "1 poivron rouge",
        "200g de pois chiches",
        "1 boîte de lait de coco",
        "2 cuillères à soupe de pâte de curry",
        "1 oignon",
        "3 gousses d'ail",
        "1 morceau de gingembre",
        "Sel et poivre"
      ],
      "instructions": [
        "Épluchez et coupez les légumes en morceaux.",
        "Faites revenir l'oignon, l'ail et le gingembre hachés dans une poêle avec un peu d'huile.",
        "Ajoutez la pâte de curry et mélangez bien.",
        "Ajoutez les légumes et faites cuire pendant 10 minutes.",
        "Ajoutez le lait de coco et laissez mijoter pendant 20 minutes.",
        "Ajoutez les pois chiches, salez et poivrez, et laissez mijoter encore 10 minutes.",
        "Servez chaud avec du riz."
      ],
      "image": "/images/recipes/url_curry_legumes.png",
      "preparationTime": "40 minutes",
      "type": "plat"
    },
    {
      "id": 8,
      "title": "Tarte Tatin",
      "description": "Une tarte tatin renversée avec des pommes caramélisées, un classique de la pâtisserie française.",
      "ingredients": [
        "6 pommes",
        "100g de beurre",
        "150g de sucre",
        "1 pâte brisée",
        "1 cuillère à café de cannelle"
      ],
      "instructions": [
        "Préchauffez le four à 180°C.",
        "Épluchez et coupez les pommes en quartiers.",
        "Faites fondre le beurre et le sucre dans une poêle allant au four, jusqu'à obtention d'un caramel.",
        "Disposez les pommes sur le caramel et saupoudrez de cannelle.",
        "Couvrez avec la pâte brisée et enfournez pendant 30 minutes.",
        "Laissez refroidir quelques minutes avant de renverser la tarte sur un plat de service.",
        "Servez tiède."
      ],
      "image": "/images/recipes/url_tarte_tatin.png",
      "preparationTime": "1 heure",
      "type": "dessert"
    },
    {
      "id": 9,
      "title": "Bruschetta Tomate Basilic",
      "description": "Une bruschetta italienne simple et savoureuse, garnie de tomates fraîches et de basilic.",
      "ingredients": [
        "4 tranches de pain",
        "2 tomates",
        "1 gousse d'ail",
        "1 bouquet de basilic frais",
        "4 cuillères à soupe d'huile d'olive",
        "Sel et poivre"
      ],
      "instructions": [
        "Toastez les tranches de pain.",
        "Frottez-les avec la gousse d'ail.",
        "Coupez les tomates en dés et mélangez-les avec l'huile d'olive, le sel et le poivre.",
        "Ajoutez le basilic ciselé.",
        "Disposez le mélange de tomates sur les tranches de pain.",
        "Servez immédiatement."
      ],
      "image": "/images/recipes/url_bruschetta.png",
      "preparationTime": "20 minutes",
      "type": "entrée"
    },
    {
      "id": 10,
      "title": "Risotto aux Champignons",
      "description": "Un risotto crémeux aux champignons, parfait pour un repas réconfortant.",
      "ingredients": [
        "300g de riz arborio",
        "500g de champignons",
        "1 oignon",
        "2 gousses d'ail",
        "1 litre de bouillon de légumes",
        "100g de parmesan râpé",
        "50g de beurre",
        "Sel et poivre"
      ],
      "instructions": [
        "Faites revenir l'oignon et l'ail hachés dans une poêle avec un peu de beurre.",
        "Ajoutez les champignons coupés en tranches et faites cuire jusqu'à ce qu'ils soient dorés.",
        "Ajoutez le riz et faites-le revenir jusqu'à ce qu'il soit translucide.",
        "Ajoutez le bouillon de légumes, une louche à la fois, en remuant constamment jusqu'à absorption complète.",
        "Incorporez le parmesan et le reste du beurre, salez et poivrez.",
        "Servez chaud, parsemé de parmesan râpé."
      ],
      "image": "/images/recipes/url_risotto_champignons.png",
      "preparationTime": "45 minutes",
      "type": "plat"
    },
    {
      "id": 11,
      "title": "Quiche Lorraine",
      "description": "Une quiche lorraine traditionnelle, riche en lardons et en fromage, parfaite pour un repas en famille.",
      "ingredients": [
        "1 pâte brisée",
        "200g de lardons",
        "200g de gruyère râpé",
        "4 œufs",
        "200ml de crème fraîche",
        "200ml de lait",
        "Sel et poivre"
      ],
      "instructions": [
        "Préchauffez le four à 180°C.",
        "Étalez la pâte brisée dans un moule à tarte et piquez le fond avec une fourchette.",
        "Faites revenir les lardons dans une poêle.",
        "Dans un bol, mélangez les œufs, la crème fraîche, le lait, le sel et le poivre.",
        "Disposez les lardons sur le fond de tarte, puis versez le mélange d'œufs par-dessus.",
        "Saupoudrez de gruyère râpé.",
        "Enfournez pendant 30-35 minutes, jusqu'à ce que la quiche soit dorée.",
        "Servez chaud ou froid."
      ],
      "image": "/images/recipes/url_quiche_lorraine.png",
      "preparationTime": "1 heure",
      "type": "plat"
    },
    {
      "id": 12,
      "title": "Soupe de Courgettes et Menthe",
      "description": "Une soupe rafraîchissante à base de courgettes et de menthe, idéale pour une entrée légère.",
      "ingredients": [
        "4 courgettes",
        "1 oignon",
        "1 bouquet de menthe fraîche",
        "1 litre de bouillon de légumes",
        "2 cuillères à soupe de crème fraîche",
        "Sel et poivre"
      ],
      "instructions": [
        "Émincez l'oignon et faites-le revenir dans une casserole avec un peu d'huile d'olive.",
        "Ajoutez les courgettes coupées en morceaux et faites cuire pendant 5 minutes.",
        "Ajoutez le bouillon de légumes et laissez mijoter pendant 20 minutes.",
        "Mixez la soupe jusqu'à obtention d'une texture lisse.",
        "Ajoutez la crème fraîche et la menthe ciselée, salez et poivrez.",
        "Servez chaud."
      ],
      "image": "/images/recipes/url_soupe_courgettes_menthe.png",
      "preparationTime": "30 minutes",
      "type": "entrée"
    },
    {
      "id": 13,
      "title": "Mousse au Chocolat",
      "description": "Une mousse au chocolat légère et aérienne, parfaite pour conclure un repas en beauté.",
      "ingredients": [
        "200g de chocolat noir",
        "6 œufs",
        "1 pincée de sel"
      ],
      "instructions": [
        "Faites fondre le chocolat au bain-marie.",
        "Séparez les blancs des jaunes d'œufs.",
        "Ajoutez les jaunes d'œufs au chocolat fondu et mélangez bien.",
        "Montez les blancs en neige avec une pincée de sel.",
        "Incorporez délicatement les blancs en neige au mélange chocolaté.",
        "Répartissez la mousse dans des verrines et réfrigérez pendant au moins 2 heures.",
        "Servez frais."
      ],
      "image": "/images/recipes/url_mousse_chocolat.png",
      "preparationTime": "15 minutes + 2 heures de réfrigération",
      "type": "dessert"
    },
    {
      "id": 14,
      "title": "Tarte aux Fraises",
      "description": "Une tarte aux fraises fraîche et savoureuse, avec une crème pâtissière onctueuse.",
      "ingredients": [
        "1 pâte sablée",
        "500g de fraises",
        "500ml de lait",
        "4 jaunes d'œufs",
        "100g de sucre",
        "50g de farine",
        "1 gousse de vanille"
      ],
      "instructions": [
        "Préchauffez le four à 180°C.",
        "Étalez la pâte sablée dans un moule à tarte et piquez le fond avec une fourchette.",
        "Faites cuire à blanc pendant 20 minutes.",
        "Faites chauffer le lait avec la gousse de vanille fendue et grattée.",
        "Fouettez les jaunes d'œufs avec le sucre jusqu'à ce que le mélange blanchisse.",
        "Ajoutez la farine puis le lait chaud en remuant constamment.",
        "Remettez la crème sur le feu et faites épaissir sans cesser de remuer.",
        "Laissez refroidir la crème pâtissière avant de la verser sur le fond de tarte.",
        "Disposez les fraises coupées en deux sur la crème.",
        "Réfrigérez pendant 1 heure avant de servir."
      ],
      "image": "/images/recipes/url_tarte_fraises.png",
      "preparationTime": "1 heure",
      "type": "dessert"
    },
    {
      "id": 15,
      "title": "Salade Niçoise",
      "description": "Une salade niçoise classique, colorée et savoureuse, parfaite pour une entrée ou un repas léger.",
      "ingredients": [
        "200g de thon en conserve",
        "4 tomates",
        "1 concombre",
        "100g de haricots verts",
        "2 œufs durs",
        "1 oignon rouge",
        "10 olives noires",
        "1 poivron rouge",
        "1 cuillère à soupe de vinaigre de vin",
        "3 cuillères à soupe d'huile d'olive",
        "Sel et poivre"
      ],
      "instructions": [
        "Lavez et coupez les légumes en morceaux.",
        "Faites cuire les haricots verts à la vapeur pendant 5 minutes.",
        "Écalez les œufs durs et coupez-les en quartiers.",
        "Dans un grand saladier, mélangez tous les ingrédients.",
        "Préparez la vinaigrette en mélangeant le vinaigre, l'huile, le sel et le poivre.",
        "Versez la vinaigrette sur la salade et mélangez délicatement.",
        "Servez frais."
      ],
      "image": "/images/recipes/url_salade_nicoise.png",
      "preparationTime": "30 minutes",
      "type": "entrée"
    }
  ]

  return <RecipeList recipes={sampleRecipes} />;
};

export default RecipesPage;
