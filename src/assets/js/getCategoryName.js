import { getCategories as getCategories } from "./getCategories.js";
export function getCategoryName(categoryId) {
    let categoryName;
    if (categoryId !== "bestRating")
        categoryName = getCategories().filter(c => c.categoryId === categoryId)[0].name;
    else categoryName = "Best Rated"
    return categoryName;
}