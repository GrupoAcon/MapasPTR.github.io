
const $app = document.getElementById('root')
const useState = React.useState;

const Avatar = props => {


    const [enabled, setEnabled] = useState(true)
    const pdf = `./lotes-PTR/${props.id}.pdf`;
    const icon = `./img/.png`
    const className = enabled ? '' : 'disabled'

    return (
		

        <div className="container">
            <a  target="_blank" onClick={() => setEnabled(!enabled)} 

             className={className}

             href={pdf} >Lote </a>
            <span>{props.name}</span>
            <img src={icon}></img>
            

        </div>
    );
    // return h("img", { src });  Forma un poco complicada segun 
};


const Name = props => {


    const [enabled, setEnabled] = useState(true)
    const className = enabled ? '' : 'disabled'
    

    return (
		

        <div className="container2">
            <h2 target="_blank" onClick={() => setEnabled(!enabled)} 

             className={className} >Lotes Jardin</h2>
            
            <span>{props.name}</span>
           
            

        </div>
    );

};



const Home = props => {


    const [enabled, setEnabled] = useState(true)
    const className = enabled ? '' : 'disabled'
    

    const inicio = `../index.html`

    return (
		

        <div className="container2">
            <a onClick={() => setEnabled(!enabled)} 

                className={className}

                href={inicio} > Prew Home
            </a>
            <span>{props.name}</span>

            
            

        </div>
    );

};


const Icons = props => {

    const logo ="../img/logo.svg"
    

    return (
		

        <div className="logoCont">

            <img src={logo}/>
  

        </div>
    );

};
const None = props => {

    const logo =""
    

    return (
		

        <div className="logoCont">

            <img src={logo}/>
  

        </div>
    );

};


ReactDOM.render(

    
    
    <div className="container"> 
        <Icons/>
        <None />
        <Name />
        <Home />

    
        <Avatar id={27} name={<a className="lt" id={27} href="./lotes-PTR/27.pdf"  target="_blank">27</a>} />
        <Avatar id={28} name={<a className="lt" id={28} href="./lotes-PTR/28.pdf"  target="_blank">28</a>} />
        <Avatar id={29} name={<a className="lt" id={29} href="./lotes-PTR/29.pdf"  target="_blank">29</a>} />
  
    </div>,
    $app
    
);
setInterval($app, 1000)
