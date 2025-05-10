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
            image: './assets/Deep-South.jpeg',
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
            image: '',
            description: 'There are a lot of places where women are purchasing things in this dataset. The data points are all in Florida, as there was no out-of-state traveling. It is even likely that there are more data points that are from women then men for this story.',
            location: {
                center: [-81.386026, 28.618961],
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
            image: '',
            description: 'There is not as many data points that mark that things are being purchased by women. By comparison, there is a lot more points of women to be the one making the purchase compared to being the one that is being bought from. These points further highlight the difference between Jaine and the people around her in the Glades, as it is majority men who live there but since Janie is the richest she spends the most money.',
            location: {
                center: [-81.380202, 28.548017],
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
            image: '',
            description: 'When Janie married Tea Cake, she was already at a decent economic standing and had gotten there by her previous marriage to the mayor. As she spends her time with Tea Cake, she spends lots of her money on him, which makes other people certain that she loves him for him. It is an interesting shift, as usually spending a lot of money on someone can be considered superficial. By highlighting Janie using her higher economic status to "prove" her feelings for Tea Cake Hurston also shows how Janie uses her funds when she is not being tied down by someone or being forced to do things. Even though Jaine is at a decent economic standing before she meets Tea Cake and marries him, the place that they move too is well beneath Janies economic status. It is as if in order to allow Janie to keep her wealth and place in the economy, the area that she lives in must be far below her class. On the other hand, Janie does not use her wealth for selfish reasons and even plainly states that she loves Tea Cake for who he is. It is even more prominent that she does this when Tea Cake dies and she "has a strong vault built in the cemetary at West Palm Beach" (Hurston, 189). It was very clear that Janie loved Tea Cake for who he was and was not attempting to be stingy with her money to make sure to have enough for her, she was happy spending it on the people she loved and cared about.',
            location: {
                center: [-80.054567, 26.719558],
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
            alignment: 'left',
            hidden: false,
            title: 'The Color Purple (1982)',
            image: '',
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
            alignment: 'left',
            hidden: false,
            title: 'The Color Purple (1982)',
            image: '',
            description: 'Compared to the light green dots, the darker green ones are markers of where something has been purchased from someone. This grouping of data is much wider due to the fact that there was no women that were being bought from. All of the markers are either men or groups of people, which are still mainly men, that have been bought from. An issue here with the way the data was collected is that there was no actual transaction that was happening, just a mention of Celie selling something.',
            location: {
                center: [-90.051982, 35.158421], 
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
            alignment: 'left',
            hidden: false,
            title: 'The Color Purple (1982)',
            image: '',
            description:' While this book had many different female characters that were able to purchase things, due to how many were in London and Africa meant that they were being made most likely by Nettie, who had a lot more economic freedom then Celie. The only time that Celie even had a bit of economic freedom was when she was living in Memphis with Shug, Grady, and Squeak, all of the other times she had the money to do something, it was Mr. Alberts. Walker chooses the time where Celie is not around any man that can have sway over her to give Celie the chance to have her own economic status. In the beginning Celie spends Shugs money, but it is different then when Celie was spending Mr. Alberts money or her fathers because she is spending the money for herself and her own enjoyment. With the money, she buys the supplies to sew the pants she has gotten so good at making. The pants that she sews are so good that when Celie mentions to shug about getting a job, instead of forcing her to work for someone else or telling her not to work at all; Shug tells Celie that shes going to "put a few advertisments in the paper... and give you this diningroom for your factory" (Walker 212). It is the first time in the book that it has been stated that a women will be working for herself and actually going out and selling her product. It gives Celie a strong economic standing for her time in Memphis and highlights the power that Celie has when she is not being forced to do things by a man.',
            location: {
                center: [-83.557692, 32.999763], 
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
            id: 'chapter-three',
            alignment: 'left',
            hidden: false,
            title: 'Salvage the Bones (2011)',
            image: '',
            description: 'The amount of women purchasing something in this story is quite low compared to the other two stories.',
            location: {
                center: [-90.075619, 29.962486], 
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
            alignment: 'left',
            hidden: false,
            title: 'Salvage the Bones (2011)',
            image: './assets/satellite-image-katrina.jpg',
            description: 'While there is a small amount of data that marks what women purchased, there is an even smaller amount of data points that marked that women were the ones being purchased from.',
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
            alignment: 'left',
            hidden: false,
            title: 'Salvage the Bones (2011)',
            image: '',
            description: 'Even though this is the most recent story that has been published out of the books explored, it has the least amount of women transactions. While that is the case, it is also the only one that has a similar amouunt of women being purchased from and being the purchaser. Part of this is due to the fact that Esch and her family are not that well off to begin with, but the whole town is in a similar spot. Since Esch is the only women in her family, it makes it difficult to see all of the impacts that she has in the economy. Although it may be hard to pinpoint what Esch did, this is still the only book to have a somewhat even split between the women buying and the women that are being bought from. One of the reasons that the economy is not as prevelent in this story is that Ward wrote it for the people that had survived hurricane Katrina, the people that had been in similar situations. It feels disengenious to make an environmental disaster about a enconomic disaster as well, Ward even writes that the fairly well-off white people "probably took everything when they evacuated"(Ward, 209). If Esch and her family had enough money, they would not be sticking around and would have evacuated to a safer place by this point. Even though there is a lower amount of women transaction data points, it is fair to say that the women who did bought and sold those things did so for themselves. If the money was not theirs to begin with, it was almost always given as a gift or reward of some kind, so when something was purchased using it, the women were using it for themselves.',
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
            title: 'Conclusion',
            image: './assets/yay-women.jpg',
            description: 'Each of the three stories that were explored showed womens economic status in different ways. The oldest of the books, "As Their Eyes were Watching God" fully placed Janie at a high economic standing to begin with and kept her there throughout the book. Although, even if Janie was the richest person in the Glades, peoples attitudes towards her were hostile and were unsure of her character. It felt as if Janies wealth never changed and it defined a lot about her to other people, even if she was living the same life as them. The second oldest book, "The Color Purple" highlighted the difference between buying things for yourself versus buying things for yourself using other peoples money. As soon as Celie was able to purchase things for herself with money from someone she cared about and even her own money, she was excited about doing things and allowed herself to find a place in the economy. The third and youngest book, "Salvage the Bones" took a different approach to show womens change in economic standing. In the other two books, both Janie and Celie had their wealth connected to a man in one way or another, in either a positive or negative way. "Salvage the Bones" put lots of people in the same economic standing, but the women were not forced to do anything by a man who controlled their finances. Since all three books were written by women, I belive that it makes it easier to compare how their women characters are treated. There is most likely no prejudice towards how a women should "rightfully" act by these authors, each of the main characters that were created had life and personality outside of their economic status. Even so, the way that womens economic power has shifted is evident. In "Their Eyes were Watching God" most of Janies status and wealth came from her relationship with a man, and she spent a lot of her wealth on a man to show her love. In "The Color Purple" all of Celies wealth at the beginning was tied to a man, she had no say in anything; however, once she was able to get away from Mr. Albert and live with Shug, she was able to gain her own wealth and do whatever she wanted with it. In "Salvage the Bones" the women that have the money to do transactions are in control of it from the start. As we get closer to modern day, a womens economic status becomes something that is familiar to us. There is a shift from womens wealth coming from a man and being looked down upon for it, and assuming that she is being used for her money. To a women that has everything controlled by a man until she can get away and use her money for what she wants too. And finally, coming to a place where a women has the same opportunites to sell and buy things with her own money. The data collected was fairly thorough and I was able to seperate specifically what I was looking for with women being the only gender I wanted to see the stats for. While I was able to get the datasets that I wanted, there is a small issue with using a mastersheet like this: I am unaware how well the other members of my class did on making sure to report everything. I also was unable to see the total masterlist and could not pull specific numbers to describe my datapoints.',
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
    ]
}