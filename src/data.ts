import { images } from "./constants";

interface linkTypes {
  title: string;
  url: string;
}

export const links: linkTypes[] = [
  { title: "home", url: "/" },
  { title: "marketplace", url: "/marketplace" },
  { title: "auction", url: "/auction" },
  { title: "drop", url: "/drop" },
];

export const footerExtraLinks: linkTypes[] = [
  { title: "blog", url: "/" },
  { title: "wallet", url: "/" },
  { title: "rates", url: "/" },
  { title: "high bids", url: "/" },
];

export const categories: string[] = [
  "editorials",
  "fashion",
  "optics",
  "art & musuem",
  "nature",
];

interface productType {
  name: string;
  price: number;
  image: string;
  description: string;
}

export const productsHome: productType[] = [
  {
    name: "The Boolean Egyptian",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor pur",
    price: 3.9,
    image: images.product01,
  },
  {
    name: "The Boolean Egyptian",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor pur",
    price: 3.9,
    image: images.product02,
  },
  {
    name: "The Boolean Egyptian",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor pur",
    price: 3.9,
    image: images.product03,
  },
];

export const marketplace: productType[] = [
  {
    name: "philomena ‘22",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor pur",
    price: 3.9,
    image: images.product02,
  },
  {
    name: "boolean egyptian",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor pur",
    price: 3.9,
    image: images.product01,
  },
  {
    name: "blanc",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor pur",
    price: 3.9,
    image: images.product03,
  },
  {
    name: "ellipsia",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor pur",
    price: 3.9,
    image: images.product03,
  },
  {
    name: "the lawmakers",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor pur",
    price: 3.9,
    image: images.product01,
  },
  {
    name: "veil",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor pur",
    price: 3.9,
    image: images.product02,
  },
  {
    name: "alternating",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor pur",
    price: 3.9,
    image: images.product01,
  },
  {
    name: "rosemary ‘22",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor pur",
    price: 3.9,
    image: images.product02,
  },
  {
    name: "beverly",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor pur",
    price: 3.9,
    image: images.product03,
  },
];

export const cartItems: productType[] = [
  {
    name: "alternating",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor pur",
    price: 3.9,
    image: images.product01,
  },
  {
    name: "rosemary ‘22",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor pur",
    price: 3.9,
    image: images.product01,
  },
  {
    name: "beverly",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor pur",
    price: 3.9,
    image: images.product01,
  },
];

interface tabsType {
  title: string;
  text: string;
}

export const tabs: tabsType[] = [
  {
    title: "Editorials",
    text: `“Everything always looked better in black and white. Everything always
  as if it were the first time; there’s always more people in a black
  and white photograph. It just makes it seem that there were more
  people at a gig, more people at a football match, than with colour
  photography. Everything looks more exciting.”– Jack Lowden`,
  },
  {
    title: "Fashion",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, ullam labore. Error voluptatibus voluptate numquam dignissimos doloribus libero nesciunt, rerum beatae sit exercitationem nulla reprehenderit repellendus consequatur, quisquam corrupti labore. Quas sequi ipsum porro autem pariatur, beatae assumenda cumque molestias atque inventore sed laborum praesentium suscipit doloremque? Hic, minima ipsum?",
  },
  {
    title: "Lifestyle",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, asperiores at quibusdam quo distinctio autem nemo minus dolore et nulla eum, beatae voluptatem tempora facilis dolorum molestias. Aliquid, placeat. Dolor, ad. Aperiam suscipit incidunt fugiat itaque illum voluptatum dolorum rerum quidem quam, quaerat quos reprehenderit provident inventore, expedita ab quia!",
  },
  {
    title: "Blueprint",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi id doloribus qui pariatur, adipisci delectus aliquid neque, velit expedita sit quia? Illum deserunt ullam fuga, ipsa nam at dolorem animi, quam rem quibusdam amet soluta adipisci expedita. Quam laudantium aperiam molestias id nihil, incidunt quae eos aut dolore, consectetur quisquam.",
  },
];

enum dropStatus {
  "upcoming" = "upcoming",
  "live_now" = "live now",
  "ended" = "ended",
}

enum dropStatusColor {
  "upcoming" = "#4693ED",
  "live_now" = "#3EA03B",
  "ended" = "#999EA5",
}

interface dropType {
  name: string;
  description: string;
  creator: string;
  status: dropStatus;
  statusColor: dropStatusColor;
  image: string;
}

export const dropsData: dropType[] = [
  {
    name: "Eyo : Eko For Show",
    description:
      "Lorem ipsum dolor sit amet consectetur. Amet odio a aenean quis vitae tempus. Sed nunc tempus aliquet lectus ut vulputate.",
    creator: "Aliya Minat",
    status: dropStatus.upcoming,
    statusColor: dropStatusColor.upcoming,
    image: images.drop01,
  },
  {
    name: "Ginger Suburbs",
    description:
      "Lorem ipsum dolor sit amet consectetur. Amet odio a aenean quis vitae tempus. Sed nunc tempus aliquet lectus ut vulputate.",
    creator: "Tina Benson",
    status: dropStatus.live_now,
    statusColor: dropStatusColor.live_now,
    image: images.drop02,
  },
  {
    name: "Sink",
    description:
      "Lorem ipsum dolor sit amet consectetur. Amet odio a aenean quis vitae tempus. Sed nunc tempus aliquet lectus ut vulputate.",
    creator: "Aliya Minat",
    status: dropStatus.ended,
    statusColor: dropStatusColor.ended,
    image: images.drop03,
  },
  {
    name: "Warped ‘99",
    description:
      "Lorem ipsum dolor sit amet consectetur. Amet odio a aenean quis vitae tempus. Sed nunc tempus aliquet lectus ut vulputate.",
    creator: "Aliya Minat",
    status: dropStatus.ended,
    statusColor: dropStatusColor.ended,
    image: images.drop04,
  },
];
