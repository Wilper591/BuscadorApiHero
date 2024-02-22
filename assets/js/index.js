$("#btnInput").on("click", function () {
  limpiarHTML();
  let heroId = Number($("#inputHero").val());
  if (heroId <= 0 || heroId > 731 || heroId === "") {
    let errormsj = $("#errorHero").append(
      `<p class="text-center fs-2">Debes ingresar un numero entre 1 y 731</p>`
    );
    setTimeout(() => {
      errormsj.empty();
    }, 5000);
  } else {
    $("#resultadoHero").ApiHero();
  }
});

function limpiarHTML() {
  const errorHero = $("#errorHero");
  errorHero.empty();
}

