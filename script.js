$(document).ready(function () {
    var repositorios=[
        {
            "nombre":"3 en raya",
            "link":"https://github.com/JoelNovo16/3_en_raya"
        },
        {
            "nombre":"Libreria",
            "link":"https://github.com/JoelNovo16/biblioteca"
        },
        {
            "nombre":"Herencia polimorfismo",
            "link":"https://github.com/JoelNovo16/herencia_Polimorfismo_rober"
        },
        {
            "nombre":"Creador de tareas",
            "link":"https://github.com/JoelNovo16/creador_tareas"
        },
        {
            "nombre":"Buscador de clientes",
            "link":"https://github.com/JoelNovo16/buscador_clientes"
        },
        {
            "nombre":"Buscador de clientes con añadir y eliminar cliente",
            "link":"https://github.com/JoelNovo16/BuscadorClientes_a-adir_eliminar"
        }
    ]

    function añadirTarjeta() {
        for (const repositorio of repositorios) {
            let nuevaTarjeta=`<div id="repositorio1">
                     <h3>${repositorio.nombre}</h3>
                <div id="descripcion"></div>
                <a href="${repositorio.link}"><button><img src="2015046.png" alt=""></button></a>
                    </div>`
                    $("#container").append(nuevaTarjeta);
        }
        
    }
añadirTarjeta("")
});