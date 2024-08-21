const reviews = [
    {
      id: 1,
      name: 'Aprilia',
      model: 'RS 660',
      img: 'aprilia.png',
      description: "Le moteur de la Aprilia RS 660 est le bi-cylindre en ligne le plus abouti du marché et le plus puissant à cylindrée comparée. Sa petite taille et son inertie réduite joue en sa faveur et permet à la moto d'afficher un poids plume de 169 kg.",
    },
    {
      id: 2,
      name: 'Kawasaki',
      model: 'ZX-10R',
      img: 'kawasaki.png',
      description: 'La ZX-10R est un modèle de moto sportive du constructeur japonais Kawasaki. La ZX-10R est apparue en 2004 en remplacement de la ZX-9R pour permettre à Kawasaki de rester compétitif face aux autres marques qui proposaient déjà des quatre cylindres de 1 000 cm³.',
    },
    {
      id: 3,
      name: 'KTM',
      model: '890 Duke',
      img: 'ktm.png',
      description: 'La KTM 890 DUKE R est équipée d\'une fourche avant WP APEX à ressorts linéaires réglables avec réglages d\'amortissement, de compression et de rebond à fonction divisée. Cela permet aux pilotes d\'affiner parfaitement leur configuration préférée pour la piste ou la rue.',
    },
    {
      id: 4,
      name: 'Ducati',
      model: 'Panigale V4',
      img: 'ducati.png',
      description: 'La nouvelle Panigale V4 représente la septième génération de la saga épique des superbikes Ducati : une synthèse de design et de technologie. Une moto qui est au cœur de la mission de Ducati : « enrichir la vie des gens grâce à une combinaison de produits technologiquement avancés caractérisés par une beauté sensuelle.',
    },
    {
      id: 5,
      name: 'BMW',
      model: 'S1000RR',
      img: 'bmw.png',
      description: 'Les ailerons greffés sur la tronche de la S 1000 RR lui apporte 10 kilos d\'appui supplémentaire en moyenne et jusqu\'à 17 kilos à 300 km/h. Du coup, une tendance au wheeling calmée, plus de stabilité au freinage et de motricité à l\'accél\'. Et puis, cela rattache la machine à la mode du secteur.',
    },
];

const motoName = document.getElementById('moto-name');
const motoImg = document.getElementById('moto-img');
const motoModel = document.getElementById('moto-model');
const motoDescr = document.getElementById('moto-description');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

let currentItem = 3;

window.addEventListener('DOMContentLoaded', function() {
    showMoto(currentItem);
});

function showMoto(moto) {
    const item = reviews[moto];
    motoImg.src = item.img;
    motoName.textContent = item.name;
    motoModel.textContent = item.model;
    motoDescr.textContent = item.description;
}

nextBtn.addEventListener('click', function(){
    currentItem++;
    if(currentItem > reviews.length - 1)
    {
        currentItem = 0;
    }
    showMoto(currentItem);
})

prevBtn.addEventListener('click', function(){
    currentItem--;
    if(currentItem < 0)
    {
        currentItem = reviews.length - 1;
    }
    showMoto(currentItem);
})

randomBtn.addEventListener('click', function(){
    currentItem = Math.floor(Math.random() * reviews.length);
    showMoto(currentItem);
})
