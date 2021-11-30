<template>
  <div class="container">
    <div class="info">
      <h2>
        Выберите файл с парметрами схемы
      </h2>
    </div>

    <div class="fromFile">
      <p>
        Обратите внимание, что файл должен быть в формате <i> .json</i>.
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
          </label>
        </div>

        <div class="button-wrapper">
          <button class="submit-button" type="submit">
            Подтвердить
          </button>
        </div>
      </form>
      <p> {{message}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "FromFile",
  data(){
    return {
      message: 'oh',
      file: ''
    }
  },
  methods:{
    handleFileUpload: async function (e) {
      let tpm = this.message
      this.file = e.target.files[0]
      let reader = new FileReader();

      reader.readAsText(this.file);
      var data;
      var that = this;  //the important bit
      reader.onloadend = await function () { // here we save variable 'file' in closure
        data = reader.result
        that.message = data;
      }


    },
    loadFromFile(){

    }
  }
}
</script>

<style lang="scss">
$content_bc: #9dcccd;

  .info{
    margin-top: 100px;
  }

  .fromFile{
    //background: rgb(180, 230, 231);
    //min-height: 100px;
    border-radius: 5px;
    padding: 0 40px;
    p{
      margin: 10px 0;
      padding: 0;
    }

    .submit-button{
      color: white;
      margin: 20px auto;
      padding: 10px;
      max-width: 200px;
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


</style>