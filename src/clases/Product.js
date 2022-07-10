class Producto {
    constructor(id, nombre, timestamp, descripcion, codigo, foto, precio, stock){
        this.id = id;
        this.timestamp = timestamp;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.codigo = codigo;
        this.foto = foto;
        this.precio = precio;
        this.stock = stock;
    }

    validateData() {
        if (!this.id)
            return false;
        if (!this.nombre)
            return false;
        if (!this.descripcion)
            return false;
        if (!this.codigo)
            return false;
        if (!this.foto)
            return false;
        if (!this.precio)
            return false;
        if (!this.stock)
            return false;
        return true;
    }
}

module.exports = Producto;