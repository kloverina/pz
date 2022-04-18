"use strict";


const Complex = require('complex.js');
export class CalculateCircuit {
    #resistors
    #inductors
    #capacitors
    #frequency
    nodeAmount
    #ju
    #eu
    #tri

    constructor() {
        this.W = 0
        this.S = 0

        if (localStorage.length < 6 || !localStorage.getItem('NodeAmount')){
            console.log('Some data is missing! Try to reload from file or enter from keyboard manually. ')
            return
        }
        this.nodeAmount = Number(localStorage.NodeAmount)
        this.#resistors = JSON.parse(localStorage.Resistors)
        this.#inductors = JSON.parse(localStorage.Inductors)
        this.#capacitors = JSON.parse(localStorage.Capacitors)
        this.#frequency = JSON.parse(localStorage.frequency)
        this.#ju =  JSON.parse(localStorage.JU)
        this.#eu =  JSON.parse(localStorage.EU)
        this.#tri =  JSON.parse(localStorage.TRI)

    }

    FormFrequencyMatrixFromNodes(dipoles, s, type){
        let i, j, g

        for(let index in dipoles){
            let dipole = dipoles[index]
            let nodes =  [dipole.positiveNode, dipole.negativeNode]

            for (let l = 0; l <= 1; l++) {

                i = +nodes[l];
                if (i === 0) continue
                for (let m = 0; m <= 1; m++)
                {

                    j = +nodes[m]
                    if (j === 0) continue

                    g = (1 - 2 * l) * (1 - 2 * m);

                    if (type === 'res') {
                        let temp = Complex(g).div(dipole.value)
                        this.W[i][j] = Complex((this.W[i][j]).add(temp))
                    }

                    else if (type === 'cap') {
                        let temp = Complex(g).mul(s).mul(dipole.value)

                        this.W[i][j] = Complex(this.W[i][j]).add(temp)

                    }

                    else {
                        let temp = Complex(g).div(s).mul(dipole.value)

                        this.W[i][j] = Complex(this.W[i][j]).add(temp)

                    }
                }

            }
        }
    }

    FormJU(s){
        let i, j, g
        let ys = Complex(0,0)
        for(let index in this.#ju){
            let ju = this.#ju[index]

            let div = Complex(s).mul(ju.values.T1).add(1)
            let den = Complex(s).mul(ju.values.T2).add(1)
            let temp = Complex(div).div(den)

            ys =  Complex(temp).mul(ju.values.y)

            for(let l = 2; l<=3; l++){
                i = ju.nodes[l]

                if ( i === 0) continue
                for(let m = 0; m<=1; m++){
                    j = ju.nodes[m]
                    //console.log('i', i, 'j', j)
                    if(j === 0) continue
                    g = (5 - 2 * l) * (1 - 2 * m)
                    let temp = Complex(ys).mul(g)
                    console.log(temp)

                    this.W[i][j] = Complex(this.W[i][j]).add(temp)
                }
            }
        }

    }

    async GetData(){

        this.W = Array.from(Array(this.nodeAmount+1), () => new Array(this.nodeAmount+1));

        for(let i =0; i< this.nodeAmount + 1; i++) {
          for (let j = 0; j < this.nodeAmount + 1; j++) {
              this.W[i][j] = new Complex(0, 0)
          }
        }

        if (this.#frequency.frequency === 'none') {
            await this.FormFrequencyMatrixFromNodes(this.#resistors, 0, 'res');
            this.RoundFinalAnswer()
            return
        }

        console.log('here')

        this.TransformCharacteristicsVector(this.#frequency)


        let that = this
        this.S.forEach(function (s) {
            that.FormFrequencyMatrixFromNodes(that.#resistors, s, 'res');
            that.FormFrequencyMatrixFromNodes(that.#inductors, s, 'ind');
            that.FormFrequencyMatrixFromNodes(that.#capacitors, s, 'cap');
            that.FormJU(s)

        })
        this.RoundFinalAnswer()
    }

    TransformCharacteristicsVector(frequency){
        if (! frequency.frequency){
            alert('Something went wrong!')
            return
        }

        let vector = []
        switch (frequency.frequency) {
            case 'single':
            {
                let frequencyValue = frequency.f_min
                let s = this.CalculateTransformCharacteristic(frequencyValue)
                vector.push(s)
                break
            }
            case 'linear':{
                console.log('linear')
                let frequencyValue = Number(frequency.f_min);

                while (frequencyValue <= frequency.f_max)
                {

                    vector.push(this.CalculateTransformCharacteristic(frequencyValue))
                    frequencyValue = +(frequencyValue + Number(frequency.df_k)).toFixed(3);
                    //frequencyValue = 1000
                }
                break
            }
            case 'logarithmic':{
                console.log('log')
                let frequencyValue = Number(frequency.f_min);
                while (frequencyValue <= Number(frequency.f_min))
                {
                    vector.push(this.CalculateTransformCharacteristic(frequencyValue))
                    frequencyValue = +(frequencyValue + Number(frequency.df_k)).toFixed(3);
                }
                break
            }

        }
        this.S = vector
    }

    CalculateTransformCharacteristic(freqValue){
        return new Complex(0.0,  Math.PI * 2 * freqValue)
    }

    RoundFinalAnswer(){

        for(let i =0; i< this.nodeAmount + 1; i++) {
            for (let j = 0; j < this.nodeAmount + 1; j++) {
                this.W[i][j].im = +this.W[i][j].im.toFixed(3)
                this.W[i][j].re = +this.W[i][j].re.toFixed(3)
            }
        }

        for (let i = 0; i < this.S.length; i++) {
            this.S[i].im = +this.S[i].im.toFixed(2)
            this.S[i].re = +this.S[i].re.toFixed(2)
        }
    }
}