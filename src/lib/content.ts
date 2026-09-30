import type { Category, Product } from "@/types/content";

export const INSTAGRAM_HANDLE = "@victoriacandlee";
export const INSTAGRAM_URL = "https://www.instagram.com/victoriacandlee/";

export const NAV_ITEMS = [
  { label: "Velas", href: "#colecao" },
  { label: "Wax Melts", href: "#categorias" },
  { label: "Car Diffuser", href: "#categorias" },
  { label: "Signature", href: "#signature" },
  { label: "O Ateliê", href: "#atelie" },
  { label: "Presentes", href: "#presentes" },
] as const;

export const PRODUCTS: Product[] = [
  {
    slug: "signature",
    name: "Signature",
    type: "Vela aromática",
    notes: "Capim-limão & manjericão",
    image: "/images/signature-rotulo.jpg",
    alt: "Vela Signature com rótulo verde e tampa dourada",
    badge: "Assinatura",
  },
  {
    slug: "lavanda",
    name: "Lavanda",
    type: "Vela aromática",
    notes: "Notas de lavanda",
    image: "/images/lavanda-ritual.jpg",
    alt: "Vela aromática Lavanda em copo de vidro",
  },
  {
    slug: "pomar",
    name: "Pomar",
    type: "Wax melt",
    notes: "Pera, flor de caju & pêssego",
    image: "/images/pomar-wax-melt.jpg",
    alt: "Wax melt Pomar cercado de peras, pêssegos e caju",
    badge: "Novo",
  },
  {
    slug: "orvalho",
    name: "Orvalho",
    type: "Wax melt",
    notes: "Flor de sal, lírio-do-vale & flor de algodão",
    image: "/images/orvalho-wax-melt.jpg",
    alt: "Wax melt Orvalho com lírio-do-vale, sal e flor de algodão",
    badge: "Novo",
  },
  {
    slug: "car-diffuser",
    name: "Sinta o caminho",
    type: "Car diffuser",
    notes: "Aromatizador para carro",
    image: "/images/car-diffuser.jpg",
    alt: "Aromatizador de carro Victoria Candle com limão e coco",
  },
];

export const CATEGORIES: Category[] = [
  {
    title: "Velas Aromáticas",
    description: "Pavio de madeira e fragrâncias marcantes que transformam o ambiente.",
    image: "/images/lavanda-ritual.jpg",
    alt: "Vela aromática Lavanda em copo de vidro",
  },
  {
    title: "Wax Melts",
    description: "Ceras aromatizadas para o seu rechaud, sem chama.",
    image: "/images/orvalho-wax-melt.jpg",
    alt: "Wax melt Orvalho",
  },
  {
    title: "Car Diffuser",
    description: "Leve o seu perfume favorito para cada trajeto.",
    image: "/images/car-diffuser.jpg",
    alt: "Aromatizador de carro Victoria Candle",
  },
];

export const ATELIER_STEPS = [
  {
    number: "01",
    title: "A cera",
    text: "Derretida lentamente, na temperatura certa para receber a fragrância.",
    image: "/images/cera-derretendo.jpg",
    alt: "Cera sendo derretida no ateliê",
  },
  {
    number: "02",
    title: "O pavio",
    text: "Pavios de madeira fixados um a um, para uma queima suave e crepitante.",
    image: "/images/pavios.jpg",
    alt: "Copos de vidro com pavios de madeira",
  },
  {
    number: "03",
    title: "O envase",
    text: "Cada vela é envasada à mão e descansa até atingir sua forma perfeita.",
    image: "/images/envase.jpg",
    alt: "Cera aromática sendo envasada nos copos",
  },
] as const;

export const SERVICES = [
  {
    title: "Feito à mão",
    text: "Cada peça é produzida artesanalmente, em pequenos lotes, no nosso ateliê.",
  },
  {
    title: "Embalagem para presente",
    text: "Saquinhos de veludo e acabamentos pensados para encantar quem recebe.",
  },
  {
    title: "Atendimento personalizado",
    text: "Fale com a gente pelo Instagram para encomendas, presentes e eventos.",
  },
] as const;
