import { useState } from 'react';
import { Card, CardBody, CardText, CardTitle, Container, Button, ListGroup, ListGroupItem, Row } from 'reactstrap';

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
        "description": "This Google Bot can hold multiple poses making it a fun toy for all. Fold the Google Bot back up into a perfect cube when you are .",
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
        "features": "Pack contains two sticker sheets Each Sheet has different emojis Decal dimensions should fit in a maximum sheet size of 12 3/4 x",
        "price": "4.99",
        "keywords": "Google Emoji Sticker Pack, Google sticker pack, emoji sticker pack, google emoji, stickers, pack of sticker, pack of emoji stickers",
        "url": " https://loremflickr.com/320/240",
        "category": "Laptop",
        "subcategory": "accessories"
    },
    {
        "id": "GGOEWCKQ085457",
        "name": "Waze Pack of 9 Decal Set",
        "description": "Can't decide which Waze decal to get? We have made that decision easier for you!!",
        "features": "Pack of 9 includes: 3 Waze Mood Happy decals 3 Waze Mood ",
        "price": "16.99",
        "keywords": "Waze Pack of 9 Decal Set, decals pack, packs of 9, Waze Packs, Waze Decals, waze, Waze",
        "url": " https://loremflickr.com/320/240",
        "category": "Pc",
        "subcategory": "accessories"
    },
    {
        "id": "GGOEGHPB071610",
        "name": "Google Twill Cap",
        "description": "Classic urban styling distinguishes this Google cap. Retains its shape, even whe.",
        "features": "Heavy weight brushed twill Adjustable velcro closure One size fits all",
        "price": "10.99",
        "keywords": "Google Twill Cap, Google Cap, Google Twill Caps, Google Twill, google cap, google caps, google twill, google twill black cap, google black caps, google caps, black caps, Google Caps",
        "url": " https://loremflickr.com/320/240",
        "category": "Laptop",
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
        "category": "Mobile",
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
        "category": "Laptop",
        "subcategory": "apparel"
    },
    {
        "id": "GGOEWXXX0828",
        "name": "Waze Men's Short Sleeve Tee",
        "description": "Made of soft tri-blend jersey fabric, this great t-shirt will help you find your Waze. Made in USA.",
        "features": " Jersey knit 37.5% cotton, 50% polyester, 12.5% rayon Made in the USA",
        "price": "18.99",
        "keywords": "Waze Men's Short Sleeve Tee, Waze Short Sleeve Tee, Waze Men's Tees,",
        "url": " https://loremflickr.com/320/240",
        "category": "Mobile",
        "subcategory": "apparel"
    },
    {
        "id": "GGOEGBRJ037399",
        "name": "Google Rucksack",
        "description": "Choose to carry your belongings and presentations to your",
        "features": " Size: 13.5 x 6.5 x 17.5 Ergonomic padded shoulder straps Large main compartment with internal laptop compartment Easy",
        "price": "79.99",
        "keywords": "Mistral Rucksack, Mistral backpack, Mistral Backpack, backpack, bags, bag, Backpack, backpacks, packs, office gear, Bag, Bags, Google Backpack, google backpack, g, google",
        "url": " https://loremflickr.com/320/240",
        "category": "Laptop",
        "subcategory": "bags"
    },
    {
        "id": "GGOEGDHJ087399",
        "name": "Google Rolltop Backpack Blue",
        "description": "This stylish Google rolltop backpack will help keep all of your favorite items organized",
        "features": "Size: 12 inches wide x 18.5 inches height x 5.3 inches depth TPU Liner Internal Organizer for Pens, Phones and Other Small Items ",
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
        "features": "17 oz. double wall thermal bottle Stainless steel Threaded stainless steel insulated ",
        "price": "23.99",
        "keywords": "Android Black Force 17 oz Bottle, android bottles, android black bottle, android 17 oz bottle, android black force bottle, Black",
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


function ProductFun(props) {

    const [active, setActive] = useState('')

    const [maindata, setMaindata] = useState(data)

    const handleProduct = (cateData) => {
        let productData = data.filter((v) => v.category === cateData);
        setMaindata(productData);
        setActive(cateData);
    }


    return (


        <div>

            <div className='text-center'>

            <h1 className='m-10'>Product </h1>

                <Button 
                 onClick={() => handleProduct('Mobile')}
                    color="primary"
                    style={{width:'60px' ,height:'30px' , marginRight:'10px' ,marginBottom:'20px' ,fontSize:'15px'}}
                    outline={active === 'Mobile' ? false : true}
                >
                    Mobile
                </Button>
                <Button
                 onClick={() => handleProduct('Laptop')}
                    color="primary"
                    style={{width:'60px' ,height:'30px' , marginRight:'10px',marginBottom:'20px',fontSize:'15px'}}
                    outline={active === 'Laptop' ? false : true}
                >
                    Laptop
                </Button>
                <Button
                 onClick={() => handleProduct('Pc')}
                    color="primary"
                    style={{width:'60px' ,height:'30px' , marginRight:'10px',marginBottom:'20px',fontSize:'15px'}}
                    outline={active === 'Pc' ? false : true}
                >
                    Pc
                </Button>
            </div>

            <Container>

                <Row>
                    {
                        maindata.map((v, i) => {
                            return (
                                <>
                                    <div className='col-md-3  gy-4' >
                                        <Card
                                            style={{
                                                border: '2px solid #000',
                                                borderRadius: '10px',
                                            }}
                                        >
                                            <img alt="Card" src="https://loremflickr.com/320/240 "></img>


                                            <CardBody style={{ height: 'auto' }}>

                                                {/* <h4  style={{}}>{v.name}</h4> */}
                                                <CardTitle tag="h5">
                                                    {v.name}
                                                </CardTitle>


                                                <CardText style={{ fontSize: '13px' }}>
                                                    <p> <span style={{ fontWeight: 'Bold', fontSize: '13px' }}> Description :</span> {v.description}</p>
                                                    <p> <span style={{ fontWeight: 'Bold', fontSize: '13px' }}> Features :</span> {v.features}</p>
                                                    <p><span style={{ fontWeight: 'Bold', fontSize: '13px' }}> Price :</span> {v.price}</p>
                                                    <p><span style={{ fontWeight: 'Bold', fontSize: '13px' }}> Category :</span> {v.category}</p>

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

export default ProductFun;
