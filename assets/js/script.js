/*Hay que representar una pequeña biblioteca de películas. Cada peli tiene su título, año, lista de actores principales, duración y lista de géneros. Usen los temas nuevos aprendidos hasta ahora en este ejercicio. Cuando crean una película tiene que tener una función que se exporte a sí misma como string en consola mostrando su información. Cada película además tiene propiedad de clasificación de edad.
Y además también vamos a tener una biblioteca 
(tiene que ser instanciable como las películas) que tendrá la lista de películas. 
Debe permitir agregar películas, reproducir películas (se busca la peli solicitada y
la reproduce, o avisa si no encuentra) y listar las películas por género elegido. Deben tener al menos 5 películas agregadas a la biblioteca en código de forma global
*/

class Pelicula {
    #titulo;
    #anio;
    #actores;
    #duracion;
    #generos;
    #clasificacionEdad;

    constructor(titulo, anio, actores, duracion, generos, clasificacionEdad) {
        this.#titulo = titulo;
        this.#anio = anio;
        this.#actores = actores;
        this.#duracion = duracion;
        this.#generos = generos;
        this.#clasificacionEdad = clasificacionEdad;
    }

    get titulo() {
        return this.#titulo;
    }

    get anio() {
        return this.#anio;
    }

    get actores() {
        return this.#actores;
    }

    get duracion() {
        return this.#duracion;
    }

    get generos() {
        return this.#generos;
    }

    get clasificacionEdad() {
        return this.#clasificacionEdad;
    }

    hasGenero(genero) {
        for (let i = 0; i < this.#generos.length; i++) {
            if (this.#generos[i] === genero) {
                return true;
            }
        }
        return false;
    }

    mostrarInfo() {
        let actoresTexto = '';
        for (let i = 0; i < this.#actores.length; i++) {
            actoresTexto += this.#actores[i];
            if (i < this.#actores.length - 1) {
                actoresTexto += ', ';
            }
        }

        let generosTexto = '';
        for (let i = 0; i < this.#generos.length; i++) {
            generosTexto += this.#generos[i];
            if (i < this.#generos.length - 1) {
                generosTexto += ', ';
            }
        }

        const info = `Título: ${this.#titulo} | Año: ${this.#anio} | Actores: ${actoresTexto} | Duración: ${this.#duracion} min | Géneros: ${generosTexto} | Clasificación: ${this.#clasificacionEdad}`;
        console.log(info);
        return info;
    }
}

class Biblioteca {
    #peliculas;

    constructor() {
        this.#peliculas = [];
    }

    agregarPelicula(pelicula) {
        this.#peliculas[this.#peliculas.length] = pelicula;
    }

    reproducirPelicula(titulo) {
        let peliculaEncontrada = null;
        for (let i = 0; i < this.#peliculas.length; i++) {
            if (this.#peliculas[i].titulo === titulo) {
                peliculaEncontrada = this.#peliculas[i];
                break;
            }
        }
        if (peliculaEncontrada) {
            console.log(`Reproduciendo: ${titulo}`);
            peliculaEncontrada.mostrarInfo();
            return;
        }
        console.log(`No se encontró la película: ${titulo}`);
    }

    listarPeliculasPorGenero(genero) {
        let encontro = false;
        for (let i = 0; i < this.#peliculas.length; i++) {
            const pelicula = this.#peliculas[i];
            if (pelicula.hasGenero(genero)) {
                pelicula.mostrarInfo();
                console.log('---');
                encontro = true;
            }
        }
        if (!encontro) {
            console.log(`No hay películas del género: ${genero}`);
        }
    }
}

const biblioteca = new Biblioteca();

biblioteca.agregarPelicula(new Pelicula("Inception", 2010, ["Leonardo DiCaprio", "Joseph Gordon-Levitt"], 148, ["Sci-Fi", "Thriller"], "PG-13"));
biblioteca.agregarPelicula(new Pelicula("The Dark Knight", 2008, ["Christian Bale", "Heath Ledger"], 152, ["Action", "Crime"], "PG-13"));
biblioteca.agregarPelicula(new Pelicula("Interstellar", 2014, ["Matthew McConaughey", "Anne Hathaway"], 169, ["Sci-Fi", "Adventure"], "PG-13"));
biblioteca.agregarPelicula(new Pelicula("The Matrix", 1999, ["Keanu Reeves", "Laurence Fishburne"], 136, ["Sci-Fi", "Action"], "R"));
biblioteca.agregarPelicula(new Pelicula("The Shawshank Redemption", 1994, ["Tim Robbins", "Morgan Freeman"], 142, ["Drama"], "R"));

biblioteca.reproducirPelicula("Inception");
biblioteca.listarPeliculasPorGenero("Sci-Fi");
biblioteca.listarPeliculasPorGenero("Drama");
