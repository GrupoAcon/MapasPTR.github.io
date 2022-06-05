const root = ReactDOM.createRoot(
	document.getElementById('root'));

	function tick(){
		const date = (<p>{new Date().toLocaleDateString()}</p>)
		const logo = "./img/logo.svg"
		
		const tropicales = `./pdfs/tropical.html`
		const st_rosa = `./pdfs/st-rosa.html`
		const jardin = `./pdfs/jardin.html`
		const c_seco = `./pdfs/c-seco.html`


		const element = (
			
			<div>
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
				
				<div className="example">
					<div>
						<i><h4></h4></i>
					</div>

					<div className="help">
						<div>
							<b>
								<i>Tropicales</i>
							</b>
							<pre>
								--- Tropicales Desde Lote 1 hasta 19 <br/>
								--- Lote: 25 hasta Lote: 26<br/>

							</pre>

						</div>
						
						<div>
							<b>
								<i>Santa Rosa</i>
							</b>

							<pre>
								--- Santa Rosa Desde Lote 20 hasta Lote 24<br/>

							</pre>
							</div>

							<div>
								<b>
									<i>Jardin</i>
								</b>

								<pre>
									--- Jardin Desde Lote 27 hasta 29<br/>

							</pre>
							</div>
							
							<div>
								<b>
									<i>Caño Seco</i>
								</b>

								<pre className="pre">
									--- Caño Seco Desde Lote 40 hasta Lote 48<br/>
									--- Lote: 51 hasta Lote: 66

								</pre>
							</div>
						</div>
				</div>
			</div>
			

		);

		root.render(element);
	}
	 //Este elemento renderiza o imprime mi programa 



setInterval(tick, 1000)

