export interface VallaPunto {
  id: string;
  nombre: string;
  ubicacion: string;
  zona: string;
  descripcion: string;
  medidas: string;
  estructura: string;
  trafico: string;
  disponible: boolean;
  googleMapsUrl: string;
  fotos: {src: string;alt: string;angulo: string;}[];
}

export const vallasData: VallaPunto[] = [
{
  id: 'valla-01',
  nombre: 'Entrada Norte Choluteca',
  ubicacion: 'Carretera Panamericana Norte, Choluteca',
  zona: 'Acceso principal desde Tegucigalpa',
  descripcion:
  'Ubicada en la entrada norte de la ciudad, sobre la Carretera Panamericana. Alto flujo vehicular de tránsito interurbano e ingreso a la ciudad. Visible desde ambos sentidos de la vía.',
  medidas: '8m × 4m',
  estructura: 'Estructura metálica unipolar de 10m de altura',
  trafico: 'Aprox. 15,000 vehículos/día',
  disponible: true,
  googleMapsUrl: 'https://maps.google.com/?q=Carretera+Panamericana+Norte,+Choluteca,+Honduras',
  fotos: [
  {
    src: "https://images.unsplash.com/photo-1560165154-ec51da659d03",
    alt: 'Valla publicitaria en carretera principal con tráfico vehicular intenso y vegetación tropical a los lados',
    angulo: 'Vista frontal'
  },
  {
    src: "https://images.unsplash.com/photo-1713369825112-cbfea7c75cec",
    alt: 'Vista lateral de valla publicitaria grande en avenida con cielo despejado y edificios al fondo',
    angulo: 'Vista lateral'
  }]

},
{
  id: 'valla-02',
  nombre: 'Boulevard del Centro',
  ubicacion: 'Boulevard Morazán, Centro de Choluteca',
  zona: 'Zona comercial y bancaria central',
  descripcion:
  'Posicionada en el boulevard principal del centro de Choluteca, frente a la zona bancaria y comercial. Máxima exposición a peatones y conductores en el corazón de la ciudad.',
  medidas: '6m × 3m',
  estructura: 'Estructura metálica bipolar con iluminación nocturna LED',
  trafico: 'Aprox. 20,000 personas/día (peatonal + vehicular)',
  disponible: true,
  googleMapsUrl: 'https://maps.google.com/?q=Boulevard+Morazán,+Choluteca,+Honduras',
  fotos: [
  {
    src: "https://images.unsplash.com/photo-1547399859-aafd4ff915a1",
    alt: 'Vista aérea de boulevard urbano con tráfico y edificios comerciales en ciudad centroamericana',
    angulo: 'Vista aérea'
  },
  {
    src: "https://images.unsplash.com/photo-1731338634914-a22509394cf2",
    alt: 'Calle comercial de ciudad con tráfico y vallas publicitarias iluminadas en zona bancaria',
    angulo: 'Vista nocturna'
  }]

},
{
  id: 'valla-03',
  nombre: 'Salida Sur — San Marcos',
  ubicacion: 'Carretera hacia San Marcos de Colón, Choluteca',
  zona: 'Salida sur hacia San Marcos y El Salvador',
  descripcion:
  'Estratégicamente ubicada en la salida sur de Choluteca hacia San Marcos de Colón y la frontera con El Salvador. Captura el tráfico de transporte pesado, turistas y viajeros internacionales.',
  medidas: '10m × 5m',
  estructura: 'Estructura metálica unipolar reforzada de 12m',
  trafico: 'Aprox. 8,000 vehículos/día incluyendo transporte pesado',
  disponible: true,
  googleMapsUrl: 'https://maps.google.com/?q=Carretera+San+Marcos+de+Colón,+Choluteca,+Honduras',
  fotos: [
  {
    src: "https://images.unsplash.com/photo-1727675895617-30f75b45ee62",
    alt: 'Carretera interurbana con valla publicitaria grande en zona semiurbana con vegetación tropical',
    angulo: 'Vista frontal carretera'
  },
  {
    src: "https://images.unsplash.com/photo-1549433466-6872d51dd47b",
    alt: 'Carretera recta al atardecer con palmeras y valla publicitaria visible desde lejos',
    angulo: 'Vista de aproximación'
  }]

},
{
  id: 'valla-04',
  nombre: 'Zona Industrial El Corpus',
  ubicacion: 'Acceso a Zona Industrial, El Corpus, Choluteca',
  zona: 'Zona industrial y de bodegas',
  descripcion:
  'Ubicada en el acceso principal a la zona industrial de Choluteca. Alta exposición a empresas, transportistas y trabajadores de la zona. Ideal para marcas B2B, ferretería y servicios industriales.',
  medidas: '8m × 3.5m',
  estructura: 'Estructura metálica bipolar con base de concreto',
  trafico: 'Aprox. 5,000 vehículos/día (predomina transporte de carga)',
  disponible: false,
  googleMapsUrl: 'https://maps.google.com/?q=El+Corpus,+Choluteca,+Honduras',
  fotos: [
  {
    src: "https://img.rocket.new/generatedImages/rocket_gen_img_142e81722-1766743937827.png",
    alt: 'Zona industrial con bodegas y almacenes al fondo, carretera de acceso con señalización',
    angulo: 'Vista de zona'
  },
  {
    src: "https://images.unsplash.com/photo-1644838543219-3340e86580ce",
    alt: 'Valla publicitaria metálica en zona industrial con estructuras de metal y cielo gris',
    angulo: 'Vista estructura'
  }]

},
{
  id: 'valla-05',
  nombre: 'Mercado Central Choluteca',
  ubicacion: 'Av. Principal frente al Mercado Central, Choluteca',
  zona: 'Zona comercial popular y mercado central',
  descripcion:
  'Frente al Mercado Central de Choluteca, una de las zonas de mayor afluencia popular de la ciudad. Exposición masiva a compradores, comerciantes y peatones durante todo el día.',
  medidas: '5m × 2.5m',
  estructura: 'Estructura metálica adosada a pared con iluminación',
  trafico: 'Aprox. 25,000 personas/día (zona peatonal alta)',
  disponible: true,
  googleMapsUrl: 'https://maps.google.com/?q=Mercado+Central,+Choluteca,+Honduras',
  fotos: [
  {
    src: "https://img.rocket.new/generatedImages/rocket_gen_img_17e4dfd10-1783521696108.png",
    alt: 'Mercado popular centroamericano con toldos coloridos y gran afluencia de personas comprando',
    angulo: 'Vista zona mercado'
  },
  {
    src: "https://images.unsplash.com/photo-1690484815747-79b87f251a0d",
    alt: 'Calle peatonal comercial con vendedores y compradores en zona de mercado tradicional',
    angulo: 'Vista peatonal'
  }]

},
{
  id: 'valla-06',
  nombre: 'Rotonda Universitaria',
  ubicacion: 'Rotonda UNAH-TEC, Choluteca',
  zona: 'Zona universitaria y residencial',
  descripcion:
  'Ubicada en la rotonda principal frente a la UNAH-TEC Choluteca. Alta visibilidad para estudiantes, docentes y residentes de colonias aledañas. Zona en crecimiento con alto nivel socioeconómico.',
  medidas: '7m × 3.5m',
  estructura: 'Estructura metálica unipolar de 8m en rotonda',
  trafico: 'Aprox. 12,000 vehículos/día',
  disponible: true,
  googleMapsUrl: 'https://maps.google.com/?q=UNAH-TEC+Choluteca,+Honduras',
  fotos: [
  {
    src: "https://img.rocket.new/generatedImages/rocket_gen_img_1f998aa3d-1774866821729.png",
    alt: 'Campus universitario moderno con estudiantes caminando y edificios académicos al fondo',
    angulo: 'Vista zona universitaria'
  },
  {
    src: "https://img.rocket.new/generatedImages/rocket_gen_img_134085e6b-1786979696279.png",
    alt: 'Rotonda vehicular con jardín central y vías de acceso en zona residencial moderna',
    angulo: 'Vista rotonda'
  }]

}];