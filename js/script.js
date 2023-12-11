document.addEventListener("DOMContentLoaded", function () {
  var overlay = document.getElementById("overlay");

  // Verifica se o cookie 'ageConfirmed' existe
  var ageConfirmed = getCookie("ageConfirmed");

  // Se o cookie não existir, exibe o pop-up
  if (!ageConfirmed) {
    overlay.style.display = "flex";
  }
});

function confirmAge(isOver18) {
  var overlay = document.getElementById("overlay");

  if (isOver18) {
    // Define o cookie 'ageConfirmed' com a validade de 365 dias
    setCookie("ageConfirmed", "true", 365);
    overlay.style.display = "none"; // Oculta o pop-up se a idade for confirmada
    // Adicione aqui o código para mostrar o conteúdo principal do site
  } else {
    alert("Desculpe, o acesso é permitido apenas para maiores de 18 anos.");
    // Adicione aqui o código para redirecionar ou tomar outras ações adequadas
  }
}

// Função para definir cookies
function setCookie(name, value, days) {
  var expires = "";
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + value + expires + "; path=/";
}

// Função para obter o valor de um cookie
function getCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}
