import Estrelas from "./Estrelas";

const reviews = [{
	id: 0,
	img: 'public/assets/img/reviews/img0.jpg',
	nome: 'Ana Oliveira',
	data: '09/05/2017',
	depoimento: 'Nunca imaginei que sentiria tanta liberdade! O salto tandem com a Altitude Máxima foi simplesmente incrível. A equipe é super profissional e me fez sentir segura o tempo todo. A vista e a adrenalina são indescritíveis. Mal posso esperar para repetir a dose!',

}, {
	id: 1,
	img: 'public/assets/img/reviews/img1.jpg',
	nome: 'Carlos Mendes',
	data: '22/07/2022',
	depoimento: 'Eu sou um paraquedista experiente, mas o salto solo com a Altitude Máxima superou todas as minhas expectativas. A preparação foi impecável e a sensação de planeio livre foi algo que eu nunca tinha vivido antes. É o melhor lugar para quem busca emoção de verdade.',

}, {
	id: 2,
	img: 'public/assets/img/reviews/img2.jpg',
	nome: 'Juliana Santos',
	data: '18/09/2016',
	depoimento: 'Participar do salto em formação foi uma experiência que vou levar para a vida toda. A equipe da Altitude Máxima não só garantiu que tudo fosse seguro, como também criou um ambiente de camaradagem e diversão. Foi um desafio, mas valeu cada segundo!',

}, {
	id: 3,
	img: 'public/assets/img/reviews/img3.jpg',
	nome: 'Ricardo Lima',
	data: '27/01/2020',
	depoimento: 'A equipe da Altitude Máxima é excepcional. Desde o momento em que chegamos até o salto, tudo foi perfeito. A segurança e o profissionalismo são de primeira linha. Se você está procurando uma experiência de paraquedismo radical, este é o lugar!',

}, {
	id: 4,
	img: 'public/assets/img/reviews/img4.jpg',
	nome: 'Beatriz Ferreira',
	data: '22/02/2024',
	depoimento: 'Nunca pensei que poderia me sentir tão livre e emocionada ao mesmo tempo. O salto tandem foi uma experiência de vida para mim, e a equipe da Altitude Máxima fez com que eu me sentisse confortável e confiante o tempo todo. Recomendo a todos que buscam uma verdadeira aventura!',

}, {
	id: 5,
	img: 'public/assets/img/reviews/img5.jpg',
	nome: 'Pedro Almeida',
	data: '05/12/2018',
	depoimento: 'O salto solo foi uma das melhores decisões da minha vida. A Altitude Máxima proporcionou uma experiência incrível com uma vista espetacular e uma equipe extremamente qualificada. A adrenalina e a sensação de voar são inigualáveis. Definitivamente voltarei!',

}];

	export default function DepoimentosData() {
		const listaDeAnálises = reviews.map(analises =>

				<div className="z-10 flex flex-col gap-4 bg-sky-100/75 mb-4 p-8 rounded-lg border border-gray-300 w-[ful] largura-minima-400px esconder-scrollbar">
					<div className="z-10 flex gap-4">
						<div>
							<img className="z-10 rounded-full w-[75px]" src={analises.img} alt={analises.nome} />
						</div>
						<div className="z-10 flex flex-col justify-center">
							<h4 className="z-10 font-bold text-md">{analises.nome}</h4>
							<h6 className="z-10 font-normal text-sm italic">{analises.data}</h6>
						</div>
					</div>

					<div id='stars'>
						<Estrelas />
					</div>

					<div>
						<p className="z-10 text-sm text-justify">{analises.depoimento}</p>
					</div>

				</div>

		);
		
		return <div className="z-10 flex gap-4 overflow-x-scroll border p-8 rounded-lg bg-sky-100/50 ">{listaDeAnálises}</div>;
  	}