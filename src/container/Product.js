import { isDisabled } from '@testing-library/user-event/dist/utils';
import React, { Component } from 'react';
import { Card, CardBody, CardText, CardTitle, Container, ListGroup, ListGroupItem, Row } from 'reactstrap';



const data = [
    {
        "id": "GGOEAFKA087499",
        "name": "Android Small Removable Sticker Sheet",
        "description": "Show your Android pride by placing these 8 fun stickers on your technology products or accessories!",
        "features": "8 Android stickers White colored sticker sheet",
        "price": "2.99",
        "keywords": "Android Small Removable Sticker Sheet, android stickers, sticker sheets, removable sticker sheets, small sticker sheet, android small sticker sheets, Android Sheet",
        "url": "https://loremflickr.com/320/240  ",
        "category": "Laptop",
        "subcategory": "accessories"
    },
    {
        "id": "GGOEAFKA087599",
        "name": "Android Large Removable Sticker Sheet",
        "description": "Show your quirky side by placing these fun Android stickers on your personal belongings.",
        "features": "Android Stickers White Colored Sticker Sheet",
        "price": "2.99",
        "keywords": "Android Large Removable Sticker Sheet, android stickers, sticker sheets, removable sticker sheets, large sticker sheet, android large sticker sheets, Android Sheet",
        "url": "https://loremflickr.com/320/240",
        "category": "Mobile",
        "subcategory": "accessories"
    },
    {
        "id": "GGOEGEBK094499",
        "name": "Google Bot",
        "description": "This Google Bot can hold multiple poses making it a fun toy for all. Fold the Google Bot back up into a perfect cube when you are done playing.",
        "features": "Made of wood 2.5 x 2.5 inch cube 6.75 inch tall Recommended for Ages 3+",
        "price": "9.99",
        "keywords": "Google Bot, google bot, bots, natural bots, wood bot, google wood bot",
        "url": "https://loremflickr.com/320/240",
        "category": "Pc",
        "subcategory": "accessories"
    },
    {
        "id": "GGOEGFKA086699",
        "name": "Google Emoji Sticker Pack",
        "description": "Who doesn't use emojis? Decorate your space with your current mood!",
        "features": "Pack contains two sticker sheets Each Sheet has different emojis Decal dimensions should fit in a maximum sheet size of 12 3/4 x 17 1/2 inch.",
        "price": "4.99",
        "keywords": "Google Emoji Sticker Pack, Google sticker pack, emoji sticker pack, google emoji, stickers, pack of sticker, pack of emoji stickers",
        "url": " https://loremflickr.com/320/240",
        "category": "Laptop",
        "subcategory": "accessories"
    },
    {
        "id": "GGOEWCKQ085457",
        "name": "Waze Pack of 9 Decal Set",
        "description": "Can't decide which Waze decal to get? We have made that decision easier for you! Now you can purchase a pack of nine Waze Mood Decals!",
        "features": "Pack of 9 includes: 3 Waze Mood Happy decals 3 Waze Mood Original decals 3 Waze Mood Ninja decals",
        "price": "16.99",
        "keywords": "Waze Pack of 9 Decal Set, decals pack, packs of 9, Waze Packs, Waze Decals, waze, Waze",
        "url": " https://loremflickr.com/320/240",
        "category": "Pc",
        "subcategory": "accessories"
    },
    {
        "id": "GGOEGHPB071610",
        "name": "Google Twill Cap",
        "description": "Classic urban styling distinguishes this Google cap. Retains its shape, even when not being worn.",
        "features": "Heavy weight brushed twill Adjustable velcro closure One size fits all",
        "price": "10.99",
        "keywords": "Google Twill Cap, Google Cap, Google Twill Caps, Google Twill, google cap, google caps, google twill, google twill black cap, google black caps, google caps, black caps, Google Caps",
        "url": " https://loremflickr.com/320/240",
        "category": "Pc",
        "subcategory": "apparel"
    },
    {
        "id": "GGOEGHPJ094299",
        "name": "Google Fold-over Beanie Grey",
        "description": "Keep you ears warm while enjoying a cold winter day with this Google Fold-over Beanie.",
        "features": "100% acrylic One size fits all",
        "price": "9.99",
        "keywords": "Google Fold-over Beanie Grey, gray beanie, grey beanie, Google Beanies, Fold over grey, Google Beanie Grey, Google headgear",
        "url": " https://loremflickr.com/320/240",
        "category": "Laptop",
        "subcategory": "apparel"
    },
    {
        "id": "GGOEGHPJ094399",
        "name": "Google Pom Beanie Charcoal",
        "description": "Stay stylish and warm this winter season with this Google Pom Beanie.",
        "features": "Thick knit texture outside Soft plush inside Faux fur pom on top ",
        "price": "19.99",
        "keywords": "Google Pom Beanie Charcoal, pom beanie, charcoal pom beanies, Google Beanies, Pom Beanies, charcoal Google pom, beanies, headgear",
        "url": " https://loremflickr.com/320/240",
        "category": "Pc",
        "subcategory": "apparel"
    },
    {
        "id": "GGOEWXXX0827",
        "name": "Waze Women's Short Sleeve Tee",
        "description": "Made of soft tri-blend jersey fabric, this great t-shirt will help you find your Waze. Made in USA.",
        "features": "Jersey knit 37.5% cotton, 50% polyester, 12.5% rayon Made in the USA",
        "price": "18.99",
        "keywords": "Waze Women's Short Sleeve Tee, Waze Short Sleeve Tee, Waze Women's Tees, Waze Women's tee, waze ladies tees, waze ladies tee, waze short sleeve tees, waze short sleeve tee",
        "url": " https://loremflickr.com/320/240",
        "category": "Mobile",
        "subcategory": "apparel"
    },
    {
        "id": "GGOEWXXX0828",
        "name": "Waze Men's Short Sleeve Tee",
        "description": "Made of soft tri-blend jersey fabric, this great t-shirt will help you find your Waze. Made in USA.",
        "features": " Jersey knit 37.5% cotton, 50% polyester, 12.5% rayon Made in the USA",
        "price": "18.99",
        "keywords": "Waze Men's Short Sleeve Tee, Waze Short Sleeve Tee, Waze Men's Tees, Waze Men's tee, waze mens tees, waze mens tee, waze short sleeve tees, waze short sleeve tee",
        "url": " https://loremflickr.com/320/240",
        "category": "Pc",
        "subcategory": "apparel"
    },
    {
        "id": "GGOEGBRJ037399",
        "name": "Google Rucksack",
        "description": "Choose to carry your belongings and presentations to your next meeting with the Google Mistral Rucksack!",
        "features": " Size: 13.5 x 6.5 x 17.5 Ergonomic padded shoulder straps Large main compartment with internal laptop compartment Easy Snap and Adjustable straps for main compartment access",
        "price": "79.99",
        "keywords": "Mistral Rucksack, Mistral backpack, Mistral Backpack, backpack, bags, bag, Backpack, backpacks, packs, office gear, Bag, Bags, Google Backpack, google backpack, g, google",
        "url": " https://loremflickr.com/320/240",
        "category": "Laptop",
        "subcategory": "bags"
    },
    {
        "id": "GGOEGDHJ087399",
        "name": "Google Rolltop Backpack Blue",
        "description": "This stylish Google rolltop backpack will help keep all of your favorite items organized and together while you're on the move.",
        "features": "Size: 12 inches wide x 18.5 inches height x 5.3 inches depth TPU Liner Internal Organizer for Pens, Phones and Other Small Items Large Main Compartment Flap Closure for Quick Access or Roll-Top for Expandable Volume and Weather Protection",
        "price": "149.99",
        "keywords": "Google Rolltop Backpack Blue, google backpack, google blue backpack, blue rolltop, Google rolltop, Blue Backpack, backpack, rolltop",
        "url": " https://loremflickr.com/320/240",
        "category": "Pc",
        "subcategory": "bags"
    },
    {
        "id": "GGOEADHB085999",
        "name": "Android Trace Bottle Black",
        "description": "Stay hydrated throughout the day with this Android Trace Bottle. 17 oz.",
        "features": "17 oz. double wall thermal bottle Stainless steel Threaded stainless steel insulated lid Copper vacuum insulation",
        "price": "23.99",
        "keywords": "Android Black Force 17 oz Bottle, android bottles, android black bottle, android 17 oz bottle, android black force bottle, android 17 oz Android Black Force Bottle, Android Trace Bottle Black",
        "url": " https://loremflickr.com/320/240",
        "category": "Laptop",
        "subcategory": "drinkware"
    },
    {
        "id": "GGOEADHB086299",
        "name": "Android Trace Mug Black",
        "description": "Start your day off right with that perfect cup of coffee using this Android Trace Mug Black.",
        "features": "12 oz. stoneware Matte finish",
        "price": "9.99",
        "keywords": "Android Black C-Handle Mug, android mugs, black android mug, c handle mug, android c handle,Android Trace Mug Black,",
        "url": " https://loremflickr.com/320/240",
        "category": "Mobile",
        "subcategory": "drinkware"
    }

    
]
class Product extends Component {
    constructor(props) {
        super(props);

       this.state= {
           Maindata: data,
           active:false,
           active1:false,
           active2:false
       } 
    }

     handleMobile = () =>{
        this.Mdata = this.state.Maindata.filter((v) => v.category === 'Mobile');
        console.log('Mobile',this.Mdata);
        this.setState({
           active:true
        })
     }


     handleLaptop = () =>{
        this.Ldata = this.state.Maindata.filter((v) => v.category === 'Laptop');
        console.log('Laptop',this.Ldata);
        this.setState({
            active1:true
        })
     }

     handlePc = () =>{
        this.Pdata = this.state.Maindata.filter((v) => v.category === 'Pc');
        console.log('Pc',this.Pdata);
        this.setState({
            active2:true,
        });
     }

    //  handledata = () =>{
    //     this.Fdata = this.state.Maindata.filter((v) => v.category === 'Mobile' ||  'Laptop' || 'Pc');
    //     console.log(this.Fdata);
    //  }

    render() {
        return (
            <div>
                <button onClick={this.handleMobile} style={{width:"80px" , marginRight:"20px", backgroundColor: this.state.active ? "red" : ""}}>Mobile</button>
                <button onClick={this.handleLaptop} style={{width:"80px" ,marginRight:"20px",  backgroundColor: this.state.active1 ? "green" : "" }}>Laptop</button>
                <button onClick={this.handlePc} style={{width:"80px" , backgroundColor: this.state.active2 ? "blue" : "" }}>PC</button>


                {/* <button onClick={this.handledata} style={{width:"80px" , marginRight:"20px" }}>Mobile</button>
                <button onClick={this.handledata} style={{width:"80px" ,marginRight:"20px"}}>Laptop</button>
                <button onClick={this.handledata} style={{width:"80px"}}>PC</button> */}
                
                <Container className='proData'>
                    <Row>  
                        {
                            data.map((v, i) => {
                                return (
                                    <>
                                        <div className='col sm-3'>
                                            <Card
                                                style={{
                                                    width: '22rem',
                                                    border:'2px solid #000',
                                                    borderRadius: '10px',
                                                }}
                                            >

                                                <CardBody style={{ height: 'auto' }}>
                                                    
                                                    <h4>{v.name}</h4>

                                                    <img alt="Card" src="https://loremflickr.com/320/240 "></img>

                                                    <CardText style={{ fontSize: '13px' }}>
                                                        <p> <span style={{fontWeight:'Bold' , fontSize:'13px' }}> Description :</span> {v.description}</p>
                                                        <p> <span style={{fontWeight:'Bold' , fontSize:'13px'}}> Features :</span> {v.features}</p>
                                                        <p><span style={{fontWeight:'Bold' , fontSize:'13px'}}> Price :</span> {v.price}</p>
                                                        <p><span style={{fontWeight:'Bold' , fontSize:'13px'}}> Category :</span> {v.category}</p>

                                                    </CardText>
                                                </CardBody>
                                            </Card>

                                        </div>
                                    </>
                                )
                            })
                        }
                    </Row>
                </Container>


            </div>
        );
    }
}

export default Product;