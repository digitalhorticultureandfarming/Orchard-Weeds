const description = document.getElementById('pest-description');
const pic1 = document.getElementById('image-1');
const pic2 = document.getElementById('image-2');
const pic3 = document.getElementById('image-3');
const info1 = document.getElementById('info-1');
const info2 = document.getElementById('info-2');
const info3 = document.getElementById('info-3');
const info4 = document.getElementById('info-4');
const info5 = document.getElementById('info-5');
const info6 = document.getElementById('info-6');
const info7 = document.getElementById('info-7');
const info8 = document.getElementById('info-8');
const info9 = document.getElementById('info-9');
const info10 = document.getElementById('info-10');
const info11 = document.getElementById('info-11');
const info12 = document.getElementById('info-12');
const info13 = document.getElementById('info-13');
const potato = document.getElementById('potato');
const info14 = document.getElementById('info-14');
const info15 = document.getElementById('info-15');
const info16 = document.getElementById('info-16');
const info17 = document.getElementById('info-17');
const info18 = document.getElementById('info-18');
const info19 = document.getElementById('info-19');
const info20 = document.getElementById('info-20');
const info21 = document.getElementById('info-21');
const info22 = document.getElementById('info-22');
const info23 = document.getElementById('info-23');
const info24 = document.getElementById('info-24');
const info25 = document.getElementById('info-25');
const info26 = document.getElementById('info-26');
const info27 = document.getElementById('info-27');
const info28 = document.getElementById('info-28');
const info29 = document.getElementById('info-29');
const info30 = document.getElementById('info-30');
const info31 = document.getElementById('info-31');
const info32 = document.getElementById('info-32');
const info33 = document.getElementById('info-33');
const info34 = document.getElementById('info-34');
const info35 = document.getElementById('info-35');
const info36 = document.getElementById('info-36');
const info37 = document.getElementById('info-37');


function mallow() {
    document.querySelector('.display').style.visibility = 'visible';
    description.innerHTML =
    `<h1>${Mallow.common_name}</h1><h3>(<em>${Mallow.botanical_name}</em>)</h3> <p> \
    ${Mallow.cultural}</p><p>${Mallow.hosts}.</p><p>Uses: ${Mallow.uses}</p>\
    <p>Links: <a href='${Mallow.links[1]}' target='_blank'>${Mallow.links[0]}</a></p>\
    <p>Links: <a href='${Mallow.links[3]}' target='_blank'>${Mallow.links[2]}</a></p>\
    <p>Links: <a href='${Mallow.links[5]}' target='_blank'>${Mallow.links[4]}</a></p>\
    <p>Links: <a href='${Mallow.links[7]}' target='_blank'>${Mallow.links[6]}</a></p>\
    <p>Field Observations:</p><p>${Mallow.observations}</p>
    <p>Click to enlarge images</p>`;
    pic3.innerHTML = `${Mallow.pest_images[0]}`;
    pic2.innerHTML = `${Mallow.pest_images[1]}`;
    pic1.innerHTML = `${Mallow.pest_images[2]}`;
    document.getElementById('insect3').innerHTML = `${Mallow.pest_images[0]}`;
    document.getElementById('insect2').innerHTML = `${Mallow.pest_images[1]}`;
    document.getElementById('insect1').innerHTML = `${Mallow.pest_images[2]}`;
}
function nightshade() {
    document.querySelector('.display').style.visibility = 'visible';
    document.querySelector('.display').style.visibility = 'visible';
    description.innerHTML =
    `<h1>${shade.common_name}</h1> <h3>(<em>${shade.botanical_name}</em>)</h3> <p> \
    ${shade.cultural}</p><p>${shade.hosts}</p><p>Uses: ${shade.uses}</p>\
    <p>Links: <a href='${shade.links[1]}' target='_blank'>${shade.links[0]}</a></p>\
    <p>Links: <a href='${shade.links[3]}' target='_blank'>${shade.links[2]}</a></p>\
    <p>Links: <a href='${shade.links[5]}' target='_blank'>${shade.links[4]}</a></p>\
    <p>Field Observations:</p>\
    <p>${shade.observations}</p>
    <p>Click to enlarge images</p>`;
    pic3.innerHTML = `${shade.pest_images[0]}`;
    pic2.innerHTML = `${shade.pest_images[1]}`;
    pic1.innerHTML = `${shade.pest_images[2]}`;
    document.getElementById('insect3').innerHTML = `${shade.pest_images[0]}`;
    document.getElementById('insect2').innerHTML = `${shade.pest_images[1]}`;
    document.getElementById('insect1').innerHTML = `${shade.pest_images[2]}`;
}

function thickhead() {
    document.querySelector('.display').style.visibility = 'visible';
    description.innerHTML =
    `<h1>${crasso.common_name}</h1> <h3>(<em>${crasso.botanical_name}</em>)</h3> <p> \
    ${crasso.cultural}</p><p>${crasso.hosts}.</p><p>Uses: ${crasso.uses}</p>\
    <p>Links: <a href='${crasso.links[1]}' target='_blank'>${crasso.links[0]}</a></p>\
    <p>Links: <a href='${crasso.links[3]}' target='_blank'>${crasso.links[2]}</a></p>\
    <p>Links: <a href='${crasso.links[5]}' target='_blank'>${crasso.links[4]}</a></p>\
    <p>Links: <a href='${crasso.links[7]}' target='_blank'>${crasso.links[6]}</a></p>\
    <p>Links: <a href='${crasso.links[9]}' target='_blank'>${crasso.links[8]}</a></p>\
    <p>Field Observations:</p>\
    <p>${crasso.observations}</p>
    <p>Click to enlarge images</p>`;
    pic3.innerHTML = `${crasso.pest_images[0]}`;
    pic2.innerHTML = `${crasso.pest_images[1]}`;
    pic1.innerHTML = `${crasso.pest_images[2]}`;
    document.getElementById('insect3').innerHTML = `${crasso.pest_images[0]}`;
    document.getElementById('insect2').innerHTML = `${crasso.pest_images[1]}`;
    document.getElementById('insect1').innerHTML = `${crasso.pest_images[2]}`;
}

function amaranthus() {
    document.querySelector('.display').style.visibility = 'visible';
    description.innerHTML =
    `<h1>${amaranth.common_name}</h1> <h3>(${amaranth.botanical_name})</h3> <p> \
    ${amaranth.cultural}</p><p>${amaranth.hosts}.</p><p>Uses: ${amaranth.uses}</p>\
    <p>Links: <a href='${amaranth.links[1]}' target='_blank'>${amaranth.links[0]}</a></p>\
    <p>Links: <a href='${amaranth.links[3]}' target='_blank'>${amaranth.links[2]}</a>\
    <p>Links: <a href='${amaranth.links[5]}' target='_blank'>${amaranth.links[4]}</a></p><p>Field Observations:</p>\
    <p>${amaranth.observations}</p>
    <p>Click to enlarge images</p>`;
    pic3.innerHTML = `${amaranth.pest_images[0]}`;
    pic2.innerHTML = `${amaranth.pest_images[1]}`;
    pic1.innerHTML = `${amaranth.pest_images[2]}`;
    document.getElementById('insect3').innerHTML = `${amaranth.pest_images[0]}`;
    document.getElementById('insect2').innerHTML = `${amaranth.pest_images[1]}`;
    document.getElementById('insect1').innerHTML = `${amaranth.pest_images[2]}`;
}

function gomphrena() {
    document.querySelector('.display').style.visibility = 'visible';
    description.innerHTML =
    `<h1>${Gomphrena.common_name}</h1> <h3>(${Gomphrena.botanical_name})</h3> <p> \
    ${Gomphrena.cultural}</p><p>${Gomphrena.hosts}.</p><p>Uses: ${Gomphrena.uses}</p>\
    <p>Links: <a href='${Gomphrena.links[1]}' target='_blank'>${Gomphrena.links[0]}</a></p>\
    <p>Links: <a href='${Gomphrena.links[3]}' target='_blank'>${Gomphrena.links[2]}</a></p>\
    <p>Links: <a href='${Gomphrena.links[5]}' target='_blank'>${Gomphrena.links[4]}</a></p>\
    <p>Links: <a href='${Gomphrena.links[7]}' target='_blank'>${Gomphrena.links[6]}</a></p>\
    <p>Field Observations:</p>\
    <p>${Gomphrena.observations}</p>
    <p>Click to enlarge images</p>`;
    
    pic3.innerHTML = `${Gomphrena.pest_images[0]}`;
    pic2.innerHTML = `${Gomphrena.pest_images[1]}`;
    pic1.innerHTML = `${Gomphrena.pest_images[2]}`;
    document.getElementById('insect3').innerHTML = `${Gomphrena.pest_images[0]}`;
    document.getElementById('insect2').innerHTML = `${Gomphrena.pest_images[1]}`;
    document.getElementById('insect1').innerHTML = `${Gomphrena.pest_images[2]}`;
}

function verbenaB() {
    document.querySelector('.display').style.visibility = 'visible';
    description.innerHTML =
    `<h1>${purpletop.common_name}</h1> <h3>(${purpletop.botanical_name})</h3> <p> \
    ${purpletop.cultural}</p><p>${purpletop.hosts}.</p><p>Uses: ${purpletop.uses}</p>\
    <p>Links: <a href='${purpletop.links[1]}' target='_blank'>${purpletop.links[0]}</a></p>\
    <p>Links: <a href='${purpletop.links[3]}' target='_blank'>${purpletop.links[2]}</a></p>\
    <p>Links: <a href='${purpletop.links[5]}' target='_blank'>${purpletop.links[4]}</a></p><p>Field Observations:</p>\
    <p>${purpletop.observations}</p>
    <p>Click to enlarge images</p>`;
    
    pic3.innerHTML = `${purpletop.pest_images[0]}`;
    pic2.innerHTML = `${purpletop.pest_images[1]}`;
    pic1.innerHTML = `${purpletop.pest_images[2]}`;
    document.getElementById('insect3').innerHTML = `${purpletop.pest_images[0]}`;
    document.getElementById('insect2').innerHTML = `${purpletop.pest_images[1]}`;
    document.getElementById('insect1').innerHTML = `${purpletop.pest_images[2]}`;
}

function tropicalchickweed() {
    document.querySelector('.display').style.visibility = 'visible';
    description.innerHTML =
    `<h1>${tropChick.common_name}</h1> <h3>(<em>${tropChick.botanical_name}</em>)</h3> <p> \
    ${tropChick.cultural}</p><p>${tropChick.hosts}.</p><p>Uses: ${tropChick.uses}</p>\
    <p>Links: <a href='${tropChick.links[1]}' target='_blank'>${tropChick.links[0]}</a></p>\
    <p>Links: <a href='${tropChick.links[3]}' target='_blank'>${tropChick.links[2]}</a></p>\
    <p>Links: <a href='${tropChick.links[5]}' target='_blank'>${tropChick.links[4]}</a></p>\
    <p>Links: <a href='${tropChick.links[7]}' target='_blank'>${tropChick.links[6]}</a></p><p>Field Observations:</p>\
    <p>${tropChick.observations}</p>
    <p>Click to enlarge images</p>`;
    
    pic3.innerHTML = `${tropChick.pest_images[0]}`;
    pic2.innerHTML = `${tropChick.pest_images[1]}`;
    pic1.innerHTML = `${tropChick.pest_images[2]}`;
    document.getElementById('insect3').innerHTML = `${tropChick.pest_images[0]}`;
    document.getElementById('insect2').innerHTML = `${tropChick.pest_images[1]}`;
    document.getElementById('insect1').innerHTML = `${tropChick.pest_images[2]}`;
}

function Capsella() {
    document.querySelector('.display').style.visibility = 'visible';
    description.innerHTML =
    `<h1>${capsella.common_name}</h1> <h3>(${capsella.botanical_name})</h3> <p> \
    ${capsella.cultural}</p><p>${capsella.hosts}.</p><p>Uses: ${capsella.uses}</p>\
    <p>Links: <a href='${capsella.links[1]}' target='_blank'>${capsella.links[0]}</a></p>\
    <p>Links: <a href='${capsella.links[3]}' target='_blank'>${capsella.links[2]}</a></p>\
    <p>Links: <a href='${capsella.links[5]}' target='_blank'>${capsella.links[4]}</a></p>\
    <p>Links: <a href='${capsella.links[7]}' target='_blank'>${capsella.links[6]}</a></p>\
    <p>Links: <a href='${capsella.links[9]}' target='_blank'>${capsella.links[8]}</a></p>\
    <p>Links: <a href='${capsella.links[11]}' target='_blank'>${capsella.links[10]}</a></p>\
    <p>Links: <a href='${capsella.links[13]}' target='_blank'>${capsella.links[12]}</a></p>\
    <p>Links: <a href='${capsella.links[15]}' target='_blank'>${capsella.links[14]}</a></p>\
    <p>Links: <a href='${capsella.links[17]}' target='_blank'>${capsella.links[16]}</a></p>\
    <p>Links: <a href='${capsella.links[19]}' target='_blank'>${capsella.links[18]}</a></p>\
    <p>Field Observations:</p>\
    <p>${capsella.observations}</p>
    <p>Click to enlarge images</p>`;
    
    pic3.innerHTML = `${capsella.pest_images[0]}`;
    pic2.innerHTML = `${capsella.pest_images[1]}`;
    pic1.innerHTML = `${capsella.pest_images[2]}`;
    document.getElementById('insect3').innerHTML = `${capsella.pest_images[0]}`;
    document.getElementById('insect2').innerHTML = `${capsella.pest_images[1]}`;
    document.getElementById('insect1').innerHTML = `${capsella.pest_images[2]}`;
}

function Heliotrope() {
    document.querySelector('.display').style.visibility = 'visible';
    description.innerHTML =
    `<h1>${heliotropium.common_name}</h1> <h3>(${heliotropium.botanical_name})</h3> <p> \
    ${heliotropium.cultural}</p><p>${heliotropium.hosts}.</p><p>Uses: ${heliotropium.uses}</p>\
    <p>Links: <a href='${heliotropium.links[1]}' target='_blank'>${heliotropium.links[0]}</a></p>\
    <p>Links: <a href='${heliotropium.links[3]}' target='_blank'>${heliotropium.links[2]}</a></p>\
    <p>Links: <a href='${heliotropium.links[5]}' target='_blank'>${heliotropium.links[4]}</a></p>\
    <p>Field Observations:</p>\
    <p>${heliotropium.observations}</p>
    <p>Click to enlarge images</p>`;
    
    pic3.innerHTML = `${heliotropium.pest_images[0]}`;
    pic2.innerHTML = `${heliotropium.pest_images[1]}`;
    pic1.innerHTML = `${heliotropium.pest_images[2]}`;
    document.getElementById('insect3').innerHTML = `${heliotropium.pest_images[0]}`;
    document.getElementById('insect2').innerHTML = `${heliotropium.pest_images[1]}`;
    document.getElementById('insect1').innerHTML = `${heliotropium.pest_images[2]}`;
}

function Khaki() {
    document.querySelector('.display').style.visibility = 'visible';
    description.innerHTML =
    `<h1>${khaki.common_name}</h1> <h3>(${khaki.botanical_name})</h3> <p> \
    ${khaki.cultural}</p><p>${khaki.hosts}.</p><p>Uses: ${khaki.uses}</p>\
    <p>Links: <a href='${khaki.links[1]}' target='_blank'>${khaki.links[0]}</a></p>\
    <p>Links: <a href='${khaki.links[3]}' target='_blank'>${khaki.links[2]}</a></p>\
    <p>Field Observations:</p>\
    <p>${khaki.observations}</p>
    <p>Click to enlarge images</p>`;
    
    pic3.innerHTML = `${khaki.pest_images[0]}`;
    pic2.innerHTML = `${khaki.pest_images[1]}`;
    pic1.innerHTML = `${khaki.pest_images[2]}`;
    document.getElementById('insect3').innerHTML = `${khaki.pest_images[0]}`;
    document.getElementById('insect2').innerHTML = `${khaki.pest_images[1]}`;
    document.getElementById('insect1').innerHTML = `${khaki.pest_images[2]}`;
}

function Fleabane() {
    document.querySelector('.display').style.visibility = 'visible';
    description.innerHTML =
    `<h1>${fleabane.common_name}</h1> <h3>(${fleabane.botanical_name})</h3> <p> \
    ${fleabane.cultural}</p><p>${fleabane.hosts}.</p><p>Uses: ${fleabane.uses}</p>\
    <p>Links: <a href='${fleabane.links[1]}' target='_blank'>${fleabane.links[0]}</a></p>\
    <p>Links: <a href='${fleabane.links[3]}' target='_blank'>${fleabane.links[2]}</a></p>\
    <p>Links: <a href='${fleabane.links[5]}' target='_blank'>${fleabane.links[4]}</a></p>\
    <p>Field Observations:</p>\
    <p>${fleabane.observations}</p>
    <p>Click to enlarge images</p>`;
    
    pic3.innerHTML = `${fleabane.pest_images[0]}`;
    pic2.innerHTML = `${fleabane.pest_images[1]}`;
    pic1.innerHTML = `${fleabane.pest_images[2]}`;
    document.getElementById('insect3').innerHTML = `${fleabane.pest_images[0]}`;
    document.getElementById('insect2').innerHTML = `${fleabane.pest_images[1]}`;
    document.getElementById('insect1').innerHTML = `${fleabane.pest_images[2]}`;
}

function Bidens() {
    document.querySelector('.display').style.visibility = 'visible';
    description.innerHTML =
    `<h1>${cobblers.common_name}</h1> <h3>(${cobblers.botanical_name})</h3> <p> \
    ${cobblers.cultural}</p><p>${cobblers.hosts}.</p><p>Uses: ${cobblers.uses}</p>\
    <p>Links: <a href='${cobblers.links[1]}' target='_blank'>${cobblers.links[0]}</a></p>\
    <p>Links: <a href='${cobblers.links[3]}' target='_blank'>${cobblers.links[2]}</a></p>\
    <p>Links: <a href='${cobblers.links[5]}' target='_blank'>${cobblers.links[4]}</a></p>\
    <p>Links: <a href='${cobblers.links[7]}' target='_blank'>${cobblers.links[6]}</a></p>\
    <p>Field Observations:</p>\
    <p>${cobblers.observations}</p>
    <p>Click to enlarge images</p>`;
    
    pic3.innerHTML = `${cobblers.pest_images[0]}`;
    pic2.innerHTML = `${cobblers.pest_images[1]}`;
    pic1.innerHTML = `${cobblers.pest_images[2]}`;
    document.getElementById('insect3').innerHTML = `${cobblers.pest_images[0]}`;
    document.getElementById('insect2').innerHTML = `${cobblers.pest_images[1]}`;
    document.getElementById('insect1').innerHTML = `${cobblers.pest_images[2]}`;
}

function Potato() {
    document.querySelector('.display').style.visibility = 'visible';
    description.innerHTML =
    `<h1>${potato_weed.common_name}</h1> <h3>(${potato_weed.botanical_name})</h3> <p> \
    ${potato_weed.cultural}</p><p>${potato_weed.hosts}.</p><p>Uses: ${potato_weed.uses}</p>\
    <p>Links: <a href='${potato_weed.links[1]}' target='_blank'>${potato_weed.links[0]}</a></p>\
    <p>Links: <a href='${potato_weed.links[3]}' target='_blank'>${potato_weed.links[2]}</a></p>\
    <p>Links: <a href='${potato_weed.links[5]}' target='_blank'>${potato_weed.links[4]}</a></p>\
    <p>Links: <a href='${potato_weed.links[7]}' target='_blank'>${potato_weed.links[6]}</a></p>\
    <p>Field Observations:</p>\
    <p>${potato_weed.observations}</p>
    <p>Click to enlarge images</p>`;
    
    pic3.innerHTML = `${potato_weed.pest_images[0]}`;
    pic2.innerHTML = `${potato_weed.pest_images[1]}`;
    pic1.innerHTML = `${potato_weed.pest_images[2]}`;
    document.getElementById('insect3').innerHTML = `${potato_weed.pest_images[0]}`;
    document.getElementById('insect2').innerHTML = `${potato_weed.pest_images[1]}`;
    document.getElementById('insect1').innerHTML = `${potato_weed.pest_images[2]}`;
}

function willowherb() {
    document.querySelector('.display').style.visibility = 'visible';
    description.innerHTML =
    `<h1>${willowHerb.common_name}</h1> <h3>(${willowHerb.botanical_name})</h3> <p> \
    ${willowHerb.cultural}</p><p>${willowHerb.hosts}.</p><p>Uses: ${willowHerb.uses}</p>\
    <p>Links: <a href='${willowHerb.links[1]}' target='_blank'>${willowHerb.links[0]}</a></p>\
    <p>Links: <a href='${willowHerb.links[3]}' target='_blank'>${willowHerb.links[2]}</a></p>\
    <p>Links: <a href='${willowHerb.links[5]}' target='_blank'>${willowHerb.links[4]}</a></p>\
    <p>Links: <a href='${willowHerb.links[7]}' target='_blank'>${willowHerb.links[6]}</a></p>\
    <p>Field Observations:</p>\
    <p>${willowHerb.observations}</p>
    <p>Click to enlarge images</p>`;
    
    pic3.innerHTML = `${willowHerb.pest_images[0]}`;
    pic2.innerHTML = `${willowHerb.pest_images[1]}`;
    pic1.innerHTML = `${willowHerb.pest_images[2]}`;
    document.getElementById('insect3').innerHTML = `${willowHerb.pest_images[0]}`;
    document.getElementById('insect2').innerHTML = `${willowHerb.pest_images[1]}`;
    document.getElementById('insect1').innerHTML = `${willowHerb.pest_images[2]}`;
}

function cotton() {
    document.querySelector('.display').style.visibility = 'visible';
    description.innerHTML =
    `<h1>${BalloonCotton.common_name}</h1> <h3>(${BalloonCotton.botanical_name})</h3> <p> \
    ${BalloonCotton.cultural}</p><p>${BalloonCotton.hosts}.</p><p>Uses: ${BalloonCotton.uses}</p>\
    <p>Links: <a href='${BalloonCotton.links[1]}' target='_blank'>${BalloonCotton.links[0]}</a></p>\
    <p>Links: <a href='${BalloonCotton.links[3]}' target='_blank'>${BalloonCotton.links[2]}</a></p>\
    <p>Links: <a href='${BalloonCotton.links[5]}' target='_blank'>${BalloonCotton.links[4]}</a></p>\
    <p>Links: <a href='${BalloonCotton.links[7]}' target='_blank'>${BalloonCotton.links[6]}</a></p>\
    <p>Links: <a href='${BalloonCotton.links[9]}' target='_blank'>${BalloonCotton.links[8]}</a></p>\
    <p>Links: <a href='${BalloonCotton.links[11]}' target='_blank'>${BalloonCotton.links[10]}</a></p>\
    <p>Links: <a href='${BalloonCotton.links[13]}' target='_blank'>${BalloonCotton.links[12]}</a></p>\
    <p>Links: <a href='${BalloonCotton.links[15]}' target='_blank'>${BalloonCotton.links[14]}</a></p>\
    <p>Links: <a href='${BalloonCotton.links[17]}' target='_blank'>${BalloonCotton.links[16]}</a></p>\
    <p>Links: <a href='${BalloonCotton.links[19]}' target='_blank'>${BalloonCotton.links[18]}</a></p>\
    <p>Links: <a href='${BalloonCotton.links[21]}' target='_blank'>${BalloonCotton.links[20]}</a></p>\
    <p>Field Observations:</p>\
    <p>${BalloonCotton.observations}</p>
    <p>Click to enlarge images</p>`;
    
    pic3.innerHTML = `${BalloonCotton.pest_images[0]}`;
    pic2.innerHTML = `${BalloonCotton.pest_images[1]}`;
    pic1.innerHTML = `${BalloonCotton.pest_images[2]}`;
    document.getElementById('insect3').innerHTML = `${BalloonCotton.pest_images[0]}`;
    document.getElementById('insect2').innerHTML = `${BalloonCotton.pest_images[1]}`;
    document.getElementById('insect1').innerHTML = `${BalloonCotton.pest_images[2]}`;
}

function brazilian() {
    document.querySelector('.display').style.visibility = 'visible';
    description.innerHTML =
    `<h1>${Brazilian_nightshade.common_name}</h1> <h3>(${Brazilian_nightshade.botanical_name})</h3> <p> \
    ${Brazilian_nightshade.cultural}</p><p>${Brazilian_nightshade.hosts}.</p><p>Uses: ${Brazilian_nightshade.uses}</p>\
    <p>Links: <a href='${Brazilian_nightshade.links[1]}' target='_blank'>${Brazilian_nightshade.links[0]}</a></p>\
    <p>Links: <a href='${Brazilian_nightshade.links[3]}' target='_blank'>${Brazilian_nightshade.links[2]}</a></p>\
    <p>Links: <a href='${Brazilian_nightshade.links[5]}' target='_blank'>${Brazilian_nightshade.links[4]}</a></p>\
    <p>Links: <a href='${Brazilian_nightshade.links[7]}' target='_blank'>${Brazilian_nightshade.links[6]}</a></p>\
    <p>Links: <a href='${Brazilian_nightshade.links[9]}' target='_blank'>${Brazilian_nightshade.links[8]}</a></p>\
    <p>Links: <a href='${Brazilian_nightshade.links[11]}' target='_blank'>${Brazilian_nightshade.links[10]}</a></p>\
    <p>Field Observations:</p>\
    <p>${Brazilian_nightshade.observations}</p>
    <p>Click to enlarge images</p>`;
    
    pic3.innerHTML = `${Brazilian_nightshade.pest_images[0]}`;
    pic2.innerHTML = `${Brazilian_nightshade.pest_images[1]}`;
    pic1.innerHTML = `${Brazilian_nightshade.pest_images[2]}`;
    document.getElementById('insect3').innerHTML = `${Brazilian_nightshade.pest_images[0]}`;
    document.getElementById('insect2').innerHTML = `${Brazilian_nightshade.pest_images[1]}`;
    document.getElementById('insect1').innerHTML = `${Brazilian_nightshade.pest_images[2]}`;
}

function Mitracarpus() {
    document.querySelector('.display').style.visibility = 'visible';
    description.innerHTML =
    `<h1>${mitracarpus.common_name}</h1> <h3>(${mitracarpus.botanical_name})</h3> <p> \
    ${mitracarpus.cultural}</p><p>${mitracarpus.hosts}.</p><p>Uses: ${mitracarpus.uses}</p>\
    <p>Links: <a href='${mitracarpus.links[1]}' target='_blank'>${mitracarpus.links[0]}</a></p>\
    <p>Links: <a href='${mitracarpus.links[3]}' target='_blank'>${mitracarpus.links[2]}</a></p>\
    <p>Links: <a href='${mitracarpus.links[5]}' target='_blank'>${mitracarpus.links[4]}</a></p>\
    <p>Links: <a href='${mitracarpus.links[7]}' target='_blank'>${mitracarpus.links[6]}</a></p>\
    <p>Links: <a href='${mitracarpus.links[9]}' target='_blank'>${mitracarpus.links[8]}</a></p>\
    <p>Links: <a href='${mitracarpus.links[11]}' target='_blank'>${mitracarpus.links[10]}</a></p>\
    <p>Field Observations:</p>\
    <p>${mitracarpus.observations}</p>
    <p>Click to enlarge images</p>`;
    
    pic3.innerHTML = `${mitracarpus.pest_images[0]}`;
    pic2.innerHTML = `${mitracarpus.pest_images[1]}`;
    pic1.innerHTML = `${mitracarpus.pest_images[2]}`;
    document.getElementById('insect3').innerHTML = `${mitracarpus.pest_images[0]}`;
    document.getElementById('insect2').innerHTML = `${mitracarpus.pest_images[1]}`;
    document.getElementById('insect1').innerHTML = `${mitracarpus.pest_images[2]}`;
}

function Richardia() {
    document.querySelector('.display').style.visibility = 'visible';
    description.innerHTML =
    `<h1>${richardia.common_name}</h1> <h3>(${richardia.botanical_name})</h3> <p> \
    ${richardia.cultural}</p><p>${richardia.hosts}.</p><p>Uses: ${richardia.uses}</p>\
    <p>Links: <a href='${richardia.links[1]}' target='_blank'>${richardia.links[0]}</a></p>\
    <p>Links: <a href='${richardia.links[3]}' target='_blank'>${richardia.links[2]}</a></p>\
    <p>Links: <a href='${richardia.links[5]}' target='_blank'>${richardia.links[4]}</a></p>\
    <p>Links: <a href='${richardia.links[7]}' target='_blank'>${richardia.links[6]}</a></p>\
    <p>Links: <a href='${richardia.links[9]}' target='_blank'>${richardia.links[8]}</a></p>\
    <p>Links: <a href='${richardia.links[11]}' target='_blank'>${richardia.links[10]}</a></p>\
    <p>Field Observations:</p>\
    <p>${richardia .observations}</p>
    <p>Click to enlarge images</p>`;
    
    pic3.innerHTML = `${richardia.pest_images[0]}`;
    pic2.innerHTML = `${richardia.pest_images[1]}`;
    pic1.innerHTML = `${richardia.pest_images[2]}`;
    document.getElementById('insect3').innerHTML = `${richardia.pest_images[0]}`;
    document.getElementById('insect2').innerHTML = `${richardia.pest_images[1]}`;
    document.getElementById('insect1').innerHTML = `${richardia.pest_images[2]}`;
}

function Sida() {
    document.querySelector('.display').style.visibility = 'visible';
    description.innerHTML =
    `<h1>${sida_acuta.common_name}</h1> <h3>(${sida_acuta.botanical_name})</h3> <p> \
    ${sida_acuta.cultural}</p><p>${sida_acuta.hosts}.</p><p>Uses: ${sida_acuta.uses}</p>\
    <p>Links: <a href='${sida_acuta.links[1]}' target='_blank'>${sida_acuta.links[0]}</a></p>\
    <p>Links: <a href='${sida_acuta.links[3]}' target='_blank'>${sida_acuta.links[2]}</a></p>\
    <p>Links: <a href='${sida_acuta.links[5]}' target='_blank'>${sida_acuta.links[4]}</a></p>\
    <p>Links: <a href='${sida_acuta.links[7]}' target='_blank'>${sida_acuta.links[6]}</a></p>\
    <p>Links: <a href='${sida_acuta.links[9]}' target='_blank'>${sida_acuta.links[8]}</a></p>\
    <p>Links: <a href='${sida_acuta.links[11]}' target='_blank'>${sida_acuta.links[10]}</a></p>\
    <p>Links: <a href='${sida_acuta.links[13]}' target='_blank'>${sida_acuta.links[12]}</a></p>\
    <p>Field Observations:</p>\
    <p>${sida_acuta.observations}</p>
    <p>Click to enlarge images</p>`;
    
    pic3.innerHTML = `${sida_acuta.pest_images[0]}`;
    pic2.innerHTML = `${sida_acuta.pest_images[1]}`;
    pic1.innerHTML = `${sida_acuta.pest_images[2]}`;
    document.getElementById('insect3').innerHTML = `${sida_acuta.pest_images[0]}`;
    document.getElementById('insect2').innerHTML = `${sida_acuta.pest_images[1]}`;
    document.getElementById('insect1').innerHTML = `${sida_acuta.pest_images[2]}`;
}

function Sida_rhom() {
    document.querySelector('.display').style.visibility = 'visible';
    description.innerHTML =
    `<h1>${sida_rhombifolia.common_name}</h1> <h3>(${sida_rhombifolia.botanical_name})</h3> <p> \
    ${sida_rhombifolia.cultural}</p><p>${sida_rhombifolia.hosts}.</p><p>Uses: ${sida_rhombifolia.uses}</p>\
    <p>Links: <a href='${sida_rhombifolia.links[1]}' target='_blank'>${sida_rhombifolia.links[0]}</a></p>\
    <p>Links: <a href='${sida_rhombifolia.links[3]}' target='_blank'>${sida_rhombifolia.links[2]}</a></p>\
    <p>Links: <a href='${sida_rhombifolia.links[5]}' target='_blank'>${sida_rhombifolia.links[4]}</a></p>\
    <p>Links: <a href='${sida_rhombifolia.links[7]}' target='_blank'>${sida_rhombifolia.links[6]}</a></p>\
    <p>Links: <a href='${sida_rhombifolia.links[9]}' target='_blank'>${sida_rhombifolia.links[8]}</a></p>\
    <p>Links: <a href='${sida_rhombifolia.links[11]}' target='_blank'>${sida_rhombifolia.links[10]}</a></p>\
    <p>Links: <a href='${sida_rhombifolia.links[13]}' target='_blank'>${sida_rhombifolia.links[12]}</a></p>\
    <p>Links: <a href='${sida_rhombifolia.links[15]}' target='_blank'>${sida_rhombifolia.links[14]}</a></p>\
    <p>Links: <a href='${sida_rhombifolia.links[17]}' target='_blank'>${sida_rhombifolia.links[16]}</a></p>\
    <p>Field Observations:</p>\
    <p>${sida_rhombifolia.observations}</p>
    <p>Click to enlarge images</p>`;
    
    pic3.innerHTML = `${sida_rhombifolia.pest_images[0]}`;
    pic2.innerHTML = `${sida_rhombifolia.pest_images[1]}`;
    pic1.innerHTML = `${sida_rhombifolia.pest_images[2]}`;
    document.getElementById('insect3').innerHTML = `${sida_rhombifolia.pest_images[0]}`;
    document.getElementById('insect2').innerHTML = `${sida_rhombifolia.pest_images[1]}`;
    document.getElementById('insect1').innerHTML = `${sida_rhombifolia.pest_images[2]}`;
}

function Sida_cord() {
    document.querySelector('.display').style.visibility = 'visible';
    description.innerHTML =
    `<h1>${sida_cordifolia.common_name}</h1> <h3>(${sida_cordifolia.botanical_name})</h3> <p> \
    ${sida_cordifolia.cultural}</p><p>${sida_cordifolia.hosts}.</p><p>Uses: ${sida_cordifolia.uses}</p>\
    <p>Links: <a href='${sida_cordifolia.links[1]}' target='_blank'>${sida_cordifolia.links[0]}</a></p>\
    <p>Links: <a href='${sida_cordifolia.links[3]}' target='_blank'>${sida_cordifolia.links[2]}</a></p>\
    <p>Links: <a href='${sida_cordifolia.links[5]}' target='_blank'>${sida_cordifolia.links[4]}</a></p>\
    <p>Links: <a href='${sida_cordifolia.links[7]}' target='_blank'>${sida_cordifolia.links[6]}</a></p>\
    <p>Links: <a href='${sida_cordifolia.links[9]}' target='_blank'>${sida_cordifolia.links[8]}</a></p>\
    <p>Links: <a href='${sida_cordifolia.links[11]}' target='_blank'>${sida_cordifolia.links[10]}</a></p>\
    <p>Links: <a href='${sida_cordifolia.links[13]}' target='_blank'>${sida_cordifolia.links[12]}</a></p>\
    <p>Links: <a href='${sida_cordifolia.links[15]}' target='_blank'>${sida_cordifolia.links[14]}</a></p>\
    <p>Links: <a href='${sida_cordifolia.links[17]}' target='_blank'>${sida_cordifolia.links[16]}</a></p>\
    <p>Links: <a href='${sida_cordifolia.links[19]}' target='_blank'>${sida_cordifolia.links[18]}</a></p>\
    <p>Links: <a href='${sida_cordifolia.links[21]}' target='_blank'>${sida_cordifolia.links[20]}</a></p>\
    <p>Links: <a href='${sida_cordifolia.links[23]}' target='_blank'>${sida_cordifolia.links[22]}</a></p>\
    <p>Field Observations:</p>\
    <p>${sida_cordifolia.observations}</p>
    <p>Click to enlarge images</p>`;
    
    pic3.innerHTML = `${sida_cordifolia.pest_images[0]}`;
    pic2.innerHTML = `${sida_cordifolia.pest_images[1]}`;
    pic1.innerHTML = `${sida_cordifolia.pest_images[2]}`;
    document.getElementById('insect3').innerHTML = `${sida_cordifolia.pest_images[0]}`;
    document.getElementById('insect2').innerHTML = `${sida_cordifolia.pest_images[1]}`;
    document.getElementById('insect1').innerHTML = `${sida_cordifolia.pest_images[2]}`;
}

function Malvastrum() {
    document.querySelector('.display').style.visibility = 'visible';
    description.innerHTML =
    `<h1>${malvastrum.common_name}</h1> <h3>(${malvastrum.botanical_name})</h3> <p> \
    ${malvastrum.cultural}</p><p>${malvastrum.hosts}.</p><p>Uses: ${malvastrum.uses}</p>\
    <p>Links: <a href='${malvastrum.links[1]}' target='_blank'>${malvastrum.links[0]}</a></p>\
    <p>Links: <a href='${malvastrum.links[3]}' target='_blank'>${malvastrum.links[2]}</a></p>\
    <p>Links: <a href='${malvastrum.links[5]}' target='_blank'>${malvastrum.links[4]}</a></p>\
    <p>Links: <a href='${malvastrum.links[7]}' target='_blank'>${malvastrum.links[6]}</a></p>\
    <p>Links: <a href='${malvastrum.links[9]}' target='_blank'>${malvastrum.links[8]}</a></p>\
    <p>Links: <a href='${malvastrum.links[11]}' target='_blank'>${malvastrum.links[10]}</a></p>\
    <p>Links: <a href='${malvastrum.links[13]}' target='_blank'>${malvastrum.links[12]}</a></p>\
    <p>Links: <a href='${malvastrum.links[15]}' target='_blank'>${malvastrum.links[14]}</a></p>\
    <p>Links: <a href='${malvastrum.links[17]}' target='_blank'>${malvastrum.links[16]}</a></p>\
    <p>Links: <a href='${malvastrum.links[19]}' target='_blank'>${malvastrum.links[18]}</a></p>\
    <p>Field Observations:</p>\
    <p>${malvastrum.observations}</p>
    <p>Click to enlarge images</p>`;
    
    pic3.innerHTML = `${malvastrum.pest_images[0]}`;
    pic2.innerHTML = `${malvastrum.pest_images[1]}`;
    pic1.innerHTML = `${malvastrum.pest_images[2]}`;
    document.getElementById('insect3').innerHTML = `${malvastrum.pest_images[0]}`;
    document.getElementById('insect2').innerHTML = `${malvastrum.pest_images[1]}`;
    document.getElementById('insect1').innerHTML = `${malvastrum.pest_images[2]}`;
}

function Indigo() {
    document.querySelector('.display').style.visibility = 'visible';
    description.innerHTML =
    `<h1>${indigo.common_name}</h1> <h3>(${indigo.botanical_name})</h3> <p> \
    ${indigo.cultural}</p><p>${indigo.hosts}.</p><p>Uses: ${indigo.uses}</p>\
    <p>Links: <a href='${indigo.links[1]}' target='_blank'>${indigo.links[0]}</a></p>\
    <p>Links: <a href='${indigo.links[3]}' target='_blank'>${indigo.links[2]}</a></p>\
    <p>Links: <a href='${indigo.links[5]}' target='_blank'>${indigo.links[4]}</a></p>\
    <p>Links: <a href='${indigo.links[7]}' target='_blank'>${indigo.links[6]}</a></p>\
    <p>Links: <a href='${indigo.links[9]}' target='_blank'>${indigo.links[8]}</a></p>\
    <p>Links: <a href='${indigo.links[11]}' target='_blank'>${indigo.links[10]}</a></p>\
    <p>Links: <a href='${indigo.links[13]}' target='_blank'>${indigo.links[12]}</a></p>\
    <p>Links: <a href='${indigo.links[15]}' target='_blank'>${indigo.links[14]}</a></p>\
    <p>Links: <a href='${indigo.links[17]}' target='_blank'>${indigo.links[16]}</a></p>\
    <p>Links: <a href='${indigo.links[19]}' target='_blank'>${indigo.links[18]}</a></p>\
    <p>Field Observations:</p>\
    <p>${indigo.observations}</p>
    <p>Click to enlarge images</p>`;
    
    pic3.innerHTML = `${indigo.pest_images[0]}`;
    pic2.innerHTML = `${indigo.pest_images[1]}`;
    pic1.innerHTML = `${indigo.pest_images[2]}`;
    document.getElementById('insect3').innerHTML = `${indigo.pest_images[0]}`;
    document.getElementById('insect2').innerHTML = `${indigo.pest_images[1]}`;
    document.getElementById('insect1').innerHTML = `${indigo.pest_images[2]}`;
}

function Crotalaria() {
    document.querySelector('.display').style.visibility = 'visible';
    description.innerHTML =
    `<h1>${crotalaria.common_name}</h1> <h3>(${crotalaria.botanical_name})</h3> <p> \
    ${crotalaria.cultural}</p><p>${crotalaria.hosts}.</p><p>Uses: ${crotalaria.uses}</p>\
    <p>Links: <a href='${crotalaria.links[1]}' target='_blank'>${crotalaria.links[0]}</a></p>\
    <p>Links: <a href='${crotalaria.links[3]}' target='_blank'>${crotalaria.links[2]}</a></p>\
    <p>Links: <a href='${crotalaria.links[5]}' target='_blank'>${crotalaria.links[4]}</a></p>\
    <p>Links: <a href='${crotalaria.links[7]}' target='_blank'>${crotalaria.links[6]}</a></p>\
    <p>Links: <a href='${crotalaria.links[9]}' target='_blank'>${crotalaria.links[8]}</a></p>\
    <p>Links: <a href='${crotalaria.links[11]}' target='_blank'>${crotalaria.links[10]}</a></p>\
    <p>Links: <a href='${crotalaria.links[13]}' target='_blank'>${crotalaria.links[12]}</a></p>\
    <p>Links: <a href='${crotalaria.links[15]}' target='_blank'>${crotalaria.links[14]}</a></p>\
    <p>Links: <a href='${crotalaria.links[17]}' target='_blank'>${crotalaria.links[16]}</a></p>\
    <p>Links: <a href='${crotalaria.links[19]}' target='_blank'>${crotalaria.links[18]}</a></p>\
    <p>Links: <a href='${crotalaria.links[21]}' target='_blank'>${crotalaria.links[20]}</a></p>\
    <p>Links: <a href='${crotalaria.links[23]}' target='_blank'>${crotalaria.links[22]}</a></p>\
    <p>Links: <a href='${crotalaria.links[25]}' target='_blank'>${crotalaria.links[24]}</a></p>\
    <p>Links: <a href='${crotalaria.links[27]}' target='_blank'>${crotalaria.links[26]}</a></p>\
    <p>Field Observations:</p>\
    <p>${crotalaria.observations}</p>
    <p>Click to enlarge images</p>`;
    
    pic3.innerHTML = `${crotalaria.pest_images[0]}`;
    pic2.innerHTML = `${crotalaria.pest_images[1]}`;
    pic1.innerHTML = `${crotalaria.pest_images[2]}`;
    document.getElementById('insect3').innerHTML = `${crotalaria.pest_images[0]}`;
    document.getElementById('insect2').innerHTML = `${crotalaria.pest_images[1]}`;
    document.getElementById('insect1').innerHTML = `${crotalaria.pest_images[2]}`;
}

function Sonchus() {
    document.querySelector('.display').style.visibility = 'visible';
    description.innerHTML =
    `<h1>${sonchus.common_name}</h1> <h3>(${sonchus.botanical_name})</h3> <p> \
    ${sonchus.cultural}</p><p>${sonchus.hosts}.</p><p>Uses: ${sonchus.uses}</p>\
    <p>Links: <a href='${sonchus.links[1]}' target='_blank'>${sonchus.links[0]}</a></p>\
    <p>Links: <a href='${sonchus.links[3]}' target='_blank'>${sonchus.links[2]}</a></p>\
    <p>Links: <a href='${sonchus.links[5]}' target='_blank'>${sonchus.links[4]}</a></p>\
    <p>Links: <a href='${sonchus.links[7]}' target='_blank'>${sonchus.links[6]}</a></p>\
    <p>Links: <a href='${sonchus.links[9]}' target='_blank'>${sonchus.links[8]}</a></p>\
    <p>Links: <a href='${sonchus.links[11]}' target='_blank'>${sonchus.links[10]}</a></p>\
    <p>Links: <a href='${sonchus.links[13]}' target='_blank'>${sonchus.links[12]}</a></p>\
    <p>Links: <a href='${sonchus.links[15]}' target='_blank'>${sonchus.links[14]}</a></p>\
    <p>Links: <a href='${sonchus.links[17]}' target='_blank'>${sonchus.links[16]}</a></p>\
    
    <p>Field Observations:</p>\
    <p>${sonchus.observations}</p>
    <p>Click to enlarge images</p>`;
    
    pic3.innerHTML = `${sonchus.pest_images[0]}`;
    pic2.innerHTML = `${sonchus.pest_images[1]}`;
    pic1.innerHTML = `${sonchus.pest_images[2]}`;
    document.getElementById('insect3').innerHTML = `${sonchus.pest_images[0]}`;
    document.getElementById('insect2').innerHTML = `${sonchus.pest_images[1]}`;
    document.getElementById('insect1').innerHTML = `${sonchus.pest_images[2]}`;
}

function Coronopus() {
    document.querySelector('.display').style.visibility = 'visible';
    description.innerHTML =
    `<h1>${coronopus.common_name}</h1> <h3>(${coronopus.botanical_name})</h3> <p> \
    ${coronopus.cultural}</p><p>${coronopus.hosts}.</p><p>Uses: ${coronopus.uses}</p>\
    <p>Links: <a href='${coronopus.links[1]}' target='_blank'>${coronopus.links[0]}</a></p>\
    <p>Links: <a href='${coronopus.links[3]}' target='_blank'>${coronopus.links[2]}</a></p>\
    <p>Links: <a href='${coronopus.links[5]}' target='_blank'>${coronopus.links[4]}</a></p>\
    <p>Links: <a href='${coronopus.links[7]}' target='_blank'>${coronopus.links[6]}</a></p>\
    
    <p>Field Observations:</p>\
    <p>${coronopus.observations}</p>
    <p>Click to enlarge images</p>`;
    
    pic3.innerHTML = `${coronopus.pest_images[0]}`;
    pic2.innerHTML = `${coronopus.pest_images[1]}`;
    pic1.innerHTML = `${coronopus.pest_images[2]}`;
    document.getElementById('insect3').innerHTML = `${coronopus.pest_images[0]}`;
    document.getElementById('insect2').innerHTML = `${coronopus.pest_images[1]}`;
    document.getElementById('insect1').innerHTML = `${coronopus.pest_images[2]}`;
}

function Cudweed() {
    document.querySelector('.display').style.visibility = 'visible';
    description.innerHTML =
    `<h1>${cudweed.common_name}</h1> <h3>(${cudweed.botanical_name})</h3> <p> \
    ${cudweed.cultural}</p><p>${cudweed.hosts}.</p><p>Uses: ${cudweed.uses}</p>\
    <p>Links: <a href='${cudweed.links[1]}' target='_blank'>${cudweed.links[0]}</a></p>\
    <p>Links: <a href='${cudweed.links[3]}' target='_blank'>${cudweed.links[2]}</a></p>\
    <p>Links: <a href='${cudweed.links[5]}' target='_blank'>${cudweed.links[4]}</a></p>\
    <p>Links: <a href='${cudweed.links[7]}' target='_blank'>${cudweed.links[6]}</a></p>\
    <p>Links: <a href='${cudweed.links[9]}' target='_blank'>${cudweed.links[8]}</a></p>\
    <p>Field Observations:</p>\
    <p>${cudweed.observations}</p>
    <p>Click to enlarge images</p>`;
    
    pic3.innerHTML = `${cudweed.pest_images[0]}`;
    pic2.innerHTML = `${cudweed.pest_images[1]}`;
    pic1.innerHTML = `${cudweed.pest_images[2]}`;
    document.getElementById('insect3').innerHTML = `${cudweed.pest_images[0]}`;
    document.getElementById('insect2').innerHTML = `${cudweed.pest_images[1]}`;
    document.getElementById('insect1').innerHTML = `${cudweed.pest_images[2]}`;
}

function Cotula() {
    document.querySelector('.display').style.visibility = 'visible';
    description.innerHTML =
    `<h1>${cotula.common_name}</h1> <h3>(${cotula.botanical_name})</h3> <p> \
    ${cotula.cultural}</p><p>${cotula.hosts}.</p><p>Uses: ${cotula.uses}</p>\
    <p>Links: <a href='${cotula.links[1]}' target='_blank'>${cotula.links[0]}</a></p>\
    <p>Links: <a href='${cotula.links[3]}' target='_blank'>${cotula.links[2]}</a></p>\
    <p>Links: <a href='${cotula.links[5]}' target='_blank'>${cotula.links[4]}</a></p>\
    <p>Links: <a href='${cotula.links[7]}' target='_blank'>${cotula.links[6]}</a></p>\
    <p>Links: <a href='${cotula.links[9]}' target='_blank'>${cotula.links[8]}</a></p>\
    <p>Links: <a href='${cotula.links[11]}' target='_blank'>${cotula.links[10]}</a></p>\
    <p>Field Observations:</p>\
    <p>${cotula.observations}</p>
    <p>Click to enlarge images</p>`;
    
    pic3.innerHTML = `${cotula.pest_images[0]}`;
    pic2.innerHTML = `${cotula.pest_images[1]}`;
    pic1.innerHTML = `${cotula.pest_images[2]}`;
    document.getElementById('insect3').innerHTML = `${cotula.pest_images[0]}`;
    document.getElementById('insect2').innerHTML = `${cotula.pest_images[1]}`;
    document.getElementById('insect1').innerHTML = `${cotula.pest_images[2]}`;
}

function Hawkweed () {
    document.querySelector('.display').style.visibility = 'visible';
    description.innerHTML =
    `<h1>${hawkweed.common_name}</h1> <h3>(${hawkweed.botanical_name})</h3> <p> \
    ${hawkweed.cultural}</p><p>${hawkweed.hosts}.</p><p>Uses: ${hawkweed.uses}</p>\
    <p>Links: <a href='${hawkweed.links[1]}' target='_blank'>${hawkweed.links[0]}</a></p>\
    <p>Links: <a href='${hawkweed.links[3]}' target='_blank'>${hawkweed.links[2]}</a></p>\
    <p>Links: <a href='${hawkweed.links[5]}' target='_blank'>${hawkweed.links[4]}</a></p>\
    <p>Links: <a href='${hawkweed.links[7]}' target='_blank'>${hawkweed.links[6]}</a></p>\
    <p>Links: <a href='${hawkweed.links[9]}' target='_blank'>${hawkweed.links[8]}</a></p>\
    <p>Field Observations:</p>\
    <p>${hawkweed.observations}</p>
    <p>Click to enlarge images</p>`;
    
    pic3.innerHTML = `${hawkweed.pest_images[0]}`;
    pic2.innerHTML = `${hawkweed.pest_images[1]}`;
    pic1.innerHTML = `${hawkweed.pest_images[2]}`;
    document.getElementById('insect3').innerHTML = `${hawkweed.pest_images[0]}`;
    document.getElementById('insect2').innerHTML = `${hawkweed.pest_images[1]}`;
    document.getElementById('insect1').innerHTML = `${hawkweed.pest_images[2]}`;
}

function Smooth_catsear () {
    document.querySelector('.display').style.visibility = 'visible';
    description.innerHTML =
    `<h1>${smooth_catsear.common_name}</h1> <h3>(${smooth_catsear.botanical_name})</h3> <p> \
    ${smooth_catsear.cultural}</p><p>${smooth_catsear.hosts}.</p><p>Uses: ${smooth_catsear.uses}</p>\
    <p>Links: <a href='${smooth_catsear.links[1]}' target='_blank'>${smooth_catsear.links[0]}</a></p>\
    <p>Links: <a href='${smooth_catsear.links[3]}' target='_blank'>${smooth_catsear.links[2]}</a></p>\
    <p>Links: <a href='${smooth_catsear.links[5]}' target='_blank'>${smooth_catsear.links[4]}</a></p>\
    <p>Links: <a href='${smooth_catsear.links[7]}' target='_blank'>${smooth_catsear.links[6]}</a></p>\
    <p>Links: <a href='${smooth_catsear.links[9]}' target='_blank'>${smooth_catsear.links[8]}</a></p>\
    <p>Links: <a href='${smooth_catsear.links[11]}' target='_blank'>${smooth_catsear.links[10]}</a></p>\
    <p>Links: <a href='${smooth_catsear.links[13]}' target='_blank'>${smooth_catsear.links[12]}</a></p>\
    <p>Field Observations:</p>\
    <p>${smooth_catsear.observations}</p>
    <p>Click to enlarge images</p>`;
    
    pic3.innerHTML = `${smooth_catsear.pest_images[0]}`;
    pic2.innerHTML = `${smooth_catsear.pest_images[1]}`;
    pic1.innerHTML = `${smooth_catsear.pest_images[2]}`;
    document.getElementById('insect3').innerHTML = `${smooth_catsear.pest_images[0]}`;
    document.getElementById('insect2').innerHTML = `${smooth_catsear.pest_images[1]}`;
    document.getElementById('insect1').innerHTML = `${smooth_catsear.pest_images[2]}`;
}

function Catsear () {
    document.querySelector('.display').style.visibility = 'visible';
    description.innerHTML =
    `<h1>${catsear.common_name}</h1> <h3>(${catsear.botanical_name})</h3> <p> \
    ${catsear.cultural}</p><p>${catsear.hosts}.</p><p>Uses: ${catsear.uses}</p>\
    <p>Links: <a href='${catsear.links[1]}' target='_blank'>${catsear.links[0]}</a></p>\
    <p>Links: <a href='${catsear.links[3]}' target='_blank'>${catsear.links[2]}</a></p>\
    <p>Links: <a href='${catsear.links[5]}' target='_blank'>${catsear.links[4]}</a></p>\
    <p>Links: <a href='${catsear.links[7]}' target='_blank'>${catsear.links[6]}</a></p>\
    <p>Links: <a href='${catsear.links[9]}' target='_blank'>${catsear.links[8]}</a></p>\
    <p>Links: <a href='${catsear.links[11]}' target='_blank'>${catsear.links[10]}</a></p>\
    <p>Links: <a href='${catsear.links[13]}' target='_blank'>${catsear.links[12]}</a></p>\
    <p>Links: <a href='${catsear.links[15]}' target='_blank'>${catsear.links[14]}</a></p>\
    <p>Field Observations:</p>\
    <p>${catsear.observations}</p>
    <p>Click to enlarge images`;
    
    pic3.innerHTML = `${catsear.pest_images[0]}`;
    pic2.innerHTML = `${catsear.pest_images[1]}`;
    pic1.innerHTML = `${catsear.pest_images[2]}`;
    document.getElementById('insect3').innerHTML = `${catsear.pest_images[0]}`;
    document.getElementById('insect2').innerHTML = `${catsear.pest_images[1]}`;
    document.getElementById('insect1').innerHTML = `${catsear.pest_images[2]}`;
}

function Dandelion () {
    document.querySelector('.display').style.visibility = 'visible';
    description.innerHTML =
    `<h1>${dandelion.common_name}</h1> <h3>(${dandelion.botanical_name})</h3> <p> \
    ${dandelion.cultural}</p><p>${dandelion.hosts}.</p><p>Uses: ${dandelion.uses}</p>\
    <p>Links: <a href='${dandelion.links[1]}' target='_blank'>${dandelion.links[0]}</a></p>\
    <p>Links: <a href='${dandelion.links[3]}' target='_blank'>${dandelion.links[2]}</a></p>\
    <p>Links: <a href='${dandelion.links[5]}' target='_blank'>${dandelion.links[4]}</a></p>\
    <p>Links: <a href='${dandelion.links[7]}' target='_blank'>${dandelion.links[6]}</a></p>\
    <p>Links: <a href='${dandelion.links[9]}' target='_blank'>${dandelion.links[8]}</a></p>\
    <p>Links: <a href='${dandelion.links[11]}' target='_blank'>${dandelion.links[10]}</a></p>\
    <p>Links: <a href='${dandelion.links[13]}' target='_blank'>${dandelion.links[12]}</a></p>\
    <p>Links: <a href='${dandelion.links[15]}' target='_blank'>${dandelion.links[14]}</a></p>\
    <p>Field Observations:</p>\
    <p>${dandelion.observations}</p>
    <p>Click to enlarge images</p>`;
    
    pic3.innerHTML = `${dandelion.pest_images[0]}`;
    pic2.innerHTML = `${dandelion.pest_images[1]}`;
    pic1.innerHTML = `${dandelion.pest_images[2]}`;
    document.getElementById('insect3').innerHTML = `${dandelion.pest_images[0]}`;
    document.getElementById('insect2').innerHTML = `${dandelion.pest_images[1]}`;
    document.getElementById('insect1').innerHTML = `${dandelion.pest_images[2]}`;
}

function Mouseear () {
    document.querySelector('.display').style.visibility = 'visible';
    description.innerHTML =
    `<h1>${mouseear.common_name}</h1> <h3>(${mouseear.botanical_name})</h3> <p> \
    ${mouseear.cultural}</p><p>${mouseear.hosts}.</p><p>Uses: ${mouseear.uses}</p>\
    <p>Links: <a href='${mouseear.links[1]}' target='_blank'>${mouseear.links[0]}</a></p>\
    <p>Links: <a href='${mouseear.links[3]}' target='_blank'>${mouseear.links[2]}</a></p>\
    <p>Links: <a href='${mouseear.links[5]}' target='_blank'>${mouseear.links[4]}</a></p>\
    <p>Links: <a href='${mouseear.links[7]}' target='_blank'>${mouseear.links[6]}</a></p>\
    <p>Links: <a href='${mouseear.links[9]}' target='_blank'>${mouseear.links[8]}</a></p>\
    <p>Links: <a href='${mouseear.links[11]}' target='_blank'>${mouseear.links[10]}</a></p>\
    <p>Links: <a href='${mouseear.links[13]}' target='_blank'>${mouseear.links[12]}</a></p>\
    <p>Field Observations:</p>\
    <p>${mouseear.observations}</p>
    <p>Click to enlarge images</p>`;
    
    pic3.innerHTML = `${mouseear.pest_images[0]}`;
    pic2.innerHTML = `${mouseear.pest_images[1]}`;
    pic1.innerHTML = `${mouseear.pest_images[2]}`;
    document.getElementById('insect3').innerHTML = `${mouseear.pest_images[0]}`;
    document.getElementById('insect2').innerHTML = `${mouseear.pest_images[1]}`;
    document.getElementById('insect1').innerHTML = `${mouseear.pest_images[2]}`;
}

function Chickweed () {
    document.querySelector('.display').style.visibility = 'visible';
    description.innerHTML =
    `<h1>${chickweed.common_name}</h1> <h3>(${chickweed.botanical_name})</h3> <p> \
    ${chickweed.cultural}</p><p>${chickweed.hosts}.</p><p>Uses: ${chickweed.uses}</p>\
    <p>Links: <a href='${chickweed.links[1]}' target='_blank'>${chickweed.links[0]}</a></p>\
    <p>Links: <a href='${chickweed.links[3]}' target='_blank'>${chickweed.links[2]}</a></p>\
    <p>Links: <a href='${chickweed.links[5]}' target='_blank'>${chickweed.links[4]}</a></p>\
    <p>Links: <a href='${chickweed.links[7]}' target='_blank'>${chickweed.links[6]}</a></p>\
    <p>Links: <a href='${chickweed.links[9]}' target='_blank'>${chickweed.links[8]}</a></p>\
    <p>Links: <a href='${chickweed.links[11]}' target='_blank'>${chickweed.links[10]}</a></p>\
    <p>Links: <a href='${chickweed.links[13]}' target='_blank'>${chickweed.links[12]}</a></p>\
    <p>Field Observations:</p>\
    <p>${chickweed.observations}</p>
    <p>Click to enlarge images</p>`;
    
    pic3.innerHTML = `${chickweed.pest_images[0]}`;
    pic2.innerHTML = `${chickweed.pest_images[1]}`;
    pic1.innerHTML = `${chickweed.pest_images[2]}`;
    document.getElementById('insect3').innerHTML = `${chickweed.pest_images[0]}`;
    document.getElementById('insect2').innerHTML = `${chickweed.pest_images[1]}`;
    document.getElementById('insect1').innerHTML = `${chickweed.pest_images[2]}`;
}

function Flickweed () {
    document.querySelector('.display').style.visibility = 'visible';
    description.innerHTML =
    `<h1>${flickweed.common_name}</h1> <h3>(${flickweed.botanical_name})</h3> <p> \
    ${flickweed.cultural}</p><p>${flickweed.hosts}.</p><p>Uses: ${flickweed.uses}</p>\
    <p>Links: <a href='${flickweed.links[1]}' target='_blank'>${flickweed.links[0]}</a></p>\
    <p>Links: <a href='${flickweed.links[3]}' target='_blank'>${flickweed.links[2]}</a></p>\
    <p>Links: <a href='${flickweed.links[5]}' target='_blank'>${flickweed.links[4]}</a></p>\
    <p>Links: <a href='${flickweed.links[7]}' target='_blank'>${flickweed.links[6]}</a></p>\
    <p>Links: <a href='${flickweed.links[9]}' target='_blank'>${flickweed.links[8]}</a></p>\
    <p>Links: <a href='${flickweed.links[11]}' target='_blank'>${flickweed.links[10]}</a></p>\
    <p>Field Observations:</p>\
    <p>${flickweed.observations}</p>
    <p>Click to enlarge images</p>`;
    
    pic3.innerHTML = `${flickweed.pest_images[0]}`;
    pic2.innerHTML = `${flickweed.pest_images[1]}`;
    pic1.innerHTML = `${flickweed.pest_images[2]}`;
    document.getElementById('insect3').innerHTML = `${flickweed.pest_images[0]}`;
    document.getElementById('insect2').innerHTML = `${flickweed.pest_images[1]}`;
    document.getElementById('insect1').innerHTML = `${flickweed.pest_images[2]}`;
}

function Fathen () {
    document.querySelector('.display').style.visibility = 'visible';
    description.innerHTML =
    `<h1>${fathen.common_name}</h1> <h3>(${fathen.botanical_name})</h3> <p> \
    ${fathen.cultural}</p><p>${fathen.hosts}.</p><p>Uses: ${fathen.uses}</p>\
    <p>Links: <a href='${fathen.links[1]}' target='_blank'>${fathen.links[0]}</a></p>\
    <p>Links: <a href='${fathen.links[3]}' target='_blank'>${fathen.links[2]}</a></p>\
    <p>Links: <a href='${fathen.links[5]}' target='_blank'>${fathen.links[4]}</a></p>\
    <p>Links: <a href='${fathen.links[7]}' target='_blank'>${fathen.links[6]}</a></p>\
    <p>Links: <a href='${fathen.links[9]}' target='_blank'>${fathen.links[8]}</a></p>\
    <p>Links: <a href='${fathen.links[11]}' target='_blank'>${fathen.links[10]}</a></p>\
    <p>Field Observations:</p>\
    <p>${fathen.observations}</p>
    <p>Click to enlarge images</p>`;
    
    pic3.innerHTML = `${fathen.pest_images[0]}`;
    pic2.innerHTML = `${fathen.pest_images[1]}`;
    pic1.innerHTML = `${fathen.pest_images[2]}`;
    document.getElementById('insect3').innerHTML = `${fathen.pest_images[0]}`;
    document.getElementById('insect2').innerHTML = `${fathen.pest_images[1]}`;
    document.getElementById('insect1').innerHTML = `${fathen.pest_images[2]}`;
}

function Burmedic () {
    document.querySelector('.display').style.visibility = 'visible';
    description.innerHTML =
    `<h1>${burmedic.common_name}</h1> <h3>(${burmedic.botanical_name})</h3> <p> \
    ${burmedic.cultural}</p><p>${burmedic.hosts}.</p><p>Uses: ${burmedic.uses}</p>\
    <p>Links: <a href='${burmedic.links[1]}' target='_blank'>${burmedic.links[0]}</a></p>\
    <p>Links: <a href='${burmedic.links[3]}' target='_blank'>${burmedic.links[2]}</a></p>\
    <p>Links: <a href='${burmedic.links[5]}' target='_blank'>${burmedic.links[4]}</a></p>\
    <p>Links: <a href='${burmedic.links[7]}' target='_blank'>${burmedic.links[6]}</a></p>\
    <p>Links: <a href='${burmedic.links[9]}' target='_blank'>${burmedic.links[8]}</a></p>\
    <p>Links: <a href='${burmedic.links[11]}' target='_blank'>${burmedic.links[10]}</a></p>\
    <p>Links: <a href='${burmedic.links[13]}' target='_blank'>${burmedic.links[12]}</a></p>\
    <p>Links: <a href='${burmedic.links[15]}' target='_blank'>${burmedic.links[14]}</a></p>\
    <p>Field Observations:</p>\
    <p>${burmedic.observations}</p>
    <p>Click to enlarge images</p>`;
    
    pic3.innerHTML = `${burmedic.pest_images[0]}`;
    pic2.innerHTML = `${burmedic.pest_images[1]}`;
    pic1.innerHTML = `${burmedic.pest_images[2]}`;
    document.getElementById('insect3').innerHTML = `${burmedic.pest_images[0]}`;
    document.getElementById('insect2').innerHTML = `${burmedic.pest_images[1]}`;
    document.getElementById('insect1').innerHTML = `${burmedic.pest_images[2]}`;
}

/*
function () {
    document.querySelector('.display').style.visibility = 'visible';
    description.innerHTML =
    `<h1>${.common_name}</h1> <h3>(${.botanical_name})</h3> <p> \
    ${.cultural}</p><p>${.hosts}.</p><p>Uses: ${.uses}</p>\
    <p>Links: <a href='${.links[1]}' target='_blank'>${.links[0]}</a></p>\
    <p>Links: <a href='${.links[3]}' target='_blank'>${.links[2]}</a></p>\
    <p>Links: <a href='${.links[5]}' target='_blank'>${.links[4]}</a></p>\
    <p>Links: <a href='${.links[7]}' target='_blank'>${.links[6]}</a></p>\
    <p>Links: <a href='${.links[9]}' target='_blank'>${.links[8]}</a></p>\
    <p>Links: <a href='${.links[11]}' target='_blank'>${.links[10]}</a></p>\
    <p>Field Observations:</p>\
    <p>${.observations}</p>`;
    
    pic3.innerHTML = `${.pest_images[0]}`;
    pic2.innerHTML = `${.pest_images[1]}`;
    pic1.innerHTML = `${.pest_images[2]}`;
    document.getElementById('insect3').innerHTML = `${.pest_images[0]}`;
    document.getElementById('insect2').innerHTML = `${.pest_images[1]}`;
    document.getElementById('insect1').innerHTML = `${.pest_images[2]}`;
}*/

/*
function () {
    document.querySelector('.display').style.visibility = 'visible';
    description.innerHTML =
    `<h1>${.common_name}</h1> <h3>(${.botanical_name})</h3> <p> \
    ${.cultural}</p><p>${.hosts}.</p><p>Uses: ${.uses}</p>\
    <p>Links: <a href='${.links[1]}' target='_blank'>${.links[0]}</a></p>\
    <p>Links: <a href='${.links[3]}' target='_blank'>${.links[2]}</a></p>\
    <p>Links: <a href='${.links[5]}' target='_blank'>${.links[4]}</a></p>\
    <p>Links: <a href='${.links[7]}' target='_blank'>${.links[6]}</a></p>\
    <p>Links: <a href='${.links[9]}' target='_blank'>${.links[8]}</a></p>\
    <p>Links: <a href='${.links[11]}' target='_blank'>${.links[10]}</a></p>\
    <p>Field Observations:</p>\
    <p>${.observations}</p>`;
    
    pic3.innerHTML = `${.pest_images[0]}`;
    pic2.innerHTML = `${.pest_images[1]}`;
    pic1.innerHTML = `${.pest_images[2]}`;
    document.getElementById('insect3').innerHTML = `${.pest_images[0]}`;
    document.getElementById('insect2').innerHTML = `${.pest_images[1]}`;
    document.getElementById('insect1').innerHTML = `${.pest_images[2]}`;
}*/


/*      POPUP BOXES FOR IMAGES      */
/*  MALLOW  */ 
(function() {    
    let img_image = 0;
    let img_title = 0;
    let img_text = 0;
    let images_mallow = ['./images/Mallow.png'];
    let images_hover_mallow = ['Malva parviflora'];
    let images_text_mallow = ['Malva parviflora']
    let im_len = images_mallow.length;

    document.getElementById('mallow').onclick = function() { 
        let display_image = document.getElementById('image1-mallow');
        let hide_button = document.getElementById('hide-mallow');
        let move_button = document.getElementById('image2-mallow');
        let image_text = document.getElementById('image-text-mallow');
        hide_button.style.visibility = 'visible';     
        display_image.style.visibility = 'visible';
        move_button.style.visibility = 'visible';
        image_text.style.visibility = 'visible';
    };

    let mallow_ol = document.getElementById('image2-mallow');
    mallow_ol.addEventListener('click', function() {
        let image_text = document.getElementById('image-text-mallow');
        let display_image = document.getElementById('image1-mallow');
        if (img_image > im_len-1) {
            img_image = 0;
        }
        if (img_title > im_len-1) {
            img_title = 0;
        }
        if (img_text > im_len-1) {
            img_text = 0;
        }
        display_image.src = images_mallow[img_image++]
        display_image.title = images_hover_mallow[img_title++]
        image_text.innerText = images_text_mallow[img_text++]
        image_text.style.fontStyle = 'italic';
    });
    
    document.getElementById('hide-mallow').onclick = function() {  
        let display_image = document.getElementById('image1-mallow');
        let hide_button= document.getElementById('hide-mallow');  
        let move_button = document.getElementById('image2-mallow');
        let image_text = document.getElementById('image-text-mallow');
        display_image.style.visibility = 'hidden';  
        hide_button.style.visibility = 'hidden';
        move_button.style.visibility = 'hidden';  
        image_text.style.visibility = 'hidden';
    };    
})();

/* BLACKBERRY NIGHTSHADE    */
(function() {    
    let img_image = 0;
    let img_title = 0;
    let img_text = 0;
    let images_black = ['./images/NIGHTSHADE.png'];
    let images_hover_black = ['Solanum nigrum'];
    let images_text_black = ['Solanum nigrum']
    let im_len = images_black.length;

    document.getElementById('black').onclick = function() { 
        let display_image = document.getElementById('image1-black');
        let hide_button = document.getElementById('hide-black');
        let move_button = document.getElementById('image2-black');
        let image_text = document.getElementById('image-text-black');
        hide_button.style.visibility = 'visible';     
        display_image.style.visibility = 'visible';
        move_button.style.visibility = 'visible';
        image_text.style.visibility = 'visible';
    };

    let black_ol = document.getElementById('image2-black');
    black_ol.addEventListener('click', function() {
        let image_text = document.getElementById('image-text-black');
        let display_image = document.getElementById('image1-black');
        if (img_image > im_len-1) {
            img_image = 0;
        }
        if (img_title > im_len-1) {
            img_title = 0;
        }
        if (img_text > im_len-1) {
            img_text = 0;
        }
        display_image.src = images_black[img_image++]
        display_image.title = images_hover_black[img_title++]
        image_text.innerText = images_text_black[img_text++]
        image_text.style.fontStyle = 'italic';
    });
    
    document.getElementById('hide-black').onclick = function() {  
        let display_image = document.getElementById('image1-black');
        let hide_button= document.getElementById('hide-black');  
        let move_button = document.getElementById('image2-black');
        let image_text = document.getElementById('image-text-black');
        display_image.style.visibility = 'hidden';  
        hide_button.style.visibility = 'hidden';
        move_button.style.visibility = 'hidden';  
        image_text.style.visibility = 'hidden';
    };    
})();

/*  THICKHEAD   */
(function() {    
    let img_image = 0;
    let img_title = 0;
    let img_text = 0;
    let images_thick = ['./images/thickhead-pot.png', './images/thickhead.png', './images/thickhead-1.png'];
    let images_hover_thick = ['Crassocephalum crepidioides', 'Crassocephalum crepidioides', 'Crassocephalum crepidioides'];
    let images_text_thick = ['Crassocephalum crepidioides', 'Crassocephalum crepidioides', 'Crassocephalum crepidioides']
    let im_len = images_thick.length;
    let display_image = document.getElementById('image1-thick');
    let hide_button = document.getElementById('hide-thick');
    let move_button = document.getElementById('image2-thick');
    let image_text = document.getElementById('image-text-thick');

    document.getElementById('thick').onclick = function() { 
        hide_button.style.visibility = 'visible';     
        display_image.style.visibility = 'visible';
        move_button.style.visibility = 'visible';
        image_text.style.visibility = 'visible';
    };

    let thick_ol = document.getElementById('image2-thick');
    thick_ol.addEventListener('click', function() {
        if (img_image > im_len-1) {
            img_image = 0;
        }
        if (img_title > im_len-1) {
            img_title = 0;
        }
        if (img_text > im_len-1) {
            img_text = 0;
        }
        display_image.src = images_thick[img_image++]
        display_image.title = images_hover_thick[img_title++]
        image_text.innerText = images_text_thick[img_text++]
        image_text.style.fontStyle = 'italic';
    });
    
    document.getElementById('hide-thick').onclick = function() {  
        display_image.style.visibility = 'hidden';  
        hide_button.style.visibility = 'hidden';
        move_button.style.visibility = 'hidden';  
        image_text.style.visibility = 'hidden';
    };    
})(); 

/* AMARANTH */
(function() {    
    let img_image = 0;
    let img_title = 0;
    let img_text = 0;
    let images_ama = ['./images/amaranth.png'];
    let images_hover_ama = ['Amaranthus viridis'];
    let images_text_ama = ['Amaranthus viridis']
    let im_len = images_ama.length;
    let display_image = document.getElementById('image1-ama');
    let hide_button = document.getElementById('hide-ama');
    let move_button = document.getElementById('image2-ama');
    let image_text = document.getElementById('image-text-ama');

    document.getElementById('ama').onclick = function() { 
        hide_button.style.visibility = 'visible';     
        display_image.style.visibility = 'visible';
        move_button.style.visibility = 'visible';
        image_text.style.visibility = 'visible';
    };

    let ama_ol = document.getElementById('image2-ama');
    ama_ol.addEventListener('click', function() {
        if (img_image > im_len-1) {
            img_image = 0;
        }
        if (img_title > im_len-1) {
            img_title = 0;
        }
        if (img_text > im_len-1) {
            img_text = 0;
        }
        display_image.src = images_ama[img_image++]
        display_image.title = images_hover_ama[img_title++]
        image_text.innerText = images_text_ama[img_text++]
        image_text.style.fontStyle = 'italic';
    });
    
    document.getElementById('hide-ama').onclick = function() {  
        display_image.style.visibility = 'hidden';  
        hide_button.style.visibility = 'hidden';
        move_button.style.visibility = 'hidden';  
        image_text.style.visibility = 'hidden';
    };    
})(); 

/* PURPLE TOP    */
(function() {    
    let img_image = 0;
    let img_title = 0;
    let img_text = 0;
    let images_top = ['./images/purpletop-1.jpg'];
    let images_hover_top = ['Verbena bonariensis'];
    let images_text_top = ['Verbena bonariensis']
    let im_len = images_top.length;
    let display_image = document.getElementById('image1-top');
    let hide_button = document.getElementById('hide-top');
    let move_button = document.getElementById('image2-top');
    let image_text = document.getElementById('image-text-top');

    document.getElementById('top').onclick = function() { 
        hide_button.style.visibility = 'visible';     
        display_image.style.visibility = 'visible';
        move_button.style.visibility = 'visible';
        image_text.style.visibility = 'visible';
    };

    let top_ol = document.getElementById('image2-top');
    top_ol.addEventListener('click', function() {
        if (img_image > im_len-1) {
            img_image = 0;
        }
        if (img_title > im_len-1) {
            img_title = 0;
        }
        if (img_text > im_len-1) {
            img_text = 0;
        }
        display_image.src = images_top[img_image++]
        display_image.title = images_hover_top[img_title++]
        image_text.innerText = images_text_top[img_text++]
        image_text.style.fontStyle = 'italic';
    });
    
    document.getElementById('hide-top').onclick = function() {  
        display_image.style.visibility = 'hidden';  
        hide_button.style.visibility = 'hidden';
        move_button.style.visibility = 'hidden';  
        image_text.style.visibility = 'hidden';
    };    
})();   

/* GOMPHRENA    */
(function() {    
    let img_image = 0;
    let img_title = 0;
    let img_text = 0;
    let images_gom = ['./images/Gomphrena.png'];
    let images_hover_gom = ['Gomphrena celosioides'];
    let images_text_gom = ['Gomphrena celosioides']
    let im_len = images_gom.length;
    let display_image = document.getElementById('image1-gom');
    let hide_button = document.getElementById('hide-gom');
    let move_button = document.getElementById('image2-gom');
    let image_text = document.getElementById('image-text-gom');

    document.getElementById('gom').onclick = function() { 
        hide_button.style.visibility = 'visible';     
        display_image.style.visibility = 'visible';
        move_button.style.visibility = 'visible';
        image_text.style.visibility = 'visible';
    };

    let gom_ol = document.getElementById('image2-gom');
    gom_ol.addEventListener('click', function() {
        if (img_image > im_len-1) {
            img_image = 0;
        }
        if (img_title > im_len-1) {
            img_title = 0;
        }
        if (img_text > im_len-1) {
            img_text = 0;
        }
        display_image.src = images_gom[img_image++]
        display_image.title = images_hover_gom[img_title++]
        image_text.innerText = images_text_gom[img_text++]
        image_text.style.fontStyle = 'italic';
    });
    
    document.getElementById('hide-gom').onclick = function() {  
        display_image.style.visibility = 'hidden';  
        hide_button.style.visibility = 'hidden';
        move_button.style.visibility = 'hidden';  
        image_text.style.visibility = 'hidden';
    };    
})(); 

/* TROPICAL CHICKWEED    */
(function() {    
    let img_image = 0;
    let img_title = 0;
    let img_text = 0;
    let images_trop = ['./images/trop-chick-vert.png'];
    let images_hover_trop = ['Drymaria cordata'];
    let images_text_trop = ['Drymaria cordata'];
    let im_len = images_trop.length;
    let display_image = document.getElementById('image1-trop');
    let hide_button = document.getElementById('hide-trop');
    let move_button = document.getElementById('image2-trop');
    let image_text = document.getElementById('image-text-trop');

    document.getElementById('trop').onclick = function() { 
        hide_button.style.visibility = 'visible';     
        display_image.style.visibility = 'visible';
        move_button.style.visibility = 'visible';
        image_text.style.visibility = 'visible';
    };

    let trop_ol = document.getElementById('image2-trop');
    trop_ol.addEventListener('click', function() {
        if (img_image > im_len-1) {
            img_image = 0;
        }
        if (img_title > im_len-1) {
            img_title = 0;
        }
        if (img_text > im_len-1) {
            img_text = 0;
        }
        display_image.src = images_trop[img_image++]
        display_image.title = images_hover_trop[img_title++]
        image_text.innerText = images_text_trop[img_text++]
        image_text.style.fontStyle = 'italic';
    });
    
    document.getElementById('hide-trop').onclick = function() {  
        display_image.style.visibility = 'hidden';  
        hide_button.style.visibility = 'hidden';
        move_button.style.visibility = 'hidden';  
        image_text.style.visibility = 'hidden';
    };    
})(); 

/* CAPSELLA    */
(function() {    
    let img_image = 0;
    let img_title = 0;
    let img_text = 0;
    let images_cap = ['./images/Capsella.png'];
    let images_hover_cap = ['Capsella bursa-pastoris'];
    let images_text_cap = ['Capsella bursa-pastoris']
    let im_len = images_cap.length;
    let display_image = document.getElementById('image1-cap');
    let hide_button = document.getElementById('hide-cap');
    let move_button = document.getElementById('image2-cap');
    let image_text = document.getElementById('image-text-cap');

    document.getElementById('cap').onclick = function() { 
        hide_button.style.visibility = 'visible';     
        display_image.style.visibility = 'visible';
        move_button.style.visibility = 'visible';
        image_text.style.visibility = 'visible';
    };

    let cap_ol = document.getElementById('image2-cap');
    cap_ol.addEventListener('click', function() {
        if (img_image > im_len-1) {
            img_image = 0;
        }
        if (img_title > im_len-1) {
            img_title = 0;
        }
        if (img_text > im_len-1) {
            img_text = 0;
        }
        display_image.src = images_cap[img_image++]
        display_image.title = images_hover_cap[img_title++]
        image_text.innerText = images_text_cap[img_text++]
        image_text.style.fontStyle = 'italic';
    });
    
    document.getElementById('hide-cap').onclick = function() {  
        display_image.style.visibility = 'hidden';  
        hide_button.style.visibility = 'hidden';
        move_button.style.visibility = 'hidden';  
        image_text.style.visibility = 'hidden';
    };    
})(); 

/* BLUE HELIOTROPE    */
(function() {    
    let img_image = 0;
    let img_title = 0;
    let img_text = 0;
    let images_hel = ['./images/heliotrope-flowers.png', './images/heliotrope-butterfly.png', './images/heliotrope.png'];
    let images_hover_hel = ['Heliotropium amplexicaule with flowers', 'Heliotropium amplexicaule with butterfly', 'Heliotropium amplexicaule'];
    let images_text_hel = ['Heliotropium amplexicaule', 'Heliotropium amplexicaule', 'Heliotropium amplexicaule']
    let im_len = images_hel.length;
    let display_image = document.getElementById('image1-hel');
    let hide_button = document.getElementById('hide-hel');
    let move_button = document.getElementById('image2-hel');
    let image_text = document.getElementById('image-text-hel');

    document.getElementById('hel').onclick = function() { 
        hide_button.style.visibility = 'visible';     
        display_image.style.visibility = 'visible';
        move_button.style.visibility = 'visible';
        image_text.style.visibility = 'visible';
    };

    let hel_ol = document.getElementById('image2-hel');
    hel_ol.addEventListener('click', function() {
        if (img_image > im_len-1) {
            img_image = 0;
        }
        if (img_title > im_len-1) {
            img_title = 0;
        }
        if (img_text > im_len-1) {
            img_text = 0;
        }
        display_image.src = images_hel[img_image++]
        display_image.title = images_hover_hel[img_title++]
        image_text.innerText = images_text_hel[img_text++]
        image_text.style.fontStyle = 'italic';
    });
    
    document.getElementById('hide-hel').onclick = function() {  
        display_image.style.visibility = 'hidden';  
        hide_button.style.visibility = 'hidden';
        move_button.style.visibility = 'hidden';  
        image_text.style.visibility = 'hidden';
    };    
})(); 

/* KHAKI WEED    */
(function() {    
    let img_image = 0;
    let img_title = 0;
    let img_text = 0;
    let images_kha = ['./images/khaki.png', './images/khaki-1.png'];
    let images_hover_kha = ['Alternanthera pungens', 'Alternanthera pungens'];
    let images_text_kha = ['Alternanthera pungens', 'Alternanthera pungens']
    let im_len = images_kha.length;
    let display_image = document.getElementById('image1-kha');
    let hide_button = document.getElementById('hide-kha');
    let move_button = document.getElementById('image2-kha');
    let image_text = document.getElementById('image-text-kha');

    document.getElementById('kha').onclick = function() { 
        hide_button.style.visibility = 'visible';     
        display_image.style.visibility = 'visible';
        move_button.style.visibility = 'visible';
        image_text.style.visibility = 'visible';
    };

    let kha_ol = document.getElementById('image2-kha');
    kha_ol.addEventListener('click', function() {
        if (img_image > im_len-1) {
            img_image = 0;
        }
        if (img_title > im_len-1) {
            img_title = 0;
        }
        if (img_text > im_len-1) {
            img_text = 0;
        }
        display_image.src = images_kha[img_image++]
        display_image.title = images_hover_kha[img_title++]
        image_text.innerText = images_text_kha[img_text++]
        image_text.style.fontStyle = 'italic';
    });
    
    document.getElementById('hide-kha').onclick = function() {  
        display_image.style.visibility = 'hidden';  
        hide_button.style.visibility = 'hidden';
        move_button.style.visibility = 'hidden';  
        image_text.style.visibility = 'hidden';
    };    
})(); 

/* FLEABANE    */
(function() {    
    let img_image = 0;
    let img_title = 0;
    let img_text = 0;
    let images_flea = ['./images/fleabane.png'];
    let images_hover_flea = ['Erigeron spp.'];
    let images_text_flea = ['Erigeron spp.']
    let im_len = images_flea.length;
    let display_image = document.getElementById('image1-flea');
    let hide_button = document.getElementById('hide-flea');
    let move_button = document.getElementById('image2-flea');
    let image_text = document.getElementById('image-text-flea');

    document.getElementById('flea').onclick = function() { 
        hide_button.style.visibility = 'visible';     
        display_image.style.visibility = 'visible';
        move_button.style.visibility = 'visible';
        image_text.style.visibility = 'visible';
    };

    let flea_ol = document.getElementById('image2-flea');
    flea_ol.addEventListener('click', function() {
        if (img_image > im_len-1) {
            img_image = 0;
        }
        if (img_title > im_len-1) {
            img_title = 0;
        }
        if (img_text > im_len-1) {
            img_text = 0;
        }
        display_image.src = images_flea[img_image++]
        display_image.title = images_hover_flea[img_title++]
        image_text.innerText = images_text_flea[img_text++]
        image_text.style.fontStyle = 'italic';
    });
    
    document.getElementById('hide-flea').onclick = function() {  
        display_image.style.visibility = 'hidden';  
        hide_button.style.visibility = 'hidden';
        move_button.style.visibility = 'hidden';  
        image_text.style.visibility = 'hidden';
    };    
})(); 

/* COBBLERS PEGS    */
(function() {    
    let img_image = 0;
    let img_title = 0;
    let img_text = 0;
    let images_bid = ['./images/bidens.png'];
    let images_hover_bid = ['Bidens pilosa'];
    let images_text_bid = ['Bidens pilosa']
    let im_len = images_bid.length;
    let display_image = document.getElementById('image1-bid');
    let hide_button = document.getElementById('hide-bid');
    let move_button = document.getElementById('image2-bid');
    let image_text = document.getElementById('image-text-bid');

    document.getElementById('bid').onclick = function() { 
        hide_button.style.visibility = 'visible';     
        display_image.style.visibility = 'visible';
        move_button.style.visibility = 'visible';
        image_text.style.visibility = 'visible';
    };

    let bid_ol = document.getElementById('image2-bid');
    bid_ol.addEventListener('click', function() {
        if (img_image > im_len-1) {
            img_image = 0;
        }
        if (img_title > im_len-1) {
            img_title = 0;
        }
        if (img_text > im_len-1) {
            img_text = 0;
        }
        display_image.src = images_bid[img_image++]
        display_image.title = images_hover_bid[img_title++]
        image_text.innerText = images_text_bid[img_text++]
        image_text.style.fontStyle = 'italic';
    });
    
    document.getElementById('hide-bid').onclick = function() {  
        display_image.style.visibility = 'hidden';  
        hide_button.style.visibility = 'hidden';
        move_button.style.visibility = 'hidden';  
        image_text.style.visibility = 'hidden';
    };    
})(); 

/* POTATO WEED    */
(function() {    
    let img_image = 0;
    let img_title = 0;
    let img_text = 0;
    let images_pot = ['./images/potato-weed-1.png', './images/potato-weed.png'];
    let images_hover_pot = ['Galinsoga parviflora', 'Galinsoga parviflora'];
    let images_text_pot = ['Galinsoga parviflora', 'Galinsoga parviflora']
    let im_len = images_pot.length;
    let display_image = document.getElementById('image1-pot');
    let hide_button = document.getElementById('hide-pot');
    let move_button = document.getElementById('image2-pot');
    let image_text = document.getElementById('image-text-pot');

    document.getElementById('pot').onclick = function() { 
        hide_button.style.visibility = 'visible';     
        display_image.style.visibility = 'visible';
        move_button.style.visibility = 'visible';
        image_text.style.visibility = 'visible';
    };

    let pot_ol = document.getElementById('image2-pot');
    pot_ol.addEventListener('click', function() {
        if (img_image > im_len-1) {
            img_image = 0;
        }
        if (img_title > im_len-1) {
            img_title = 0;
        }
        if (img_text > im_len-1) {
            img_text = 0;
        }
        display_image.src = images_pot[img_image++]
        display_image.title = images_hover_pot[img_title++]
        image_text.innerText = images_text_pot[img_text++]
        image_text.style.fontStyle = 'italic';
    });
    
    document.getElementById('hide-pot').onclick = function() {  
        display_image.style.visibility = 'hidden';  
        hide_button.style.visibility = 'hidden';
        move_button.style.visibility = 'hidden';  
        image_text.style.visibility = 'hidden';
    };    
})(); 

/* WILLOWHERB    */
(function() {    
    let img_image = 0;
    let img_title = 0;
    let img_text = 0;
    let images_willow = ['./images/willowherb1.jpg', './images/willowherb.jpg'];
    let images_hover_willow = ['Epilobium ciliatum', 'Epilobium ciliatum'];
    let images_text_willow = ['Epilobium ciliatum', 'Epilobium ciliatum']
    let im_len = images_willow.length;
    let display_image = document.getElementById('image1-willow');
    let hide_button = document.getElementById('hide-willow');
    let move_button = document.getElementById('image2-willow');
    let image_text = document.getElementById('image-text-willow');

    document.getElementById('willow').onclick = function() { 
        hide_button.style.visibility = 'visible';     
        display_image.style.visibility = 'visible';
        move_button.style.visibility = 'visible';
        image_text.style.visibility = 'visible';
    };

    let willow_ol = document.getElementById('image2-willow');
    willow_ol.addEventListener('click', function() {
        if (img_image > im_len-1) {
            img_image = 0;
        }
        if (img_title > im_len-1) {
            img_title = 0;
        }
        if (img_text > im_len-1) {
            img_text = 0;
        }
        display_image.src = images_willow[img_image++]
        display_image.title = images_hover_willow[img_title++]
        image_text.innerText = images_text_willow[img_text++]
        image_text.style.fontStyle = 'italic';
    });
    
    document.getElementById('hide-willow').onclick = function() {  
        display_image.style.visibility = 'hidden';  
        hide_button.style.visibility = 'hidden';
        move_button.style.visibility = 'hidden';  
        image_text.style.visibility = 'hidden';
    };    
})(); 

/* BALLOON COTTON    */
(function() {    
    let img_image = 0;
    let img_title = 0;
    let img_text = 0;
    let images_balloon = ['./images/Gomphocarpus_flowers.png', './images/Gomphocarpus_fruit_seed.png', './images/Gomphocarpus_plant.png'];
    let images_hover_balloon = ['Gomphocarpus spp.', 'Gomphocarpus spp.', 'Gomphocarpus spp.'];
    let images_text_balloon = ['Gomphocarpus spp.', 'Gomphocarpus spp.', 'Gomphocarpus spp.']
    let im_len = images_balloon.length;
    let display_image = document.getElementById('image1-balloon');
    let hide_button = document.getElementById('hide-balloon');
    let move_button = document.getElementById('image2-balloon');
    let image_text = document.getElementById('image-text-balloon');

    document.getElementById('balloon').onclick = function() { 
        hide_button.style.visibility = 'visible';     
        display_image.style.visibility = 'visible';
        move_button.style.visibility = 'visible';
        image_text.style.visibility = 'visible';
    };

    let balloon_ol = document.getElementById('image2-balloon');
    balloon_ol.addEventListener('click', function() {
        if (img_image > im_len-1) {
            img_image = 0;
        }
        if (img_title > im_len-1) {
            img_title = 0;
        }
        if (img_text > im_len-1) {
            img_text = 0;
        }
        display_image.src = images_balloon[img_image++]
        display_image.title = images_hover_balloon[img_title++]
        image_text.innerText = images_text_balloon[img_text++]
        image_text.style.fontStyle = 'italic';
    });
    
    document.getElementById('hide-balloon').onclick = function() {  
        display_image.style.visibility = 'hidden';  
        hide_button.style.visibility = 'hidden';
        move_button.style.visibility = 'hidden';  
        image_text.style.visibility = 'hidden';
    };    
})(); 

/* BRAZILIAN NIGHTSHADE    */
(function() {    
    let img_image = 0;
    let img_title = 0;
    let img_text = 0;
    let images_brazil = ['./images/Brazilian.jpg'];
    let images_hover_brazil = ['Solanum seaforthianum'];
    let images_text_brazil = ['Solanum seaforthianum']
    let im_len = images_brazil.length;
    let display_image = document.getElementById('image1-brazil');
    let hide_button = document.getElementById('hide-brazil');
    let move_button = document.getElementById('image2-brazil');
    let image_text = document.getElementById('image-text-brazil');

    document.getElementById('brazil').onclick = function() { 
        hide_button.style.visibility = 'visible';     
        display_image.style.visibility = 'visible';
        move_button.style.visibility = 'visible';
        image_text.style.visibility = 'visible';
    };

    let brazil_ol = document.getElementById('image2-brazil');
    brazil_ol.addEventListener('click', function() {
        if (img_image > im_len-1) {
            img_image = 0;
        }
        if (img_title > im_len-1) {
            img_title = 0;
        }
        if (img_text > im_len-1) {
            img_text = 0;
        }
        display_image.src = images_brazil[img_image++]
        display_image.title = images_hover_brazil[img_title++]
        image_text.innerText = images_text_brazil[img_text++]
        image_text.style.fontStyle = 'italic';
    });
    
    document.getElementById('hide-brazil').onclick = function() {  
        display_image.style.visibility = 'hidden';  
        hide_button.style.visibility = 'hidden';
        move_button.style.visibility = 'hidden';  
        image_text.style.visibility = 'hidden';
    };    
})(); 

/* MITRACARPUS    */
(function() {    
    let img_image = 0;
    let img_title = 0;
    let img_text = 0;
    let images_mitra = ['./images/mitracarpus-2.png', './images/mitracarpus-1.png'];
    let images_hover_mitra = ['Mitracarpus hirtus', 'Mitracarpus hirtus'];
    let images_text_mitra = ['Mitracarpus hirtus', 'Mitracarpus hirtus']
    let im_len = images_mitra.length;
    let display_image = document.getElementById('image1-mitra');
    let hide_button = document.getElementById('hide-mitra');
    let move_button = document.getElementById('image2-mitra');
    let image_text = document.getElementById('image-text-mitra');

    document.getElementById('mitra').onclick = function() { 
        hide_button.style.visibility = 'visible';     
        display_image.style.visibility = 'visible';
        move_button.style.visibility = 'visible';
        image_text.style.visibility = 'visible';
    };

    let mitra_ol = document.getElementById('image2-mitra');
    mitra_ol.addEventListener('click', function() {
        if (img_image > im_len-1) {
            img_image = 0;
        }
        if (img_title > im_len-1) {
            img_title = 0;
        }
        if (img_text > im_len-1) {
            img_text = 0;
        }
        display_image.src = images_mitra[img_image++]
        display_image.title = images_hover_mitra[img_title++]
        image_text.innerText = images_text_mitra[img_text++]
        image_text.style.fontStyle = 'italic';
    });
    
    document.getElementById('hide-mitra').onclick = function() {  
        display_image.style.visibility = 'hidden';  
        hide_button.style.visibility = 'hidden';
        move_button.style.visibility = 'hidden';  
        image_text.style.visibility = 'hidden';
    };    
})(); 

/* RICHARDIA       */
(function() {    
    let img_image = 0;
    let img_title = 0;
    let img_text = 0;
    let images_rich = ['./images/richardia.png'];
    let images_hover_rich = ['Richardia brasiliensis'];
    let images_text_rich = ['Richardia brasiliensis']
    let im_len = images_rich.length;
    let display_image = document.getElementById('image1-rich');
    let hide_button = document.getElementById('hide-rich');
    let move_button = document.getElementById('image2-rich');
    let image_text = document.getElementById('image-text-rich');

    document.getElementById('rich').onclick = function() { 
        hide_button.style.visibility = 'visible';     
        display_image.style.visibility = 'visible';
        move_button.style.visibility = 'visible';
        image_text.style.visibility = 'visible';
    };

    let rich_ol = document.getElementById('image2-rich');
    rich_ol.addEventListener('click', function() {
        if (img_image > im_len-1) {
            img_image = 0;
        }
        if (img_title > im_len-1) {
            img_title = 0;
        }
        if (img_text > im_len-1) {
            img_text = 0;
        }
        display_image.src = images_rich[img_image++]
        display_image.title = images_hover_rich[img_title++]
        image_text.innerText = images_text_rich[img_text++]
        image_text.style.fontStyle = 'italic';
    });
    
    document.getElementById('hide-rich').onclick = function() {  
        display_image.style.visibility = 'hidden';  
        hide_button.style.visibility = 'hidden';
        move_button.style.visibility = 'hidden';  
        image_text.style.visibility = 'hidden';
    };    
})(); 

/* SIDA ACUTA       */
(function() {    
    let img_image = 0;
    let img_title = 0;
    let img_text = 0;
    let images_si = ['./images/sida-acuta-1.png'];
    let images_hover_si = ['Sida acute'];
    let images_text_si = ['Sida acute']
    let im_len = images_si.length;
    let display_image = document.getElementById('image1-si');
    let hide_button = document.getElementById('hide-si');
    let move_button = document.getElementById('image2-si');
    let image_text = document.getElementById('image-text-si');

    document.getElementById('si').onclick = function() { 
        hide_button.style.visibility = 'visible';     
        display_image.style.visibility = 'visible';
        move_button.style.visibility = 'visible';
        image_text.style.visibility = 'visible';
    };

    let si_ol = document.getElementById('image2-si');
    si_ol.addEventListener('click', function() {
        if (img_image > im_len-1) {
            img_image = 0;
        }
        if (img_title > im_len-1) {
            img_title = 0;
        }
        if (img_text > im_len-1) {
            img_text = 0;
        }
        display_image.src = images_si[img_image++]
        display_image.title = images_hover_si[img_title++]
        image_text.innerText = images_text_si[img_text++]
        image_text.style.fontStyle = 'italic';
    });
    
    document.getElementById('hide-si').onclick = function() {  
        display_image.style.visibility = 'hidden';  
        hide_button.style.visibility = 'hidden';
        move_button.style.visibility = 'hidden';  
        image_text.style.visibility = 'hidden';
    };    
})(); 

/* SIDA RHOMBIFOLIA       */
(function() {    
    let img_image = 0;
    let img_title = 0;
    let img_text = 0;
    let images_rhom = ['./images/sida-rhom.png', './images/sida-rhom-main.jpg'];
    let images_hover_rhom = ["Sida rhombifolia (Paddy's lucerne)", 
                            "Sida rhombifolia (Paddy's lucerne - photo by: Photo by: Rebekah D. Wallace, University of Georgia, Bugwood.org)"];
    let images_text_rhom = ['Sida rhombifolia', 'Sida rhombifolia']
    let im_len = images_rhom.length;
    let display_image = document.getElementById('image1-rhom');
    let hide_button = document.getElementById('hide-rhom');
    let move_button = document.getElementById('image2-rhom');
    let image_text = document.getElementById('image-text-rhom');

    document.getElementById('rhom').onclick = function() { 
        hide_button.style.visibility = 'visible';     
        display_image.style.visibility = 'visible';
        move_button.style.visibility = 'visible';
        image_text.style.visibility = 'visible';
    };

    let rhom_ol = document.getElementById('image2-rhom');
    rhom_ol.addEventListener('click', function() {
        if (img_image > im_len-1) {
            img_image = 0;
        }
        if (img_title > im_len-1) {
            img_title = 0;
        }
        if (img_text > im_len-1) {
            img_text = 0;
        }
        display_image.src = images_rhom[img_image++]
        display_image.title = images_hover_rhom[img_title++]
        image_text.innerText = images_text_rhom[img_text++]
        image_text.style.fontStyle = 'italic';
    });
    
    document.getElementById('hide-rhom').onclick = function() {  
        display_image.style.visibility = 'hidden';  
        hide_button.style.visibility = 'hidden';
        move_button.style.visibility = 'hidden';  
        image_text.style.visibility = 'hidden';
    };    
})(); 

/* SIDA CORDIFOLIA      */
(function() {    
    let img_image = 0;
    let img_title = 0;
    let img_text = 0;
    let images_cord = ['./images/s-cordifolia-2.png', './images/s-cordifolia-1.png'];
    let images_hover_cord = ['Sida cordifolia (Flannelweed)', 'Sida cordifolia (Flannelweed)'];
    let images_text_cord = ['Sida cordilfolia', 'Sida cordilfolia']
    let im_len = images_cord.length;
    let display_image = document.getElementById('image1-cord');
    let hide_button = document.getElementById('hide-cord');
    let move_button = document.getElementById('image2-cord');
    let image_text = document.getElementById('image-text-cord');

    document.getElementById('cord').onclick = function() { 
        hide_button.style.visibility = 'visible';     
        display_image.style.visibility = 'visible';
        move_button.style.visibility = 'visible';
        image_text.style.visibility = 'visible';
    };

    let cord_ol = document.getElementById('image2-cord');
    cord_ol.addEventListener('click', function() {
        if (img_image > im_len-1) {
            img_image = 0;
        }
        if (img_title > im_len-1) {
            img_title = 0;
        }
        if (img_text > im_len-1) {
            img_text = 0;
        }
        display_image.src = images_cord[img_image++]
        display_image.title = images_hover_cord[img_title++]
        image_text.innerText = images_text_cord[img_text++]
        image_text.style.fontStyle = 'italic';
    });
    
    document.getElementById('hide-cord').onclick = function() {  
        display_image.style.visibility = 'hidden';  
        hide_button.style.visibility = 'hidden';
        move_button.style.visibility = 'hidden';  
        image_text.style.visibility = 'hidden';
    };    
})(); 

/* MALVASTRUM      */
(function() {    
    let img_image = 0;
    let img_title = 0;
    let img_text = 0;
    let images_mal = ['./images/malvastrum-1.png', './images/malvastrum.png'];
    let images_hover_mal = ['Malvastrum coromandelianum', 'Malvastrum coromandelianum'];
    let images_text_mal = ['Malvastrum coromandelianum', 'Malvastrum coromandelianum']
    let im_len = images_mal.length;
    let display_image = document.getElementById('image1-mal');
    let hide_button = document.getElementById('hide-mal');
    let move_button = document.getElementById('image2-mal');
    let image_text = document.getElementById('image-text-mal');

    document.getElementById('mal').onclick = function() { 
        hide_button.style.visibility = 'visible';     
        display_image.style.visibility = 'visible';
        move_button.style.visibility = 'visible';
        image_text.style.visibility = 'visible';
    };

    let mal_ol = document.getElementById('image2-mal');
    mal_ol.addEventListener('click', function() {
        if (img_image > im_len-1) {
            img_image = 0;
        }
        if (img_title > im_len-1) {
            img_title = 0;
        }
        if (img_text > im_len-1) {
            img_text = 0;
        }
        display_image.src = images_mal[img_image++]
        display_image.title = images_hover_mal[img_title++]
        image_text.innerText = images_text_mal[img_text++]
        image_text.style.fontStyle = 'italic';
    });
    
    document.getElementById('hide-mal').onclick = function() {  
        display_image.style.visibility = 'hidden';  
        hide_button.style.visibility = 'hidden';
        move_button.style.visibility = 'hidden';  
        image_text.style.visibility = 'hidden';
    };    
})(); 

/* INDIGO      */
(function() {    
    let img_image = 0;
    let img_title = 0;
    let img_text = 0;
    let images_indi = ['./images/creeping-indigo-root.png', './images/creeping-indigo.png'];
    let images_hover_indi = ['Creeping indigo root', 'Indigofera spicata'];
    let images_text_indi = ['Creeping indigo root', 'Indigofera spicata']
    let im_len = images_indi.length;
    let display_image = document.getElementById('image1-indi');
    let hide_button = document.getElementById('hide-indi');
    let move_button = document.getElementById('image2-indi');
    let image_text = document.getElementById('image-text-indi');

    document.getElementById('indi').onclick = function() { 
        hide_button.style.visibility = 'visible';     
        display_image.style.visibility = 'visible';
        move_button.style.visibility = 'visible';
        image_text.style.visibility = 'visible';
    };

    let indi_ol = document.getElementById('image2-indi');
    indi_ol.addEventListener('click', function() {
        if (img_image > im_len-1) {
            img_image = 0;
        }
        if (img_title > im_len-1) {
            img_title = 0;
        }
        if (img_text > im_len-1) {
            img_text = 0;
        }
        display_image.src = images_indi[img_image++]
        display_image.title = images_hover_indi[img_title++]
        image_text.innerText = images_text_indi[img_text++]
        image_text.style.fontStyle = 'italic';
    });
    
    document.getElementById('hide-indi').onclick = function() {  
        display_image.style.visibility = 'hidden';  
        hide_button.style.visibility = 'hidden';
        move_button.style.visibility = 'hidden';  
        image_text.style.visibility = 'hidden';
    };    
})(); 

/* crotalaria      */
(function() {    
    let img_image = 0;
    let img_title = 0;
    let img_text = 0;
    let images_crot = ['./images/crotalaria-incana.png', './images/crotalaria pallida.png', './images/crotalaria_lanceolata.png'];
    let images_hover_crot = ['Photo: GA Parada, Missouri Botanical Garden (Tropicos) - Crotalaria incana.', 
    'Crotalaria pallida', 'Photo by Brisbane Weeds, Crotalaria lanceolata.'];
    let images_text_crot = ['Crotalaria incana', 'Crotalaria pallida', 'Crotalaria lanceolata']
    let im_len = images_crot.length;
    let display_image = document.getElementById('image1-crot');
    let hide_button = document.getElementById('hide-crot');
    let move_button = document.getElementById('image2-crot');
    let image_text = document.getElementById('image-text-crot');

    document.getElementById('crot').onclick = function() { 
        hide_button.style.visibility = 'visible';     
        display_image.style.visibility = 'visible';
        move_button.style.visibility = 'visible';
        image_text.style.visibility = 'visible';
    };

    let crot_ol = document.getElementById('image2-crot');
    crot_ol.addEventListener('click', function() {
        if (img_image > im_len-1) {
            img_image = 0;
        }
        if (img_title > im_len-1) {
            img_title = 0;
        }
        if (img_text > im_len-1) {
            img_text = 0;
        }
        display_image.src = images_crot[img_image++]
        display_image.title = images_hover_crot[img_title++]
        image_text.innerText = images_text_crot[img_text++]
        image_text.style.fontStyle = 'italic';
    });
    
    document.getElementById('hide-crot').onclick = function() {  
        display_image.style.visibility = 'hidden';  
        hide_button.style.visibility = 'hidden';
        move_button.style.visibility = 'hidden';  
        image_text.style.visibility = 'hidden';
    };    
})(); 

/* sonchus     */

(function() {    
    let img_image = 0;
    let img_title = 0;
    let img_text = 0;
    let images_sonchus = ['./images/sonchus-plant.png', './images/sonchus-patch-1.jpg', './images/sonchus-rosette.png'];
    let images_hover_sonchus = ['Sonchus oleraceus', 'Sonchus oleraceus: lush weed growth (plenty of water and nutrients.', 'Sonchus oleraceus' ];
    let images_text_sonchus = ['Sonchus oleraceus', 'Sonchus oleraceus', 'Sonchus oleraceus']
    let im_len = images_sonchus.length;

    document.getElementById('son').onclick = function() { 
        let display_image = document.getElementById('image1-sonchus');
        let hide_button = document.getElementById('hide-son');
        let move_button = document.getElementById('image2-sonchus');
        let image_text = document.getElementById('image-text-sonchus');
        hide_button.style.visibility = 'visible';     
        display_image.style.visibility = 'visible';
        move_button.style.visibility = 'visible';
        image_text.style.visibility = 'visible';
    };

    let sonchus_ol = document.getElementById('image2-sonchus');
    sonchus_ol.addEventListener('click', function() {
        let image_text = document.getElementById('image-text-sonchus');
        let display_image = document.getElementById('image1-sonchus');
        if (img_image > im_len-1) {
            img_image = 0;
        }
        if (img_title > im_len-1) {
            img_title = 0;
        }
        if (img_text > im_len-1) {
            img_text = 0;
        }
        display_image.src = images_sonchus[img_image++]
        display_image.title = images_hover_sonchus[img_title++]
        image_text.innerText = images_text_sonchus[img_text++]
        image_text.style.fontStyle = 'italic';
    });
    
    document.getElementById('hide-son').onclick = function() {  
        let display_image = document.getElementById('image1-sonchus');
        let hide_button= document.getElementById('hide-son');  
        let move_button = document.getElementById('image2-sonchus');
        let image_text = document.getElementById('image-text-sonchus');
        display_image.style.visibility = 'hidden';  
        hide_button.style.visibility = 'hidden';
        move_button.style.visibility = 'hidden';  
        image_text.style.visibility = 'hidden';
    };    
})();

/* CORONOPUS     */

(function() {    
    let img_image = 0;
    let img_title = 0;
    let img_text = 0;
    let images_coronopus = ['./images/coronopus-sprawl.png', './images/coronopus-rosette.png'];
    let images_hover_coronopus = ['Coronopus didymus - sprawling plant', 'Coronopus didymus - rosette' ];
    let images_text_coronopus = ['Coronopus didymus - sprawling plant', 'Coronopus didymus - rosette']
    let im_len = images_coronopus.length;

    document.getElementById('coro').onclick = function() { 
        let display_image = document.getElementById('image1-coro');
        let hide_button = document.getElementById('hide-coro');
        let move_button = document.getElementById('image2-coro');
        let image_text = document.getElementById('image-text-coro');
        hide_button.style.visibility = 'visible';     
        display_image.style.visibility = 'visible';
        move_button.style.visibility = 'visible';
        image_text.style.visibility = 'visible';
    };

    let coronopus_ol = document.getElementById('image2-coro');
    coronopus_ol.addEventListener('click', function() {
        let image_text = document.getElementById('image-text-coro');
        let display_image = document.getElementById('image1-coro');
        if (img_image > im_len-1) {
            img_image = 0;
        }
        if (img_title > im_len-1) {
            img_title = 0;
        }
        if (img_text > im_len-1) {
            img_text = 0;
        }
        display_image.src = images_coronopus[img_image++]
        display_image.title = images_hover_coronopus[img_title++]
        image_text.innerText = images_text_coronopus[img_text++]
        image_text.style.fontStyle = 'italic';
    });
    
    document.getElementById('hide-coro').onclick = function() {  
        let display_image = document.getElementById('image1-coro');
        let hide_button= document.getElementById('hide-coro');  
        let move_button = document.getElementById('image2-coro');
        let image_text = document.getElementById('image-text-coro');
        display_image.style.visibility = 'hidden';  
        hide_button.style.visibility = 'hidden';
        move_button.style.visibility = 'hidden';  
        image_text.style.visibility = 'hidden';
    };    
})();

/* CUDWEED     */

(function() {    
    let img_image = 0;
    let img_title = 0;
    let img_text = 0;
    let images_cud = ['./images/cud-flower.png', './images/cud-2.png'];
    let images_hover_cud = ['Cudweed', 'Cudweed'];
    let images_text_cud = ['Cudweed', 'Shiny cudweed', 'Cudweed']
    let im_len = images_cud.length;

    document.getElementById('cud').onclick = function() { 
        let display_image = document.getElementById('image1-cud');
        let hide_button = document.getElementById('hide-cud');
        let move_button = document.getElementById('image2-cud');
        let image_text = document.getElementById('image-text-cud');
        hide_button.style.visibility = 'visible';     
        display_image.style.visibility = 'visible';
        move_button.style.visibility = 'visible';
        image_text.style.visibility = 'visible';
    };

    let cud_ol = document.getElementById('image2-cud');
    cud_ol.addEventListener('click', function() {
        let image_text = document.getElementById('image-text-cud');
        let display_image = document.getElementById('image1-cud');
        if (img_image > im_len-1) {
            img_image = 0;
        }
        if (img_title > im_len-1) {
            img_title = 0;
        }
        if (img_text > im_len-1) {
            img_text = 0;
        }
        display_image.src = images_cud[img_image++]
        display_image.title = images_hover_cud[img_title++]
        image_text.innerText = images_text_cud[img_text++]
        image_text.style.fontStyle = 'italic';
    });
    
    document.getElementById('hide-cud').onclick = function() {  
        let display_image = document.getElementById('image1-cud');
        let hide_button= document.getElementById('hide-cud');  
        let move_button = document.getElementById('image2-cud');
        let image_text = document.getElementById('image-text-cud');
        display_image.style.visibility = 'hidden';  
        hide_button.style.visibility = 'hidden';
        move_button.style.visibility = 'hidden';  
        image_text.style.visibility = 'hidden';
    };    
})();

/* COTULA     */

(function() {    
    let img_image = 0;
    let img_title = 0;
    let img_text = 0;
    let images_cotula = ['./images/cotula-2.png', './images/cotula-1.png'];
    let images_hover_cotula = ['Common cotula', 'Common cotula' ];
    let images_text_cotula = ['Common cotula', 'Common cotula']
    let im_len = images_cotula.length;

    document.getElementById('cotula').onclick = function() { 
        let display_image = document.getElementById('image1-cotula');
        let hide_button = document.getElementById('hide-cotula');
        let move_button = document.getElementById('image2-cotula');
        let image_text = document.getElementById('image-text-cotula');
        hide_button.style.visibility = 'visible';     
        display_image.style.visibility = 'visible';
        move_button.style.visibility = 'visible';
        image_text.style.visibility = 'visible';
    };

    let cotula_ol = document.getElementById('image2-cotula');
    cotula_ol.addEventListener('click', function() {
        let image_text = document.getElementById('image-text-cotula');
        let display_image = document.getElementById('image1-cotula');
        if (img_image > im_len-1) {
            img_image = 0;
        }
        if (img_title > im_len-1) {
            img_title = 0;
        }
        if (img_text > im_len-1) {
            img_text = 0;
        }
        display_image.src = images_cotula[img_image++]
        display_image.title = images_hover_cotula[img_title++]
        image_text.innerText = images_text_cotula[img_text++]
        image_text.style.fontStyle = 'italic';
    });
    
    document.getElementById('hide-cotula').onclick = function() {  
        let display_image = document.getElementById('image1-cotula');
        let hide_button= document.getElementById('hide-cotula');  
        let move_button = document.getElementById('image2-cotula');
        let image_text = document.getElementById('image-text-cotula');
        display_image.style.visibility = 'hidden';  
        hide_button.style.visibility = 'hidden';
        move_button.style.visibility = 'hidden';  
        image_text.style.visibility = 'hidden';
    };    
})();

/* HAWKBEARD     */

(function() {    
    let img_image = 0;
    let img_title = 0;
    let img_text = 0;
    let images_hawk = ['./images/hawksbeard-2.png', './images/hawksbeard-1.png'];
    let images_hover_hawk = ['Hawkesbeard', 'Hawksbeard: image by Ern Perkins' ];
    let images_text_hawk = ['Hawkesbeard', 'Hawksbeard']
    let im_len = images_hawk.length;

    document.getElementById('hawk').onclick = function() { 
        let display_image = document.getElementById('image1-hawk');
        let hide_button = document.getElementById('hide-hawk');
        let move_button = document.getElementById('image2-hawk');
        let image_text = document.getElementById('image-text-hawk');
        hide_button.style.visibility = 'visible';     
        display_image.style.visibility = 'visible';
        move_button.style.visibility = 'visible';
        image_text.style.visibility = 'visible';
    };

    let hawk_ol = document.getElementById('image2-hawk');
    hawk_ol.addEventListener('click', function() {
        let image_text = document.getElementById('image-text-hawk');
        let display_image = document.getElementById('image1-hawk');
        if (img_image > im_len-1) {
            img_image = 0;
        }
        if (img_title > im_len-1) {
            img_title = 0;
        }
        if (img_text > im_len-1) {
            img_text = 0;
        }
        display_image.src = images_hawk[img_image++]
        display_image.title = images_hover_hawk[img_title++]
        image_text.innerText = images_text_hawk[img_text++]
        image_text.style.fontStyle = 'italic';
    });
    
    document.getElementById('hide-hawk').onclick = function() {  
        let display_image = document.getElementById('image1-hawk');
        let hide_button= document.getElementById('hide-hawk');  
        let move_button = document.getElementById('image2-hawk');
        let image_text = document.getElementById('image-text-hawk');
        display_image.style.visibility = 'hidden';  
        hide_button.style.visibility = 'hidden';
        move_button.style.visibility = 'hidden';  
        image_text.style.visibility = 'hidden';
    };    
})();

/* SMOOTH CATSEAR    */

(function() {    
    let img_image = 0;
    let img_title = 0;
    let img_text = 0;
    let images_smcatsear = ['./images/smooth-catsear-hoverfly.png', './images/smooth-catsear-plant.png'];
    let images_hover_smcatsear = ['Smooth catsear: image by Weeds of Melbourne (https://weedsofmelbourne.org/smooth-cats-ear-hypochaeris-glabra)',
     'Smooth catsear' ];
    let images_text_smcatsear = ['Smooth catsear', 'Smooth catsear']
    let im_len = images_smcatsear.length;

    document.getElementById('smcatsear').onclick = function() { 
        let display_image = document.getElementById('image1-smcatsear');
        let hide_button = document.getElementById('hide-smcatsear');
        let move_button = document.getElementById('image2-smcatsear');
        let image_text = document.getElementById('image-text-smcatsear');
        hide_button.style.visibility = 'visible';     
        display_image.style.visibility = 'visible';
        move_button.style.visibility = 'visible';
        image_text.style.visibility = 'visible';
    };

    let smcatsear_ol = document.getElementById('image2-smcatsear');
    smcatsear_ol.addEventListener('click', function() {
        let image_text = document.getElementById('image-text-smcatsear');
        let display_image = document.getElementById('image1-smcatsear');
        if (img_image > im_len-1) {
            img_image = 0;
        }
        if (img_title > im_len-1) {
            img_title = 0;
        }
        if (img_text > im_len-1) {
            img_text = 0;
        }
        display_image.src = images_smcatsear[img_image++]
        display_image.title = images_hover_smcatsear[img_title++]
        image_text.innerText = images_text_smcatsear[img_text++]
        image_text.style.fontStyle = 'italic';
    });
    
    document.getElementById('hide-smcatsear').onclick = function() {  
        let display_image = document.getElementById('image1-smcatsear');
        let hide_button= document.getElementById('hide-smcatsear');  
        let move_button = document.getElementById('image2-smcatsear');
        let image_text = document.getElementById('image-text-smcatsear');
        display_image.style.visibility = 'hidden';  
        hide_button.style.visibility = 'hidden';
        move_button.style.visibility = 'hidden';  
        image_text.style.visibility = 'hidden';
    };    
})();

/* CATSEAR     */

(function() {    
    let img_image = 0;
    let img_title = 0;
    let img_text = 0;
    let images_catsear = ['./images/catsear-leaf.png', './images/catsear-plant.png', './images/catsear-flower.png'];
    let images_hover_catsear = ["Cat's ear", "Cat's ear", "Cat's ear: - image by Ern Perkins (https://www.castlemaineflora.org.au/pic/h/hypoc/hyrad.htm)"];
    let images_text_catsear = ["Cat's ear", "Cat's ear", "Cat's ear"];
    let im_len = images_catsear.length;

    document.getElementById('catsear').onclick = function() { 
        let display_image = document.getElementById('image1-catsear');
        let hide_button = document.getElementById('hide-catsear');
        let move_button = document.getElementById('image2-catsear');
        let image_text = document.getElementById('image-text-catsear');
        hide_button.style.visibility = 'visible';     
        display_image.style.visibility = 'visible';
        move_button.style.visibility = 'visible';
        image_text.style.visibility = 'visible';
    };

    let catsear_ol = document.getElementById('image2-catsear');
    catsear_ol.addEventListener('click', function() {
        let image_text = document.getElementById('image-text-catsear');
        let display_image = document.getElementById('image1-catsear');
        if (img_image > im_len-1) {
            img_image = 0;
        }
        if (img_title > im_len-1) {
            img_title = 0;
        }
        if (img_text > im_len-1) {
            img_text = 0;
        }
        display_image.src = images_catsear[img_image++]
        display_image.title = images_hover_catsear[img_title++]
        image_text.innerText = images_text_catsear[img_text++]
        image_text.style.fontStyle = 'italic';
    });
    
    document.getElementById('hide-catsear').onclick = function() {  
        let display_image = document.getElementById('image1-catsear');
        let hide_button= document.getElementById('hide-catsear');  
        let move_button = document.getElementById('image2-catsear');
        let image_text = document.getElementById('image-text-catsear');
        display_image.style.visibility = 'hidden';  
        hide_button.style.visibility = 'hidden';
        move_button.style.visibility = 'hidden';  
        image_text.style.visibility = 'hidden';
    };    
})();

/* DANDELION     */

(function() {    
    let img_image = 0;
    let img_title = 0;
    let img_text = 0;
    let images_dand = ['./images/dandelion.png'];
    let images_hover_dand = ['Dandelion: Image by H. Zell (https://commons.wikimedia.org/wiki/File:Taraxacum_officinale_001.JPG) -  Creative Commons Attribution-Share Alike 3.0' ];
    let images_text_dand = ['Dandelion']
    let im_len = images_dand.length;

    document.getElementById('dand').onclick = function() { 
        let display_image = document.getElementById('image1-dand');
        let hide_button = document.getElementById('hide-dand');
        let move_button = document.getElementById('image2-dand');
        let image_text = document.getElementById('image-text-dand');
        hide_button.style.visibility = 'visible';     
        display_image.style.visibility = 'visible';
        move_button.style.visibility = 'visible';
        image_text.style.visibility = 'visible';
    };

    let dand_ol = document.getElementById('image2-dand');
    dand_ol.addEventListener('click', function() {
        let image_text = document.getElementById('image-text-dand');
        let display_image = document.getElementById('image1-dand');
        if (img_image > im_len-1) {
            img_image = 0;
        }
        if (img_title > im_len-1) {
            img_title = 0;
        }
        if (img_text > im_len-1) {
            img_text = 0;
        }
        display_image.src = images_dand[img_image++]
        display_image.title = images_hover_dand[img_title++]
        image_text.innerText = images_text_dand[img_text++]
        image_text.style.fontStyle = 'italic';
    });
    
    document.getElementById('hide-dand').onclick = function() {  
        let display_image = document.getElementById('image1-dand');
        let hide_button= document.getElementById('hide-dand');  
        let move_button = document.getElementById('image2-dand');
        let image_text = document.getElementById('image-text-dand');
        display_image.style.visibility = 'hidden';  
        hide_button.style.visibility = 'hidden';
        move_button.style.visibility = 'hidden';  
        image_text.style.visibility = 'hidden';
    };    
})();

/* MOUSEEAR     */

(function() {    
    let img_image = 0;
    let img_title = 0;
    let img_text = 0;
    let images_cera = ['./images/cerastium.png'];
    let images_hover_cera = ['Mouse-ear Chickweed growing in a pot' ];
    let images_text_cera = ['Mouse-ear Chickweed']
    let im_len = images_cera.length;

    document.getElementById('cera').onclick = function() { 
        let display_image = document.getElementById('image1-cera');
        let hide_button = document.getElementById('hide-cera');
        let move_button = document.getElementById('image2-cera');
        let image_text = document.getElementById('image-text-cera');
        hide_button.style.visibility = 'visible';     
        display_image.style.visibility = 'visible';
        move_button.style.visibility = 'visible';
        image_text.style.visibility = 'visible';
    };

    let cera_ol = document.getElementById('image2-cera');
    cera_ol.addEventListener('click', function() {
        let image_text = document.getElementById('image-text-cera');
        let display_image = document.getElementById('image1-cera');
        if (img_image > im_len-1) {
            img_image = 0;
        }
        if (img_title > im_len-1) {
            img_title = 0;
        }
        if (img_text > im_len-1) {
            img_text = 0;
        }
        display_image.src = images_cera[img_image++]
        display_image.title = images_hover_cera[img_title++]
        image_text.innerText = images_text_cera[img_text++]
        image_text.style.fontStyle = 'italic';
    });
    
    document.getElementById('hide-cera').onclick = function() {  
        let display_image = document.getElementById('image1-cera');
        let hide_button= document.getElementById('hide-cera');  
        let move_button = document.getElementById('image2-cera');
        let image_text = document.getElementById('image-text-cera');
        display_image.style.visibility = 'hidden';  
        hide_button.style.visibility = 'hidden';
        move_button.style.visibility = 'hidden';  
        image_text.style.visibility = 'hidden';
    };    
})();

/* CHICKWEED     */

(function() {    
    let img_image = 0;
    let img_title = 0;
    let img_text = 0;
    let images_chick = ['./images/chickweed-close.png', './images/chickweed.png'];
    let images_hover_chick = ['Chickweed', 'Chickweed growing in a nursery pot' ];
    let images_text_chick = ['Chickweed', 'Chickweed']
    let im_len = images_chick.length;

    document.getElementById('chick').onclick = function() { 
        let display_image = document.getElementById('image1-chick');
        let hide_button = document.getElementById('hide-chick');
        let move_button = document.getElementById('image2-chick');
        let image_text = document.getElementById('image-text-chick');
        hide_button.style.visibility = 'visible';     
        display_image.style.visibility = 'visible';
        move_button.style.visibility = 'visible';
        image_text.style.visibility = 'visible';
    };

    let chick_ol = document.getElementById('image2-chick');
    chick_ol.addEventListener('click', function() {
        let image_text = document.getElementById('image-text-chick');
        let display_image = document.getElementById('image1-chick');
        if (img_image > im_len-1) {
            img_image = 0;
        }
        if (img_title > im_len-1) {
            img_title = 0;
        }
        if (img_text > im_len-1) {
            img_text = 0;
        }
        display_image.src = images_chick[img_image++]
        display_image.title = images_hover_chick[img_title++]
        image_text.innerText = images_text_chick[img_text++]
        image_text.style.fontStyle = 'italic';
    });
    
    document.getElementById('hide-chick').onclick = function() {  
        let display_image = document.getElementById('image1-chick');
        let hide_button= document.getElementById('hide-chick');  
        let move_button = document.getElementById('image2-chick');
        let image_text = document.getElementById('image-text-chick');
        display_image.style.visibility = 'hidden';  
        hide_button.style.visibility = 'hidden';
        move_button.style.visibility = 'hidden';  
        image_text.style.visibility = 'hidden';
    };    
})();

/* FLICKWEED     */

(function() {    
    let img_image = 0;
    let img_title = 0;
    let img_text = 0;
    let images_flick = ['./images/flickweed-orchard.png', './images/flickweed-close.png', './images/flickweed.png'];
    let images_hover_flick = ['Flickweed growing in the orchard interrow area', 'Flickweed', 'Flickweed' ];
    let images_text_flick = ['Flickweed', 'Flickweed', 'Flickweed']
    let im_len = images_flick.length;

    document.getElementById('flick').onclick = function() { 
        let display_image = document.getElementById('image1-flick');
        let hide_button = document.getElementById('hide-flick');
        let move_button = document.getElementById('image2-flick');
        let image_text = document.getElementById('image-text-flick');
        hide_button.style.visibility = 'visible';     
        display_image.style.visibility = 'visible';
        move_button.style.visibility = 'visible';
        image_text.style.visibility = 'visible';
    };

    let flick_ol = document.getElementById('image2-flick');
    flick_ol.addEventListener('click', function() {
        let image_text = document.getElementById('image-text-flick');
        let display_image = document.getElementById('image1-flick');
        if (img_image > im_len-1) {
            img_image = 0;
        }
        if (img_title > im_len-1) {
            img_title = 0;
        }
        if (img_text > im_len-1) {
            img_text = 0;
        }
        display_image.src = images_flick[img_image++]
        display_image.title = images_hover_flick[img_title++]
        image_text.innerText = images_text_flick[img_text++]
        image_text.style.fontStyle = 'italic';
    });
    
    document.getElementById('hide-flick').onclick = function() {  
        let display_image = document.getElementById('image1-flick');
        let hide_button= document.getElementById('hide-flick');  
        let move_button = document.getElementById('image2-flick');
        let image_text = document.getElementById('image-text-flick');
        display_image.style.visibility = 'hidden';  
        hide_button.style.visibility = 'hidden';
        move_button.style.visibility = 'hidden';  
        image_text.style.visibility = 'hidden';
    };    
})();

/* FATHEN     */

(function() {    
    let img_image = 0;
    let img_title = 0;
    let img_text = 0;
    let images_fat = ['./images/fathen.png', './images/fathen-close.png', './images/fathen-seedling.png', './images/fathen-2.png'];
    let images_hover_fat = ['Fat hen', 'Fat hen', 'Fat hen', 'Fat hen' ];
    let images_text_fat = ['Fat hen', 'Fat hen', 'Fat hen', 'Fat hen']
    let im_len = images_fat.length;

    document.getElementById('fat').onclick = function() { 
        let display_image = document.getElementById('image1-fat');
        let hide_button = document.getElementById('hide-fat');
        let move_button = document.getElementById('image2-fat');
        let image_text = document.getElementById('image-text-fat');
        hide_button.style.visibility = 'visible';     
        display_image.style.visibility = 'visible';
        move_button.style.visibility = 'visible';
        image_text.style.visibility = 'visible';
    };

    let fat_ol = document.getElementById('image2-fat');
    fat_ol.addEventListener('click', function() {
        let image_text = document.getElementById('image-text-fat');
        let display_image = document.getElementById('image1-fat');
        if (img_image > im_len-1) {
            img_image = 0;
        }
        if (img_title > im_len-1) {
            img_title = 0;
        }
        if (img_text > im_len-1) {
            img_text = 0;
        }
        display_image.src = images_fat[img_image++]
        display_image.title = images_hover_fat[img_title++]
        image_text.innerText = images_text_fat[img_text++]
        image_text.style.fontStyle = 'italic';
    });
    
    document.getElementById('hide-fat').onclick = function() {  
        let display_image = document.getElementById('image1-fat');
        let hide_button= document.getElementById('hide-fat');  
        let move_button = document.getElementById('image2-fat');
        let image_text = document.getElementById('image-text-fat');
        display_image.style.visibility = 'hidden';  
        hide_button.style.visibility = 'hidden';
        move_button.style.visibility = 'hidden';  
        image_text.style.visibility = 'hidden';
    };    
})();

/* BURMEDIC     */

(function() {    
    let img_image = 0;
    let img_title = 0;
    let img_text = 0;
    let images_bur = ['./images/Medicago-polymorpha.png', './images/Medicago-polymorpha-2.png', './images/Medicago-polymorpha-1.png'];
    let images_hover_bur = ['Burr Medic', 'Burr Medic', 'Burr Medic' ];
    let images_text_bur = ['Burr Medic', 'Burr Medic', 'Burr Medic']
    let im_len = images_bur.length;

    document.getElementById('bur').onclick = function() { 
        let display_image = document.getElementById('image1-bur');
        let hide_button = document.getElementById('hide-bur');
        let move_button = document.getElementById('image2-bur');
        let image_text = document.getElementById('image-text-bur');
        hide_button.style.visibility = 'visible';     
        display_image.style.visibility = 'visible';
        move_button.style.visibility = 'visible';
        image_text.style.visibility = 'visible';
    };

    let bur_ol = document.getElementById('image2-bur');
    bur_ol.addEventListener('click', function() {
        let image_text = document.getElementById('image-text-bur');
        let display_image = document.getElementById('image1-bur');
        if (img_image > im_len-1) {
            img_image = 0;
        }
        if (img_title > im_len-1) {
            img_title = 0;
        }
        if (img_text > im_len-1) {
            img_text = 0;
        }
        display_image.src = images_bur[img_image++]
        display_image.title = images_hover_bur[img_title++]
        image_text.innerText = images_text_bur[img_text++]
        image_text.style.fontStyle = 'italic';
    });
    
    document.getElementById('hide-bur').onclick = function() {  
        let display_image = document.getElementById('image1-bur');
        let hide_button= document.getElementById('hide-bur');  
        let move_button = document.getElementById('image2-bur');
        let image_text = document.getElementById('image-text-bur');
        display_image.style.visibility = 'hidden';  
        hide_button.style.visibility = 'hidden';
        move_button.style.visibility = 'hidden';  
        image_text.style.visibility = 'hidden';
    };    
})();

/* TEST CODE TO MOVE THROUGH PHOTOS */
/* CROTALARIA      */
/*et img_now = 0;
let images = ['./images/spider.png', './images/thrips.png'];
let im_len = images.length;


    //event.target here is refer to clicked <img>
    //that triger the event

(function() {    
    //var dialog = document.getElementById('indiGO'); 
    document.getElementById('col').onclick = function() { 
        let ff = document.getElementById('image1');
        let dd = document.getElementById('hide-col');
        let ss = document.getElementById('image2');
        dd.style.visibility = 'visible';     
        ff.style.visibility = 'visible';
        ss.style.visibility = 'visible';
    };

    let elm = document.getElementById('image2');
    elm.addEventListener('click', function() {
        let ff = document.getElementById('image1');
        if (img_now > im_len-1) {
            img_now = 0;
        }
        ff.src = images[img_now++]
    });
    
    document.getElementById('hide-col').onclick = function() {  
        let ff = document.getElementById('image1');
        let dd = document.getElementById('hide-col');  
        ff.style.visibility = 'hidden';  
        dd.style.visibility = 'hidden';
    };    
})();   */   


/*(function() {   
    document.getElementById('image-1').onclick = function() { 
        let display_image = document.getElementById('pest1');
        let hide_button = document.getElementById('hide-pest1');
        hide_button.style.visibility = 'visible';     
        display_image.style.visibility = 'visible';
    };
    
    document.getElementById('hide-pest1').onclick = function() {  
        let display_image = document.getElementById('image-1');
        let hide_button= document.getElementById('hide-pest1');  
        display_image.style.visibility = 'hidden';  
        hide_button.style.visibility = 'hidden'; 
    };    
})();*/


(function() {    
   
    document.getElementById('image-1').onclick = function() {    
        let ins1Button = document.getElementById('insectBut-1');
        let Image__1 = document.getElementById('insect1');
        let insectCONT = document.getElementById('insect-container');
        ins1Button.style.visibility = 'visible';  
        Image__1.style.visibility = 'visible'; 
        insectCONT.style.visibility = 'visible'; 
    };
    
    document.getElementById('insectBut-1').onclick = function() {
        let Image__1 = document.getElementById('insect1');
        let ins1Button = document.getElementById('insectBut-1');
        let insectCONT = document.getElementById('insect-container');
        Image__1.style.visibility = 'hidden';
        ins1Button.style.visibility = 'hidden'; 
        insectCONT.style.visibility = 'hidden';
    };   
})();

(function() {    
   
    document.getElementById('image-2').onclick = function() {    
        let ins1Button = document.getElementById('insectBut-2');
        let Image__1 = document.getElementById('insect2');
        let insectCONT = document.getElementById('insect-container');
        ins1Button.style.visibility = 'visible';  
        Image__1.style.visibility = 'visible'; 
        insectCONT.style.visibility = 'visible'; 
    };
    
    document.getElementById('insectBut-2').onclick = function() {
        let Image__1 = document.getElementById('insect2');
        let ins1Button = document.getElementById('insectBut-2');
        let insectCONT = document.getElementById('insect-container');
        Image__1.style.visibility = 'hidden';
        ins1Button.style.visibility = 'hidden'; 
        insectCONT.style.visibility = 'hidden';
    };   
})();

(function() {    
   
    document.getElementById('image-3').onclick = function() {    
        let ins1Button = document.getElementById('insectBut-3');
        let Image__1 = document.getElementById('insect3');
        let insectCONT = document.getElementById('insect-container');
        ins1Button.style.visibility = 'visible';  
        Image__1.style.visibility = 'visible'; 
        insectCONT.style.visibility = 'visible'; 
    };
    
    document.getElementById('insectBut-3').onclick = function() {
        let Image__1 = document.getElementById('insect3');
        let ins1Button = document.getElementById('insectBut-3');
        let insectCONT = document.getElementById('insect-container');
        Image__1.style.visibility = 'hidden';
        ins1Button.style.visibility = 'hidden'; 
        insectCONT.style.visibility = 'hidden';
    };   
})();

/* pest 1    */
/*(function() {    
    var dialog = document.getElementById('pest1'); 
    document.getElementById('image-1').onclick = function() {    
        dialog.showModal();    
    };
    
    document.getElementById('hide-pest1').onclick = function() {    
        dialog.close();    
    };    
})();*/

/* pest 2    */
/*(function() {    
    var dialog = document.getElementById('pest2'); 
    document.getElementById('image-2').onclick = function() {    
        dialog.showModal();    
    };
    
    document.getElementById('hide-pest2').onclick = function() {    
        dialog.close();    
    };    
})();

/* pest 3    */
/*(function() {    
    var dialog = document.getElementById('pest3'); 
    document.getElementById('image-3').onclick = function() {    
        dialog.showModal();    
    };
    
    document.getElementById('hide-pest3').onclick = function() {    
        dialog.close();    
    };    
})();*/





info1.addEventListener('click', function(e) {
    e.preventDefault();
    mallow();
})
info2.addEventListener('click', function(e) {
    e.preventDefault();
    nightshade();
})
info3.addEventListener('click', function(e) {
    e.preventDefault();
    thickhead();
})
info4.addEventListener('click', function(e) {
    e.preventDefault();
    amaranthus();
})
info5.addEventListener('click', function(e) {
    e.preventDefault();
    gomphrena();
})
info6.addEventListener('click', function(e) {
    e.preventDefault();
    verbenaB();
})
info7.addEventListener('click', function(e) {
    e.preventDefault();
    tropicalchickweed();
})
info8.addEventListener('click', function(e) {
    e.preventDefault();
    Capsella();
})
info9.addEventListener('click', function(e) {
    e.preventDefault();
    Heliotrope();
})
info10.addEventListener('click', function(e) {
    e.preventDefault();
    Khaki();
})
info11.addEventListener('click', function(e) {
    e.preventDefault();
    Fleabane();
})
info12.addEventListener('click', function(e) {
    e.preventDefault();
    Bidens();
})
info13.addEventListener('click', function(e) {
    e.preventDefault();
    Potato();
})
info14.addEventListener('click', function(e) {
    e.preventDefault();
    willowherb();
})
info15.addEventListener('click', function(e) {
    e.preventDefault();
    cotton();
})
info16.addEventListener('click', function(e) {
    e.preventDefault();
    brazilian();
})
info17.addEventListener('click', function(e) {
    e.preventDefault();
    Mitracarpus();
})
info18.addEventListener('click', function(e) {
    e.preventDefault();
    Richardia();
})
info19.addEventListener('click', function(e) {
    e.preventDefault();
    Sida();
})
info20.addEventListener('click', function(e) {
    e.preventDefault();
    Sida_rhom();
})
info21.addEventListener('click', function(e) {
    e.preventDefault();
    Sida_cord();
})
info22.addEventListener('click', function(e) {
    e.preventDefault();
    Malvastrum();
})
info23.addEventListener('click', function(e) {
    e.preventDefault();
    Indigo();
})
info24.addEventListener('click', function(e) {
    e.preventDefault();
    Crotalaria();
})
info25.addEventListener('click', function(e) {
    e.preventDefault();
    Sonchus();
})
info26.addEventListener('click', function(e) {
    e.preventDefault();
    Coronopus();
})
info27.addEventListener('click', function(e) {
    e.preventDefault();
    Cudweed();
})
info28.addEventListener('click', function(e) {
    e.preventDefault();
    Cotula();
})
info29.addEventListener('click', function(e) {
    e.preventDefault();
    Hawkweed();
})
info30.addEventListener('click', function(e) {
    e.preventDefault();
    Smooth_catsear();
})
info31.addEventListener('click', function(e) {
    e.preventDefault();
    Catsear();
})
info32.addEventListener('click', function(e) {
    e.preventDefault();
    Dandelion();
})
info33.addEventListener('click', function(e) {
    e.preventDefault();
    Mouseear();
})
info34.addEventListener('click', function(e) {
    e.preventDefault();
    Chickweed();
})
info35.addEventListener('click', function(e) {
    e.preventDefault();
    Flickweed();
})
info36.addEventListener('click', function(e) {
    e.preventDefault();
    Fathen();
})
info37.addEventListener('click', function(e) {
    e.preventDefault();
    Burmedic();
})
