#Wrapper

```
<p hidden id="domain"></p>
<style>
#player {
  text-align: center;
  overflow: hidden;
  border: hidden;
  padding: 0%;
}

</style>
<div id="player"></div>

<script>
    function myFunction() {
        var x = document.domain;
        document.getElementById("domain").textContent = x;
    }
    window.onload = function () {
            myFunction();
    };
</script>
<script defer src="https://djbigty.github.io/wrapper/release/player/main.dart.js"></script>
```