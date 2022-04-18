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
    #oy

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
        this.#oy =  JSON.parse(localStorage.OY)

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

                    this.W[i][j] = Complex(this.W[i][j]).add(temp)
                }
            }
        }

    }

    FormEU(s){
        let ms = Complex(0,0)
        let i, j, g
        for(let index in this.#eu){
            let eu = this.#eu[index]

            let temp = () => {
                let div = Complex(s).mul(eu.values.T1).add(1)
                let den = Complex(s).mul(eu.values.T2).add(1)
                let ans = Complex(div).div(den)
                return Complex(ans).mul(eu.values.y)
            }
            ms =  temp()
            i = this.nodeAmount + Number(index)

            for(let m = 0; m<=3; m++){
                j = eu.nodes[m]
                //console.log('i', i, 'j', j, m)
                if(j === 0) continue
                if(m < 2){
                    g = 1 - 2 * m
                    let temp = Complex(ms).mul(g)
                    this.W[i][j] = Complex(this.W[i][j]).add(temp)
                }
                else{
                    g = 5 - 2 * m
                    this.W[i][j] = Complex(this.W[i][j]).sub(g)
                    this.W[j][i] = Complex(this.W[j][i]).add(g)
                }
            }
        }
        /*if (s === this.S[this.S.length - 1])
         this.nodeAmount += this.#eu.length*/
    }

    FormTRI(){
        let i, j, g
        for (let index in this.#tri){
            let tri_el = this.#tri[index]
            i = this.nodeAmount + (+index)
            for(let m =0; m<=3; m++){
                j = tri_el.nodes[m]
                if (j === 0) continue
                if(m<2){
                    g = 1 - 2 * m
                    let temp = g * tri_el.n
                    this.W[i][j]= Complex(this.W[j][i]).add(temp)
                }
                else{
                    g = 5 - m * 2
                    this.W[i][j]= Complex(this.W[j][i]).sub(g)
                    this.W[j][i]= Complex(this.W[j][i]).add(g)
                }
            }
        }
    }

    FormOY(s){
        let cn = Complex(0,0)
        // многомерный массив 5 на 5
        let y = Array.from(Array(5), () => new Array(5));
        for(let i =0; i< 5; i++) {
            for (let j = 0; j < 5; j++) {
                y[i][j] = new Complex(0, 0)
            }
        }

        let ys = Complex(0,0)
        let in_ju = [1, 2, 4, 3];
        let in_d = [
            [1, 2, 3, 4],
            [1, 2, 3, 4]
        ]

        let i, j, g, ii, jj, l, m

        for(let index in this.#oy){
            let elem = this.#oy[index]

            for(let k=0; k<=1; k++){
                for(l =0; l<=1; l++){
                    i = in_d[k][l]
                    for(m =0; m<=1; m++){
                        j = in_d[k][m];
                        g = (1-2*l)*(1-2*m);
                        let temp = g / elem.values[k]
                        y[i][j] = Complex(y[i][j]).add(temp)
                    }
                }
            }


            let temp = Complex(s).mul(0.16).mul(elem.values[2]).div(elem.values[3]).add(1)
            ys = Complex(elem.values[2]).div(temp).div(elem.values[1])




            for(l = 2; l<=3; l++){
                i = in_ju[l];
                for(m = 0; m<=1; m++){
                    j = in_ju[m];
                    g = (1 - 2 * m) * (5 - 2 * l);
                    let temp = Complex(ys).mul(g)
                    y[i][j] = Complex(y[i][j]).add(temp)
                }
            }



            for (i = 0; i <= 3; i++)
            {
                ii = elem.nodes[i];

                if(ii === 0) continue;
                for (j = 0; j <= 3; j++)
                {
                    jj = elem.nodes[j];

                    if(jj === 0) continue;

                    this.W[ii][jj] = Complex(this.W[ii][jj]).add(y[i][j])

                }
            }
            console.log(y)

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

        this.TransformCharacteristicsVector(this.#frequency)


        let that = this
        this.S.forEach(function (s) {
            that.FormFrequencyMatrixFromNodes(that.#resistors, s, 'res');
            that.FormFrequencyMatrixFromNodes(that.#inductors, s, 'ind');
            that.FormFrequencyMatrixFromNodes(that.#capacitors, s, 'cap');
            that.FormJU(s)
            that.FormEU(s)
            that.FormOY(s)
        })

        this.FormTRI()
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
                this.W[i][j].im = +this.W[i][j].im.toFixed(2)
                this.W[i][j].re = +this.W[i][j].re.toFixed(2)
            }
        }

        for (let i = 0; i < this.S.length; i++) {
            this.S[i].im = +this.S[i].im.toFixed(2)
            this.S[i].re = +this.S[i].re.toFixed(2)
        }
    }
}