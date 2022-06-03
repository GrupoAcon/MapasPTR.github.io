
const $app = document.getElementById('root')
const useState = React.useState;

const Avatar = props => {


    const [enabled, setEnabled] = useState(true)
    const pdf = `./lotes-PTR/${props.id}.pdf`;
    const icon = `./img.png`
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

             className={className} >Lotes Santa Rosa</h2>
            
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


        <Avatar id={20} name={<a className="lt" id={20} href="./lotes-PTR/20.pdf"  target="_blank">20</a> } />
        <Avatar id={21} name={<a className="lt" id={21} href="./lotes-PTR/21.pdf"  target="_blank">21</a>} />
        <Avatar id={22} name={<a className="lt" id={22} href="./lotes-PTR/22.pdf"  target="_blank">22</a>} />
        <Avatar id={23} name={<a className="lt" id={23} href="./lotes-PTR/23.pdf"  target="_blank">23</a>} />
        <Avatar id={24} name={<a className="lt" id={24} href="./lotes-PTR/24.pdf"  target="_blank"> 24</a>} />


    </div>,
    $app
    
);
setInterval($app, 1000)
