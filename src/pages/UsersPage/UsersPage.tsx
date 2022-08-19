import { useEffect } from 'react'
import ReactPaginate from 'react-paginate'
import SearchInput from '../../components/SearchInput'
import UserItem from '../../components/UserItem'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { fetchUsers } from '../../store/slices/usersSlice/usersAction'

const UsersPage = () => {
  const dispatch = useAppDispatch()
  const { items, totalCount } = useAppSelector((state) => state.users)

  const querryParams = {
    count: 10,
    page: 1,
  }

  useEffect(() => {
    dispatch(fetchUsers(querryParams))
  }, [])

  const pageCount = Math.ceil(totalCount / querryParams.count)
  const handlePageClick = (e: any) => {
    dispatch(fetchUsers({ ...querryParams, page: e.selected + 1 }))
  }

  return (
    <main>
      Users List
      <SearchInput querryParams={querryParams} />
      {items.length ? (
        <ul>
          {items.map((el) => (
            <UserItem
              key={el.id}
              followed={el.followed}
              name={el.name}
              photo={el.photos.small}
              status={el.status}
              id={el.id}
            />
          ))}
        </ul>
      ) : (
        <p>Никого не найдено</p>
      )}
      <div>
        <ReactPaginate
          className="flex gap-5"
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={7}
          pageCount={pageCount}
          previousLabel="< previous"
        />
      </div>
    </main>
  )
}

export default UsersPage
