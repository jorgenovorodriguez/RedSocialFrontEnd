import Footer from '../../components/Footer/Footer';
import PublicationList from '../../components/PublicationList/PublicationList';
import SearchForm from '../../components/SearchForm/SearchForm';
import usePublications from '../../hooks/usePublications';

const TattooHome = () => {
    const { searchParams, setSearchParams, loading } = usePublications();

    return (
        <>
            <main className='main-layout'>
                <div>
                    <SearchForm
                        searchParams={searchParams}
                        setSearchParams={setSearchParams}
                        loading={loading}
                    />
                </div>
                <div>
                    <PublicationList />
                </div>
            </main>
            <Footer />
        </>
    );
};

export default TattooHome;
