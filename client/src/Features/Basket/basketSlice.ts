import { ActionTypes } from "@mui/base";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import agent from "../../App/api/agent";
import { Basket } from "../../App/Models/basket";

interface BasketState{
    basket: Basket | null;
    status: string;
}

const initialState:BasketState = {
    basket: null,
    status: 'idle'
}

export const addBasketItemAsync = createAsyncThunk<Basket, {productId: number, quantity?: number}>(
    'basket/addBasketItemAsync',
    async({productId, quantity =1}) => {
        try {
            return await agent.Basket.addItem(productId, quantity);
        } catch (error) {
            console.log(error);
        }
    }
)

export const  removebasketItemAsync = createAsyncThunk<void,{productId: number, quantity: number}>(
    'basket/removebasketItemAsync',
    async({productId, quantity}) => {
        try {
            agent.Basket.removeItem(productId,quantity);
        } catch (error) {
            console.log(error)
            
        }
    }
)

export const basketSlice=createSlice({
    name: 'basket',
    initialState,
    reducers:{
        setBasket: (state, action) => {
            state.basket = action.payload
        },
    },
    extraReducers: (builder => {
        builder.addCase(addBasketItemAsync.pending, (state, action) => {
            console.log(action);
            state.status = 'pendingAddItem' + action.meta.arg.productId;
        });
        builder.addCase(addBasketItemAsync.fulfilled, (state, action) => {
            console.log(action);
            state.basket = action.payload;
            state.status = 'idle';
        });
        builder.addCase(addBasketItemAsync.rejected, (state) => {
            state.status = 'idle';
        });
        builder.addCase(removebasketItemAsync.pending, (state, action) =>{
            state.status = 'pendingRemoveItem' + action.meta.arg.productId;
        });
        builder.addCase(removebasketItemAsync.fulfilled, (state, action) =>{
            const {productId, quantity} = action.meta.arg;
            const itemIndex = state.basket?.items.findIndex((i => i.productId === productId));
            if (itemIndex === -1 || itemIndex === undefined) return;
            state.basket!.items[itemIndex].quantity -= quantity;
            if(state.basket?.items[itemIndex].quantity === 0) state.basket.items.splice(itemIndex, 1);
            state.status = 'idle';
        });
        builder.addCase(removebasketItemAsync.rejected,(state)=>{
            state.status = 'idle';
        })
    })
})

export const  {setBasket} = basketSlice.actions;