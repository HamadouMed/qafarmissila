
let monTableauProverbesAfar = [
  {
    text:'Misili misila ceelam meqeeh, baxi abba ceelam meqe.',
    likes:18
  },
  {
    text:'Abit abit boolok koo qidaah, marin kas ayrol koo caba.',
    likes:15
  },
  {
    text:'Barat caben baaxo kee, qunxih aben xalay meqe’kkel koo cabta.',
    likes:87
  },
  {
    text:'Qaxah gacak gacaanaah, kasah aysuk yayseeni.',
    likes:0
  },
  {
    text:'Misila yaabat koo qidoonuh kol baahe kee, koo edde xagoonuh kol baahe yakken.',
    likes:7
  },
  {
    text:'Gaali qarit weemih qanaabo yakme.',
    likes:40
  },
  {
    text:'Bisol taniimih gaba ruubeenik, gurummal tanim caritta.',
    likes:32
  },
  {
    text:'Inti mali wee inti geem yakkaleh bililisa.',
    likes:88
  },
  {
    text:'Qari amo yaaqure’kkal yab mayaaqura.',
    likes:27
  },
  {
    text:'Cuggayti managray nagarsiisah.',
    likes:11
  },
  {
    text:'Isi buxal can care num, marin buxal lee cara.',
    likes:180
  }

];
let debut = 0;
let nombreesProverbesAffichage = 9;

let divProverbes = document.querySelector('#divProverbes');
/*let btnNext = document.querySelector('#next');
let btnPrev = document.querySelector('#prev');*/

function afficherProverbes() { 
  let listDivProverbes = '';
  for (let i = debut; i < debut + nombreesProverbesAffichage; i++) {
    if (i<monTableauProverbesAfar.length) {
      listDivProverbes += `
      <div class="col">
      <div class="card shadow-sm">
        <img src="afar.jpg" width="100%" height="225" class="rounded mx-auto d-block" alt="...">
        <div class="card-body">
          <p class="card-text">"${monTableauProverbesAfar[i].text}"</p>
          <div class="d-flex justify-content-between align-items-center">
            <div class="btn-group">
              <button type="button" class="btn btn-sm btn-outline-secondary" id="jaime${i}" onclick="addLikeAnUpdateUI(${i}, ${monTableauProverbesAfar[i].likes})">J'aime ${monTableauProverbesAfar[i].likes}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
      `
    }
  }
  divProverbes.innerHTML = listDivProverbes;
 }

 afficherProverbes();

function next() {
  if (debut + nombreesProverbesAffichage < monTableauProverbesAfar.length) {
    debut+= nombreesProverbesAffichage;
    afficherProverbes();
  }
}

function prev() {
  if (debut - nombreesProverbesAffichage >= 0) {
    debut-= nombreesProverbesAffichage;
    afficherProverbes();
  }
}

function addLikeAnUpdateUI(index, nbLikes) {
  nbLikes++;
  let monbtnJaime = document.querySelector(`#jaime${index}`);
  monbtnJaime.textContent = `J'aime ${nbLikes}`;
}