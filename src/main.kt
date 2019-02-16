external fun require(module:String):dynamic

fun main() {
    println("Hello JavaScript!")

    val express = require("express")
    val app = express()

    app.get("/") { _, res ->
        res.type("text/plain")
        res.send("Hello World")
    }

    app.listen(3000) {
        println("Listening on port 3000...")
    }
}