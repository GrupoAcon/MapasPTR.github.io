const root = ReactDOM.createRoot(
	document.getElementById('root'));

	function tick(){
		const date = (<p>{new Date().toLocaleDateString()}</p>)
		const logo = "./img/"
		
		const tropicales = `./pdfs/tropical.html`
		const st_rosa = `./pdfs/st-rosa.html`
		const jardin = `./pdfs/jardin.html`
		const c_seco = `./pdfs/c-seco.html`


		const element = (
			
			<header className="hed">
				
				<div>
					<img src={logo} alt="" />
					<div className="mpPTR"><h2>Mapas PTR</h2></div>
					<b className="dateHoy" >{date}</b>
					<nav className="container">
						
						<div className="item">
							
								<a href={tropicales}>Tropicales</a>
							
								<a  href={st_rosa}>Santa Rosa</a>

								<a href={jardin}>Jardin</a>
							
								<a href={c_seco}>Caño Seco</a>
							
							
						</div>
					</nav>
					
				</div>
				

			</header>
			
			

		);

		root.render(element);
	}
	 //Este elemento renderiza o imprime mi programa 



setInterval(tick, 1000)

