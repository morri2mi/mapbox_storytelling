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
            id: 'chapter-one1',
            alignment: 'right',
            hidden: false,
            title: 'The Color Purple (1982)',
            image: './assets/alice_walker_childhood_home.jpg',
            description: 'The light teal color shows the areas where there was economic transactions, and the lighter green dots represent every purchase made by a women. Many of the econmic trasactions are centered around a certain point. There were three main locations in this book, Africa, with the Olinka, London, Misissippi, and Memphis. While each main location had multiple transactions of different kinds, London and Africa had the most amount of women purchasing things. While Misissippi had women purchasing things, it was not as much as the other two locations. Memphis is the one location where there is no women purchasing anything.',
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
            id: 'chapter-one2',
            alignment: 'right',
            hidden: false,
            title: 'The Color Purple (1982)',
            image: './assets/alice_walker_childhood_home.jpg',
            description: 'Compared to the light green dots, the darker green ones are markers of where something has been purchased from someone. This grouping of data is much wider due to the fact that there was no women that were being bought from. All of the markers are either men or groups of people, which are still mainly men, that have been bought from.',
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
            id: 'chapter-one',
            alignment: 'right',
            hidden: false,
            title: 'The Color Purple (1982)',
            image: './assets/alice_walker_childhood_home.jpg',
            description: 'general tie up',
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
            id: 'chapter-one',
            alignment: 'right',
            hidden: false,
            title: 'Their eyes were watching god',
            image: './assets/alice_walker_childhood_home.jpg',
            description: 'repeat previous order of things for new book',
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
            id: 'chapter-one',
            alignment: 'right',
            hidden: false,
            title: 'their eyes were watching god',
            image: './assets/alice_walker_childhood_home.jpg',
            description: 'repeat order of things',
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
            id: 'chapter-one',
            alignment: 'right',
            hidden: false,
            title: 'Theit eyes were watching god',
            image: './assets/alice_walker_childhood_home.jpg',
            description: 'repeat',
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