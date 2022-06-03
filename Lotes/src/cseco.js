
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

             className={className} >Lotes Caño Seco</h2>
            
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


    
        <Avatar id={40} name={<a className="lt" id={40} href="./lotes-PTR/40.pdf"  target="_blank">40</a>} />
        <Avatar id={41} name={<a className="lt" id={41} href="./lotes-PTR/41.pdf"  target="_blank">41</a>} />
        <Avatar id={42} name={<a className="lt" id={42} href="./lotes-PTR/42.pdf"  target="_blank">42</a>} />

        <Avatar id={43} name={<a className="lt" id={43} href="./lotes-PTR/43.pdf"  target="_blank">43</a> } />
        <Avatar id={44} name={<a className="lt" id={44} href="./lotes-PTR/44.pdf"  target="_blank">44</a> } />
        <Avatar id={45} name={<a className="lt" id={45} href="./lotes-PTR/45.pdf"  target="_blank">45</a>} />
        <Avatar id={46} name={<a className="lt" id={46} href="./lotes-PTR/46.pdf"  target="_blank">46</a>} />
        <Avatar id={47} name={<a className="lt" id={47} href="./lotes-PTR/46.pdf"  target="_blank">47</a>} />
        <Avatar id={48} name={<a className="lt" id={48} href="./lotes-PTR/48.pdf"  target="_blank"> 48</a>} />

        
        <Avatar id={51} name={<a className="lt" id={51} href="./lotes-PTR/51.pdf"  target="_blank">51</a>} />
        <Avatar id={52} name={<a className="lt" id={52} href="./lotes-PTR/52.pdf"  target="_blank">52</a>} />
        <Avatar id={53} name={<a className="lt" id={53} href="./lotes-PTR/53.pdf"  target="_blank">53</a>} />
        <Avatar id={54} name={<a className="lt" id={54} href="./lotes-PTR/54.pdf"  target="_blank">54</a>} />

        <Avatar id={55} name={<a className="lt" id={55} href="./lotes-PTR/55.pdf"  target="_blank">55</a> } />
        <Avatar id={56} name={<a className="lt" id={56} href="./lotes-PTR/56.pdf"  target="_blank">56</a> } />
        <Avatar id={57} name={<a className="lt" id={57} href="./lotes-PTR/57.pdf"  target="_blank">57</a>} />
        <Avatar id={58} name={<a className="lt" id={58} href="./lotes-PTR/58.pdf"  target="_blank">58</a>} />
        <Avatar id={59} name={<a className="lt" id={59} href="./lotes-PTR/59.pdf"  target="_blank">59</a>} />
        <Avatar id={60} name={<a className="lt" id={60} href="./lotes-PTR/60.pdf"  target="_blank">60</a>} />

        <Avatar id={61} name={<a className="lt" id={61} href="./lotes-PTR/61.pdf"  target="_blank">61</a> } />
        <Avatar id={62} name={<a className="lt" id={62} href="./lotes-PTR/62.pdf"  target="_blank">62</a> } />
        <Avatar id={63} name={<a className="lt" id={63} href="./lotes-PTR/63.pdf"  target="_blank">63</a>} />
        <Avatar id={64} name={<a className="lt" id={64} href="./lotes-PTR/64.pdf"  target="_blank">64</a>} />
        <Avatar id={65} name={<a className="lt" id={65} href="./lotes-PTR/65.pdf"  target="_blank">65</a>} />
        <Avatar id={66} name={<a className="lt" id={66} href="./lotes-PTR/66.pdf"  target="_blank">66</a>} />

    </div>,
    $app
    
);
setInterval($app, 1000)
