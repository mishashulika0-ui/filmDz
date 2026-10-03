type Movie = {
    id: number;
    title: string;
    year: number;
};

const movies: Movie[] = [
    { id: 1, title: "Inception", year: 2010 },
    { id: 2, title: "Interstellar", year: 2014 },
    { id: 3, title: "The Matrix", year: 1999 },
    { id: 4, title: "Fight Club", year: 1999 },
    { id: 5, title: "Pulp Fiction", year: 1994 },
    { id: 6, title: "Forrest Gump", year: 1994 }
];

const Catalog = () => {
    return (
        <div className="cards">
            {movies.map((m) => (
                <div className="card" key={m.id}>
                    <h3>{m.title}</h3>
                    <p>{m.year}</p>
                </div>
            ))}
        </div>
    );
};

export default Catalog;