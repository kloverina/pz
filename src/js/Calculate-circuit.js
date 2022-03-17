"use strict";


import {round} from "mathjs";

const Complex = require('complex.js');
export class CalculateCircuit {
    nodeAmount
    #resistors
    #inductors
    #capacitors
    W
    S
    constructor() {
    }

    FormFrequencyMatrixFromNodes(dipoles, s, type){
        let i, j, g

        for(let index in dipoles){
            let dipole = dipoles[index]
            let nodes =  [dipole.positiveNode, dipole.negativeNode]

            for (let l = 0; l <= 1; l++)
            {
                i = nodes[l];

                if (i == 0) continue

                for (let m = 0; m <= 1; m++)
                {
                    j = nodes[m];

                    if (j == 0) continue

                    g = (1 - 2 * l) * (1 - 2 * m);

                    if (type === 'res') {
                        //this.W[i][j] += g / dipole.value;
                        console.log(i, j, ': ', "W: ", this.W[i][j])
                        console.log('G: ', Complex(g), g, ' ,value: ', Complex(dipole.value), dipole.value)


                        let temp = Complex(g).div(Complex(dipole.value))
                        //let temp = Complex(Complex(g).div(dipole.value))

                        this.W[i][j] = Complex(this.W[i][j]).add(Complex(temp))
                        console.log('Temp', temp, "W: ",  this.W[i][j])
                        console.log("    ")

                    }
                    else if (type === 'cap')
                        this.W[i][j] += g * s * dipole.value;
                    else
                        this.W[i][j] += g / (s * dipole.value);
                }

            }
        }
    }

    GetData(){
        if (localStorage.length < 9 || !localStorage.getItem('NodeAmount')){
            alert('Some data is missing! Try to reload from file or enter from keyboard manually. ')
            return
        }
        this.nodeAmount = Number(localStorage.NodeAmount)
        this.#resistors = JSON.parse(localStorage.Resistors)
        this.#inductors = JSON.parse(localStorage.Inductors)
        this.#capacitors = JSON.parse(localStorage.Capacitors)

        this.W = Array.from(Array(4), () => new Array(4));
        let temp
        for(let i =0; i< this.nodeAmount + 1; i++) {
          for (let j = 0; j < this.nodeAmount + 1; j++) {
              temp = new Complex(0, 0)
              this.W[i][j] = temp
          }
        }
        this.FormFrequencyMatrixFromNodes(this.#resistors, 0, 'res');
        for(let i =0; i< this.nodeAmount + 1; i++) {
            for (let j = 0; j < this.nodeAmount + 1; j++) {
                this.W[i][j] = Math.round(parseFloat(this.W[i][j]) * 1000) / 1000
            }
        }


    }





    quadraticRoot(a, b, c) {
        let sqrt = Complex(b * b - 4 * a * c).sqrt()
        let x1 = Complex(-b).add(sqrt).div(2 * a)
        let x2 = Complex(-b).sub(sqrt).div(2 * a)
        return {x1, x2}
    }
}