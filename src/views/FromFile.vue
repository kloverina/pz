<template>
  <div class="container">
    <div class="save-to-file-block">
      <div class="info">
        <h2>
          Сохранить параметры в файл
        </h2>
      </div>
      <div class="content-block">
        <p>
          Сохранить все текущие параметры цепи в <i> json </i> файл.
        </p>
        <div class="button-wrapper">
          <button class="download-button" v-on:click="saveDataToFile()">
            <span> Скачать </span>
            <span class="download-icon"> </span>
          </button>
        </div>
      </div>


    </div>


    <div class="from-file-block">

      <div class="info">
        <h2>
          Ввод параметров из файла
        </h2>
      </div>

      <div class="content-block">
        <p>
          Выберите файл с парметрами схемы. Обратите внимание, что файл должен быть в формате <i> .json</i>.
        </p>
        <form v-on:submit.prevent="loadFromFile()">
          <div class="input__wrapper">
            <input name="file" type="file" id="field__file-2" class="field field__file" multiple
                   v-on:change="handleFileUpload"
            >

            <label class="field__file-wrapper" for="field__file-2"
            >
              <div class="field__file-fake" >
                {{(this.file === '') ? 'Файл не выбран' : this.file.name}}
              </div>
              <div class="field__file-button">Выбрать</div>
              <div class="warning" v-if="warning">
                <span> </span>
                <p> Неправильный формат файла. Поддерживаемый формат: <i>json.</i> </p>
              </div>
            </label>

          </div>

          <div class="button-wrapper">
            <button class="submit-button" type="submit"
                    v-if="!warning"
                    v-show="file !== ''"
            >
              Подтвердить
            </button>
          </div>
        </form>
      </div>
    </div>



  </div>
</template>

<script>
import fs from "fs";

export default {
  name: "FromFile",
  mounted() {
    window.scroll(0, 0)
  },
  data(){
    return {
      data: '',
      file: '',
      warning: false
    }
  },
  methods:{
    handleFileUpload: async function (e) {
      this.warning = false
      this.file = e.target.files[0]
      if (this.file.type !== 'application/json') {
        console.log('Неправильный формат файла. Поддерживаемый формат: .json.')
        this.warning = true
        return
      }
      let reader = new FileReader();

      reader.readAsText(this.file);
      let that = this;
      reader.onloadend = await function () {
        that.data = reader.result;
      }
    },
    loadFromFile(){
      let temp = JSON.parse(this.data)

      if (temp['NodeAmount'])
        localStorage.setItem('NodeAmount', temp['NodeAmount'])
      else{
        console.log('Неправильные данные в файле. Количество узлов не может быть равно 0.')
        return
      }

      if (temp['ResAmount'])
        localStorage.setItem('ResAmount', temp['ResAmount'])
      else
        localStorage.setItem('ResAmount', '0')

      if (temp['CapAmount'])
        localStorage.setItem('CapAmount', temp['CapAmount'])
      else
        localStorage.setItem('CapAmount', '0')

      if (temp['IndAmount'])
        localStorage.setItem('IndAmount', temp['IndAmount'])
      else
        localStorage.setItem('IndAmount', '0')


      if (temp['Resistors'])
        localStorage.setItem('Resistors', JSON.stringify(temp['Resistors']))
      else
        localStorage.setItem('Resistors', "[{\"positiveNode\":null,\"negativeNode\":null,\"value\":null}]")

      if (temp['Capacitors'])
        localStorage.setItem('Capacitors', JSON.stringify(temp['Capacitors']))
      else
        localStorage.setItem('Capacitors', "[{\"positiveNode\":null,\"negativeNode\":null,\"value\":null}]")

      if(temp['Inductors'])
        localStorage.setItem('Inductors', JSON.stringify(temp['Inductors']))
      else
        localStorage.setItem('Inductors', "[{\"positiveNode\":null,\"negativeNode\":null,\"value\":null}]")

    },

    saveDataToFile(){
      let filename = 'circuit-params-data'
      let data = {
        "NodeAmount": Number(localStorage.getItem('NodeAmount')),
        "ResAmount": Number(localStorage.getItem('ResAmount')),
        "CapAmount": Number(localStorage.getItem('CapAmount')),
        "IndAmount": Number(localStorage.getItem('IndAmount')),
        "Resistors": JSON.parse(localStorage.getItem('Resistors')),
        "Capacitors": JSON.parse(localStorage.getItem('Capacitors')),
        "Inductors": JSON.parse(localStorage.getItem('Inductors'))
      }
      let json = JSON.stringify(data, null, 2);
      let file = new Blob([json], {type: 'application/json'});
      if (window.navigator.msSaveOrOpenBlob) // IE10+
        window.navigator.msSaveOrOpenBlob(file, filename);
      else { // Others
        let a = document.createElement("a"),
            url = URL.createObjectURL(file);
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        setTimeout(function() {
          document.body.removeChild(a);
          window.URL.revokeObjectURL(url);
        }, 0);
      }
    }


  }
}
</script>

<style lang="scss">
$content_bc: #9dcccd;

  .info{
    margin-top: 10px;
    h3{
      padding: 0 40px;
      margin: 0;
    }
  }

  .from-file-block, .save-to-file-block{
    border-radius: 5px;
    padding-bottom: 20px;
    //margin-bottom: 40px;
  }




  .content-block{
    border-radius: 5px;
    padding: 0 40px;
    p{
      margin: 10px 0;
      padding: 0;
    }

    .button-wrapper{
      padding: 0 440px;
    }

    .download-button{
      //position: relative;
      background:  #1bbc9b;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      padding: 10px 20px;
      color: white;
      font-size: 1.125rem;
      font-weight: 700;
      span{
        text-align: center;
        margin: 0 5px;
      }
      .download-icon{
        width: 32px;
        height: 32px;
        background: url('../assets/images/icon-download.png') no-repeat center;
        background-size: cover;
      }
      span:not(.download-icon){
        //margin-left: 70px;
        //text-align: center;
      }
    }

    .submit-button{
      font-size: 1.125rem;
      font-weight: 700;
      color: white;
      margin: 20px auto;
      padding: 10px;
      //max-width: 200px;
      border-radius: 5px;
      background:#1bbc9b;
    }
  }

  .input__wrapper{
    margin-top: 20px;
  }

  .input__file-icon{
    margin: 0;
    padding: 0;
    min-height: 64px;
    min-width: 64px;
    background: url("../assets/images/icon-download.png") no-repeat;
  }
  .field__wrapper {
    width: 100%;
    position: relative;
    margin: 15px 0;
    text-align: center;
  }

  .field__file {
    opacity: 0;
    visibility: hidden;
    position: absolute;
  }

  .field__file-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    padding: 0 200px;
  }

  .field__file-fake {
    flex: 1 1 50%;
    height: 60px;
    width: calc(100% - 130px);
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    align-items: center;
    padding: 0 15px;
    background: white;
    border: 1px solid #c7c7c7;
    border-radius: 5px 0 0 5px;
    border-right: none;
  }

  .field__file-button {

    border-top: 1px solid #c7c7c7;
    border-bottom: 1px solid #c7c7c7;
    border-right: 1px solid #c7c7c7;
    width: 130px;
    height: 60px;
    //background: #1bbc9b;
    background: darken($content_bc, 20%);
    color: #fff;
    font-size: 1.125rem;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0 5px 5px 0;
    cursor: pointer;
  }


  .warning{
    padding: 5px 10px;
    border-radius: 5px;
    border: 1px solid black;
    margin: 15px 0 0;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    span{
      width: 28px;
      height: 28px;
      background: url('../assets/images/icon-info.png') center no-repeat;
      background-size: cover;
      margin-left: 5px;
      margin-right: 10px;
    }
  }


</style>