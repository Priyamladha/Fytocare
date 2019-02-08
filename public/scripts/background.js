var counter = 0;
function changeBG(){
    var imgs = [
        "url(https://images.wallpaperscraft.com/image/plant_drops_leaves_114478_3840x2400.jpg)",
         
        "url(https://images.wallpaperscraft.com/image/plant_flower_blossom_branch_spring_49945_3840x2400.jpg)",
       
        // "url(https://images.wallpaperscraft.com/image/plant_leaves_green_113702_3840x2400.jpg)",
        //"url(https://images.wallpaperscraft.com/image/leaves_plant_pattern_84034_3840x2400.jpg)",
        "url(https://images.wallpaperscraft.com/image/plant_leaves_green_123729_3840x2400.jpg)",
        "url(https://images.wallpaperscraft.com/image/plant_petals_close_up_115565_3840x2400.jpg)"
        
         
        
      ]
    
    if(counter === imgs.length) counter = 0;
    $("body").css("background-image", imgs[counter]);

    counter++;
}
  
  setInterval(changeBG, 3000);


