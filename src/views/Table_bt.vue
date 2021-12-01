<template>
  <div class="container">
    <h2 class="center"> Биполярные транзисторы </h2>

    <TABLE>
      <THEAD>
      <TR>
        <TH></TH>
        <TH>Rb ком</TH>
        <TH>Re ком</TH>
        <TH>Rc ком</TH>
        <TH>Ce пкф</TH>
        <TH>Cc пкф</TH>
        <TH>b</TH>

      </TR>
      </THEAD>
      <TBODY>      <!-- Тело таблицы -->
      <TR>
        <TD>КТ 350 А </TD>
        <TD>0.1</TD>
        <TD>0.025</TD>
        <TD>1000</TD>
        <TD>15</TD>
        <TD>1</TD>
        <TD>100</TD>
      </TR>
      <TR>
        <TD>КТ 818 Г </TD>
        <TD>0.15</TD>
        <TD>0.02</TD>
        <TD>1500</TD>
        <TD>10</TD>
        <TD>1.5</TD>
        <TD>120</TD>
      </TR>
      <TR>
        <TD>КТ 503 Д </TD>
        <TD>0.2</TD>
        <TD>0.02</TD>
        <TD>1200</TD>
        <TD>12</TD>
        <TD>1.0</TD>
        <TD>110</TD>
      </TR>
      <TR>
        <TD>КТ 203 В </TD>
        <TD>0.1</TD>
        <TD>0.03</TD>
        <TD>1000</TD>
        <TD>15</TD>
        <TD>1</TD>
        <TD>100</TD>
      </TR>
      <TR>
        <TD>2Т 208 К </TD>
        <TD>0.25</TD>
        <TD>0.025</TD>
        <TD>1300</TD>
        <TD>10</TD>
        <TD>1.5</TD>
        <TD>130</TD>
      </TR>
      <TR>
        <TD>КТ 361 Б </TD>
        <TD>0.15</TD>
        <TD>0.02</TD>
        <TD>1000</TD>
        <TD>15</TD>
        <TD>1.0</TD>
        <TD>120</TD>
      </TR>
      <TR>
        <TD>КТ 502 Д </TD>
        <TD>0.2</TD>
        <TD>0.025</TD>
        <TD>1200</TD>
        <TD>10</TD>
        <TD>1.0</TD>
        <TD>130</TD>
      </TR>
      <TR>
        <TD>2Т 368 Б </TD>
        <TD>0.1</TD>
        <TD>0.02</TD>
        <TD>1100</TD>
        <TD>15</TD>
        <TD>1.5</TD>
        <TD>100</TD>
      </TR>
      <TR>
        <TD>2Т 312 А </TD>
        <TD>0.15</TD>
        <TD>0.03</TD>
        <TD>1100</TD>
        <TD>10</TD>
        <TD>1.0</TD>
        <TD>120</TD>
      </TR>
      <TR>
        <TD>КТ 315 А </TD>
        <TD>0.5</TD>
        <TD>0.03</TD>
        <TD>1400</TD>
        <TD>15</TD>
        <TD>1.5</TD>
        <TD>100</TD>
      </TR>
      </TBODY>
    </TABLE>
  </div>
</template>

<script>
export default {
  name: "Table_bt"
}
</script>

<style lang="scss">

   td{
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