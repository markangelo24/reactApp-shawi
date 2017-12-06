let process = {
	menu:function(){
		let content = <ul>
			<center><h1><a href='#' onClick={process.page1}><button>Click this...</button></a></h1></center>
		</ul>;
		ReactDOM.render(content,document.getElementById('root'));
	},
	page1:function(){
		let content = <div><center>
				<font color="sky blue"><h1>Pambansang Puno “Narra”</h1></font><br/> <img src="img/1.jpg" height="400" width="400"></img><br/>
				
				
				<a href='#' onClick={process.page10}><button>prev</button></a>======
				<a href='#' onClick={process.page2}><button>next</button></a>
				
<h3>
Ang Naga o mas kilala sa tawag na Narra (Pterocarpus indicus), na Pambansang Puno ng Pilipinas,<br/>
 ay isang puno na pinahahalagahan dahil sa angkin nitong tibay, bigat at magandang kalidad. Inihahalintulad<br/> 
 ito sa mga Pilipino, na tulad ng Narra, ang mga Pilipino ay sadya ring matatag. Ang punong ito ay matatagpuan<br/>
  sa bawat lugar sa bansa. Ipinangalan ito alinsunod sa isang siyudad sa Naga, Bikol. Tinatawag din itong Asana<br/>
   ng mga Tagalog, Balauning ng mga Mangyan, Daitanag ng mga Kapampangan at Odiau ng mga Pangasinense.<br/>
			</h3></center></div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	page2:function(){
		let content = <div>
				<center>
				<font color="sky blue"><h1>Pambansang Dahon “Anahaw”</h1></font><br/> <img src="img/2.jpg" height="400" width="400"></img><br/>
				
				<a href='#' onClick={process.page1}><button>prev</button></a>======
				<a href='#' onClick={process.page3}><button>next</button></a><br/>
				<h3>
				Ang anahaw ( Livistona rotundifolia ) ay isang pabilog na dahon na palma na matatagpuan<br/>
				 sa Timog-Silangang Asya. Kasapi ito sa genus Livistona na tinatawag na Footstool palm sa Ingles.<br/>
				  Pambansang dahon ito ng Pilipinas.<br/>
<br/>
Karaniwang tanawin ang halaman na ito sa rehiyon. Tumutubo ito sa mga sub-tropikal<br/>
 na mga klima at mamasa-masang tropikal na lugar.<br/>
<br/>
Ginagamit ang mga dahon sa kugon at pambalot ng pagkain. Nabawasan ang laki ng mga ligaw na<br/>
 mga halaman dahil sa sobrang pag-ani. Bagaman mabilis na tumubo ang mga dahon pagkatapos anihin ngunit nagiging maliit ito.<br/>
				</h3>
		</center>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	page3:function(){
		let content = <div>
				<center>
				<font color="sky blue"><h1>Pambansang Prutas “Mangga”</h1></font><br/> <img src="img/3.jpg" height="400" width="400"></img><br/>
				
				<a href='#' onClick={process.page2}><button>prev</button></a>======
				<a href='#' onClick={process.page4}><button>next</button></a><br/>
					<h3>
					Ang mangga ay kabilang sa genus Mangifera, na binubuo ng ilang mga uri na namumungang puno<br/>
					 sa namumulaklak na halaman ng pamilya ng Anacardiaceae. Likas ang mangga sa subkontinente <br/>
					  Indyan lalo na sa Indya, Pakistan, Bangladesh, at Timog-silangang Asya. Napakaraming klase at <br/>
					  karaniwang kulay ang prutas nito: may dilaw, luntian o pula. Kakaiba ang amoy na aromatikong ng <br/>
					  prutas nito na maaaring gamitin sa iba’t-ibang sangkap o pabango. Prinipriserba rin ang mangga at<br/>
					   ginagawang panghimagas o pansangkap sa iba’t ibang pagkain.<br/>
					</h3>
			</center>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	page4:function(){
	let content = <div>
				<center>
				<font color="sky blue"><h1>Pambansang Ibon “Haribon”</h1></font><br/> <img src="img/4.jpg" height="400" width="400"></img><br/>
				
				<a href='#' onClick={process.page3}><button>prev</button></a>======
				<a href='#' onClick={process.page5}><button>next</button></a><br/>
					<h3>
					Ang haribon ay isang malaking agila na makikita sa mga gubat ng Luzon,<br/>
					 Samar, Leyte at Rehiyon XII o SOCCSKSARGEN. Ito ay ang pambansang ibon ng Pilipinas. <br/>
					 Ang haribon ay simbolo ng katapangan ng mga ninuno ng Pilipino. Sila ay may haba o taas<br/>
					  na 1 metro at tumitimbang ng mula 4 hanggang 7 kilo. Tulad ng ibang agila higit na mas<br/>
					   malaki ang babaeng haribon kaysa lalaki. Ang haba ng kanilang pakpak ay 2 metro o higit pa. <br/>
					   Sila ay kumakain ng mga unggoy, malalaking ahas, kaguang, malalaking ibon gaya ng kalaw at mga bayawak<br/>
					</h3>
			</center>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	page5:function(){
	let content = <div>
				<center>
				<font color="sky blue"><h1>Pambansang Hayop “Kalabaw”</h1></font><br/> <img src="img/5.jpg" height="400" width="400"></img><br/>
				
				<a href='#' onClick={process.page4}><button>prev</button></a>======
				<a href='#' onClick={process.page6}><button>next</button></a><br/>
				<h3>
				Ang kalabaw (Bubalus bubalis carabanesis o minsan Bubalus carabanesis) ay isang domestikadong<br/>
				 uri ng kalabaw na pantubig o water buffalo (Bubalus bubalis) na karaniwang matatagpuan sa Pilipinas, <br/>
				 Guam, pati sa ibang bahagi Timog-silangang Asya. Madalas iniuugnay ang kalabaw sa mga magbubukid dahil ito<br/>
				  ang kadalasang napiling hayop para sa pag-araro at magtulak ng kariton na ginagamit ng mga magbubukid upang<br/>
				   madala ang kanilang ani sa palengke.<br/>
				</h3>
				
				
			</center>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	page6:function(){
	let content = <div>
				<center>
				<font color="sky blue"><h1>Pambansang Bulaklak “Sampaguita”</h1></font><br/> <img src="img/6.jpg" height="400" width="400"></img><br/>
				
				<a href='#' onClick={process.page5}><button>prev</button></a>======
				<a href='#' onClick={process.page7}><button>next</button></a><br/>
				
				<h3>
Ang sampaguita, kampupot o hasmin (Ingles: jasmin o jasmine) ay isang uri ng palumpong<br/>
 na may maliliit, mababango at mapuputing mga bulaklak. Mas maliit ang bulaklak nito kaysa ibang mga sampaga.<br/>
				</h3>
			</center>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	page7:function(){
	let content = <div>
				<center>
				<font color="sky blue"><h1>Pambansang Pagkain “Letsong Baboy”</h1></font><br/> <img src="img/7.jpg" height="400" width="400"></img><br/>
				
				<a href='#' onClick={process.page6}><button>prev</button></a>======
				<a href='#' onClick={process.page8}><button>next</button></a><br/>

				<h3>
Ang litson o letson (sa Kastila: lechón – biik) ay isang inihaw na buong baboy, bata man o hindi, na karaniwang<br/>
 nilalagyan ng mansanas sa bibig matapos na malutong nakatuhog sa kawayan habang nakadarang sa nagbabagang mga uling.<br/>
				</h3>
			</center>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	page8:function(){
	let content = <div>
				<center>
				<font color="sky blue"><h1>Pambansang Tirahan “Bahay-Kubo”</h1></font><br/> <img src="img/8.jpg" height="400" width="400"></img><br/>
				
				<a href='#' onClick={process.page7}><button>prev</button></a>======
				<a href='#' onClick={process.page9}><button>next</button></a><br/>
				
				<h3>
Ang bahay kubo o kubo lamang ay isang katutubong bahay na ginagamit sa Pilipinas.<br/>
 Ang katutubong bahay ay gawa sa kawayan na itinatali na magkasama, na may isang binigkis<br/>
  na bubong gamit ang dahon ng  anahaw. Ang bahay kubo ay ang pambansang bahay ng Pilipinas. <br/>
  Ang bahay kubo ay gawa sa kawayan na pinagtali at mga nipa. Angkop ito laban sa hangin at ulan. <br/>
  Ngunit ito ay madaling masira sa mga bagyo at madaling palitan.<br/>
				</h3>
			</center>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	page9:function(){
	let content = <div>
				<center>
				<font color="sky blue"><h1>Pambansang Sayaw “Tinikling”</h1></font><br/> <img src="img/9.jpg" height="400" width="400"></img><br/>
				
				<a href='#' onClick={process.page8}><button>prev</button></a>======
				<a href='#' onClick={process.page10}><button>next</button></a><br/>
				<h3>
Ang tinikling ay ang halo-halo ng biyaya at kilusan na paa. Laban-laban sa pagitan ng paa at sanga ng kawayan.<br/>
				</h3>
			</center>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	page10:function(){
	let content = <div>
				<center>
				<font color="sky blue"><h1>Pambansang Watawat ng Pilipinas</h1></font><br/> <img src="img/10.jpg" height="400" width="400"></img><br/>
				
				<a href='#' onClick={process.page9}><button>prev</button></a>======
				<a href='#' onClick={process.page1}><button>next</button></a><br/>
				
				<h3>
Ang Pambansang Watawat ng Pilipinas, na tinatawag din na Tatlong Bituin at Isang Araw,<br/>
 ay isang pahalang na watawat na may dalawang magkasing sukat na banda ng bughaw at pula,<br/> 
 at may puting pantay na tatsulok sa unahan. Sa gitna ng tatsulok ay isang gintong-dilaw na <br/>
 araw na may walong pangunahing sinag, na kumakatawan sa unang walong mga lalawigan ng Pilipinas<br/>
  na nagpasimula ng himagsikan noong 1896 laban sa Espanya; at sa bawat taluktok ng tatsulok ay may<br/>
   gintong bituin, na ang bawat isa ay kumakatawan sa tatlong pangunahing rehiyon – ang Luzon, Mindanao,<br/>
    at Panay. Maaari rin maging watawat pandigma ang watawat na ito kapag ibinaligtad.<br/>
				</h3>
			</center>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	loading:function(){
		let content = <div><center><h1>
					shairalyn ferrer....
				</h1></center></div>;
		ReactDOM.render(content,document.getElementById('root'));
	}
}

process.loading();
setTimeout(function(){
	process.menu();
},500);