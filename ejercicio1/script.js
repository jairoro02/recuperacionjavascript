function Jugador(nombre,apellidos){ //Aquí creo el objeto Jugador, el cuál para crearlo necesita que le introduzcamos el nombre y edad
    
    
    //Declaro todas las propiedades del objeto

    this.nombre = nombre;
    this.apellidos = apellidos;

    //Estas propiedades están predefinidas
    this.puntuacion = 1;
    this.nivel = 1;
    
    
    //Aquí declaro los métodos del objeto


    this.sumar = function(){
        this.puntuacion++
        if(this.puntuacion % 10 ===0){
            this.nivel++
        }
    }
    this.restar = function(){
        this.puntuacion--
        if(this.puntuacion===0){
            //reseteo

            this.resetear()
        }
        if(this.puntuacion %10===0){
            this.nivel--
        }
    }
    this.resetear=function(){
        this.puntuacion = 1
        alert(`El jugador ${this.nombre} ha sido reseteado`)
        return
    }
}
//Se crea un Array llamado jugadores


const jugadores = []

const jugador1 = new Jugador("Jairo","Romero")

const jugador2 = new Jugador("David","Castillo")


jugadores.push(jugador1,jugador2)
console.log(jugadores);