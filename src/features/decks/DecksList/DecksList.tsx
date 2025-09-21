import s from './DecksList.module.css'
import { useEffect } from 'react'
//import { decksApi } from '../decks-api.ts'
//import { useDispatch } from 'react-redux'
//import { setDecksAC } from '../decks-reducer.ts'
//import { useAppDispatch, useAppSelector } from '../../../app/store.ts'
import { DeckItem } from './DeckItem/DeckItem.tsx'
//import { selectDecks } from '../decks-selectors.ts'
//import { fetchDecksTC } from '../decks-thunks.ts'
import { useFetchDecks } from './useFetchDecks.ts'

export const DecksList = () => {
  const {decks} = useFetchDecks()
  return <ul className={s.list}>
    {decks.map((deck) => (<DeckItem key={deck.id} deck={deck} />))}
  </ul>
}
