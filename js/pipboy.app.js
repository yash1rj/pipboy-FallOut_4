$(document).ready(function() {
    // var weapons = [
    //     {
    //         "name": "pistol_44",
    //         "damage": 48,
    //         "fire_rate": 6,
    //         "range": 119,
    //         "accuracy": 62,
    //         "weight": 4.2,
    //         "value": 19
    //     },
    //     {
    //         "name": "assault_rifle",
    //         "damage": 30,
    //         "fire_rate": 40,
    //         "range": 119,
    //         "accuracy": 72,
    //         "weight": 13.1,
    //         "value": 11
    //     },
    //     {
    //         "name": "smg",
    //         "damage": 10,
    //         "fire_rate": 127,
    //         "range": 107,
    //         "accuracy": 63,
    //         "weight": 13.8,
    //         "value": 8.8
    //     },
    //     {
    //         "name": "shotgun",
    //         "damage": 50,
    //         "fire_rate": 20,
    //         "range": 47,
    //         "accuracy": 23,
    //         "weight": 11.1,
    //         "value": 7.8
    //     },
    //     {
    //         "name": "flamer",
    //         "damage": 12,
    //         "fire_rate": 90,
    //         "range": 47,
    //         "accuracy": 53,
    //         "weight": 16.1,
    //         "value": 8.51
    //     }
    // ];

    $(".item-list a").on("click", function(e) {
        $(".item-list a").removeClass('active');
        $(e.currentTarget).addClass('active');
    });

    $(".item-list a").on("mouseenter", function(e) {
        var current_item = $(e.currentTarget).attr('class');
        // console.log(current_item);
        var url = "./js/weapons.json";
        var xhr = new XMLHttpRequest();
    
        xhr.open("GET", url);
    
        xhr.onload = () => {
            obj = JSON.parse(xhr.responseText);
            var weaponStatArr = obj[current_item];
            // console.log(weaponStatArr);
            for(item in obj) {
                // console.log(obj[item].name);
                if (obj[item].name == obj[current_item].name) {
                    // console.log(obj[item].damage);
                    var container = $(".item-stats");
                    container.find(".damage").html(obj[item].damage);
                    container.find(".fire_rate").html(obj[item].fire_rate);
                    container.find(".range").html(obj[item].range);
                    container.find(".accuracy").html(obj[item].accuracy);
                    container.find(".weight").html(obj[item].weight);
                    container.find(".value").html(obj[item].value);
                }
            }
        }
    
        xhr.send();
        
        // for(item in weapons) {
        //     if (weapons[item].name == current_item) {
        //         // console.log(weapons[item]);
        //         var container = $(".item-stats");
        //         container.find(".damage").html(weapons[item].damage);
        //         container.find(".fire_rate").html(weapons[item].fire_rate);
        //         container.find(".range").html(weapons[item].range);
        //         container.find(".accuracy").html(weapons[item].accuracy);
        //         container.find(".weight").html(weapons[item].weight);
        //         container.find(".value").html(weapons[item].value);
        //     }
        // }
    });
});