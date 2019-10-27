<template>
    <div>
        <h2>20 of the Most Luxurious Cars You Can Buy</h2>
        <v-grid-accordion
            :width="960"
            :height="680"
            :columns="5"
            :gutter="6"
            :images="imgs"
            :duration="5000"/>
    </div>
</template>
<script>
export default {
    data() {
        return {
            imgs:  [{
                url: require(`./assets/0.jpg`),
                text: 'BMW X7\nAs the name suggests, the BMW X7 is like an SUV version of the 7-Series. That means all the features from BMW\'s flagship, plus the added perks of a high seating position and tons of cabin space. You can even get it with a 523-horsepower V-8.',
            }, {
                url: require(`./assets/1.jpg`),
                text: 'Bentley Continental GT\nBentley unveiled the brand-new Continental GT in 2018 after a long wait, and it\'s fabulous to drive. All the prestige of a Bentley wrapped in a sleek two-door 2+2 coupe shape.',
            }, {
                url: require(`./assets/2.png`),
                text: 'Lincoln Navigator\nThough its looks may not be everyone\'s cup of tea, the new Navigator is a huge step up in quality, making it a real competitor in the luxury SUV market. Get the extended wheelbase version, and you\'ve got one of the most capable limo-tanks out there. Here\'s one with just 3700 miles on the clock on eBay right now.',
            }, {
                url: require(`./assets/3.jpg`),
                text: 'Audi A8\nThe A8 is actually one of the more affordable cars on this list, but you wouldn\'t know it by sitting inside. Plenty of standard features and an optional rear infotainment system (with its own removable tablet) will make any tech-savvy passenger happy. This one\'s painted in a lovely shade of purple, and listed for sale.',
            }, {
                url: require(`./assets/4.jpg`),
                text: 'Ford F-150 Limited\nBet you weren\'t expecting to see a truck on this list, were you? Well, demand for luxurious pickups has skyrocketed in America, which led Ford to make the F-150 Limited. It\'s the most expensive, feature-packed F-150 you can buy, equipped with an Ecoboost V-6, 360-degree cameras, 4G LTE, and massaging, heated and ventilated seats. Here\'s a brand-new one you can own today.',
            }, {
                url: require(`./assets/5.jpg`),
                text: 'Rolls-Royce Cullinan\nThe Cullinan is the Rolls-Royce of SUVs, so it\'s no surprise to see it on this list. With a twin-turbo V-12 and more quality features than you could ever imagine, it\'s the perfect vehicle for driving anywhere in total comfort. This one has under 2000 miles on the clock, and it\'s for sale.',
            }, {
                url: require(`./assets/6.jpg`),
                text: 'Range Rover SV Autobiography\nThe SV Autobiography is a product of Jaguar-Land Rover\'s Special Vehicle Operations, and represents the very best of what Range Rover has to offer. It uses the same supercharged V-8 found in the Sport SVR, and has more luxury features than you can count. Here\'s one on eBay that you can own today.',
            }, {
                url: require(`./assets/7.jpg`),
                text: 'Porsche Panamera Turbo Executive\nIf the regular Panamera Turbo or Turbo Sport Turismo just won\'t cut it for you, Porsche also offers an extended wheelbase Executive trim. It\'s identical in spec to the regular Turbo save for a more roomy back seat and extra rear comfort features. Here\'s a hybrid version with even more power listed for sale now.',
            }, {
                url: require(`./assets/8.jpg`),
                text: 'Cadillac Escalade\nNo matter what you think of the GM brand, you have to give credit to it for the Escalade. The interior is a lovely space to spend time in, and there are a ton of modern pieces of tech to play with. This one has 760 miles on it, and can be yours.',
            }, {
                url: require(`./assets/9.jpg`),
                text: 'Toyota Century\nThe new Century might not have a V-12 anymore, but we\'re confident Toyota has made the hybrid V-8 setup just as relaxing. Combine that with the company\'s expertise in building fantastic luxury cars, and you\'ve got yourself the ultimate JDM cruiser.',
            }, {
                url: require(`./assets/10.jpg`),
                text: 'Rolls-Royce Phantom\nCars simply don\'t get more opulent than the Rolls-Royce Phantom—the biggest Roller you can buy has always been the ultra-luxury benchmark. This one has just 732 miles on the clock, and you can own it.',
            }, {
                url: require(`./assets/11.jpg`),
                text: 'Mercedes-Maybach S650 Cabriolet\nMercedes-Benz puts everything it knows about building cars into the S-Class, and the most luxurious drop-top version you can get is the V12-powered Maybach S650. It even comes with its own set of luggage. Here\'s one that\'s barely been driven up for sale on eBay.',
            }, {
                url: require(`./assets/12.jpg`),
                text: 'Bentley Bentayga\nAll you need to know regarding the Bentayga\'s luxury credentials is that it offers a $170,000 dashboard clock as an option. It\'s a Breitling tourbillon, the only such clock to be fitted to a car. Here\'s one for sale with 22,000 miles on the clock you can own for $100,000 off MSRP. No, it doesn\'t have the tourbillon',
            }, {
                url: require(`./assets/13.jpg`),
                text: 'Bentley Flying Spur\nOnly in the world of ultra-luxury cars can a quarter-million dollar sedan look affordable. Don\'t think for a second, though, that there\'s anything cheap about the Flying Spur. The new one can hit 207 mph, making it the fastest production sedan on earth.',
            }, {
                url: require(`./assets/14.jpg`),
                text: 'Bentley Mulsanne\nThis Bentley may be named for the Mulsanne straight at Le Mans, but it\'s no race car. The $300,000-plus Mulsanne is the most luxurious vehicle Bentley can build. The rear seats are inspired by first-class airplane appointments, and the options available are limited only by your imagination—and your budget. This one has 4300 miles on it, and can be yours.',
            }, {
                url: require(`./assets/15.png`),
                text: 'BMW 7-Series\nIf you can get passed that comically large kidney grilles, the new 7-Series is a lovely piece of machinery that does the luxury thing extremely well. Though, like many cars on this list, you should keep in mind the heavy depreciation hit you\'ll take if you buy it new.',
            }, {
                url: require(`./assets/16.png`),
                text: 'Mercedes-Maybach S650 Pullman\nEven in its base form, the Mercedes S-Class is already one of the most luxurious cars you can buy. The ultimate version, though, is the S650 Pullman. It\'s more than 21 feet long, which means there\'s enough room for a middle row of rear-facing seats. Oh, and it costs more than $600,000.',
            }, {
                url: require(`./assets/17.jpg`),
                text: 'Rolls-Royce Dawn\nSome people like to be seen while they drive their ultra-luxury car. For them, there\'s no better option than the Rolls-Royce Dawn. The Dawn is billed as the quietest drop-top ever produced, and that includes the convertible top itself—it was engineered specifically to open and close in silence. This one has a bunch of custom touches and under 200 miles on the odometer, and you can buy it.',
            }, {
                url: require(`./assets/18.jpg`),
                text: 'Rolls-Royce Ghost\nCompared to most sedans, the Rolls-Royce Ghost is huge. But on this list, its length is nothing special. That means it\'s small enough to drive yourself if you want to give your chauffeur the day off. It\'s still a Rolls-Royce, though, so the back seat is always the best in the house. This one\'s barely been broken-in, and it\'s for sale now.',
            }, {
                url: require(`./assets/19.jpg`),
                text: 'Rolls-Royce Wraith\nIf you like the Rolls-Royce Ghost but wish it was a bit more sporty, then the Wraith is the car for you. It\'s one of the best grand tourers money can buy, and you can still pick from all the regular Rolls options like the starlight headliner. This one has under 1000 miles on it, and it\'s listed on eBay.',
            }]
        };
    },
}
</script>
<style>
    body {
        font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif
    }
</style>
