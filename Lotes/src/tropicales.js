
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

             className={className} >Lotes Tropicales</h2>
            
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


        <Avatar id={1} name={<a className="lt" id={1} href="./lotes-PTR/1.pdf"  target="_blank">1</a> } />
        <Avatar id={2} name={<a className="lt" id={2} href="./lotes-PTR/2.pdf"  target="_blank">2</a> } />
        <Avatar id={3} name={<a className="lt" id={3} href="./lotes-PTR/3.pdf"  target="_blank">3</a>} />
        <Avatar id={4} name={<a className="lt" id={4} href="./lotes-PTR/4.pdf"  target="_blank">4</a>} />
        <Avatar id={5} name={<a className="lt" id={5} href="./lotes-PTR/5.pdf"  target="_blank">5</a>} />
        <Avatar id={6} name={<a className="lt" id={6} href="./lotes-PTR/6.pdf"  target="_blank"> 6</a>} />

        <Avatar id={7} name={<a className="lt" id={7} href="./lotes-PTR/7.pdf"  target="_blank">7</a> } />
        <Avatar id={8} name={<a className="lt" id={8} href="./lotes-PTR/8.pdf"  target="_blank">8</a> } />
        <Avatar id={9} name={<a className="lt" id={9} href="./lotes-PTR/9.pdf"  target="_blank">9</a>} />
        <Avatar id={10} name={<a className="lt" id={10} href="./lotes-PTR/10.pdf"  target="_blank">10</a>} />
        <Avatar id={11} name={<a className="lt" id={11} href="./lotes-PTR/11.pdf"  target="_blank">11</a>} />
        <Avatar id={12} name={<a className="lt" id={12} href="./lotes-PTR/12.pdf"  target="_blank"> 12</a>} />

        <Avatar id={13} name={<a className="lt" id={13} href="./lotes-PTR/13.pdf"  target="_blank">13</a> } />
        <Avatar id={14} name={<a className="lt" id={14} href="./lotes-PTR/14.pdf"  target="_blank">14</a> } />
        <Avatar id={15} name={<a className="lt" id={15} href="./lotes-PTR/15.pdf"  target="_blank">15</a>} />
        <Avatar id={16} name={<a className="lt" id={16} href="./lotes-PTR/16.pdf"  target="_blank">16</a>} />
        <Avatar id={17} name={<a className="lt" id={17} href="./lotes-PTR/17.pdf"  target="_blank">17</a>} />
        <Avatar id={18} name={<a className="lt" id={18} href="./lotes-PTR/18.pdf"  target="_blank">18</a>} />

        <Avatar id={19} name={<a className="lt" id={19} href="./lotes-PTR/19.pdf"  target="_blank">19</a> } />
        <Avatar id={25} name={<a className="lt" id={25} href="./lotes-PTR/25.pdf"  target="_blank">25</a> } />
        <Avatar id={26} name={<a className="lt" id={26} href="./lotes-PTR/26.pdf"  target="_blank">26</a> } />

       
    </div>,
    $app
    
);
setInterval($app, 1000)
