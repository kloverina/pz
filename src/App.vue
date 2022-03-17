
<template>
  <div id="app">
    <div class="header">
      <div id="nav">
        <ul class="menu" >
          <div class="leftNav">
            <li class="icon">
              <router-link class="nav-link" to="/">
                <span> P </span>
                <span> Z </span>
              </router-link>
            </li>
          </div>

          <div class="rightNav">
            <li class="rightNav__item description dropdown">
               <span class="dropdown_button__toggleLabel">
                   <a class="toggleLabel_header">
                       <span class="toggleLabel_header__name">Описание</span>
                   </a>
               </span>

              <div class="dropdown__submenu submenu">

                <button class="submenu__button">
                  <router-link class="nav-link" to="/Input">
                    <span> Ввод с клавиатуры </span>
                  </router-link>
                </button>

                <button class="submenu__button">
                  <router-link class="nav-link" to="/from-file">
                    <span> Из файла</span>
                  </router-link>
                </button>

              </div>

            </li>

            <li class="rightNav__item">
              <router-link class="nav-link" to="/Edit">
                Редактирование
              </router-link>
            </li>


            <li class="rightNav__item directive dropdown">
               <span class="dropdown_button__toggleLabel">
                   <a class="toggleLabel_header" >
                       <span class="toggleLabel_header__name">Директивы</span>
                   </a>
               </span>

              <div class="dropdown__submenu submenu">

                <button class="submenu__button">
                  <router-link class="nav-link" to="/frequency_response">
                    <span> Вид частотной хар-ки </span>
                  </router-link>
                </button>

                <button class="submenu__button">
                  <router-link class="nav-link" to="/nodes">
                    <span> Входные-выходные узлы </span>
                  </router-link>
                </button>

              </div>

            </li>


            <li class="rightNav__item view dropdown">
               <span class="dropdown_button__toggleLabel">
                   <a class="toggleLabel_header">
                       <span class="toggleLabel_header__name">Тип компонента</span>
                   </a>
               </span>

              <div class="dropdown__submenu submenu">
                <button class="submenu__button">
                  <router-link class="nav-link" to="/table-bipolar-transistors">
                    <span> Биполярные транзисторы </span>
                  </router-link>
                </button>

                <button class="submenu__button">
                  <router-link class="nav-link" to="/table-unipolar-transistors">
                    <span> Униполярные транзисторы </span>
                  </router-link>
                </button>

                <button class="submenu__button">
                  <router-link class="nav-link" to="/table-operational-amplifiers">
                    <span> Операционные усилители </span>
                  </router-link>
                </button>

              </div>

            </li>

            <li class="rightNav__item">
              <router-link class="nav-link" to="/calculate"> Расчет </router-link>
            </li>
          </div>
        </ul>
      </div>
    </div>
    <div class="content">
      <router-view />
    </div>

    <div class="footer">
      <div class="container">
         <span>
             &copy; 2021 -  <a href="https://github.com/kloverina">Kloverina - GitHub</a>
         </span>
      </div>
  </div>
  </div>
</template>


