
import { configureStore } from '@reduxjs/toolkit'

import fetchData from './slice'

export const store =configureStore({
reducer:{
    todo:fetchData
}
})