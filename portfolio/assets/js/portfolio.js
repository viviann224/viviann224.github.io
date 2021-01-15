document.querySelector(".info").addEventListener('shown.bs.modal', function () {
  document.querySelector(".modal-dialog").focus()
})
const project=[
  {
    img:["abr-1.jpg","abr-2.jpg","abr-3.jpg","abr-4.jpg","abr-5.jpg","abr-6.jpg"],
    modalName:"exampleModal",
    name: "abr",
    carousel:"abrcarousel"
  }

];
for(let projNum=0; projNum<project.length; projNum++){
  let d1 = document.createElement("div");
  d1.setAttribute("class","modal fade");
  d1.setAttribute("id",project[projNum].modalName);
  d1.setAttribute("data-bs-backdrop", "static");
  d1.setAttribute("data-bs-keyboard","false");
  d1.setAttribute("tabindex","-1");
  d1.setAttribute("aria-labelledby","staticBackdropLabel");
  d1.setAttribute("aria-hidden","true");

  let d2 = document.createElement("div");
  d2.setAttribute("class","modal-dialog modal-xl "+project[projNum].name);

  let d3 = document.createElement("div");
  d3.setAttribute("class","modal-content");

  let d4 = document.createElement("div");
  d4.setAttribute("class","modal-header");

  let btn = document.createElement("button");
  btn.setAttribute("type","button");
  btn.setAttribute("class","btn-close");
  btn.setAttribute("data-bs-dismiss","modal");
  btn.setAttribute("aria-label","Close");

  let d5 = document.createElement("div");
  d5.setAttribute("class","modal-body");

  let d6 = document.createElement("div");
  d6.setAttribute("class","container-fluid");

  let d7 = document.createElement("div");
  d7.setAttribute("class","row mt-3 mb-3");
  let d8 = document.createElement("div");
  d8.setAttribute("class","col-12 col-lg-5");

  let d9 = document.createElement("div");
  d9.setAttribute("id",project[projNum].carousel);
  d9.setAttribute("class","carousel slide");
  d9.setAttribute("data-bs-ride","carousel");


  let d10 = document.createElement("div");
  d10.setAttribute("class","carousel-inner"+projNum);
  for(let i=0;i<project[projNum].img.length;i++){
    let d=document.createElement("div");
    d.setAttribute("class","carousel-item");
    if(i==0){
      d.setAttribute("data-bs-interval","2000")
    }else{
      d.setAttribute("data-bs-interval","1500")
    }
    let img=document.createElement("img");
    img.setAttribute("src","./portfolio/assets/img/"+project[projNum].img[i]+"");
    img.setAttribute("class","d-block w-100");
    img.setAttribute("alt","...");
    d.appendChild(img);
    d10.appendChild(d)
  }

  let a1 =document.createElement("a");
  a1.setAttribute("class","carousel-control-prev");
  a1.setAttribute("href",project[projNum].carousel);
  a1.setAttribute("role","button");
  a1.setAttribute("data-bs-slide","prev")
  let span1 =document.createElement("span");
  span1.setAttribute("class","carousel-control-prev-icon");
  span1.setAttribute("aria-hidden","true");
  let span2 =document.createElement("span");
  span2.setAttribute("class","visually-hidden");
  span2.textContent="Previous";
  let a2 =document.createElement("a");
  a2.setAttribute("class","carousel-control-prev");
  a2.setAttribute("href",project[projNum].carousel);
  a2.setAttribute("role","button");
  a2.setAttribute("data-bs-slide","next")
  let span3 =document.createElement("span");
  span3.setAttribute("class","carousel-control-next-icon");
  span3.setAttribute("aria-hidden","true");
  let span4 =document.createElement("span");
  span4.setAttribute("class","visually-hidden");
  span4.textContent="Next";

  // d9.appendChild(d10);
  // d9.appendChild(a1);
  // d9.appendChild(span1);
  // d9.appendChild(span2);
  // d9.appendChild(a2);
  // d9.appendChild(span3);
  // d9.appendChild(span4);
  //
  // d8.appendChild(d9);
  // d7.appendChild(d8);
  // d6.appendChild(d7)
  // d5.appendChild(d6);
  // d4.appendChild(d5)
  d3.appendChild(d4)
  d2.appendChild(d3)
  d3.appendChild(d4);
  d2.appendChild(d4)
  d1.appendChild(d2)
  console.log(d1)
  document.querySelector(".modalArea").appendChild(d1)

}



function createProject(){
	let d1 = document.createElement("div");
	d1.setAttribute("class","col-lg-4 col-md-6 col-sm-6 col-xs-12  mb-3 mt-3 text-center");

	let d2 = document.createElement("div");
	d2.setAttribute("class","hovereffect");

	let img =document.createElement("img");
	img.setAttribute("class","img-responsive w-100")
	img.setAttribute("src","./portfolio/assets/img/abr-1.jpg");

	let d3 = document.createElement("div");
	d3.setAttribute("class","overlay");

	let h2 = document.createElement("h2");
	h2.textContent="Austin Bulldog Rescue";

	let p1 = document.createElement("p");
	p1.setAttribute("id", "card-desc");
	p1.textContent="Front-End Developer";

	let p2 = document.createElement("p");
	p2.setAttribute("id","card-hover");
	for(let i=0;i<3;i++){
		let iel =document.createElement("i");
		iel.setAttribute("class","fab fa-php");
		if(i<3-1){
			iel.textContent+="  |  ";
		}
		p2.append(iel)
	}
	let a = document.createElement("a");
	a.setAttribute("class","info btn btn-primary");
	a.setAttribute("data-bs-toggle","modal");
	a.setAttribute("data-bs-target","#exampleModal");
	a.textContent="Learn More";
	d3.appendChild(h2);
	d3.appendChild(p1);
	d3.appendChild(p2);
	d3.appendChild(a);
	d2.appendChild(img);
	d2.appendChild(d3);
	d1.appendChild(d2);

	document.querySelector(".projects").appendChild(d1)
}
createProject();
