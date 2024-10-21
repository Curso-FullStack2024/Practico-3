import fs from 'fs'

// clase para representar un superheroe

class Superheroe{
    constructor(id, nombreSuperheroe, nombreReal, nombreSociedad, edad, planetaOrigen, debilidad, poder, habilidadEspecial, aliado, enemigo)
    {
        this.id=id,
        this.nombreSuperheroe=nombreSuperheroe;
        this.nombreReal= nombreReal;
        this.nombreSociedad= nombreSociedad;
        this.edad=edad;
        this.planetaOrigen=planetaOrigen;
        this.debilidad=debilidad;
        this.poder=poder;
        this.habilidadEspecial=habilidadEspecial;
        this.aliado=aliado;
        this.enemigo=enemigo
    }
}


//funcion para leer y ordenar los superheroes

export function leerSuperheroes(ruta){
    const datos=fs.readFileSync(ruta,'utf-8');
    const superheroesArray=JSON.parse(datos);

    // convertir a instancia de superheroes
    const superheroes= superheroesArray.map(
        hero=> new Superheroe(hero.id, hero.nombreSuperheroe, hero.nombreReal, hero.nombreSociedad, hero.edad,
                 hero.planetaOrigen, hero.debilidad, hero.poder, hero.habilidadEspecial, hero.aliado, hero.enemigo)
    );
    // ordena el array por nombre
    superheroes.sort((a,b)=>a.nombreSuperheroe.localeCompare(b.nombreSuperheroe))
    return superheroes
}


//agregar superheroes
export function agregarSuperheroes(rutaOriginal, rutaNuevos){
    const datosOriginales= fs.readFileSync(rutaOriginal,'utf-8');
    const datosNuevos= fs.readFileSync(rutaNuevos, 'utf-8');

    const superheroesOriginales=JSON.parse(datosOriginales);
    const superheroesNuevos=JSON.parse(datosNuevos);

    const instanciaNuevos=superheroesNuevos.map(
        hero=>new Superheroe(hero.id, hero.nombreSuperheroe, hero.nombreReal, hero.nombreSociedad, hero.edad,
            hero.planetaOrigen, hero.debilidad, hero.poder, hero.habilidadEspecial, hero.aliado, hero.enemigo)
    )

    //combinar listas
    const listaActualizada=[...superheroesOriginales, ...instanciaNuevos]

    //guarda la lista actualizada
    fs.writeFileSync(rutaOriginal,JSON.stringify(listaActualizada,null,2),'utf-8');

    console.log('Lista actualizada con exito');
}