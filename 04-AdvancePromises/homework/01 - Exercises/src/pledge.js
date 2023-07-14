'use strict';
/*----------------------------------------------------------------
Promises Workshop: construye la libreria de ES6 promises, pledge.js
----------------------------------------------------------------*/
// // TU CÓDIGO AQUÍ:
class $Promise{
    constructor(executor){
        if(typeof executor !== 'function') throw
        TypeError('Executor must be a function');
        this._state = 'pending'
        this._value = undefined

        const resolve = (value) => {
            this._internalResolve(value)
        }
    
        const reject = (reason) => {
            this._internalReject(reason)
        }
    
        executor(resolve, reject)
    }

    _internalResolve = (value) => {
        if(this._state !== 'pending') return;
        this._state = 'fulfilled'
        this._value = value
    }

    _internalReject = (reason) => {
        if(this._state !== 'pending') return;
        this._state = 'rejected'
        this._value = reason
    }
}



module.exports = $Promise;
/*-------------------------------------------------------
El spec fue diseñado para funcionar con Test'Em, por lo tanto no necesitamos
realmente usar module.exports. Pero aquí está para referencia:

module.exports = $Promise;

Entonces en proyectos Node podemos esribir cosas como estas:

var Promise = require('pledge');
…
var promise = new Promise(function (resolve, reject) { … });
--------------------------------------------------------*/
