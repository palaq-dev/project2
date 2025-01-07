const brojNaredbi = 43;
const brojOpasnosti = 43;
const isKorisneInformacije = window.location.pathname == '/project2/korisne-informacije.html';
const isPocetna = window.location.pathname == '/project2/index.html' || window.location.pathname == '/project2';
const isAutor = window.location.pathname == '/project2/o-autoru.html';

let navigacijaElementi = [
  {
    naziv: "Početna",
    link: "index.html"
  },
  {
    naziv: "Korisne informacije",
    link: "korisne-informacije.html"
  },
  {
    naziv: "O autoru",
    link: "o-autoru.html"
  },
  {
    naziv: "Mapa sajta",
    link: "sitemap.xml"
  },
  {
    naziv: "RSS",
    link: "RSS.xml"
  },
  {
    naziv: "Dokumentacija",
    link: "Dokumentacija.pdf"
  },
];

let srednjiTekstovi = [
  {
    naslov: "Inovativni pristup",
    tekst: "Odnos instruktora vožnje sa polaznikom mora biti zasnovan na poverenju. Obzirom da je svaki polaznik individua za sebe, da svako razmišlja na svoj način i da se svakom polazniku treba obraćati na specifičan način, naši instruktori su prošli psihološke testove koji daju dozvolu za bavljenjem tim poslom. Kod nas je sve podređeno tome da se polaznik oseća poštovano i ugodno, a sa druge strane pozitivno."
  },
  {
    naslov: "Fleksibilan raspored",
    tekst: "Ukoliko imate tesan i specifičan raspored obaveza, ukoliko ste stalno zaposleni ili pohađate školu ili fakultet, sa našim instruktorima se možete dogovarati oko svakog termina za časove vožnje. Raspored može biti veoma fleksibilan, od ranih jutarnjih časova do kasnih večernjih, uz mogućnost spajanja u blok-časove."
  },
  {
    naslov: "Kako izabrati instruktora vožnje?",
    tekst: "Dobar instruktor vožnje mora biti vrhunski profesionalac u svom poslu, a prioriteti mu moraju bit stručna i zanimljiva obuka za polaganje vozačkog ispita. Pored toga, dobar instruktor mora biti:",
    lista: ["Odgovoran, pedantan i tačan;", "Pošten i korektan u odnosu sa kandidatom;", "Dobar pedagog;", "Sposoban da prenese znanje;", "Uzor u vožnji u odnosu na druge učesnike u saobraćaju."]
  },
  {
    naslov: "Saveti koji Vam mogu biti od pomoći da prevaziđete strah?",
    tekst: "Kada sednete u svog ljubimca, najpre se postarajte da dobro namestite sedište za vozača kako bi se osećali komforno i sigurnije tokom vožnje. Podesite retrovizore da imate dobru preglednost, vežite se i krenite u vozačku avanturu. Jedno od najvažnijih pravila koje svaki “početnik” u vožnji treba da zna je da Vi upravljate autom, a ne on vama. Dakle, nema mesta za strah i paniku kada znate da ste Vi taj koji upravlja vozilom."
  }
];

let vozila = [{
  marka: "Renault",
  gorivo: "Dizel",
  model: "Clio"

}, {
  marka: "Opel",
  gorivo: "Dizel",
  model: "Astra"

}, {
  marka: "Zastava",
  gorivo: "Benzin",
  model: "Yugo"

}, {
  marka: "Mercedes",
  gorivo: "Benzin",
  model: "C220"
}
];

window.addEventListener('load', function () {

  const submitButton = document.getElementById("submitForm");
  const form = document.getElementsByTagName("form");
  if (submitButton != null) {
    submitButton.addEventListener('click', (e) => {
      e.preventDefault();
      onFormValidation();
      form[0].reset();
    });
  }

  $('#errors').hide("fast");
  $('#logo .slika-logo').hide(5).show(2000);
  $('#naslovni-tekst h1').animate({
    opacity: '0.1'
  }, 1000);
  $('#naslovni-tekst h1').animate({
    opacity: '1'
  }, 1000);
  $('.container form').hide(5).show(1000);
  $('#slika-autor #slika img').animate({
    opacity: '0.3'
  }, 1000);
  $('#slika-autor #slika img').animate({
    opacity: '1'
  }, 1000);
  $('#tekst-autor').hide(5).show(5000);

  $(document).ready(function () {
    $('#lista-navigacija li').hover(function () {
      $(this).animate({ paddingLeft: '-=20px' }, 200);
    }, function () {
      $(this).animate({ paddingLeft: '+=20px' }, 200);
    });
  });

  $(document).ready(function () {
    $('.poligonska-radnja img').hover(function () {
      $(this).animate({ paddingLeft: '+=50px' }, 300);
    }, function () {
      $(this).animate({ paddingLeft: '-=50px' }, 300);
    });
  });

  for (let i = 0; i < brojNaredbi; i++) {
    $("#izricite-naredbe-sekcija").append("<article><img src='assets/img/naredbe/" + i + ".png'/></article>");
  }
  for (let i = 0; i < brojOpasnosti; i++) {
    $("#znakovi-opasnosti-sekcija").append("<article><img src='assets/img/opasnosti/" + i + ".png'/></article>");
  }
  if (isPocetna) {
    $('#slika-kako-do-vozacke').izoomify();
  }
});

var slideIndex = 1;
if (isPocetna) {
  setInterval(() => {
    plusSlides(1);
  }, 3000);
}

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("tacka");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

function Navigacija() {
  let x = document.getElementById("navigacija");
  if (x.className === "navigacija") {
    x.className += " responsive";
  } else {
    x.className = "navigacija";
  }
}

function onFormValidation() {
  let errorMessage = document.getElementById("errors");
  let errors = validate();
  let errorMsg = "";

  if (errors.length) {
    errorMessage.style.display = "block";
    for (let error of errors) {
      errorMsg += `<p class="text-center text-danger">${error}</p>`;
    }
  } else {
    errorMessage.style.display = "none";
  }

  errorMessage.innerHTML = errorMsg;
}

function validate() {
  const validationRules = [
    {
      input: document.forms["forma"]["Ime"].value,
      regex: /^[A-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/,
      errorMessage: "Ime je obavezno i mora imati prvo pocetno veliko slovo."
    },
    {
      input: document.forms["forma"]["email"].value,
      regex: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      errorMessage: "Email adresa je obavezna i mora biti ispravnog formata."
    },
    {
      input: document.forms["forma"]["kategorija"].value,
      regex: /^B|B1|BE$/,
      errorMessage: "Kategorija moze biti B, B1 ili BE."
    },
    {
      input: document.forms["forma"]["fileUpload"].value,
      regex: /^.*\.png|.*\.jpg|.*\.jpeg$/,
      errorMessage: "Fajl mora biti formata png, jpg ili jpeg."
    },
    {
      input: $('[name=flexRadioDefault]:checked').attr("data-val"),
      regex: /^S|Z|N$/,
      errorMessage: "Status klijenta je obavezan."
    },
    {
      input: document.forms["forma"]["pitanje"].value,
      regex: /^.{10,500}$/,
      errorMessage: "Pitanje je obavezano i mora da sadrzi minimum 10, a maksimum 500 karaktera."
    }
  ];

  var errorMessages = [];
  for (var rule of validationRules) {
    if (!validateField(rule.input, rule.regex)) {
      errorMessages.push(rule.errorMessage);
    }
  }
  return errorMessages;
}

function validateField(fieldValue, regex) {
  return regex.test(fieldValue);
}

function prikaziVozilo(gorivo) {
  document.getElementById("automobili").innerHTML = '';
  vozila.forEach(vozilo => {
    if (vozilo.gorivo == gorivo || gorivo == "sva") {
      $("#automobili").append("<li class='list-group-item'>Marka: " + vozilo.marka + "<br>Gorivo: " + vozilo.gorivo + "<br>Model: " + vozilo.model + "</li>");
    }
  });
}

const quizData = [
  {
    question: "Vozač koji ima probnu vozačku dozvolu ne sme na motoputu upravljati vozilom brzinom većom od?",
    a: "80km/h",
    b: "110km/h",
    c: "100km/h",
    d: "90km/h",
    correct: "d",
  },
  {
    question: "Redovni tehnički pregled putničkog vozila traje najmanje?",
    a: "40min",
    b: "30min",
    c: "60min",
    d: "20min",
    correct: "b",
  },
  {
    question: "Rok važenja registracione nalepnice je?",
    a: "1 godina",
    b: "3 godine",
    c: "5 godina",
    d: "6 meseci",
    correct: "a",
  },
  {
    question: "U oznaci pneumatika 195/65 R 16 89 H nosivost je iskazana brojem?",
    a: "195",
    b: "89",
    c: "65",
    d: "16",
    correct: "b",
  },

];

const poligonskeRadnje = [
  {
    naslov: "VOŽNJA NAPRED SA PROMENOM STEPENA PRENOSA I UNAZAD SA PROMENOM SAOBRAĆAJNE TRAKE",
    tekst: "Izvodi se prema situaciji na slici. Kandidat od polaznog polja „I”, ubrzava vozilo sa promenom stepena prenosa i zaustavlja se u zaustavnom polju „II”, pri čemu horizontalna projekcija najisturenije tačke prednjeg dela vozila na podlogu mora biti u tom polju. Iz tog položaja vozilo se kreće hodom unazad uz promenu saobraćajne trake, prolazeći kroz prolazno polje „III” i ponovnom promenom saobraćajne trake vraća se na polazno polje „I”, pri čemu se celo vozilo zaustavlja u tom polju. Prilikom kretanja vozila hodom unazad kandidat koristi vozačka ogledala, odnosno gleda preko ramena. Tokom kretanja hodom unazad od zaustavnog polja „II” do polaznog polja „I” vozilo se može zaustaviti najviše 2 puta i izvršiti jedan korak korekcije (jedan korak korekcije je kretanje vozilom suprotno zadatom smeru).",
    slika: "assets/img/poligonska-radnja-prva.jpg",
  },
  {
    naslov: "KOČENJE I ZAUSTAVLJANJE",
    tekst: "Izvodi se prema situaciji na slici. Kandidat od polazne linije „m” do linije kočenja „n” ubrzava do brzine od 30 km/h, nakon čega usporava forsiranim neprekidnim delovanjem na komandu radne kočnice, i zaustavlja se tako da horizontalna projekcija najisturenije tačke prednjeg dela vozila na podlogu ne sme biti iza krajnje linije „p”. Sila na komandi se mora dozirati tako da ne dođe do blokiranja bilo kog točka.",
    slika: "assets/img/poligonska-radnja-druga.jpg",
  },
  {
    naslov: "PARKIRANJE VOZILA POD PRAVIM UGLOM, VOŽNJOM UNAZAD",
    tekst: "Izvodi se prema situaciji na slici. Kandidat se vozilom iz položaja „1” kreće hodom unapred pravolinijski do položaja „2”, iz koga jednim hodom unazad pod pravim uglom, vozilo zaustavlja na parking mesto, pri čemu celo vozilo mora biti u polju parking mesta.",
    slika: "assets/img/poligonska-radnja-treca.jpg",
  },
  {
    naslov: "PARKIRANJE VOZILA PODUŽNO, VOŽNJOM UNAZAD",
    tekst: "Izvodi se prema situaciji na slici. Kandidat se vozilom iz položaja „1” kreće hodom unapred pravolinijski do položaja „2”, odakle jednim hodom unazad i najviše jednim hodom unapred, vozilo zaustavlja na parking mesto, pri čemu celo vozilo mora biti u polju parking mesta.",
    slika: "assets/img/poligonska-radnja-cetvrta.jpg",
  },
  {
    naslov: "POLUKRUŽNO OKRETANJE VOZILA SA NAJVIŠE TRI POTPUNA MANEVRA NA PROSTORU ŠIRINE DVE SAOBRAĆAJNE TRAKE",
    tekst: "Izvodi se prema situaciji na slici. Kandidat se vozilom iz položaja „1” kreće hodom unapred do položaja „2”, iz koga se hodom unazad kreće do položaja „3”, a zatim hodom unapred vozilom zauzima položaj „4” na drugoj saobraćajnoj traci namenjenoj za kretanje u suprotnom smeru.",
    slika: "assets/img/poligonska-radnja-peta.jpg",
  },
  {
    naslov: "ZAUSTAVLJANJE I POLAZAK VOZILOM NA PUTU SA USPONOM",
    tekst: "Izvodi se prema situaciji na slici. Kandidat zaustavlja vozilo na putu sa usponom, pri čemu su svi točkovi vozila na usponu, a zatim kreće vozilom hodom unapred, pri čemu se vozilo ne sme pokrenuti unazad.",
    slika: "assets/img/poligonska-radnja-sesta.jpg",
  },
];

if (isKorisneInformacije) {
  function generisiPoligonskeRadnje() {

    for (let i = 0; i < poligonskeRadnje.length; i++) {
      let poligonskaRadnja = document.getElementsByClassName("poligonska-radnja")[0];
      let divTekst = document.createElement("div");
      poligonskaRadnja.appendChild(divTekst);
      let divSlika = document.createElement("div");
      poligonskaRadnja.appendChild(divSlika);
      let h5 = document.createElement("h5");
      divTekst.appendChild(h5);
      let p = document.createElement("p");
      divTekst.appendChild(p);
      let img = document.createElement("img");
      divSlika.appendChild(img);
      h5.textContent = poligonskeRadnje[i].naslov;
      p.textContent = poligonskeRadnje[i].tekst;
      img.src = poligonskeRadnje[i].slika;
      img.alt = "radnja-poligonska";
    }

  }
  generisiPoligonskeRadnje();
}

if (isPocetna) {
  const quiz = document.getElementById('quiz');
  const answerEls = document.querySelectorAll('.answer');
  const questionEl = document.getElementById('question');
  const a_text = document.getElementById('a_text');
  const b_text = document.getElementById('b_text');
  const c_text = document.getElementById('c_text');
  const d_text = document.getElementById('d_text');
  const submitBtn = document.getElementById('submit');
  let currentQuiz = 0;
  let score = 0;
  loadQuiz();
  showSlides(slideIndex);

  function loadQuiz() {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
  }

  function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false);
  }

  function getSelected() {
    let answer;
    answerEls.forEach(answerEl => {
      if (answerEl.checked) {
        answer = answerEl.id;
      }
    });
    return answer;
  }

  if (submitBtn !== null)
    submitBtn.addEventListener('click', () => {
      const answer = getSelected();
      if (answer) {
        if (answer === quizData[currentQuiz].correct) {
          score++;
        }
        currentQuiz++;
        if (currentQuiz < quizData.length) {
          loadQuiz();
        } else {
          quiz.innerHTML = `
          <h4>Odgovorili ste na ${score}/${quizData.length} pitanja tačno</h4>
          <button onclick="location.reload()">Ponovi</button>
          `;
        }
      }
    });
}

if (isPocetna) {
  var testim = document.getElementById("testim"),
    testimDots = Array.prototype.slice.call(document.getElementById("testim-dots").children),
    testimContent = Array.prototype.slice.call(document.getElementById("testim-content").children),
    testimleftArrow = document.getElementById("left-arrow"),
    testimRightArrow = document.getElementById("right-arrow"),
    testimSpeed = 4500,
    currentSlide = 0,
    currentActive = 0,
    testimTimer;
}

window.onload = function () {

  if (isPocetna) {
    function playSlide(slide) {
      for (var k = 0; k < testimDots.length; k++) {
        testimContent[k].classList.remove("active");
        testimContent[k].classList.remove("inactive");
        testimDots[k].classList.remove("active");
      }
      if (slide < 0) {
        slide = currentSlide = testimContent.length - 1;
      }
      if (slide > testimContent.length - 1) {
        slide = currentSlide = 0;
      }
      if (currentActive != currentSlide) {
        testimContent[currentActive].classList.add("inactive");
      }
      testimContent[slide].classList.add("active");
      testimDots[slide].classList.add("active");

      currentActive = currentSlide;

      clearTimeout(testimTimer);
      testimTimer = setTimeout(function () {
        playSlide(currentSlide += 1);
      }, testimSpeed);
    }

    testimleftArrow.addEventListener("click", function () {
      playSlide(currentSlide -= 1);
    });
    testimRightArrow.addEventListener("click", function () {
      playSlide(currentSlide += 1);
    });

    for (var l = 0; l < testimDots.length; l++) {
      testimDots[l].addEventListener("click", function () {
        playSlide(currentSlide = testimDots.indexOf(this));
      });
    }
    playSlide(currentSlide);
    napraviSrednjiElementPosle(srednjiTekstovi[1], 'automobili-slika');
    napraviSrednjiElementPosle(srednjiTekstovi[0], 'automobili-slika');
    napraviSrednjiElementPosle(srednjiTekstovi[2], 'srednja-slika-cunjevi');
    napraviSrednjiElementPosle(srednjiTekstovi[3], 'slika-kako-do-vozacke');
  }
  generisiNavigaciju();
};

function napraviSrednjiElementPosle(srednjiTekst, posleCega) {
  let prethodniElement = document.getElementById(posleCega);
  let element = document.createElement('div');
  let naslov = document.createElement('h2');
  let tekst = document.createElement('p');
  let lista = document.createElement('ul');
  element.classList.add('srednji-tekst');
  naslov.textContent = srednjiTekst.naslov;
  tekst.textContent = srednjiTekst.tekst;
  element.appendChild(naslov);
  element.appendChild(tekst);
  if (srednjiTekst.lista) {
    for (let i = 0; i < srednjiTekst.lista.length; i++) {
      let li = document.createElement('li');
      lista.appendChild(li);
      li.textContent = srednjiTekst.lista[i];
    }
    element.appendChild(lista);
  }
  prethodniElement.after(element);
}
function generisiNavigaciju() {
  let navigacionaLista = document.getElementById("lista-navigacija");
  for (let i = 0; i < navigacijaElementi.length; i++) {
    let a = document.createElement("a");
    let li = document.createElement("li");
    navigacionaLista.appendChild(li);
    li.appendChild(a);
    a.innerHTML = navigacijaElementi[i].naziv;
    a.href = navigacijaElementi[i].link;
  }
}

console.log(window.location.pathname);
