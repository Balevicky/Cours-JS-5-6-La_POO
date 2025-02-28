const main = document.querySelector("main");
const basicArray = [
  { pic: 0, min: 1 },
  { pic: 1, min: 1 },
  { pic: 2, min: 1 },
  { pic: 3, min: 1 },
  { pic: 4, min: 1 },
  { pic: 5, min: 1 },
  { pic: 6, min: 1 },
  { pic: 7, min: 1 },
  { pic: 8, min: 1 },
  { pic: 9, min: 1 },
];
let exerciseArray = [];
// get storage exercises array// cette fonction se lance seul et  une seule fois
(() => {
  if (localStorage.exercises) {
    exerciseArray = JSON.parse(localStorage.exercises);
  } else {
    exerciseArray = basicArray;
    console.log("tes");
  }
})();

// // window.addEventListener("laod", (e) => {
// window.addEventListener("load", (event) => {
//   if (localStorage.exercises) {
//     exerciseArray = localStorage.exercises;
//   } else {
//     exerciseArray = basicArray;
//     console.log("tes");
//   }
// });

// ============================
class Exercise {}
// ==============================================
const utils = {
  // ======= cette fonction est appelée dans les fonctions lobby, routine et finish
  pageContent: function (title, content, btn) {
    document.querySelector("h1").innerHTML = title;
    main.innerHTML = content;
    document.querySelector(".btn-container").innerHTML = btn;
  },
  // ========================
  handleEventMinutes: function () {
    document.querySelectorAll("input[type=number]").forEach((input) => {
      input.addEventListener("input", (e) => {
        exerciseArray[e.target.id].min = parseInt(e.target.value);
        this.store();
        // console.log(exerciseArray);
        ////   ===============code prof
        // exerciseArray.map((exo) => {
        //   if (exo.pic == e.target.id) {
        //     exo.min = parseInt(e.target.value);
        //     console.log(exerciseArray);
        //   }
        // });
        ////   ===============code prof
      });
    });
  },
  // ========================
  handleEventArrow: function () {
    document.querySelectorAll(".arrow").forEach((arrow) => {
      arrow.addEventListener("click", (e) => {
        // console.log(e.target.dataset);
        let position = 0;

        // ======================================
        for (const exo in exerciseArray) {
          if (exerciseArray[exo].pic == e.target.dataset.pic) {
            // console.log(e.target.dataset.pic);
            if (position - 1 < 0) {
              alert("Vous ne pouvez pas delaplacer cette carte vers la gauche");
              return;
            } else {
              [exerciseArray[position], exerciseArray[position - 1]] = [
                exerciseArray[position - 1],
                exerciseArray[position],
              ];
              console.log(exerciseArray);

              page.lobby();
              this.store();
              console.log(basicArray);

              return;
            }
          } else {
            position++;
            // console.log("position " + position);
          }
        }
      });
    });
  },
  // ========================
  handleEventArrowLefth: function () {
    document.querySelectorAll(".arrowLefth").forEach((arrowLefth) => {
      arrowLefth.addEventListener("click", (e) => {
        // console.log(e.target.dataset.pic);
        let position = 0;
        let position1 = 0;
        // exerciseArray.map((exo) => {
        for (const exo in exerciseArray) {
          if (position < 9) {
            if (exerciseArray[exo].pic == e.target.dataset.pic) {
              position1 = parseInt(position + 1);
              [exerciseArray[position], exerciseArray[position1]] = [
                exerciseArray[position1],
                exerciseArray[position],
              ];
              console.log(exerciseArray);
              page.lobby();
              this.store();
              break;
            } else {
              console.log("test");
              position++;
            }
          } else {
            alert("Vous ne pouvez pas delaplacer cette carte vers la drroite");
            return;
          }
        }
      });
    });
  },
  // ========================
  handleEventDelete: function () {
    document.querySelectorAll(".deleteBtn").forEach((deleteBtn) => {
      deleteBtn.addEventListener("click", (e) => {
        // console.log(e.target.dataset.pic);
        let position = 0;

        for (const exo in exerciseArray) {
          if (exerciseArray[exo].pic == e.target.dataset.pic) {
            console.log("test");
            exerciseArray.splice(position, 1);
            console.log(exerciseArray);
            page.lobby();
            this.store();
            return;
          } else {
            position++;
          }
        }
      });
    });
  },
  // ========================
  reboot: function () {
    exerciseArray = basicArray;
    page.lobby();
    this.store();
  },
  // ========================
  store: function () {
    localStorage.exercises = JSON.stringify(exerciseArray);
  },
  // ========================
};

// =============================================
const page = {
  // ================ pour afficher la page(vue) d'acceuil
  lobby: function () {
    let maArray = exerciseArray
      .map((exo) => {
        return `
 <li>
  <div class="card-header">
    <input type="number" id=${exo.pic} min="1" max="10" value=${exo.min}>
    <span>min</span>
  </div>
  <img src="./img/${exo.pic}.png"/>
<i class="fa-solid fa-circle-left arrow" data-pic=${exo.pic}></i>
<i class="fa-solid fa-circle-xmark deleteBtn" data-pic=${exo.pic}></i>
<i class="fa-solid fa-circle-right arrowLefth" data-pic=${exo.pic}></i>


</li>
            `;
      })
      .join("");

    utils.pageContent(
      "Paramétrage <i id='reboot' class='fa-solid fa-rotate-left'></i>",
      ` <ul>
     ${maArray} 
    </ul>
      `,
      "<button id='start' >Commencer <i class='fa-regular fa-circle-play'></i></button>"
    );
    utils.handleEventMinutes();
    utils.handleEventArrow();
    utils.handleEventArrowLefth();
    utils.handleEventDelete();
    // utils.reboot();
    reboot.addEventListener("click", () => utils.reboot());
    start.addEventListener("click", () => this.routine());
  },

  // ================ pour afficher la page(vue) d'exercie
  routine: function () {
    utils.pageContent("Routine", "Exercice avec chrono", null);
  },
  // ================ pour afficher la page(vue) de fin
  finish: function () {
    utils.pageContent(
      "C'est terminé",
      "<button id='start'>Recommencer</>",
      "<button id='reboot' class='btn-reboot'>Reinitialiser <i class='fa-solid fa-circle-xmark'></i></button>"
    );
  },
};

// =============== appel de la fonction
page.lobby();
