export type PortfolioItem = {
  id: string;
  title: string;
  image: string; // URL o path
  category: 'destacados' | 'videos';
  description?: string;
};

export const portfolioItems: PortfolioItem[] = [
  {
    id: '1',
    title: 'Ferre Black',
    image: 'https://www.esenciacreativa.net/wp-content/uploads/2018/07/portadas-comerciales-web_Mesa-de-trabajo-1-copia-6-165x260.png',
    category: 'destacados',
    description: 'Spot Herco Ferreblack Sale.',
  },
  {
    id: '2',
    title: 'Orgullosamente Sureño',
    image: 'https://www.esenciacreativa.net/wp-content/uploads/2017/07/GRS_Póster-165x260.png',
    category: 'destacados',
    description: 'Cami Comercial',
  },
  {
    id: '3',
    title: 'Por Honduras, por el Sur',
    image: 'https://www.esenciacreativa.net/wp-content/uploads/2017/07/CCIS2_P%C3%B3ster-165x260.png',
    category: 'destacados',
  },
  {
    id: '4',
    title: 'Cooperativa la Guadalupe',
    image: 'https://www.esenciacreativa.net/wp-content/uploads/2017/07/Cooperativa-la-Guadalupe-165x260.jpg',
    category: 'destacados',
  },
  {
    id: '5',
    title: 'South International School',
    image: 'https://www.esenciacreativa.net/wp-content/uploads/2017/07/SIS_Poster-165x260.png',
    category: 'destacados',
  },
 {
    id: '6',
    title: 'Comercial Ineeles',
    image: 'https://www.esenciacreativa.net/wp-content/uploads/2017/07/INSTITUTO-LA-ESPERANZA-165x260.jpg',
    category: 'destacados',
  },
   {
    id: '7',
    title: 'South International Chool',
    image: 'https://www.esenciacreativa.net/wp-content/uploads/2017/07/south-internacional-165x260.jpg',
    category: 'destacados',
  },
  {
    id: 'v1',
    title: 'Laboratorio Mendez',
    image: 'https://www.esenciacreativa.net/wp-content/uploads/2017/07/LACM_Póster-165x260.png',
    category: 'videos',
  },
  {
    id: 'v2',
    title: 'Sol en Salsa',
    image: 'https://www.esenciacreativa.net/wp-content/uploads/2017/07/Sol_en_Salsa_Póster-165x260.png',
    category: 'videos',
  },
   {
    id: 'v3',
    title: 'Herco Heroes',
    image: 'https://www.esenciacreativa.net/wp-content/uploads/2017/07/Herco2_Póster-165x260.png',
    category: 'videos',
  },
   {
    id: 'v4',
    title: 'Yo me Comprometo',
    image: 'https://www.esenciacreativa.net/wp-content/uploads/2017/07/CCIS_Póster-165x260.png',
    category: 'videos',
  },
   {
    id: 'v5',
    title: 'Comercial Agua Santa Emilia',
    image: 'https://www.esenciacreativa.net/wp-content/uploads/2017/07/Agua-Santa-Emilia-165x260.png',
    category: 'videos',
  },
   {
    id: 'v6',
    title: 'Herco Verano 2020',
    image: 'https://www.esenciacreativa.net/wp-content/uploads/2017/07/Herco_P%C3%B3ster-165x260.png',
    category: 'videos'
  }
  
];
