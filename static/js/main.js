var script = document.createElement('script');
script.src = "https://cdn.metrical.xyz/script.js";
document.body.append(script);
window.metrical = {
    "app": "1vVaAuVhD"
};

(function() {
  var path1 = anime.path("#pipepath");
  var path2 = anime.path("#pipepath-2");
  var path3 = anime.path("#pipepath-3");
  var path4 = anime.path("#pipepath-4");
  var path5 = anime.path("#pipepath-5");

  function animatePath(target, path) {
    return {
        targets: target,
        translateX: path("x"),
        translateY: path("y"),
        rotate: path("angle"),
        easing: "linear",
        duration: 1000,
        loop: true,
        delay: anime.stagger(220),
        opacity: ["1", "1", "1", "1", "1", "0"]
    };

  }
  var tl = anime.timeline({
      duration: 750,
      loop: true,
  });
  tl.add(animatePath(".circle-1", path1));
  tl.add(animatePath(".circle-2", path2),'-=600');
  tl.add(animatePath(".circle-3", path3),'-=600');
  tl.add(animatePath(".circle-1", path4),'-=500');
  setTimeout(function(){
  var tl2 = anime.timeline({
      duration: 750,
      loop: true,
      delay: 700,
  });
  tl2.add(animatePath(".circle-4", path1));
  tl2.add(animatePath(".circle-5", path2),'-=600');
  tl2.add(animatePath(".circle-6", path3),'-=600');
  tl2.add(animatePath(".circle-4", path4),'-=500');

  }, 2000)
})();
