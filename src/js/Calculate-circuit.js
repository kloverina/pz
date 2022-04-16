"use strict";


const Complex = require('complex.js');
export class CalculateCircuit {
    #resistors
    #inductors
    #capacitors
    #frequency
    nodeAmount

    constructor() {
        this.W = 0
        this.S = 0
    }

    FormFrequencyMatrixFromNodes(dipoles, s, type){
        let i, j, g

        for(let index in dipoles){
            let dipole = dipoles[index]
            let nodes =  [dipole.positiveNode, dipole.negativeNode]
            console.log(dipoles)
            console.log(nodes)

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

    async GetData(){
        if (localStorage.length < 9 || !localStorage.getItem('NodeAmount')){
            alert('Some data is missing! Try to reload from file or enter from keyboard manually. ')
            return
        }
        this.nodeAmount = Number(localStorage.NodeAmount)
        this.#resistors = JSON.parse(localStorage.Resistors)
        this.#inductors = JSON.parse(localStorage.Inductors)
        this.#capacitors = JSON.parse(localStorage.Capacitors)
        this.#frequency = JSON.parse(localStorage.frequency)


        this.W = Array.from(Array(this.nodeAmount+1), () => new Array(this.nodeAmount+1));

        for(let i =0; i< this.nodeAmount + 1; i++) {
          for (let j = 0; j < this.nodeAmount + 1; j++) {
              this.W[i][j] = new Complex(0, 0)
              //this.W[i][j] = 0
          }
        }

        if (this.#frequency.frequency === 'none') {
            await this.FormFrequencyMatrixFromNodes(this.#resistors, 0, 'res');
            this.RoundFinalAnswer()
            return
        }

        this.TransformCharacteristicsVector(this.#frequency)

        let that = this
        this.S.forEach(function (s) {
            that.FormFrequencyMatrixFromNodes(that.#resistors, s, 'res');
            that.FormFrequencyMatrixFromNodes(that.#inductors, s, 'ind');
            that.FormFrequencyMatrixFromNodes(that.#capacitors, s, 'cap');
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
                console.log('single:')
                let frequencyValue = frequency.f_min
                let s = this.CalculateTransformCharacteristic(frequencyValue)
                vector.push(s)
                break
            }
            case 'linear':{
                console.log('linear:')

                let frequencyValue = frequency.f_min;

                while (frequencyValue <= frequency.f_max)
                {
                    vector.push(this.CalculateTransformCharacteristic(frequencyValue))
                    frequencyValue += frequency.df_k;
                }
                break
            }
            case 'logarithmic':{
                console.log('logarithmic:')
                let frequencyValue = frequency.f_min;

                while (frequencyValue <= frequency.f_max)
                {
                    vector.push(this.CalculateTransformCharacteristic(frequencyValue))
                    frequencyValue += frequency.df_k;
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
                //this.W[i][j] = Math.round(parseFloat(this.W[i][j]) * 1000) / 1000
                //this.W[i][j].im = +this.W[i][j].im.toFixed(3)
                //this.W[i][j].re = +this.W[i][j].re.toFixed(3)
            }
        }


        for (let i = 0; i < this.S.length; i++) {
            console.log(this.S[i])
            this.S[i].im = +this.S[i].im.toFixed(3)
            this.S[i].re = +this.S[i].re.toFixed(3)
        }
    }
}