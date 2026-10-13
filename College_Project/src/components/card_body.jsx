
import React, { useState } from "react";
import { Search } from "lucide-react";

const menuData = {
  Snacks: [
    {
      id: 1,
      name: "French Fries",
      price: 50,
      type: "Veg",
      image:
      "https://images.unsplash.com/photo-1768215610440-fcb96https://media.istockphoto.com/id/1160637981/photo/homemade-double-chocolate-brownies-isolated-on-a-white-background.jpg?s=612x612&w=0&k=20&c=uZTLiAOqatPVij_BDTUzfoA96937-53cCE7FnamqoFU=31c7ee2?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
    },
    {
      id: 2,
      name: "Burger",
      price: 80,
      type: "Veg",
      image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
    },
    {
      id: 3,
      name: "Sandwich",
      price: 60,
      type: "Veg",
      image:
        "https://media.istockphoto.com/id/1328011797/photo/veg-grilled-sandwich.jpg?s=612x612&w=0&k=20&c=ypz6qjTqrrnl7jUSYgpjkMkStVicxTpwpJXbDxJS5XI=",
    },
    {
      id: 4,
      name: "Pizza",
      price: 120,
      type: "Veg",
      image:
        "https://media.istockphoto.com/id/1303119992/photo/pizza_margerita.jpg?s=612x612&w=0&k=20&c=0HZZMC10ySBYvMVAKUNzknkQ1E74q8NKwTV5_K6WK6M=",
    },
    {
      id: 5,
      name: "Nachos",
      price: 70,
      image: "https://media.istockphoto.com/id/474048190/photo/nachos-supreme.jpg?s=612x612&w=0&k=20&c=CWnaGAVNGeF8sOF92BuZz7iM_JVBdfgO4TmPNokWcIg="
    },
    {
      id: 6,
      name: "Onion Pakoda",
      price: 55,
      image: "https://media.istockphoto.com/id/177314242/photo/vegetable-pakora.jpg?s=612x612&w=0&k=20&c=iiVKreSzqvNN7UxGaDUw3HKU5jK-htT1DppUA89QtyE="
    },
    {
      id: 7,
      name: "Khaman Dhokla",
      price: 50,
      image: "https://media.istockphoto.com/id/513952576/photo/dhokla-indian-food.jpg?s=612x612&w=0&k=20&c=Vu4MISsQyfBgCy54Ju_vlDIuhaSzmfzhE9jC7LiD_yY="
    },
    {
      id: 8,
      name: "Bhel Puri",
      price: 20,
      image: "https://media.istockphoto.com/id/2075152539/photo/tasty-bhelpuri-is-a-savoury-snack-or-chaat-it-is-made-out-of-puffed-rice-vegetables-and-a.jpg?s=612x612&w=0&k=20&c=A-24HiNYIwW2UCwj5sIfWEQatE0gb4coxuuy6zEtxWU="
    },
    {
    id: 9,
    name: "Samosa",
    price: 15,
    image: "https://media.istockphoto.com/id/1400083547/photo/fried-samosas-with-vegetable-filling-popular-indian-snacks-on-wooden-board.jpg?s=612x612&w=0&k=20&c=D1hB9hf5xdxiFkqgpE4BJ5kmLcSyUnUuVqKoAHg0jWU="
  },
  {
    id: 10,
    name: "Aloo Tikki",
    price: 30,
    image: "https://media.istockphoto.com/id/1204866803/photo/indian-potato-patties-aloo-tikki-served-with-yogurt-close-up-in-a-dish-horizontal-top-view.jpg?s=612x612&w=0&k=20&c=G7VRISuqTrUi_1D6O_EtjH2b1VH6H2yR-D9HKD7ro9s="
  },
  {
    id: 11,
    name: "Pani Puri",
    price: 25,
    image: "https://media.istockphoto.com/id/2162493302/photo/exploring-the-tangy-spicy-and-refreshing-delight-of-pani-puri-indias-favourite-street-food.jpg?s=612x612&w=0&k=20&c=a4_z86B2TwR29HCX1bgWS9IgXwtFCtoQNJonL4pCM1U="
  },
  {
    id: 12,
    name: "Dahi Puri",
    price: 40,
    image: "https://media.istockphoto.com/id/1314802039/photo/forehead-castle-chat.jpg?s=612x612&w=0&k=20&c=_FdVXvODCNpdJ9QujyAD6eaL9waZ6Yp01kfVIMxyjW4="
  },
  {
    id: 13,
    name: "Bhel Puri",
    price: 20,
    image: "https://media.istockphoto.com/id/2234549366/photo/dahi-puri-chat-indian-snack-dahi-batata-puri.jpg?s=612x612&w=0&k=20&c=R262w6tt3CQFgDbTusBV6cU3sGwipfTq01VEvMUtUZ4="
  },
  {
    id: 14,
    name: "Pav Bhaji",
    price: 60,
    image: "https://media.istockphoto.com/id/1413557034/photo/indian-mumbai-street-style-pav-bhaji-garnished-with-peas-raw-onions-coriander-and-butter.jpg?s=612x612&w=0&k=20&c=Egw7wRqIHwKPtZfJujwrTiUMQUxxLJOO0iri-jSZRHA="
  },
  {
    id: 15,
    name: "Vada Pav",
    price: 25,
    image: "https://media.istockphoto.com/id/1329213718/photo/vada-pav.jpg?s=612x612&w=0&k=20&c=Yy3pm53KrPAnZXL9weCJDzXjxa2My34oVFx7RBCPmZ8="
  },
  {
    id: 16,
    name: "Bread Pakora",
    price: 20,
    image: "https://media.istockphoto.com/id/1159362267/photo/bread-pakora.jpg?s=612x612&w=0&k=20&c=4Z-hAZ3T3bMNwcMeCUO7GOpHwhksX9oreQX7OEgKnx4="
  },
  {
    id: 17,
    name: "Paneer Pakora",
    price: 50,
    image: "https://media.istockphoto.com/id/1047191770/photo/paneer-pakora.jpg?s=612x612&w=0&k=20&c=F9LIxh07QwYabfynAzWne0v1FQEJEwGudGKCrRkKZqo="
  },
  {
    id: 18,
    name: "Dal dhokla",
    price: 45,
    image: "https://media.istockphoto.com/id/513952576/photo/dhokla-indian-food.jpg?s=612x612&w=0&k=20&c=Vu4MISsQyfBgCy54Ju_vlDIuhaSzmfzhE9jC7LiD_yY="
  },
  {
    id: 19,
    name: "French Fries",
    price: 50,
    image: "https://media.istockphoto.com/id/618214356/photo/basket-of-famous-fast-food-french-fries.jpg?s=612x612&w=0&k=20&c=EipztPdDBdSFWUX7PAaWs2c06fwJsODeVc_0TaO28z4="
  },
  {
    id: 20,
    name: "Masala Maggi",
    price: 40,
    image: "https://media.istockphoto.com/id/490453539/photo/malaysian-cuisine-maggi-goreng-mamak.jpg?s=612x612&w=0&k=20&c=CFqRCy2CLXKyMjAYn_6hbfn-zm0QfgSq7-wNd-8uliA="
  }
  ],

  Meals: [
  {
    id: 21,
    name: "Veg Thali",
    price: 60,
    type: "Veg",
    image: "https://images.unsplash.com/photo-1680359873864-43e89bf248ac?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
  },
  {
    id: 22,
    name: "Biryani",
    price: 100,
    type: "Non-Veg",
    image: "https://images.unsplash.com/photo-1716550781939-beb7d7247aae?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
  },
  {
    id: 23,
    name: "Fried Rice",
    price: 80,
    type: "Veg",
    image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
  },
  {
    id: 24,
    name: "Paneer Curry",
    price: 110,
    type: "Veg",
    image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
  },
  {
    id: 25,
    name: "Chole Bhature",
    price: 90,
    type: "Veg",
    image: "https://media.istockphoto.com/id/843598982/photo/chole-with-kulcha-or-chana-masala-with-puri-indian-food.jpg?s=612x612&w=0&k=20&c=MaPwoEtn7T3wPM8vDuLDyEPGw-MymJ8DeYbJbjf2Ddg=",
  },
  {
    id: 26,
    name: "Masala Dosa",
    price: 70,
    type: "Veg",
    image: "https://media.istockphoto.com/id/1205482290/photo/masala-dosa-on-banana-leaf-with-both-sambar-and-coconut-chutney-south-indian-vegetarian-snack.jpg?s=612x612&w=0&k=20&c=FcujJMpizSvYEj5-2jspq5woZ4F5HloXuOX33CD1MeI=",
  },
  {
    id: 27,
    name: "Butter Chicken",
    price: 160,
    type: "Non-Veg",
    image: "https://media.istockphoto.com/id/639390540/photo/indian-butter-chicken.jpg?s=612x612&w=0&k=20&c=SaPiIG_0tdn9x9Q_y2YqTvpKBRGOlQB5wbdIj7e3w8Y=",
  },
  {
    id: 28,
    name: "Dal Makhani",
    price: 100,
    type: "Veg",
    image: "https://media.istockphoto.com/id/1437065088/photo/spicy-dal-makhani-or-butter-daal-served-in-a-dish-isolated-on-grey-background-top-view-of.jpg?s=612x612&w=0&k=20&c=lUVmyJkCz7XpD_IctxeI4pf4nkiifZ08Y_w97imzXPc=",
  },
  {
    id: 29,
    name: "Rajma Chawal",
    price: 80,
    type: "Veg",
    image: "https://media.istockphoto.com/id/669635320/photo/kidney-bean-curry-or-rajma-or-rajmah-chawal-and-roti-typical-north-indian-main-course.jpg?s=612x612&w=0&k=20&c=3ir3vZKHa2oPXkpEKHLbWPAPF1yhxRCyr4DIew41pzg=",
  },
  {
    id: 30,
    name: "Aloo Paratha",
    price: 50,
    type: "Veg",
    image: "https://media.istockphoto.com/id/1951940755/photo/close-up-image-of-indian-breakfast-dish-buffet-triangular-slices-of-aloo-parathas-on-white.jpg?s=612x612&w=0&k=20&c=mpfR51deNx7O621f4q1y_9Fh6sPx5oy7Iz2N1DrvxjQ=",
  },
  {
    id: 31,
    name: "Chicken Curry",
    price: 140,
    type: "Non-Veg",
    image: "https://media.istockphoto.com/id/1170729895/photo/indian-butter-chicken-horizontal-photo.jpg?s=612x612&w=0&k=20&c=4bZViynoVnP1HaWHIY1k5FvW-dj9DM2EOMHbKnAqYZ4=",
  },
  {
    id: 32,
    name: "Palak Paneer",
    price: 110,
    type: "Veg",
    image: "https://media.istockphoto.com/id/971676568/photo/homemade-healthy-palak-paneer-bowl.jpg?s=612x612&w=0&k=20&c=aAE0fk-gF9XkgALJ_FfQvDFQrLHLu2dEqaeaHIXA5X8=",
  },
  {
    id: 33,
    name: "Pav Bhaji",
    price: 70,
    type: "Veg",
    image: "https://media.istockphoto.com/id/1413557034/photo/indian-mumbai-street-style-pav-bhaji-garnished-with-peas-raw-onions-coriander-and-butter.jpg?s=612x612&w=0&k=20&c=Egw7wRqIHwKPtZfJujwrTiUMQUxxLJOO0iri-jSZRHA=",
  },
  {
    id: 34,
    name: "Veg Pulao",
    price: 75,
    type: "Veg",
    image: "https://media.istockphoto.com/id/2212836819/photo/indian-veg-biryani-veg-pulav-indian-vegetable-pulav-biriyani-vegetable-biriyani-served-in-a.jpg?s=612x612&w=0&k=20&c=2SnCq94cN57u5wuEprgxtivFRu9g2bMkMfUTQTmmOkg=",
  },
  {
    id: 35,
    name: "Chilli Paneer",
    price: 120,
    type: "Veg",
    image: "https://media.istockphoto.com/id/1085159292/photo/malai-or-achari-paneer-in-a-gravy-made-using-red-gravy-and-green-capsicum-served-in-a-bowl.jpg?s=612x612&w=0&k=20&c=vjvURM1vDpKkRRw2NYQuoE9GLtdvopRPreeY6Wqxrno=",
  },
  {
    id: 36,
    name: "Tandoori Chicken",
    price: 180,
    type: "Non-Veg",
    image: "https://media.istockphoto.com/id/1396604313/photo/roasted-whole-chicken-legs-with-condiment-directly-above-photo.jpg?s=612x612&w=0&k=20&c=JDs72E-fX5SdcBQREta58T82W8zO_rFiKC7d1WwEEUE=",
  },
  {
    id: 37,
    name: "Egg Curry",
    price: 90,
    type: "Non-Veg",
    image: "https://media.istockphoto.com/id/1072940148/photo/fried-egg-curry-or-anda-masala-served-in-a-bowl-selective-focus.jpg?s=612x612&w=0&k=20&c=cYvM9X6VQ0UlQyUEWvFk5VMNS6wg8K0o3kVuVDuwbZU=",
  },
  {
    id: 38,
    name: "Kadai Paneer",
    price: 120,
    type: "Veg",
    image: "https://media.istockphoto.com/id/968505648/photo/indian-food-or-indian-curry-in-a-copper-brass-serving-bowl-with-bread-or-roti.jpg?s=612x612&w=0&k=20&c=S8uljX2XbtkXPLYyxbxX-y19pTt-iMr_X0JMSviQnT8=",
  },
  {
    id: 39,
    name: "Chicken Fried Rice",
    price: 120,
    type: "Non-Veg",
    image: "https://media.istockphoto.com/id/1320209493/photo/isolated-delicious-spicy-chicken-biryani-in-white-plate-on-white-background-indian-or.jpg?s=612x612&w=0&k=20&c=Vcfpfu9pAYJXp71nFqrwzWDsRtUIqLvMsdW4apsDWFc=",
  },
  {
    id: 40,
    name: "Naan with Curry",
    price: 100,
    type: "Veg",
    image: "https://media.istockphoto.com/id/968309596/photo/indian-food-or-indian-curry-in-a-copper-brass-serving-bowl-with-bread-or-roti.jpg?s=612x612&w=0&k=20&c=rl0JYh33uiM0LI9Op_s0Twzw0a9fqWblvbkWQUrjibo=",
  },
],

  Beverages: [
  {
    id: 41,
    name: "Cold Coffee",
    price: 50,
    type: "Veg",
    image: "https://media.istockphoto.com/id/821034724/photo/cold-refreshing-iced-hot-chocolate-milk.jpg?s=612x612&w=0&k=20&c=NKiAWAYuNh-5KpLZ1ueSoTDeP4_nOcIRPScV068Hso4=",
  },
  {
    id: 42,
    name: "Milkshake",
    price: 70,
    type: "Veg",
    image: "https://media.istockphoto.com/id/1018364696/photo/banana-almond-smoothie-with-cinnamon-and-oat-flakes-and-coconut-milk-in-glass-jars.jpg?s=612x612&w=0&k=20&c=FefdMjOaJN-SIW43vUdriEFvHi4n8IOpoOm3wabOvQI=",
  },
  {
    id: 43,
    name: "Lemon Soda",
    price: 30,
    type: "Veg",
    image: "https://media.istockphoto.com/id/500202440/photo/freshly-made-lemonade-with-a-hint-of-mint.jpg?s=612x612&w=0&k=20&c=sn3OLyO3awUjDhX55Qjsx44ftQ8ABqA8zMS0zjPIxDA=",
  },
  {
    id: 44,
    name: "Fresh Juice",
    price: 40,
    type: "Veg",
    image: "https://media.istockphoto.com/id/452030153/photo/portion-of-fresh-made-orange-juice.jpg?s=612x612&w=0&k=20&c=vKLsN12Pj_akHtM6KxHdCDr2rczooiS5_ITNaI9RBXQ=",
  },
  {
    id: 45,
    name: "Mango Shake",
    price: 60,
    type: "Veg",
    image: "https://media.istockphoto.com/id/1077607626/photo/mango-lassi-yogurt-or-smoothie-with-turmeric-healthy-probiotic-indian-cold-summer-drink.jpg?s=612x612&w=0&k=20&c=Yy2RZt8KLnkNAudTtIka2o8iccZa4uBqbU9a9FGFcT0=",
  },
  {
    id: 46,
    name: "Oreo Shake",
    price: 80,
    type: "Veg",
    image: "https://media.istockphoto.com/id/1130257494/photo/frozen-hot-chocolate-with-whipped-cream-in-mason-jar.jpg?s=612x612&w=0&k=20&c=mTGJeEIU6-AC5sCp64YERaxkFoEBVcrZfK4wm-Z4oCM=",
  },
  {
    id: 47,
    name: "Strawberry Shake",
    price: 70,
    type: "Veg",
    image: "https://media.istockphoto.com/id/576740204/photo/strawberry-smoothie.jpg?s=612x612&w=0&k=20&c=eqIe1_itBOqQmtV_KtPduPENbAZWsuM5Q9-qmLp0MAE=",
  },
  {
    id: 48,
    name: "Chocolate Shake",
    price: 80,
    type: "Veg",
    image: "https://media.istockphoto.com/id/926990564/photo/chocolate-milk-and-whipped-cream.jpg?s=612x612&w=0&k=20&c=LabS3iGKio9kYS7OUGsosTm0Bb4XKY8WkXPer_RU3IQ=",
  },
  {
    id: 49,
    name: "Orange Juice",
    price: 40,
    type: "Veg",
    image: "https://media.istockphoto.com/id/175022686/photo/fresh-orange-juice-in-glass-cup-next-to-a-sliced-orange.jpg?s=612x612&w=0&k=20&c=i-d5MEybAEydRQEo9bzo63iH-TDmGU1ZJN1X45MNiHM=",
  },
  {
    id: 50,
    name: "Watermelon Juice",
    price: 45,
    type: "Veg",
    image: "https://media.istockphoto.com/id/961872506/photo/watermelon-drink-on-wooden-background.jpg?s=612x612&w=0&k=20&c=gVIL1nzIxHAnZQF9pE4dlI2t_FyktLNJzb5r0y6TO7E=",
  },
  {
    id: 51,
    name: "Iced Tea",
    price: 35,
    type: "Veg",
    image: "https://media.istockphoto.com/id/473340780/photo/homemade-iced-tea-and-lemonade.jpg?s=612x612&w=0&k=20&c=NR6AFmTJFWlwoPBKTcB6o9sicDlSZ-QwjkKPrz3Sx34=",
  },
  {
    id: 52,
    name: "Masala Chai",
    price: 20,
    type: "Veg",
    image: "https://media.istockphoto.com/id/1488404775/photo/karak-milk-chai-famous-indian-tea-on-white-background.jpg?s=612x612&w=0&k=20&c=D2Mqs0JuN2GO-bpG0pbODo2jCSl8Q4r1Z6qWsyjYw9s=",
  },
  {
    id: 53,
    name: "Hot Coffee",
    price: 30,
    type: "Veg",
    image: "https://media.istockphoto.com/id/1467739371/photo/cup-of-coffee-with-smoke-and-coffee-beans-on-old-wooden-background.jpg?s=612x612&w=0&k=20&c=M96KFhmhFhm-mNHnlzUcQWG5aKXvdT08pSekURc91o0=",
  },
  {
    id: 54,
    name: "Cappuccino",
    price: 60,
    type: "Veg",
    image: "https://media.istockphoto.com/id/505168330/photo/cup-of-cafe-latte-with-coffee-beans-and-cinnamon-sticks.jpg?s=612x612&w=0&k=20&c=h7v8kAfWOpRapv6hrDwmmB54DqrGQWxlhP_mTeqTQPA=",
  },
  {
    id: 55,
    name: "Hot Chocolate",
    price: 70,
    type: "Veg",
    image: "https://media.istockphoto.com/id/803432376/photo/homemade-spicy-hot-chocolate-with-cinnamon.jpg?s=612x612&w=0&k=20&c=pXl1-IfBSnw1rzQRfx_cXmu1mjF32B-hT0LUfEGMnsA=",
  },
  {
    id: 56,
    name: "Virgin Mojito",
    price: 60,
    type: "Veg",
    image: "https://media.istockphoto.com/id/2051002797/photo/virgin-lemon-mint-mojito-soda-served-in-cocktail-glass-isolated-on-dark-background-side-view.jpg?s=612x612&w=0&k=20&c=0JdFHWjV-n3d0tWmAIKOcZfCqkLJYByNaXUrIUTTu1U=",
  },
  {
    id: 57,
    name: "Pineapple Juice",
    price: 45,
    type: "Veg",
    image: "https://media.istockphoto.com/id/955346532/photo/pineapple-smoothie-with-fresh-pineapple-on-wooden-table.jpg?s=612x612&w=0&k=20&c=lgkhDB7Zm2_4WlVH82EpqBXYEaT0BgmUGtsad9xw5HQ=",
  },
  {
    id: 58,
    name: "Banana Shake",
    price: 50,
    type: "Veg",
    image: "https://media.istockphoto.com/id/1321518131/photo/banana-milkshake-with-choco-decorated-with-fruit-on-table-isolated.jpg?s=612x612&w=0&k=20&c=21HqbvfPWUaW3yQRrluT4gUcOk2Bk1ouOK_j4IDFLmA=",
  },
  {
    id: 59,
    name: "Coconut Water",
    price: 35,
    type: "Veg",
    image: "https://media.istockphoto.com/id/1398144577/photo/coconut-juice.jpg?s=612x612&w=0&k=20&c=5eQmsohtFTGluLaLgLAgW-QNwjboumzMhaD9GnIYEIg=",
  },
  {
    id: 60,
    name: "Blue Lagoon Mocktail",
    price: 70,
    type: "Veg",
    image: "https://media.istockphoto.com/id/1311267671/photo/blue-lagoon-cocktail.jpg?s=612x612&w=0&k=20&c=8HxTWUNP-czACxqW3zmGPqeLmw7EqPjzFM-sETFHDeM=",
  },
],

  Desserts: [
  {
    id: 61,
    name: "Ice Cream",
    price: 40,
    type: "Veg",
    image: "https://media.istockphoto.com/id/2188918514/photo/ice-cream.jpg?s=612x612&w=0&k=20&c=CTxy782FVPmBPulskk28Gr2yiOrdfx0qzuuwoi_EVgE=",
  },
  {
    id: 62,
    name: "Brownie",
    price: 60,
    type: "Veg",
    image: "https://media.istockphoto.com/id/1160637981/photo/homemade-double-chocolate-brownies-isolated-on-a-white-background.jpg?s=612x612&w=0&k=20&c=uZTLiAOqatPVij_BDTUzfoA96937-53cCE7FnamqoFU=",
  },
  {
    id: 63,
    name: "Chocolate Cake",
    price: 70,
    type: "Veg",
    image: "https://media.istockphoto.com/id/869598944/photo/delicious-chocolate-layer-cake.jpg?s=612x612&w=0&k=20&c=eMT0XJkEOd-qpMPdUg6Tm9RCnwfrD_1UT4TFNitguIE=",
  },
  {
    id: 64,
    name: "Donut",
    price: 40,
    type: "Veg",
    image: "https://media.istockphoto.com/id/149282990/photo/a-pile-of-glazed-doughnuts-with-sprinkles.jpg?s=612x612&w=0&k=20&c=Y7lKtmJiiqdaeR1QeIHpN0D5GADFo_Pn7HmxBVNOwgY=",
  },
  {
    id: 65,
    name: "Gulab Jamun",
    price: 35,
    type: "Veg",
    image: "https://media.istockphoto.com/id/1194662949/photo/indian-dessert-or-sweet-dish-gulab-jamun-in-white-bowl-on-yellow-background.jpg?s=612x612&w=0&k=20&c=XAOQkQC-Mu-XXviGtWU6NTz8vZzT1sY0oaJQ4jWo2Fo=",
  },
  {
    id: 66,
    name: "Rasgulla",
    price: 35,
    type: "Veg",
    image: "https://media.istockphoto.com/id/1044080542/photo/indian-rasgulla-or-rosogulla-dessert-sweet-served-in-a-bowl-selective-focus.jpg?s=612x612&w=0&k=20&c=tdAE1jz-B43HcrqBL7dLSiV9tTchIVuPqFY0nMwrzrs=",
  },
  {
    id: 67,
    name: "Rasmalai",
    price: 50,
    type: "Veg",
    image: "https://media.istockphoto.com/id/884011250/photo/ras-malai-is-an-indian-dessert.jpg?s=612x612&w=0&k=20&c=hdl3cneTodgvAyK7VBe-SW8CYtRtCznq08F5H56WYmA=",
  },
  {
    id: 68,
    name: "Jalebi",
    price: 30,
    type: "Veg",
    image: "https://media.istockphoto.com/id/1159362325/photo/bread-pakora.jpg?s=612x612&w=0&k=20&c=93uILcInCMXroXgjEJYXNeUzWh5NASSrEnylAgW7hcs=",
  },
  {
    id: 69,
    name: "Kaju Katli",
    price: 60,
    type: "Veg",
    image: "https://media.istockphoto.com/id/1225627187/photo/delicious-indian-sweet-kaju-katli-in-a-white-bowl.jpg?s=612x612&w=0&k=20&c=l9XABMf_h69TO_vRVTOrUbk5-26tLQEeDHiJMU4RTUg=",
  },
  {
    id: 70,
    name: "Gajar Ka Halwa",
    price: 50,
    type: "Veg",
    image: "https://media.istockphoto.com/id/1447442563/photo/homemade-carrot-pudding-gajar-halwa-indian-dessert.jpg?s=612x612&w=0&k=20&c=9O3ArX_Zp9nMA-7Ffpu6zxdoV9FRfcuajc1FlCyQuP8=",
  },
  {
    id: 71,
    name: "Cheesecake",
    price: 90,
    type: "Veg",
    image: "https://media.istockphoto.com/id/2152360017/photo/strawberry-cheesecake.jpg?s=612x612&w=0&k=20&c=pq4KFNu4AKq7_1dDRSr-_L45SAQYZw2HVCq6F3DlXhg=",
  },
  {
    id: 72,
    name: "Red Velvet Cake",
    price: 80,
    type: "Veg",
    image: "https://media.istockphoto.com/id/1445748694/photo/delicious-homemade-red-velvet-cake-with-meringue.jpg?s=612x612&w=0&k=20&c=qtHEM9_3qqVXTRqmThGhC6aRzNC02cD2nyrl7EEEFZY=",
  },
  {
    id: 73,
    name: "Cupcake",
    price: 35,
    type: "Veg",
    image: "https://media.istockphoto.com/id/183060524/photo/three-cupcakes.jpg?s=612x612&w=0&k=20&c=n6U-bFrjxvBexyrsnS1ryULEZoKYwH-tuU9PFY-2hLA=",
  },
  {
    id: 74,
    name: "Waffles",
    price: 80,
    type: "Veg",
    image: "https://media.istockphoto.com/id/1354019552/photo/three-crispy-fried-french-waffles-isolated-on-white.jpg?s=612x612&w=0&k=20&c=vP4uGvkCH9oK0v6XKsAfYnJtQDueSY_xHDmW_o1dDLs=",
  },
  {
    id: 75,
    name: "Pancakes",
    price: 70,
    type: "Veg",
    image: "https://media.istockphoto.com/id/172249723/photo/pancakes.jpg?s=612x612&w=0&k=20&c=eBx79Vi946vGj4RMmT0OIbpyjk0HtE-_HFHqrLD3k3Y=",
  },
  {
    id: 76,
    name: "Chocolate Mousse",
    price: 65,
    type: "Veg",
    image: "https://media.istockphoto.com/id/180811737/photo/chocolate-mousse.jpg?s=612x612&w=0&k=20&c=X5oGiop0rBzSNhHPvlXESrAE9IR2dStJqRH9LiQ5xbc=",
  },
  {
    id: 77,
    name: "Apple Pie",
    price: 70,
    type: "Veg",
    image: "https://media.istockphoto.com/id/174920929/photo/apple-pie.jpg?s=612x612&w=0&k=20&c=PyM8GnPzIlOJOG9yGvODlDQ48msyK32H5uJSCNmGG90=",
  },
  {
    id: 78,
    name: "Tiramisu",
    price: 100,
    type: "Veg",
    image: "https://media.istockphoto.com/id/517368976/photo/slice-of-dessert.jpg?s=612x612&w=0&k=20&c=fS6QBm88-tmGNHbl7ePpHiysNsCgBJ8D1ZPtabLwH-0=",
  },
  {
    id: 79,
    name: "Churros",
    price: 60,
    type: "Veg",
    image: "https://media.istockphoto.com/id/2154912399/photo/churros-with-hot-chocolate-sauce-sugar-and-cinnamon.jpg?s=612x612&w=0&k=20&c=q1m2lZOM8mqLo9ruPuhh_NZGhAdf4rAUtvGga_iLvPI=",
  },
  {
    id: 80,
    name: "Kulfi",
    price: 30,
    type: "Veg",
    image: "https://media.istockphoto.com/id/503009769/photo/kulfi-single.jpg?s=612x612&w=0&k=20&c=PVO7tAX8oU4UZqdzCB6yfax6zS2Pw-An-Onj6SU5jBk=",
  },
],
}

const card_body = () => {
  const [activeCategory, setActiveCategory] = useState("Snacks");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredDishes = menuData[activeCategory].filter((dish) =>
    dish.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const specials = menuData.Meals.slice(0, 3);

  return (
    <div className="bg-[#1A1A19] w-full min-h-screen flex flex-col gap-5 py-10">

      {/* Today's Specials */}
      <div className="main">
        <h1 className="text-2xl font-semibold text-white pl-6 md:pl-21">
          Today's specials
        </h1>
      </div>

      <div className="cards flex flex-row flex-wrap items-center justify-center gap-6 px-6 md:px-10">

        {specials.map((dish) => (
          <div
            key={dish.id}
            className="w-full sm:w-[45%] lg:w-[30%] min-h-[350px] border border-dashed border-[#6a4c2b] rounded-2xl text-[#f5d6a0] flex flex-col items-center justify-center gap-5 py-5"
          >
            <img
              className="rounded-xl w-[85%] h-[180px] object-cover"
              src={dish.image}
              alt={dish.name}
            />

            <div className="w-[85%] flex flex-col items-start justify-start gap-2 pt-2">
              <h2 className="text-xl text-white font-medium">
                {dish.name}
              </h2>

              <div className="flex flex-row items-center justify-start gap-5">
                <h3 className="text-xl text-[#ffcb3d] font-bold">
                  Rs {dish.price}
                </h3>

                <span className="bg-[#E4F5E4] text-[#0DA30C] text-sm border border-[#0DA30C] py-0.5 px-2 rounded-xl">
                  {dish.type}
                </span>
              </div>
            </div>
          </div>
        ))}

      </div>

      {/* Full Menu */}
      <div className="menu text-white mt-5 px-6 md:px-10">

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <h1 className="text-2xl font-semibold">
            Full menu
          </h1>

          {/* Search Bar */}
          <div className="flex items-center gap-2 border border-[#363636] rounded-xl px-3 py-2 w-full md:w-fit">
            <Search size={18} className="text-gray-400 shrink-0" />

            <input
              type="text"
              placeholder="Search dishes"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-transparent text-sm text-white outline-none placeholder:text-gray-400 w-full md:w-36"
            />
          </div>
        </div>

        {/* Category Buttons */}
        <div className="btn flex flex-row flex-wrap items-center justify-start gap-3 mt-5">

          {Object.keys(menuData).map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`py-2 px-4 rounded-xl border transition-all duration-300 hover:cursor-pointer ${
                activeCategory === category
                  ? "bg-white text-[#1A1A19] border-white"
                  : "bg-transparent text-white border-[#444444] hover:bg-white hover:text-[#6a4c2b]"
              }`}
            >
              {category}
            </button>
          ))}

        </div>

        {/* Active Category Heading */}
        <h2 className="text-xl font-semibold mt-7 mb-5">
          {activeCategory}
        </h2>

        {/* Dishes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

          {filteredDishes.length > 0 ? (
            filteredDishes.map((dish) => (
              <div
                key={dish.id}
                className="border border-dashed border-[#6a4c2b] rounded-2xl p-4 hover:border-[#ffcb3d] transition-all duration-300"
              >
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-[180px] object-cover rounded-xl"
                />

                <div className="flex flex-col gap-3 mt-4">

                  <h3 className="text-lg text-white font-medium">
                    {dish.name}
                  </h3>

                  <div className="flex items-center gap-4">
                    <span className="text-xl text-[#ffcb3d] font-bold">
                      Rs {dish.price}
                    </span>

                    <span className="bg-[#E4F5E4] text-[#0DA30C] text-sm border border-[#0DA30C] px-2 py-0.5 rounded-xl">
                      {dish.type}
                    </span>
                  </div>

                  <button
                    onClick={() => alert(`${dish.name} selected!`)}
                    className="w-full bg-white text-black py-2 rounded-xl font-medium hover:bg-[#ffcb3d] transition-colors duration-300"
                  >
                    Add
                  </button>

                </div>
              </div>
            ))
          ) : (
            <p className="col-span-full text-gray-400 py-5">
              No dishes found in {activeCategory}.
            </p>
          )}

        </div>

      </div>

    </div>
  );
};

export default card_body;
