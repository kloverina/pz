<template>
  <div id="app">
    <div class="header">
      <img src="" alt="logo" />
      <div id="nav">
        <router-link class="nav-link" to="/">Gallery</router-link>
        <router-link class="nav-link" to="/statistics">Statistics</router-link>

      </div>
    </div>
    <div class="content">
      <router-view />
    </div>
    <div class="footer">Kloverina</div>
  </div>
</template>

<style lang="sass">
*
  padding: 0
  margin: 0
  box-sizing: border-box

input, textarea, select
  -webkit-appearance: none
  border: none
  outline: none
  background: none

button
  border: none
  outline: none
  background: none

#app
  min-width: 1510px

.header
  display: flex
  justify-content: center
  align-items: center
  padding: 34px 142px 34px 142px
  #nav
    margin-left: calc(92px - 15px)
    margin-right: auto

.nav-link
  text-decoration: none
  margin-right: 33px
  border-bottom: 2px solid transparent
  font-family: Roboto
  font-style: normal
  font-weight: 500
  font-size: 18px
  line-height: 21px
  color: #333333
  padding: 2px 15px
  &_no-pad-mar
    padding: 2px 0px
    margin-right: 0px
    cursor: not-allowed
    &:hover
      border-bottom: 2px solid black

.active
  color: #2F80ED !important
  border-bottom: 2px solid #2F80ED

.content
  padding: 0px 142px 20px 142px
  min-height: calc(100vh - 44px - 89px)

.footer
  height: 44px
  display: flex
  align-items: center
  justify-content: center
  background-color: #F2F2F2
  font-family: Roboto
  font-style: normal
  font-weight: 500
  font-size: 16px
  line-height: 22px
  letter-spacing: 0.005em
  color: #000000
  filter: drop-shadow(0px -2px 10px rgba(0, 0, 0, 0.25))
</style>
