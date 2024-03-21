import { useQuery } from 'urql';
import { FindAllBooksDocument, FindAllBooksQuery } from './generated/graphql';

function App() {
    const [{ data }] = useQuery<FindAllBooksQuery>({
        query: FindAllBooksDocument,
    });

    return (
        <div className="App">
            <header>
                <h1>Books</h1>
                <ul>
                    {data?.books.map((book) => (
                        <li key={book._id}>{book.title}</li>
                    ))}
                </ul>
            </header>
        </div>
    );
}

export default App;
