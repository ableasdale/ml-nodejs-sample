// https://developer.marklogic.com/learn/node-client-api - 1. Load Data

var data = [
    {
        "id": 0,
        "guid": "6e1c7304-09a1-4436-ba77-ae1e3b8856f7",
        "isActive": true,
        "balance": "$2,774.31",
        "picture": "http://placehold.it/32x32",
        "age": 29,
        "eyeColor": "blue",
        "name": "Shauna Weber",
        "gender": "female",
        "company": "IPLAX",
        "email": "shaunaweber@iplax.com",
        "phone": "+1 (950) 427-2202",
        "address": "760 Forest Place, Glenshaw, Michigan, 1175",
        "about": "Kitsch fingerstache XOXO, Carles chambray 90's meh cray disrupt Tumblr. Biodiesel craft beer sartorial meh put a bird on it, literally keytar blog vegan paleo. Chambray messenger bag +1 hoodie, try-hard actually banjo bespoke distillery pour-over Godard Thundercats organic. Kitsch wayfarers Pinterest American Apparel. Hella Shoreditch blog, shabby chic iPhone tousled paleo before they sold out keffiyeh Portland Marfa twee dreamcatcher. 8-bit Vice post-ironic plaid. Cornhole Schlitz blog direct trade lomo Pinterest.",
        "registered": "2014-01-31T19:57:33+08:00",
        "location": {
            "type": "Point",
            "coordinates": [140.543694, 15.561833]
        },
        "tags": [],
        "friends": [
            {
                "id": 0,
                "name": "Trevino Torres"
            },
            {
                "id": 1,
                "name": "Kellie Holden"
            },
            {
                "id": 2,
                "name": "Hubbard Hopkins"
            }
        ],
        "favoriteFruit": "strawberry"
    },
    {
        "id": 1,
        "guid": "34a23649-ec61-478f-90ab-5f01a55120ce",
        "isActive": false,
        "balance": "$1,787.45",
        "picture": "http://placehold.it/32x32",
        "age": 38,
        "eyeColor": "green",
        "name": "Peters Barnett",
        "gender": "male",
        "company": "ENDICIL",
        "email": "petersbarnett@endicil.com",
        "phone": "+1 (952) 600-2252",
        "address": "749 Green Street, Tyro, Illinois, 2856",
        "about": "Letterpress Echo Park fashion axe occupy whatever before they sold out, Pinterest pickled cliche. Ethnic stumptown food truck wolf, ethical Helvetica Marfa hashtag. Echo Park photo booth banh mi ennui, organic VHS 8-bit fixie. Skateboard irony dreamcatcher mlkshk iPhone cliche. Flannel ennui YOLO artisan tofu. Hashtag irony Shoreditch letterpress, selvage scenester YOLO. Locavore fap bicycle rights, drinking vinegar Tonx bespoke paleo 3 wolf moon readymade direct trade ugh wolf asymmetrical beard plaid.",
        "registered": "2014-06-13T23:15:33+07:00",
        "location": {
            "type": "Point",
            "coordinates": [15.27027, -107.313581]
        },
        "tags": [
            "ex",
            "ex",
            "ut",
            "exercitation",
            "Lorem",
            "magna",
            "non",
            "aute",
            "nisi"
        ],
        "friends": [
            {
                "id": 0,
                "name": "Mcmahon Navarro"
            },
            {
                "id": 1,
                "name": "Milagros Simpson"
            },
            {
                "id": 2,
                "name": "Terri Gallegos"
            }
        ],
        "favoriteFruit": "apple"
    },
    {
        "id": 2,
        "guid": "978c3f49-92fa-4f52-b8bd-76159a2c15b4",
        "isActive": false,
        "balance": "$3,416.58",
        "picture": "http://placehold.it/32x32",
        "age": 22,
        "eyeColor": "brown",
        "name": "Mosley Nunez",
        "gender": "male",
        "company": "VIRVA",
        "email": "mosleynunez@virva.com",
        "phone": "+1 (919) 457-3044",
        "address": "760 Beverly Road, Elliston, New York, 4057",
        "about": "Kale chips raw denim ethical selfies kitsch drinking vinegar. Before they sold out wayfarers High Life, fingerstache photo booth slow-carb iPhone pork belly keffiyeh actually fashion axe kale chips pug PBR&B. Banjo sriracha ugh post-ironic stumptown Etsy. Locavore gastropub Etsy banjo food truck, skateboard artisan Truffaut you probably haven't heard of them cray roof party slow-carb quinoa vegan. Drinking vinegar lo-fi jean shorts, tofu stumptown butcher cardigan Shoreditch flexitarian cliche biodiesel irony trust fund skateboard salvia. Helvetica Cosby sweater stumptown, pug cray tousled ennui Godard lo-fi Carles. Keffiyeh letterpress Wes Anderson ethical, umami post-ironic sustainable Tumblr Tonx pour-over.",
        "registered": "2014-02-16T09:24:18+08:00",
        "location": {
            "type": "Point",
            "coordinates": [-119.347983, 22.386006]
        },
        "tags": [
            "eiusmod",
            "ullamco"
        ],
        "friends": [
            {
                "id": 0,
                "name": "Kidd Alvarez"
            },
            {
                "id": 1,
                "name": "Harrell Fisher"
            },
            {
                "id": 2,
                "name": "Chan Richard"
            }
        ],
        "favoriteFruit": "strawberry"
    },
    {
        "id": 3,
        "guid": "986af6e1-e0f1-450f-b1f0-2eff54357840",
        "isActive": true,
        "balance": "$2,061.82",
        "picture": "http://placehold.it/32x32",
        "age": 38,
        "eyeColor": "blue",
        "name": "Rosalind Christian",
        "gender": "female",
        "company": "UPDAT",
        "email": "rosalindchristian@updat.com",
        "phone": "+1 (817) 544-2451",
        "address": "901 Etna Street, Weeksville, Florida, 5402",
        "about": "Skateboard pop-up kogi, ethnic Vice disrupt Truffaut twee fashion axe forage occupy biodiesel. Bespoke umami yr, flannel kogi XOXO bitters butcher ugh DIY lomo. Flexitarian distillery flannel, mustache butcher raw denim crucifix sartorial PBR&B. Ennui beard freegan, Blue Bottle cornhole gluten-free yr sriracha 90's tofu stumptown crucifix Williamsburg keytar fingerstache. Odd Future selfies Shoreditch Echo Park deep v, lo-fi put a bird on it cray master cleanse Intelligentsia drinking vinegar. Ethical flannel craft beer meggings forage, paleo High Life viral Blue Bottle food truck fashion axe twee fingerstache Bushwick. Scenester Thundercats lo-fi Odd Future, wolf kale chips fashion axe mixtape slow-carb quinoa.",
        "registered": "2014-04-16T07:14:06+07:00",
        "location": {
            "type": "Point",
            "coordinates": [156.240181, 75.484745]
        },
        "tags": [
            "eu",
            "labore",
            "duis",
            "velit"
        ],
        "friends": [
            {
                "id": 0,
                "name": "Bridgette Wade"
            },
            {
                "id": 1,
                "name": "Margo Rodriquez"
            },
            {
                "id": 2,
                "name": "Wilson Cooper"
            }
        ],
        "favoriteFruit": "apple"
    },
    {
        "id": 4,
        "guid": "dd95907c-3b29-4e2c-9a4c-baf61bd96c9d",
        "isActive": false,
        "balance": "$3,385.27",
        "picture": "http://placehold.it/32x32",
        "age": 38,
        "eyeColor": "blue",
        "name": "Adrian Dodson",
        "gender": "female",
        "company": "ZENSUS",
        "email": "adriandodson@zensus.com",
        "phone": "+1 (949) 471-2658",
        "address": "289 Grant Avenue, Courtland, Alaska, 8847",
        "about": "Tote bag pug whatever trust fund, yr fashion axe American Apparel selfies flannel Portland gentrify synth twee. Tousled tofu biodiesel tattooed polaroid. Chia direct trade drinking vinegar, Helvetica ethical bitters banjo polaroid quinoa. Wes Anderson ugh 3 wolf moon +1 single-origin coffee, authentic plaid Tonx you probably haven't heard of them quinoa dreamcatcher fingerstache literally meggings. Vice aesthetic authentic, fashion axe stumptown Carles selfies organic you probably haven't heard of them street art Thundercats. Before they sold out Vice yr post-ironic Marfa cliche. Blue Bottle Portland bespoke slow-carb cliche.",
        "registered": "2014-06-16T16:13:14+07:00",
        "location": {
            "type": "Point",
            "coordinates": [-97.042726, -19.360066]
        },
        "tags": [
            "aliquip"
        ],
        "friends": [
            {
                "id": 0,
                "name": "Tate Hopper"
            },
            {
                "id": 1,
                "name": "Berger Ayala"
            },
            {
                "id": 2,
                "name": "Nola Erickson"
            }
        ],
        "favoriteFruit": "strawberry"
    }
];

var marklogic = require("marklogic");
var conn = require("../env.js").connection;

var db = marklogic.createDatabaseClient(conn);

db.documents.write(
    data.map(function(item) {
        return {
            uri: "/" + item.guid + ".json",
            contentType: "application/json",
            collections: ["fake data"],
            content: item
        }
    })
).
result(function(response){
    console.dir(JSON.stringify(response))
});