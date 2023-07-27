import SearchForm from '../../components/SearchForm/SearchForm';
import UserList from '../../components/UserList/UserList';
import useUsers from '../../hooks/useUsers';

const UserListPage = () => {
    const { searchParams, setSearchParams, loading } = useUsers();
    return (
        <main>
            <div>
                <SearchForm
                    searchParams={searchParams}
                    setSearchParams={setSearchParams}
                    loading={loading}
                />
            </div>
            <div>
                <UserList />
            </div>
        </main>
    );
};

export default UserListPage;
