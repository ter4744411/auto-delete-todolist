import type { menuType } from "../types";

export const initialTypeName = {
    type:'',
    name:''
}

export async function getMenuData() : Promise<menuType[]> {
    return  [
        {
            type: 'Fruit',
            name: 'Apple',
        },
        {
            type: 'Vegetable',
            name: 'Broccoli',
        },
        {
            type: 'Vegetable',
            name: 'Mushroom',
        },
        {
            type: 'Fruit',
            name: 'Banana',
        },
        {
            type: 'Vegetable',
            name: 'Tomato',
        },
        {
            type: 'Fruit',
            name: 'Orange',
        },
        {
            type: 'Fruit',
            name: 'Mango',
        },
        {
            type: 'Fruit',
            name: 'Pineapple',
        },
        {
            type: 'Vegetable',
            name: 'Cucumber',
        },
        {
            type: 'Fruit',
            name: 'Watermelon',
        },
        {
            type: 'Vegetable',
            name: 'Carrot',
        },
    ]
}