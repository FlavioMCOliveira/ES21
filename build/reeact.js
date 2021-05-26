const useSortableData = (items, config = null) => {
  const [sortConfig, setSortConfig] = React.useState(config);
  
  const sortedItems = React.useMemo(() => {
    let sortableItems = [...items];
    if (sortConfig !== null) {
      sortableItems.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  }, [items, sortConfig]);

  const requestSort = key => {
    let direction = 'ascending';
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  }

  return { items: sortedItems, requestSort };
}

const ProductsTable = (props) => {
  const { products } = props
  const { items, requestSort } = useSortableData(products);
  return (
    {products}
  );
};

const requestSort = key => {
  let direction = 'ascending';
  if (sortConfig.key === key && sortConfig.direction === 'ascending') {
    direction = 'descending';
  }
  setSortConfig({ key, direction });
}


class CarTable extends React.Component{
	constructor(props){
		super(props);
		this.state = {sortby:'none', filterby:'none'}
	}
	renderCarEntry(array){
		return <CarEntry data={array}/>;
	}
	render(){
		var products = [
			{id:0, 	name:'F82 M4 Coupé', 		price:"69.999", 	manufacturer:'BMW', 			img:'/assets/bmw_m4.png'				,type:'Petrol'		,engine:'Turbocharged I6' 		,hasMods:'true' 	,hasInteriorMods:'true' 	
			,colors:['red','green','blue']},
			{id:1, 	name:'F10 M5', 				price:"89.999", 	manufacturer:'BMW', 			img:'/assets/bmw_m5.png'				,type:'Petrol'		,engine:'Twin-Turbo V8' 		,hasMods:'true' 	,hasInteriorMods:'true' 	
			,colors:['red','green','blue']},
			{id:2, 	name:'M87 M2 Coupé', 		price:"58.999", 	manufacturer:'BMW', 			img:'/assets/bmw_m2.png'				,type:'Petrol'		,engine:'NA V6' 				,hasMods:'true' 	,hasInteriorMods:'true' 	
			,colors:['red','green','blue']},
			{id:3, 	name:'i8 Roadster', 		price:"159.999", 	manufacturer:'BMW', 			img:'/assets/bmw_i8.png'				,type:'Hybrid' 		,engine:'Turbocharged I3' 		,hasMods:'true' 	,hasInteriorMods:'true' 	
			,colors:['red','green','blue']},
			{id:4, 	name:'IS 350F Sport', 		price:"89.999", 	manufacturer:'Lexus', 			img:'/assets/lexus_is350f.png'			,type:'Petrol' 		,engine:'NA V6' 				,hasMods:'true' 	,hasInteriorMods:'true' 	
			,colors:['red','green','blue']},
			{id:5, 	name:'LFA', 				price:"119.999", 	manufacturer:'Lexus', 			img:'/assets/lexus_lfa.png'				,type:'Petrol' 		,engine:'Performance NA V10' 	,hasMods:'false'	,hasInteriorMods:'false'	
			,colors:['red','green','blue']},
			{id:6, 	name:'SLK-Class R172', 		price:"99.999",		manufacturer:'Mercedes-Benz', 	img:'/assets/merc_slk.png'				,type:'Petrol' 		,engine:'Tuned TT V12' 			,hasMods:'false' 	,hasInteriorMods:'true' 	
			,colors:['red','green','blue']},
			{id:7, 	name:'E-Class W213', 		price:"39.999",		manufacturer:'Mercedes-Benz', 	img:'/assets/merc_w213.png'				,type:'Diesel'		,engine:'Turbodiesel I6' 		,hasMods:'true' 	,hasInteriorMods:'true' 	
			,colors:['red','green','blue']},
			{id:8, 	name:'Model S P90D', 		price:"71.999",		manufacturer:'Tesla', 			img:'/assets/tesla_s.png'				,type:'Electric'	,engine:'Tri-Motor Induction' 	,hasMods:'true' 	,hasInteriorMods:'true' 	
			,colors:['red','green','blue']},
			{id:9, 	name:'S4 ', 				price:"39.999",		manufacturer:'Audi', 			img:'/assets/audi_s4.png'				,type:'Petrol' 		,engine:'Twin-Turbo V6' 		,hasMods:'true' 	,hasInteriorMods:'true' 	
			,colors:['red','green','blue']},
			{id:10, name:'RS6 Avant', 			price:"59.999",		manufacturer:'Audi', 			img:'/assets/audi_rs6.png'				,type:'Petrol' 		,engine:'Turbocharged V6' 		,hasMods:'true' 	,hasInteriorMods:'true' 	
			,colors:['red','green','blue']},
			{id:11, name:'R8 5.2 FSI', 			price:"159.999", 	manufacturer:'Audi', 			img:'/assets/audi_fsi.png'				,type:'Petrol' 		,engine:'Performance TT V8' 	,hasMods:'false'	,hasInteriorMods:'true' 	
			,colors:['red','green','blue']},
			{id:12, name:'4C', 					price:"79.999", 	manufacturer:'Alfa Romeo', 		img:'/assets/alfa_4c.png'				,type:'Petrol' 		,engine:'Performance NA I4' 	,hasMods:'true' 	,hasInteriorMods:'true' 	
			,colors:['red','green','blue']},
			{id:13, name:'Vanquish', 			price:"89.999", 	manufacturer:'Aston Martin', 	img:'/assets/aston_vanquish.png'		,type:'Petrol' 		,engine:'Twin-Turbo V10' 		,hasMods:'true' 	,hasInteriorMods:'true' 	
			,colors:['red','green','blue']},
			{id:14, name:'Vantage', 			price:"189.999", 	manufacturer:'Aston Martin', 	img:'/assets/aston_vantage.png'			,type:'Petrol' 		,engine:'Performance TT W12' 	,hasMods:'false'	,hasInteriorMods:'false'	
			,colors:['red','green','blue']},
			{id:15, name:'Continental GT', 		price:"123.999", 	manufacturer:'Bentley', 		img:'/assets/bentley_continental.png'	,type:'Petrol' 		,engine:'Luxury TT W12' 		,hasMods:'true' 	,hasInteriorMods:'true' 	
			,colors:['red','green','blue']},
			{id:16, name:'CTS-V Sedan', 		price:"25.999", 	manufacturer:'Cadillac', 		img:'/assets/cadillac_cvt.png'			,type:'Petrol' 		,engine:'Economy Turbo I4' 		,hasMods:'true' 	,hasInteriorMods:'true' 	
			,colors:['red','green','blue']},
			{id:17, name:'Q50 Eau-Rouge', 		price:"125.999", 	manufacturer:'Infiniti', 		img:'/assets/infiniti_rouge.png'		,type:'Petrol' 		,engine:'Tuned Turbo V8' 		,hasMods:'true' 	,hasInteriorMods:'true' 	
			,colors:['red','green','blue']},
			{id:18, name:'I-Pace', 				price:"28.999", 	manufacturer:'Jaguar',			img:'/assets/jaguar_ipace.png'			,type:'Diesel' 		,engine:'Economy Turbo V6' 		,hasMods:'true' 	,hasInteriorMods:'true' 	
			,colors:['red','green','blue']},
			{id:19, name:'XE-S', 				price:"35.999", 	manufacturer:'Jaguar',			img:'/assets/jaguar_xes.png'			,type:'Petrol' 		,engine:'Performance NA V6' 	,hasMods:'true' 	,hasInteriorMods:'true' 	
			,colors:['red','green','blue']},
			{id:20, name:'XKR-S GT', 			price:"250.999", 	manufacturer:'Jaguar',			img:'/assets/jaguar_xkr.png'			,type:'Petrol' 		,engine:'Performance TT V10' 	,hasMods:'false'	,hasInteriorMods:'true' 	
			,colors:['red','green','blue']},
			{id:21, name:'Panamera-e Turbo', 	price:"80.999", 	manufacturer:'Porsche',			img:'/assets/porsche_panamera.png'		,type:'Hybrid'		,engine:'Turbo-I3 Dual-Motor' 	,hasMods:'true' 	,hasInteriorMods:'true' 	
			,colors:['red','green','blue']},
			{id:22, name:'Macan-e', 			price:"69.999", 	manufacturer:'Porsche',			img:'/assets/porsche_macan.png'			,type:'Hybrid'		,engine:'Turbo-I4 Quad-Motor' 	,hasMods:'true' 	,hasInteriorMods:'true' 	
			,colors:['red','green','blue']},
			{id:23, name:'GT3', 				price:"159.999", 	manufacturer:'Porsche',			img:'/assets/porsche_gt3.png'			,type:'Petrol'		,engine:'Performance NA F6' 	,hasMods:'false'	,hasInteriorMods:'true' 	
			,colors:['red','green','blue']},
		]

		var sortedField = this.state.sortby;
		var filterField = this.state.filterby;

		return(

			<div>
				<div className="catalogCommands">
					<div className="catalogLogo">
						Catalog
						<div className="catalogResultsNumber">
						Showing {products.filter(function (a){
								if(filterField!='none'){
									return a.type === filterField;
								}else{
									return a;
								}	
							}).length} results of {products.length}
						</div>
					</div>
					<div className="Dropdowns">
						<div className="dropdownArea">
							<div className="dropdown">
									<button className="dropbtn">{this.state.sortby!='none' ? <a>Sorting by {sortedField}</a> : <a>Sort</a>}
										<i className="fa fa-caret-down"></i>
									</button>
									<div  id="myDropdown" className="dropdown-content">
										<button type="button" onClick={()  => this.setState({sortby:'model name'})}>A-Z
										</button>
										<button type="button" onClick={()  => this.setState({sortby:'manufacturer'})}>Manufacturer
			
										</button>
           								<button type="button" onClick={() => this.setState({sortby:'price'})}>Price
			
           								</button>
   									</div>
   								</div>	
							</div>
						<div  className="dropdownArea">
							<div className="dropdown">
								<button className="dropbtn">{this.state.filterby!='none' ? <a>Filtering for {filterField}</a> : <a>Filter</a>}
									<i className="fa fa-caret-down"></i>
								</button>
								<div  id="myDropdown" className="dropdown-content">
									<button type="button" onClick={()  => this.setState({filterby:'none'})}>Any fuel</button>
									<button type="button" onClick={()  => this.setState({filterby:'Petrol'})}>Petrol</button>
									<button type="button" onClick={()  => this.setState({filterby:'Electric'})}>Electric</button>
           							<button type="button" onClick={() => this.setState({filterby:'Hybrid'})}>Hybrid</button>
           							<button type="button" onClick={() => this.setState({filterby:'Diesel'})}>Diesel</button>
   								</div>
   							</div>	
						</div>
					</div>
				</div>
   						
   		
	
				
				<ul className="flextest">
					{	
						sortedField=='model name' &&
							products
							.filter(function (a){
								if(filterField!='none'){
									return a.type === filterField;
								}else{
									return a;
								}	
							})
							.sort((a,b) => a.name > b.name ? 1 : -1)
							.map((product,i) => 
										(
    	   			  					<li key={i} className="carEntry">
    	   			  					  	{this.renderCarEntry(product)}
    	   			  					</li>
    	   								)
								)
						||
						sortedField=='price' &&
						
							products
							.sort((a,b) => parseInt(a.price) > parseInt(b.price) ? 1 : -1)
							.filter(function (a){
								if(filterField!='none'){
									return a.type === filterField;
								}else{
									return a.type=== filterField || a.type !== filterField;
								}	
							})
							.map((product,i) => 
										(
    	   			  					<li key={i} className="carEntry">
    	   			  					  	{this.renderCarEntry(product)}
    	   			  					</li>
    	   								)
								)
						||

						sortedField=='none' &&
							products
							.filter(function (a){
								if(filterField!='none'){
									return a.type === filterField;
								}else{
									return a.type === filterField || a.type !== filterField;
								}	
							})
							.map((product,i) => 
								(
    	   			  			<li key={i} className="carEntry">
    	   			  			  	{this.renderCarEntry(product)}
    	   			  			</li>
    	   						)
							)
						||

						sortedField=='manufacturer' &&
							products
							.sort((a,b) => a.manufacturer > b.manufacturer ? 1 : -1)
							.filter(function (a){
								if(filterField!='none'){
									return a.type === filterField;
								}else{
									return a.type=== filterField || a.type !== filterField;
								}	
							})
							.map((product,i) => 
								(
    	   			  			<li key={i} className="carEntry">
    	   			  			  	{this.renderCarEntry(product)}
    	   			  			</li>
    	   						)
							)
					}
    	    	</ul>
    	    	
    	    </div>
		);
	}
	


}
class CarEntry extends React.Component{
	renderCarEntryData(data){
		return [
			<CarEntry_PictureArea data={data}/>,
			<CarEntry_Label data={data}/>
		];
	}
	render(){
		var data = this.props.data
		return(
			<div key={data.id}>
				{this.renderCarEntryData(data)}
			</div>
		);
	}	
}

class CarEntry_PictureArea extends React.Component{
	render(){
		var imgsrc = this.props.data.img
		return(
			<div>
				

				<div className="ce_label_manufacturer">
					{this.props.data.manufacturer} <a className="addendum">| {this.props.data.name}</a>
				</div>
				
				<div className="featuresOverlay">
					<div className="featureFlex">
						{
							this.props.data.hasMods == 'true' &&
							<img className="optionImg" src="assets/engine_ico.png"/>
						}
						{
							this.props.data.hasInteriorMods == 'true' &&
							<img className="optionImg" src="assets/interior_icon.png"/>
						}
					</div>
				</div>

				<div className="optionsOverlay">
						{this.props.data.type == 'Petrol' && 
						 	<div>
						 	<a className="cel_petrol">Petrol </a>	
						 	<a className="cel_generic"> {this.props.data.engine} </a>	
						 	</div>
						}
						{this.props.data.type == 'Electric' && 
						 	<div>
						 	<a className="cel_ev">Electric </a>	
						 	<a className="cel_generic"> {this.props.data.engine} </a>	
						 	</div>
						}
						{this.props.data.type == 'Diesel' && 
						 	<div>
						 	<a className="cel_diesel">Diesel </a>	
						 	<a className="cel_generic"> {this.props.data.engine} </a>	
						 	</div>
						}
						{this.props.data.type == 'Hybrid' && 
						 	<div>
						 	<a className="cel_hybrid">Hybrid </a>	
						 	<a className="cel_generic"> {this.props.data.engine} </a>	
						 	</div>
						}
				</div>
				<div className="ce_label_effect_fixed">
					
					<img className="celz" src={imgsrc}>
					</img>
				</div>

			</div>
		);
	}
}
class CarEntry_Label extends React.Component{
	render(){
		return(
			<div className="ce_label" key={this.props.data.id}>
				<h3 className="ce_label_modelname">
				{this.props.data.name}
				</h3>
				
				<div className="ce_label_data">
					<div className="ce_label_price">
						Starting at €{this.props.data.price} 
						<button className="ce_label_configure">
							Configure
						</button>
					</div>
					
				</div>
			</div>
		);
	}
}

class Catalog extends React.Component {
  render() {
    return (
      <div className="catalog">
        <CarTable />
      </div>
    );
  }
}



ReactDOM.render(
  <Catalog/>,
  document.getElementById('root')
);