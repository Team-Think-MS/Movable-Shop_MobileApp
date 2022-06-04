import Category from "../models/category";
import Product from "../models/product";
import Store from "../models/store";

//categoryId,categoryType,categoryName,adminId,picture
export const CATEGORIES = [
  new Category("cg1", "food", "Vegetables", "a2", 'https://lh6.googleusercontent.com/1HK6cUtH7wDKpUoDqUsH7RlGE5hKBsN_lZYNWk32z_iydsaZYlfSQYSpsyAlldKl6qHWa_YvGEjA7dZvVC7lV3hNuvR-v6ywQbrH8qWg77-E0ObvfxbPBUgCzsndFempX7oxfOgeOp_T6l7tOQ'),
  new Category("cg2", "food", "Bakery", "a1", 'https://lh4.googleusercontent.com/bafGdPre51BKw1ZTk0duNe03FK6snM-AfsxfG4eLEpafsdkBV080o2vGlhiVeiQ8-r-eL08720UP9JHI48liCb3dRRcbgPDguQrRpRGHrlcIYC5nL1lPVHURlUQYhC-ZJTV3FTO1xaPydqqv7w'),
  new Category("cg3", "food", "Ice Cream", "a2", 'https://lh6.googleusercontent.com/_aV2H6Ydp-zrsF-hiUPV-5xcflEzk8lhp7ebkleNBmM57sB_Uc3RtwswFcqMRp3E9kf5HPzHEAvk35Oj_XHiu9xfuXVKF3nY1cim3ArZrjg4h26oxUSdTBGlzjQaAbH80poCe09ixb2B-oKSog'),
  new Category("cg4", "food", "Sweet", "a2", 'https://lh4.googleusercontent.com/6Rn9f2-RDBPmZxhT_-PVL73Sd7n77_zbPbIHdOVo6EG6rGOG1viglM-2ELSDTblDsZjfc-9JmR0R_vLjsZ1dXP6tQeDUxRFjukskBrINfQ-DOP50pHOc8R9f2WQfixjjRq0e6kSqo-mO4S81SQ'),
  new Category("cg5", "food", "Fruit", "a1", 'https://lh6.googleusercontent.com/PIVd-EW9op-R7sy_89r31NzZcAkLBMcAkCTIXDcUI8wKy_RX0Rg21eW3hiixBhS-niyKJMs3Nw68zswVtQxWOcxaJOjWaU4AiITvMrR9BgtS8IJI7zBYqFgR14S9RjnhSOEwU9YqSXCH_anTkw'),
  new Category("cg6", "food", "Bun", "a2", 'https://lh3.googleusercontent.com/GlIvgc5uYH3n9pmJ6ARXQadlDRiV5QY_03zo7k9Nm-qg_OTfDaCHAdUHsFBQ5WNcAPT4MxkggDYErlrTFPtKl8RnKFF8k3nzmJZsG-B1zPnECrbLet2TlTGrdhBoDgHpCCIXo0vS5sLT7BIapQ'),
];

//storeId, categoryId, storeName, sellerId, description, picture
export const STORES = [
  new Store(
    "s1",
    "cg1",
    "Geen Fresh",
    "sl1",
    "All fresh vegetables",
    "https://lh4.googleusercontent.com/IssNGvzbd5fS99Hb6tCBZa8nxwddfmMeYACn5mpzHM1Rpuwz2cwRC-plVGALNiPQAzHZwkIlqFHm8I1GUQdbfATKkB4VuMD6-wmqq91C3KXK3EPqII8illkEjxvwczbH-ThfNrkRvFNSZo4OaQ"
  ),
  new Store(
    "s2",
    ["cg2", "cg6"],
    "Bekery Shop",
    "sl2",
    "Fresh bakery items",
    "https://lh6.googleusercontent.com/2lalRd08SwM9Ej0DQSDskZEwGwReE6nW9FdKndYZsULlMY6c1wr1jsCw2NQonLFPgv5M8u73-3lV1ALeHCAGBfRQYqkvkojcdK6hogQSAup72Fn_U-doif8kIOYMvDmpadbfwGkoVnpjiCc4xA"
  ),
  new Store(
    "s3",
    ["cg4", "cg3"],
    "Rio Ice Cream",
    "sl3",
    "Special ice cream collection",
    "https://lh5.googleusercontent.com/AQ8i8JB3ilCll9izzsjG1Qx05LYTYbyz-3m2GsoBwR5UVjSs0GpP9YGl53zDwUxMwRDYT1lW4e-NE_7C154e2wezY6PheiCMup3t6OOVVILvnLTvgCGOgm0zpISLXzCb5h31oq--GEIwBQsckQ"
  ),
  new Store(
    "s4",
    "cg4",
    "Sweet Dessert",
    "sl4",
    "Premium dessert hub",
    "https://lh3.googleusercontent.com/ziRHOMXclmHojEHDFz9sKiB1h0eL23XIafcO2rhyOqtgAQgW04UpSZc3afK148Qs8UCcHTStPI2Ane6SDsnjynE4d4QNJh4sGqaTPklspbMIfRZdOkFTmMv5nAc2B9DoWk5KxKTVJqZnGoFc8w"
  ),
  new Store(
    "s5",
    "cg5",
    "Fresh Fruit",
    "sl5",
    "All fresh fruit ",
    "https://lh4.googleusercontent.com/1AJ_-T5sjVgD8U4LUd0BivSR4ctQES_X1_9dQcdoEi64da64Rca0hqN1yWMBF-T_tJs_CiI0u2xOOWgSuhc0CJLhOAlp2IqUr7yH77vEIGbJxtyEH-B341ht0ShsynnwB4Sp_5Ww_e1W-ki5uA"
  ),
  new Store(
    "s6",
    "cg2",
    "Just Pizza",
    "sl6",
    "For pizza lovers",
    "https://lh4.googleusercontent.com/dgJouOxp8R2PMEGINyY8VBTSdVD0EBblB4bZS-75gpZdYKH_dXyd4bavmhxJzn0f5b3HAoho6DdX-Zxg4fDGzhJqdI7iuke68hUTtVgc8vLGdVhYT2jux4gGQXIT4DoD8VArYqQ7gzKksKSk9w"
  ),
];


//productId,storeId,productName,stockQty,description,picture,price
export const PRODUCTS = [
  new Product(
    "p1",
    "s1",
    "Pumpkin",
    "6",
    "A pumpkin is a cultivar of winter squash that is round with smooth, slightly ribbed skin, and is most often deep yellow to orange in coloration.",
    "https://lh6.googleusercontent.com/I0t_aDduljxWZRs_17gzJiw3tB-vYQTKWr4KZvur2A9qrEeIysbkeVG-QxQIotdq5MdAh3_4I83MyUdj7ecyDQiJricIoRPpK9r3SQtTwZiKYcicWkSp9l_d5R_BQYXR-NUPpO3Zfhjki9DbrA",
    "200.00"
  ),
  new Product(
    "p2",
    "s1",
    "Carrot",
    "5",
    "The carrot is a root vegetable, typically orange in color, though purple, black, red, white, and yellow cultivars exist, all of which are domesticated forms of the wild carrot, Daucus carota, native to Europe and Southwestern Asia. pumpkin is a cultivar of winter squash that is round with smooth, slightly ribbed skin, and is most often deep yellow to orange in coloration.",
    "https://lh3.googleusercontent.com/IU1v4w2ApKjBU2mrl99N3XCBqjQOJKCHDwHmKa1LsOnQZCwhflb0oNcMWOx1FgUjCB_GRGqC_0G4BvCnVoT2Rd05M2jXswUCDE5QAJ7CpTj9kqBqt6hxUBN-Zvz63s21e9BCJLERNDhkvUzupA://lh6.googleusercontent.com/I0t_aDduljxWZRs_17gzJiw3tB-vYQTKWr4KZvur2A9qrEeIysbkeVG-QxQIotdq5MdAh3_4I83MyUdj7ecyDQiJricIoRPpK9r3SQtTwZiKYcicWkSp9l_d5R_BQYXR-NUPpO3Zfhjki9DbrA",
    "190.00"
  ),
  new Product(
    "p3",
    "s1",
    "Cabbage",
    "7",
    "Cabbage, comprising several cultivars of Brassica oleracea, is a leafy green, red, or white biennial plant grown as an annual vegetable crop for its dense-leaved heads. pumpkin is a cultivar of winter squash that is round with smooth, slightly ribbed skin, and is most often deep yellow to orange in coloration.",
    "https://lh3.googleusercontent.com/19RyFldlmOiCRmbohVQua6dMEDqnfFbQSJdH9REKdJTQ4e94SkxZzZTiFVkKzsKCqkT8u4Rw1FWE2rk5cn7yfnmZ3s448IyTarzFaqbQi_6l-KVmQSwGyNLFv_2yHvDGbYzB9iWqMltt83mvDw://lh6.googleusercontent.com/I0t_aDduljxWZRs_17gzJiw3tB-vYQTKWr4KZvur2A9qrEeIysbkeVG-QxQIotdq5MdAh3_4I83MyUdj7ecyDQiJricIoRPpK9r3SQtTwZiKYcicWkSp9l_d5R_BQYXR-NUPpO3Zfhjki9DbrA",
    "390.00"
  ),
  new Product(
    "p4",
    "s1",
    "Tomato",
    "1",
    "The tomato is the edible berry of the plant Solanum lycopersicum, commonly known as the tomato plant. The species originated in western South America and Central America. pumpkin is a cultivar of winter squash that is round with smooth, slightly ribbed skin, and is most often deep yellow to orange in coloration.",
    "https://lh5.googleusercontent.com/yVjNlOpWr-qvmypCCNn98xqZLOPGECTuAn7NdzQOOiRkZrxPu5R1tqcgTEPGC5UlCHrGKTCfe1gaxKZU_AeTGO3TQXFhAQ9P6E7fw8UxMCDV21PaG0qKcE2CixRnUEyAxc2sPxhonzfoT8W9cg://lh6.googleusercontent.com/I0t_aDduljxWZRs_17gzJiw3tB-vYQTKWr4KZvur2A9qrEeIysbkeVG-QxQIotdq5MdAh3_4I83MyUdj7ecyDQiJricIoRPpK9r3SQtTwZiKYcicWkSp9l_d5R_BQYXR-NUPpO3Zfhjki9DbrA",
    "100.00"
  ),
  new Product(
    "p5",
    "s1",
    "Potato",
    "10",
    "The potato is a starchy tuber of the plant Solanum tuberosum and is a root vegetable native to the Americas. pumpkin is a cultivar of winter squash that is round with smooth, slightly ribbed skin, and is most often deep yellow to orange in coloration.",
    "https://lh3.googleusercontent.com/uQ1y2Jr-heUDDL1Bt9M14npPkb-v1BPlBeB_xdOM79DR1WKyCDeMRViPk-XTlvu9x0-0M5rqMFCX8lYq1qbybUlG48xnrsSIjmDHU48yRvMFsRfHWy9RIziVkSMV9YBYHTWXNJhRBvQEo9TTOA://lh6.googleusercontent.com/I0t_aDduljxWZRs_17gzJiw3tB-vYQTKWr4KZvur2A9qrEeIysbkeVG-QxQIotdq5MdAh3_4I83MyUdj7ecyDQiJricIoRPpK9r3SQtTwZiKYcicWkSp9l_d5R_BQYXR-NUPpO3Zfhjki9DbrA",
    "670.00"
  ),

  //s2

  new Product(
    "p6",
    "s2",
    "Hot Dog",
    "3",
    "A hot dog is a food consisting of a grilled or steamed sausage served in the slit of a partially sliced bun. The term hot dog can also refer to the sausage itself.  pumpkin is a cultivar of winter squash that is round with smooth, slightly ribbed skin, and is most often deep yellow to orange in coloration.",
    "https://lh3.googleusercontent.com/1hl-F0pl7xyJTS3qnd_WOQRBLBxkfAxgWfPxUOIVzxOJs04qzzvPSxeKr9lo6-s0RBuTfHk2O_cI_8dq5mKLKc7efl9InIz4TZjrssJKk4dAWxE_hJl5h2Kzn--_k0pr-3xm_p7G6zHYWrIJTg://lh6.googleusercontent.com/I0t_aDduljxWZRs_17gzJiw3tB-vYQTKWr4KZvur2A9qrEeIysbkeVG-QxQIotdq5MdAh3_4I83MyUdj7ecyDQiJricIoRPpK9r3SQtTwZiKYcicWkSp9l_d5R_BQYXR-NUPpO3Zfhjki9DbrA",
    "260.00"
  ),
  new Product(
    "p7",
    "s2",
    "Bread",
    "6",
    "Bread is a staple food prepared from a dough of flour and water, usually by baking. Throughout recorded history and around the world, it has been an important part of many cultures' diet. pumpkin is a cultivar of winter squash that is round with smooth, slightly ribbed skin, and is most often deep yellow to orange in coloration.",
    "https://lh3.googleusercontent.com/MvGM5qb1S_dVapLEU17pPwfjemNPKEdeo-t7OS6n5CYQesLNyW9cPxdFku3oGBGZAwrACuVqOsjbLtrpJer5Lb8wmquVRmtsAmu--F1eYlYU1a1XDL51PvBgP-QpuhHIFNgfh1Vaa_9C_dYHzw://lh6.googleusercontent.com/I0t_aDduljxWZRs_17gzJiw3tB-vYQTKWr4KZvur2A9qrEeIysbkeVG-QxQIotdq5MdAh3_4I83MyUdj7ecyDQiJricIoRPpK9r3SQtTwZiKYcicWkSp9l_d5R_BQYXR-NUPpO3Zfhjki9DbrA",
    "220.00"
  ),
  new Product(
    "p8",
    "s2",
    "Cake",
    "8",
    "Cake is a form of sweet food made from flour, sugar, and other ingredients, that is usually baked. pumpkin is a cultivar of winter squash that is round with smooth, slightly ribbed skin, and is most often deep yellow to orange in coloration.",
    "https://lh6.googleusercontent.com/RaN0hW22wgGTa6cEt09d4_L9z882OhLayIwYB0BFL3d-OH5NsdSm-dsNevfMFnzS6spNSlkeWmBHXAMhYg8uLHD5g3f9SciKN7zHTiYYAR6b9Z4OIQyqilq53q9nGWSk_L9ji8Gwlcg9IiqFjA://lh6.googleusercontent.com/I0t_aDduljxWZRs_17gzJiw3tB-vYQTKWr4KZvur2A9qrEeIysbkeVG-QxQIotdq5MdAh3_4I83MyUdj7ecyDQiJricIoRPpK9r3SQtTwZiKYcicWkSp9l_d5R_BQYXR-NUPpO3Zfhjki9DbrA",
    "190.00"
  ),
  new Product(
    "p9",
    "s2",
    "Bun",
    "9",
    "A bun is a non-sweet bread roll, typically filled with savory fillings. A bun may also refer to a sweet cake in certain parts of the world. pumpkin is a cultivar of winter squash that is round with smooth, slightly ribbed skin, and is most often deep yellow to orange in coloration.",
    "https://lh5.googleusercontent.com/XvxhoVcNI2jk2rjLYHiacyGjlnFlFDs9VmTYy8EB4aeZ9zu0XRQvotzMrfa5cA6IJ6BmsfUaPnQ6JCM9yszhfwvWvbfxxP18BnMcwsvBmTuXt_KsQg8b-UCFZgAyOtHX3yO_tW2W6a2jzvOpgA://lh6.googleusercontent.com/I0t_aDduljxWZRs_17gzJiw3tB-vYQTKWr4KZvur2A9qrEeIysbkeVG-QxQIotdq5MdAh3_4I83MyUdj7ecyDQiJricIoRPpK9r3SQtTwZiKYcicWkSp9l_d5R_BQYXR-NUPpO3Zfhjki9DbrA",
    "300.00"
  ),
  new Product(
    "p10",
    "s2",
    "Pastry",
    "2",
    "Pastry is baked food made with a dough of flour, water and shortening that may be savoury or sweetened. Sweetened pastries are often described as bakers' confectionery. pumpkin is a cultivar of winter squash that is round with smooth, slightly ribbed skin, and is most often deep yellow to orange in coloration.",
    "https://lh3.googleusercontent.com/HxDyYER_T4y4tHFgIkeHYFbrHM_DsDkzPJQJVIWGTkiVAde7LEUqzFBWwQVDSOWWtUGPOMG29l97CTcx-TMpml1dx0hk7WEdkAHerxgXVxGgYw6gbv6ZgcIpfB-tikYg4OJS_bYMGhqXZ1nQ1Q://lh6.googleusercontent.com/I0t_aDduljxWZRs_17gzJiw3tB-vYQTKWr4KZvur2A9qrEeIysbkeVG-QxQIotdq5MdAh3_4I83MyUdj7ecyDQiJricIoRPpK9r3SQtTwZiKYcicWkSp9l_d5R_BQYXR-NUPpO3Zfhjki9DbrA",
    "400.00"
  ),

  //s3

  new Product(
    "p11",
    "s3",
    "Strawberry ice cream",
    "2",
    "Strawberry ice cream is a flavor of ice cream made with strawberry or strawberry flavoring. It is made by blending in fresh strawberries or strawberry flavoring with the eggs, cream, vanilla and sugar used to make ice cream.  pumpkin is a cultivar of winter squash that is round with smooth, slightly ribbed skin, and is most often deep yellow to orange in coloration.",
    "https://lh3.googleusercontent.com/fzZ-UnFMQ0GjY9m9TP1oecamLWFOpxGEpq0R9P5zqkP8C29bkSZXMFLxWzqHGC7fQXI3A1nIR7jd8h3HzSZ27j_Phh7APZ7N5M1_cvDdpqCvBR4mlFFxxmpmIIzVk0LqSHkTG2pcgzSxVzO51A://lh6.googleusercontent.com/I0t_aDduljxWZRs_17gzJiw3tB-vYQTKWr4KZvur2A9qrEeIysbkeVG-QxQIotdq5MdAh3_4I83MyUdj7ecyDQiJricIoRPpK9r3SQtTwZiKYcicWkSp9l_d5R_BQYXR-NUPpO3Zfhjki9DbrA",
    "300.00"
  ),
  new Product(
    "p12",
    "s3",
    "Chocolate ice cream",
    "4",
    "Chocolate ice cream is ice cream with natural or artificial chocolate flavoring.  pumpkin is a cultivar of winter squash that is round with smooth, slightly ribbed skin, and is most often deep yellow to orange in coloration.",
    "https://lh6.googleusercontent.com/vOUzvGHegWfOpDz7pgkpPMQXbLP0FfMCOKMoh-XbHdTEAfhU3_T8joCnFF3LEbLU9tiDHJePumw1FIDNDDDUyy-jJQhH16LCTILB63SwVE1JDdZ4j2e08Z1aMW-rDnvHod7CeLkKhuqLQhgTwg://lh6.googleusercontent.com/I0t_aDduljxWZRs_17gzJiw3tB-vYQTKWr4KZvur2A9qrEeIysbkeVG-QxQIotdq5MdAh3_4I83MyUdj7ecyDQiJricIoRPpK9r3SQtTwZiKYcicWkSp9l_d5R_BQYXR-NUPpO3Zfhjki9DbrA",
    "390.00"
  ),
  new Product(
    "p13",
    "s3",
    "Vanilla ice cream",
    "8",
    "Vanilla is frequently used to flavor ice cream, especially in North America, Asia, and Europe. pumpkin is a cultivar of winter squash that is round with smooth, slightly ribbed skin, and is most often deep yellow to orange in coloration.",
    "https://lh6.googleusercontent.com/3IcRKzxEoTRWNyPOnz_rayeYGffpHEbykXlbPVgLyTRKodfPhiyO1pEnUWovfYP5hAWoki4Q_rf6mReC8ksqmOUbQ4o0MpCsbQgWe0ls63ZIzxb3SQO9aZjDMhyfXOk3ing9odb5I4WdrkErKg://lh6.googleusercontent.com/I0t_aDduljxWZRs_17gzJiw3tB-vYQTKWr4KZvur2A9qrEeIysbkeVG-QxQIotdq5MdAh3_4I83MyUdj7ecyDQiJricIoRPpK9r3SQtTwZiKYcicWkSp9l_d5R_BQYXR-NUPpO3Zfhjki9DbrA",
    "600.00"
  ),
  new Product(
    "p14",
    "s3",
    "Blueberry ice cream",
    "1",
    "This blueberry ice cream will add a sweet ending to any meal. It's best to make the base and chill it overnight before processing in your ice cream maker.  is frequently used to flavor ice cream, especially in North America, Asia, and Europe. pumpkin is a cultivar of winter squash that is round with smooth, slightly ribbed skin, and is most often deep yellow to orange in coloration.",
    "https://lh4.googleusercontent.com/AXstHmQpuDngzSmxddfY0FyPpH9_l-WgvfBsKWMUkwWH6qchpV1CiXMyUKuqECqWvIC6ngvLLebY25p6wKqFxkpT4WEIneuUIvv3_aH6Okn3UULJoV5R8W1l-esOfn1gbO3gXgTlSKg2hRJf2g://lh6.googleusercontent.com/I0t_aDduljxWZRs_17gzJiw3tB-vYQTKWr4KZvur2A9qrEeIysbkeVG-QxQIotdq5MdAh3_4I83MyUdj7ecyDQiJricIoRPpK9r3SQtTwZiKYcicWkSp9l_d5R_BQYXR-NUPpO3Zfhjki9DbrA",
    "700.00"
  ),

  //s4

  new Product(
    "p15",
    "s4",
    "Doughnut",
    "2",
    "A doughnut or donut is a type of food made from leavened fried dough. It is popular in many countries and is prepared in various forms as a sweet snack that can be homemade or purchased in bakeries, supermarkets, food stalls, and franchised specialty vendors. pumpkin is a cultivar of winter squash that is round with smooth, slightly ribbed skin, and is most often deep yellow to orange in coloration.",
    "https://lh3.googleusercontent.com/yZQDibMhvwedAE0TosT5145owx6RlJr3wDPRWC1QjypDm7IvN5D_raTd1vidVS8iRhqqOYHUixmFpa7oY8gQP6zw3JYPqXtF2fQi9YYF0wbQYdsbPhw09jV-ofqMnymMZNc1k-hHdPsiKCdG1g://lh6.googleusercontent.com/I0t_aDduljxWZRs_17gzJiw3tB-vYQTKWr4KZvur2A9qrEeIysbkeVG-QxQIotdq5MdAh3_4I83MyUdj7ecyDQiJricIoRPpK9r3SQtTwZiKYcicWkSp9l_d5R_BQYXR-NUPpO3Zfhjki9DbrA",
    "100.00"
  ),
  new Product(
    "p16",
    "s4",
    "Cheesecake",
    "4",
    "Cheesecake is a sweet dessert consisting of one or more layers. The main, and thickest, layer consists of a mixture of a soft, fresh cheese, eggs, and sugar. pumpkin is a cultivar of winter squash that is round with smooth, slightly ribbed skin, and is most often deep yellow to orange in coloration.",
    "https://lh3.googleusercontent.com/oOySn5X5oIbouuEad0X_nsrJ9crqBJyShP-Qyb1YF4wls46hK9x-bPgW_2ZSyGB5bG65E7pBdCSpgorFU5eTzjLse9phek34x3eCUkwYsElJfA5vFVdBhAhKjL-KnkILaljbwTTRv2d1VSeKBw://lh6.googleusercontent.com/I0t_aDduljxWZRs_17gzJiw3tB-vYQTKWr4KZvur2A9qrEeIysbkeVG-QxQIotdq5MdAh3_4I83MyUdj7ecyDQiJricIoRPpK9r3SQtTwZiKYcicWkSp9l_d5R_BQYXR-NUPpO3Zfhjki9DbrA",
    "400.00"
  ),
  new Product(
    "p17",
    "s4",
    "Chocolate cake",
    "8",
    "Chocolate cake or chocolate gâteau is a cake flavored with melted chocolate, cocoa powder, or both. pumpkin is a cultivar of winter squash that is round with smooth, slightly ribbed skin, and is most often deep yellow to orange in coloration.",
    "https://lh5.googleusercontent.com/YwFCNN0X9YFIqf2x7sp7aw0qA63o22m0LJwyeB8jIdhaFcEjogNPx31mzla0Fe72A3QKosUs2JHSguodl2SziQz296LRa-GLx0MrmSbx6029d4Kq92g-9jLLOB2w97jx6Fvc85KpBSqKLsnbqA://lh6.googleusercontent.com/I0t_aDduljxWZRs_17gzJiw3tB-vYQTKWr4KZvur2A9qrEeIysbkeVG-QxQIotdq5MdAh3_4I83MyUdj7ecyDQiJricIoRPpK9r3SQtTwZiKYcicWkSp9l_d5R_BQYXR-NUPpO3Zfhjki9DbrA",
    "300.00"
  ),

  //s5

  new Product(
    "p18",
    "s5",
    "Granny Smith",
    "2",
    "The Granny Smith, also known as a green apple or sour apple, is an apple cultivar which originated in Australia in 1868.  pumpkin is a cultivar of winter squash that is round with smooth, slightly ribbed skin, and is most often deep yellow to orange in coloration.",
    "https://lh4.googleusercontent.com/-eFRybRZSoce7Gcpn44iitadBpx6BtgS3SOWR4zev464_hc1ypz2-nhB-zCo7r-NoMFilsameGiW79ot-3LEq_sTdoGwMSuBcHEaDEgWT26ObJM3B4byDdSXo-zJnrc81bz4NmS_VqsZJmbS8Q://lh6.googleusercontent.com/I0t_aDduljxWZRs_17gzJiw3tB-vYQTKWr4KZvur2A9qrEeIysbkeVG-QxQIotdq5MdAh3_4I83MyUdj7ecyDQiJricIoRPpK9r3SQtTwZiKYcicWkSp9l_d5R_BQYXR-NUPpO3Zfhjki9DbrA",
    "120.00"
  ),
  new Product(
    "p19",
    "s5",
    "Avocado",
    "8",
    "The avocado is a tree originating in the Americas which is likely native to the highland regions of south-central Mexico to Guatemala. It is classified as a member of the flowering plant family Lauraceae. pumpkin is a cultivar of winter squash that is round with smooth, slightly ribbed skin, and is most often deep yellow to orange in coloration.",
    "https://lh6.googleusercontent.com/o7Lg3oGR7-aHrDwdfPNexsiZl2fhuT7SuypcZ7YnS16CAbTiT6uSA0dAQ3GsSarMEY0TSAHeLtjxEINjIbQdacPdsXsootv-SlEiJYcLlYdtDakCgXHKraDh-bMzi-mdydHuVX3sOF1Bvp5wmw://lh6.googleusercontent.com/I0t_aDduljxWZRs_17gzJiw3tB-vYQTKWr4KZvur2A9qrEeIysbkeVG-QxQIotdq5MdAh3_4I83MyUdj7ecyDQiJricIoRPpK9r3SQtTwZiKYcicWkSp9l_d5R_BQYXR-NUPpO3Zfhjki9DbrA",
    "160.00"
  ),

  //s6

  new Product(
    "p20",
    "s6",
    "BBQ Pizza",
    "2",
    "Pizza is a dish of Italian origin consisting of a usually round, flat base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients, which is then baked at a high temperature, traditionally in a wood-fired oven. pumpkin is a cultivar of winter squash that is round with smooth, slightly ribbed skin, and is most often deep yellow to orange in coloration.",
    "https://lh6.googleusercontent.com/vcGOCvWgocppjZJ67bcQNOHlQ56dJBuLy_6aW6Q8Gr7tUEkGOyLR4xvEqFVdg4Oz67SeCheRYbiJTegk1-TQ0ZzP2TKbPV1X3X9msAQhjL-9Jx8mXtLjnjTM7EMAyb_NP8JR-Qm8tUJs5i3IQg://lh6.googleusercontent.com/I0t_aDduljxWZRs_17gzJiw3tB-vYQTKWr4KZvur2A9qrEeIysbkeVG-QxQIotdq5MdAh3_4I83MyUdj7ecyDQiJricIoRPpK9r3SQtTwZiKYcicWkSp9l_d5R_BQYXR-NUPpO3Zfhjki9DbrA",
    "1200.00"
  ),
  new Product(
    "p21",
    "s6",
    "Kochchi Miris Pizza",
    "3",
    "Pizza is a dish of Italian origin consisting of a usually round, flat base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients, which is then baked at a high temperature, traditionally in a wood-fired oven. pumpkin is a cultivar of winter squash that is round with smooth, slightly ribbed skin, and is most often deep yellow to orange in coloration.",
    "https://lh6.googleusercontent.com/E69QVIgUq09Q_EjeTrMdyAjEMDPBRBEHdaVlIKkkBc_LgBNxl2DNnI_jFG6JUUkgRcHC2No-08N2-h2nfIZ9jUrKfHUJj7am6ucvO2zOGAW9NuSwsTP-mgdbsN05jXJB_VEix8A9FVHBob3KPA://lh6.googleusercontent.com/I0t_aDduljxWZRs_17gzJiw3tB-vYQTKWr4KZvur2A9qrEeIysbkeVG-QxQIotdq5MdAh3_4I83MyUdj7ecyDQiJricIoRPpK9r3SQtTwZiKYcicWkSp9l_d5R_BQYXR-NUPpO3Zfhjki9DbrA",
    "1600.00"
  ),
  new Product(
    "p22",
    "s6",
    "Thanduri Chicken Pizza",
    "9",
    "Pizza is a dish of Italian origin consisting of a usually round, flat base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients, which is then baked at a high temperature, traditionally in a wood-fired oven. pumpkin is a cultivar of winter squash that is round with smooth, slightly ribbed skin, and is most often deep yellow to orange in coloration.",
    "https://lh4.googleusercontent.com/rL2m8vk01WW71NmrYbYnnP1j0R1JQxMBqXCcEztqFfrleYs5ez5upV3OGsz6ci4KWrQKYDR6glcctA_VYyCTkL6xzNlSb_UIXB6uz7lFsz8e83wdFj_UR92O_2aOlQqBsTx7PHDTFdpEmbH1Qw://lh6.googleusercontent.com/I0t_aDduljxWZRs_17gzJiw3tB-vYQTKWr4KZvur2A9qrEeIysbkeVG-QxQIotdq5MdAh3_4I83MyUdj7ecyDQiJricIoRPpK9r3SQtTwZiKYcicWkSp9l_d5R_BQYXR-NUPpO3Zfhjki9DbrA",
    "2400.00"
  ),
  new Product(
    "p23",
    "s6",
    "Black Chicken Pizza",
    "4",
    "Pizza is a dish of Italian origin consisting of a usually round, flat base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients, which is then baked at a high temperature, traditionally in a wood-fired oven. pumpkin is a cultivar of winter squash that is round with smooth, slightly ribbed skin, and is most often deep yellow to orange in coloration.",
    "https://lh5.googleusercontent.com/m-J1whDSMRYRdaB2mbu-LlGjcxU0D3QZXi8jP53EI25jwcinyKW7_K9p1sWTB4QFpLeRs7OD_7iItAKA52S7Xkwuu-tzTIahf8XQejdakAvT1hAUvz96uUkG-fY1nnLgpN6tmRT7nwX0v6N-Zg://lh6.googleusercontent.com/I0t_aDduljxWZRs_17gzJiw3tB-vYQTKWr4KZvur2A9qrEeIysbkeVG-QxQIotdq5MdAh3_4I83MyUdj7ecyDQiJricIoRPpK9r3SQtTwZiKYcicWkSp9l_d5R_BQYXR-NUPpO3Zfhjki9DbrA",
    "1900.00"
  ),
];
