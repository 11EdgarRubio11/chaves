!(function () {
  "use strict";
  var e = document.getElementById("regalo");
  document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("nombre"),
      document.getElementById("apellido"),
      document.getElementById("email");
    var t = document.getElementById("pase_dia"),
      n = document.getElementById("pase_dosdias"),
      l = document.getElementById("pase_completo"),
      o = document.getElementById("calcular"),
      a =
        (document.getElementById("error"),
        document.getElementById("btnRegistro"),
        document.getElementById("lista-productos"),
        document.getElementById("suma-total"),
        document.getElementById("camisa_evento")),
      d = document.getElementById("etiquetas");
    o &&
      o.addEventListener("click", function (o) {
        if (
          (o.preventDefault(),
          console.log("has hecho clic en calcular"),
          "" == e.value)
        )
          alert("Debes elegir un regalo"), e.focus();
        else {
          var c = parseInt(t.value, 10) || 0,
            m = parseInt(n.value, 10) || 0,
            u = parseInt(l.value, 10) || 0,
            s = parseInt(a.value, 10) || 0,
            r = parseInt(d.value, 10) || 0,
            g = 30 * c + 45 * m + 50 * u + 10 * s * 0.93 + 2 * r;
          [].push(c + "pases por dia"), console.log(g);
        }
      });
  });
})();
