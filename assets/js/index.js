$("#btnInput").on("click", function () {
  limpiarHTMLError();
  let heroId = Number($("#inputHero").val());
  let validadorHero = /^(?:[1-9]|[1-9][0-9]|[1-9][0-9][0-9]|7[0-2][0-9]|73[0-1])$/;
  if (validadorHero.test(heroId)) {
    $("#resultadoHero").ApiHero();
  } else {
    let errormsj = $("#errorHero").append(
      `<p class="text-center fs-2">Debes ingresar un numero entre 1 y 731</p>`
    );
    setTimeout(() => {
      errormsj.empty();
    }, 5000);
  }
});

function limpiarHTMLError() {
  const errorHero = $("#errorHero");
  errorHero.empty();
}
