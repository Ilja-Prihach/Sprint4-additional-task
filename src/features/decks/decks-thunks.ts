import { Dispatch } from 'redux'
import { AddDeckParams, decksApi } from './decks-api.ts'
import { addDeckAC, setDecksAC } from './decks-reducer.ts'

export const fetchDecksTC = () =>  (dispatch: Dispatch) => {
  decksApi.fetchDecks().then((res) => {
    dispatch(setDecksAC(res.data.items))
  })
}

export const addDeckTC = (params: AddDeckParams) =>  (dispatch: Dispatch) => {
  decksApi.addDeck(params).then((res) => {
    dispatch(addDeckAC(res.data))
  })
}