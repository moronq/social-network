import React, { FC, useEffect } from 'react'
import { useAppDispatch } from '../hooks/redux'
import { useDebounce } from '../hooks/useDebounce'
import useInput from '../hooks/useInput'
import { fetchUsers, searchUsers } from '../store/slices/usersSlice/usersAction'

type Search = {
  querryParams: {
    count: number
    page: number
  }
}

const SearchInput: FC<Search> = ({ querryParams }) => {
  const input = useInput('')
  const dispatch = useAppDispatch()
  const debounce = useDebounce(input.value)
  useEffect(() => {
    if (debounce.length > 3) {
      dispatch(searchUsers(input.value))
    } else if (debounce.length === 0) {
      dispatch(fetchUsers(querryParams))
    }
  }, [debounce])

  return (
    <div>
      <input className="border-black border-2" type="text" {...input} />
    </div>
  )
}

export default SearchInput
