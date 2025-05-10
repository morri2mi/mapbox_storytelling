var config = {
    style: 'mapbox://styles/morri2mi/cmacugtuw009701qu6mlh4jeb',
    // leave commented to use Mapbox Standard Style
    accessToken: 'pk.eyJ1IjoibW9ycmkybWkiLCJhIjoiY205OG81MnowMDUyMTJqcTQ0cnBoNzN1OSJ9.RMKbQQLo8m35WL58FSmaeg',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    insetOptions: {
        markerColor: 'orange'
    },
    insetPosition: 'bottom-right',
    theme: 'light',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'Economic Shifts of Women over Time in Southern Literature',
    subtitle: 'With Stories Written By Women',
    byline: 'Michelle Morris',
    footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'opening',
            alignment: 'centered',
            hidden: false,
            title: 'Introduction',
            image: './assets/color_purple_cover.jpg',
            description: 'The genre of Southern Literature has been around for ages, and will continue to be an important part of literature for years to come. I will be exploring the concept of women and their economic status in southern literature and how it shifts over time due to when the books were published. The books that will be used to explore this are "The Color Purple" by Alice Walker, "Their Eyes were Watching God" by Zora Neale Hurston, and "Salvage the Bones" by Jesmin Ward. An important thing to note is that all of these books are written by women. As we get closer to modern day publications there will be a shift in womens economic status; as they will be able to purchase and sell things.',
            location: {
                center: [-90.3150946, 38.6605671],
                zoom: 4,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'chapter-two',
            alignment: 'right',
            hidden: false,
            title: 'Their Eyes were Watching God (1937)',
            image: './assets/alice_walker_childhood_home.jpg',
            description: 'There are a lot of places where women are purchasing things in this dataset. The data points are all in Florida, as there was no out-of-state traveling. It is even likely that there are more data points that are from women then men for this story.',
            location: {
                center: [-83.5573651, 32.5573651], 
                zoom: 6.5,
                pitch: 60,
                bearing: -43.2,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'chapter-two2',
            alignment: 'right',
            hidden: false,
            title: 'Their Eyes were Watching God (1937)',
            image: './assets/alice_walker_childhood_home.jpg',
            description: 'There is not as many data points that mark that things are being purchased by women. By comparison, there is a lot more points of women to be the one making the purchase compared to being the one that is being bought from. These points further highlight the difference between Jaine and the people around her in the Glades, as it is majority men who live there but since Janie is the richest she spends the most money.',
            location: {
                center: [-83.5573651, 32.5573651], 
                zoom: 6.5,
                pitch: 60,
                bearing: -43.2,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'chapter-two3',
            alignment: 'right',
            hidden: false,
            title: 'Their Eyes were Watching God (1937)',
            image: './assets/alice_walker_childhood_home.jpg',
            description: 'When Janie married Tea Cake, she was already at a decent economic standing and had gotten there by her previous marriage to the mayor. As she spends her time with Tea Cake, she spends lots of her money on him, which makes other people certain that she loves him for him. It is an interesting shift, as usually spending a lot of money on someone can be considered superficial. By highlighting Janie using her higher economic status to "prove" her feelings for Tea Cake Hurston also shows how Janie uses her funds when she is not being tied down by someone or being forced to do things. Even though Jaine is at a decent economic standing before she meets Tea Cake and marries him, the place that they move too is well beneath Janies economic status. It is as if in order to allow Janie to keep her wealth and place in the economy, the area that she lives in must be far below her class. On the other hand, Janie does not use her wealth for selfish reasons and even plainly states that she loves Tea Cake for who he is. It is even more prominent that she does this when Tea Cake dies and she "has a strong vault built in the cemetary at West Palm Beach" (Hurston, 189). It was very clear that Janie loved Tea Cake for who he was and was not attempting to be stingy with her money to make sure to have enough for her, she was happy spending it on the people she loved and cared about.',
            location: {
                center: [-83.5573651, 32.5573651], 
                zoom: 6.5,
                pitch: 60,
                bearing: -43.2,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'chapter-two1',
            alignment: 'right',
            hidden: false,
            title: 'The Color Purple (1982)',
            image: './assets/alice_walker_childhood_home.jpg',
            description: 'The light teal color shows the areas where there was economic transactions, and the lighter green dots represent every purchase made by a women. Many of the econmic trasactions are centered around a certain point; Africa, with the Olinka, Misissippi, London, and Memphis. While each main location had multiple transactions of different kinds the transactions in London and Africa would have been made by someone who was in more control of her finances. Misissippi has a decent amount of women purchasing things, but that is where the women were under control by a man, and the money being spent could not even be theirs. Memphis has the least amount of transactions that happen by a women, but Memphis is also the place that did not force women to do things for a man in the story.',
            location: {
                center: [-10.378889436404226, 6.251275915595865], 
                zoom: 6.5,
                pitch: 60,
                bearing: -43.2,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'chapter-two2',
            alignment: 'right',
            hidden: false,
            title: 'The Color Purple (1982)',
            image: './assets/alice_walker_childhood_home.jpg',
            description: 'Compared to the light green dots, the darker green ones are markers of where something has been purchased from someone. This grouping of data is much wider due to the fact that there was no women that were being bought from. All of the markers are either men or groups of people, which are still mainly men, that have been bought from. An issue here with the way the data was collected is that there was no actual transaction that was happening, just a mention of Celie selling something.',
            location: {
                center: [35.173171, 90.053264], 
                zoom: 6.5,
                pitch: 60,
                bearing: -43.2,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'chapter-two3',
            alignment: 'right',
            hidden: false,
            title: 'The Color Purple (1982)',
            image: './assets/alice_walker_childhood_home.jpg',
            description:' While this book had many different female characters that were able to purchase things, due to how many were in London and Africa meant that they were being made most likely by Nettie, who had a lot more economic freedom then Celie. The only time that Celie even had a bit of economic freedom was when she was living in Memphis with Shug, Grady, and Squeak, all of the other times she had the money to do something, it was Mr. Alberts. Walker chooses the time where Celie is not around any man that can have sway over her to give Celie the chance to have her own economic status. In the beginning Celie spends Shugs money, but it is different then when Celie was spending Mr. Alberts money or her fathers because she is spending the money for herself and her own enjoyment. With the money, she buys the supplies to sew the pants she has gotten so good at making. The pants that she sews are so good that when Celie mentions to shug about getting a job, instead of forcing her to work for someone else or telling her not to work at all; Shug tells Celie that shes going to "put a few advertisments in the paper... and give you this diningroom for your factory" (Walker 212). It is the first time in the book that it has been stated that a women will be working for herself and actually going out and selling her product. It gives Celie a strong economic standing for her time in Memphis and highlights the power that Celie has when she is not being forced to do things by a man.',
            location: {
                center: [-83.5573651, 32.5573651], 
                zoom: 6.5,
                pitch: 60,
                bearing: -43.2,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'chapter-two',
            alignment: 'left',
            hidden: false,
            title: 'salvage the bones',
            image: './assets/firestone_farm.jpg',
            description: 'same stuff',
            location: {
                center: [-10.378889436404226, 6.251275915595865], 
                zoom: 8.00,
                pitch: 45.0,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'chapter-three',
            alignment: 'fully',
            hidden: false,
            title: 'Salvage the Bones (2011)',
            image: './assets/color_purple_field.jpg',
            description: 'same stuff repeat order',
            location: {
                center: [-41.47212410646295, 34.781162343274076], 
                zoom: 3,
                pitch: 30,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'chapter-three',
            alignment: 'fully',
            hidden: false,
            title: 'Salvage the Bones (2011)',
            image: './assets/color_purple_field.jpg',
            description: 'same stuff final',
            location: {
                center: [-41.47212410646295, 34.781162343274076], 
                zoom: 3,
                pitch: 30,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'chapter-three',
            alignment: 'fully',
            hidden: false,
            title: 'general together slife',
            image: './assets/color_purple_field.jpg',
            description: 'same stuff',
            location: {
                center: [-41.47212410646295, 34.781162343274076], 
                zoom: 3,
                pitch: 30,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'chapter-three',
            alignment: 'fully',
            hidden: false,
            title: 'conclusion',
            image: './assets/color_purple_field.jpg',
            description: 'same stuff',
            location: {
                center: [-41.47212410646295, 34.781162343274076], 
                zoom: 3,
                pitch: 30,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },    
        {
            id: 'chapter-three',
            alignment: 'fully',
            hidden: false,
            title: 'Salvage the Bones (2011)',
            image: './assets/color_purple_field.jpg',
            description: 'same stuff',
            location: {
                center: [-41.47212410646295, 34.781162343274076], 
                zoom: 3,
                pitch: 30,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    
    ]
};