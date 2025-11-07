function uniquementLettres(name) {
  x = name.toUpperCase();
  var i = 0;
  while (x.charAt(i) >= "A" && x.charAt(i) <= "Z" && i < x.length) {
    i++;
  }
  return i == x.length;
}

function verif1(event) {
  event.preventDefault();

  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var score = document.getElementById("score").value;
  var ch = document.getElementById("ch").selectedIndex;

  if (name === "" || email === "" || ch <= 0) {
    alert("Veuillez remplir tous les champs contenant *");
    return false;
  }
  if (!uniquementLettres(name)) {
    alert("le nom doit etre composé uniquement par des lettres alphabetiques");
    return false;
  }

  if (isNaN(score)) {
    alert("Le score un nombre SVP!");
    return false;
  }

  var p1 = email.indexOf("@");
  var p2 = email.lastIndexOf(".");
  var ch1 = email.substr(0, p1);
  var ch2 = email.substring(p1 + 1, p2);
  var ch3 = email.substring(p2 + 1);

  if (
    p1 == -1 ||
    p2 == -1 ||
    ch1 == "" ||
    ch2 == "" ||
    ch3 == "" ||
    ch3.length < 2 ||
    ch3.length > 3
  ) {
    alert("Email invalide.");
    return false;
  }

  alert(`Merci, ${name}, votre message a été envoyé !`);
  document.getElementById("form").reset();
}
