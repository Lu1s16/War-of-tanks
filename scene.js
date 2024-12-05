kaboom({
    global: true,
    fullscreen: true,
    scale: 1,
    debug: true,
    clearColor: [0, 150, 200, 150],
})


console.log("hello world")

loadRoot("https://raw.githubusercontent.com/Lu1s16/War-of-tanks/refs/heads/main/sprites/")

loadSprite("tank", "Tanque.png")
loadSprite("tank-left", "Tanque.png")
loadSprite("tank-right", "Tanque.png")
loadSprite("tank-down", "Tanque.png")

loadSprite("bullet", "Bloque.png")

loadSprite("bloque", "Bloque.png")




//propiedades del tanque
const speed = 300
var orientacion = ""
var can_shoot_right = true



//propiedades de la bala
const speedBullet = 300
var colision = false
var movements_bullet = 0

//function shoot() {
//
//    //obtener los atributos del "player"
//    const tank = get("player")[0]
//    const position = tank.worldPos()
//
//
//    if (orientacion == "right" & can_shoot_right) {
//        console.log(can_shoot_right)
//
//        add([
//            sprite("bullet"),
//            scale(2),
//            pos(position.x + 80, position.y + 53),
//            origin("center"),
//            area(),
//            "bullet-right",
//
//        ])
//
//        const bullet_right = get("bullet-right")[0]
//
//        loop(1, () => {
//            bullet_right.move(speedBullet, 0)
//            movements_bullet++
//            console.log(movements_bullet)
//
//            if (movements_bullet == 7) {
//                destroyAll("bullet-right")
//                can_shoot = true
//
//
//
//
//            }
//
//        })
//
//
//
//
//    } else if (orientacion == "left") {
//        add([
//            sprite("bullet"),
//            scale(2),
//            pos(position.x - 15, position.y + 53),
//            origin("center")
//        ])
//    } else if (orientacion == "up") {
//        add([
//            sprite("bullet"),
//            scale(2),
//            pos(position.x + 34, position.y + 10),
//            origin("center")
//        ])
//    } else if (orientacion == "down") {
//        add([
//            sprite("bullet"),
//            scale(2),
//            pos(position.x + 34, position.y + 100),
//            origin("center")
//
//        ])
//
//    }
//
//}


//linea agregada en feature

//nueva linea de cambio

const levels = [
    [
        "##########",
        "#        #",
        "#        #",
        "###      #",
        "#        #",
        "#       ##",
        "#        #",
        "#    #   #",
        "#&       #",
        "##########",
    ],
]



//scene("nombre", (parametros)=>{})
scene("game", () => {

    const level = addLevel(levels[0], {
        tileWidth: 63.4, //ancho, obligatorio
        tileHeight: 63.4, //alto, obligatorio
        pos: vec2(100, 100),
        tiles: {
            "#": () => [
                sprite("bloque"),
                scale(2),
                //component gives the object a collider, which enables collision checking
                area(),
                //para que no sea pasable
                
                body()

            ],

            "&": () => [
                sprite("tank"),
                scale(1.9),
                area(),
                body(),
               
                //etiqueta
                "player",
            ]
        },
        

    })

    //get("etiqueta")
    const player = get("player")[0]

    //posicionar la camara en el jugador
    

    onKeyDown("left", () => {
        orientacion = "left"


        //cambiar sprite changeSprite("nombre")
        player.use(sprite("tank-left"))

        debug.log(player.pos.x)

        //movimiento move(en x, en y)
        player.move(-speed, 0)
    })

    onKeyDown("right", () => {




        orientacion = "right"




        player.use(sprite("tank-right"))
        player.move(speed, 0)
    })

    onKeyDown("up", () => {

        orientacion = "up"

        player.use(sprite("tank"))
        player.move(0, -speed)
    })

    onKeyDown("down", () => {

        orientacion = "down"

        debug.log("down")
        player.use(sprite("tank-down"))
        player.move(0, speed)
    })




    onKeyPress("space", () => {

        //shoot()



    })



})


function start() {

    //go("nombre de escene")
    go("game")
}

start()
