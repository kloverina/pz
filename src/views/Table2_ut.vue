<template>
  <div class="container">
    <h2>Униполярные транзисторы</h2>

    <TABLE BORDER ="1"  ALIGN = "center"  WIDTH = "100%">
      <THEAD>    <!--Заголовок таблицы-->
      <TR>
        <TH></TH>
        <TH>R c ком</TH>
        <TH>C зс пкф</TH>
        <TH>C зи пкф</TH>
        <TH>C си пкф</TH>
        <TH>S ма/в </TH>
      </TR>
      </THEAD>
      <TBODY>      <!-- Тело таблицы -->
      <TR>
        <TD>КП 302 А </TD>
        <TD>1000</TD>
        <TD>1.0</TD>
        <TD>1.1</TD>
        <TD>1.0</TD>
        <TD>10</TD>
      </TR>
      <TR>
        <TD>2П 103 А </TD>
        <TD>1200</TD>
        <TD>1.5</TD>
        <TD>1.2</TD>
        <TD>1.5</TD>
        <TD>12</TD>
      </TR>
      <TR>
        <TD>2П 303 А </TD>
        <TD>1300</TD>
        <TD>1.3</TD>
        <TD>1.0</TD>
        <TD>1.0</TD>
        <TD>15</TD>
      </TR>
      <TR>
        <TD>2П 303 Г </TD>
        <TD>1000</TD>
        <TD>1.2</TD>
        <TD>1.2</TD>
        <TD>1.2</TD>
        <TD>12</TD>
      </TR>
      <TR>
        <TD>2П 303 Д </TD>
        <TD>1000</TD>
        <TD>1.5</TD>
        <TD>1.5</TD>
        <TD>1.0</TD>
        <TD>10</TD>
      </TR>
      <TR>
        <TD>2П 103 В </TD>
        <TD>1200</TD>
        <TD>1.0</TD>
        <TD>1.0</TD>
        <TD>1.3</TD>
        <TD>14</TD>
      </TR>
      <TR>
        <TD>2П 302 А</TD>
        <TD>1200</TD>
        <TD>1.4</TD>
        <TD>1.4</TD>
        <TD>1.0</TD>
        <TD>12</TD>
      </TR>
      <TR>
        <TD>2П 103 Г </TD>
        <TD>1100</TD>
        <TD>1.0</TD>
        <TD>1.0</TD>
        <TD>1.2</TD>
        <TD>10</TD>
      </TR>
      <TR>
        <TD>2П 302 Б </TD>
        <TD>1000</TD>
        <TD>1.5</TD>
        <TD>1.0</TD>
        <TD>1.0</TD>
        <TD>14</TD>
      </TR>
      <TR>
        <TD>2П 303 В </TD>
        <TD>1500</TD>
        <TD>1.0</TD>
        <TD>1.3</TD>
        <TD>1.1</TD>
        <TD>10</TD>
      </TR>
      </TBODY>
    </TABLE>

  </div>

</template>

<script>
export default {
  name: "Table2_ut"
}
</script>

<style lang="scss">

h2{
  text-align: center
}
table{
  width: 100%;
  border-collapse: collapse;
}
th, td{
  border: 1px solid black;
  padding: 3px;
}

th{
  background-color: #9dcdae;
}

</style>