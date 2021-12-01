<template>
  <div class="container">
    <h2> Операционные усилители </h2>
    <TABLE BORDER ="1"  ALIGN = "center"  WIDTH = "100%">
      <THEAD>    <!--Заголовок таблицы-->

      <TR>
        <TH></TH>
        <TH>Rвх ком</TH>
        <TH>Rвых ком</TH>
        <TH>m </TH>
        <TH>Ft кгц</TH>
      </TR>

      </THEAD>
      <TBODY>      <!-- Тело таблицы -->
      <TR>
        <TD>140 УД1 </TD>
        <TD>100</TD>
        <TD>1.0</TD>
        <TD>10000</TD>
        <TD>1000</TD>

      </TR>
      <TR>
        <TD>153 УД1 </TD>
        <TD>120</TD>
        <TD>1.5</TD>
        <TD>12000</TD>
        <TD>1200</TD>
      </TR>

      <TR>
        <TD>140 УД7 </TD>
        <TD>150</TD>
        <TD>1.0</TD>
        <TD>15000</TD>
        <TD>1000</TD>
      </TR>
      <TR>
        <TD>153 УД2 </TD>
        <TD>100</TD>
        <TD>1.2</TD>
        <TD>10000</TD>
        <TD>1500</TD>
      </TR>
      <TR>
        <TD>К 154 УД1 </TD>
        <TD>100</TD>
        <TD>1.0</TD>
        <TD>11000</TD>
        <TD>1000</TD>
      </TR>
      <TR>
        <TD>153 УД4 </TD>
        <TD>120</TD>
        <TD>1.3</TD>
        <TD>12000</TD>
        <TD>1000</TD>
      </TR>
      <TR>
        <TD>140 УД7 </TD>
        <TD>130</TD>
        <TD>1.0</TD>
        <TD>10000</TD>
        <TD>1200</TD>
      </TR>
      <TR>
        <TD>140 УД10 </TD>
        <TD>100</TD>
        <TD>1.4</TD>
        <TD>13000</TD>
        <TD>1000</TD>
      </TR>
      <TR>
        <TD>140 УД 8А </TD>
        <TD>100</TD>
        <TD>1.0</TD>
        <TD>10000</TD>
        <TD>1300</TD>
      </TR>
      <TR>
        <TD>140 УД9 </TD>
        <TD>100</TD>
        <TD>1.2</TD>
        <TD>15000</TD>
        <TD>1000</TD>
      </TR>
      </TBODY>
    </TABLE>
  </div>
</template>

<script>
export default {
  name: "Table3_ob"
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