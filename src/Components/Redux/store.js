import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/users/usersSlice";
import signinReducer from "./features/users/signinSlice";
import promotionsReducer from "./features/Promotions/promotionsSlice";
import categoriesReducer from "./features/categories/categoriesSlice";
import subCategoriesReducer from "./features/categories/subCategoriesSlice";
import ProductosByCategorySlice from "./features/Productos/ProductosByCategorySlice";
import productosBySubcategorySlice from "./features/Productos/ProductosBySubcategorySlice";
import articleSlice from "./features/articles/ArticlesSlice";
import createListArticlesSlice from "./features/articles/ListArtilcesSlice";
import ProductoSlice from "./features/Productos/ProductoSlice";
import productSlice from "./features/Shopping/cardShoppingSlice";
import productsByIdUserSlice from "./features/Productos/ProductsByIdUsersSlice";
import deleteShoppingSlice from "./features/Shopping/deleteShoppingByidSlice";
import shippingProductsSlice from "./features/Shopping/shippingProductsSlice";
export const store = configureStore({
    reducer: {
        users: userReducer,
        signin: signinReducer,
        promotions: promotionsReducer,
        categories: categoriesReducer,
        subCategories: subCategoriesReducer,
        productosByCategory: ProductosByCategorySlice,
        ProductosBySubcategory : productosBySubcategorySlice,
        article: articleSlice,
        listArticles: createListArticlesSlice,
        producto: ProductoSlice,
        carshopping : productSlice,
        productsByIdUser: productsByIdUserSlice,
        deleteShopping: deleteShoppingSlice,
        shippingProducts: shippingProductsSlice
    }
});