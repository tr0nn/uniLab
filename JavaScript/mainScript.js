<script>
        function req() {
            fetch('https://jsonplaceholder.typicode.com/posts/1')
            .then(response => response.json())
            .then(json => {
            const title = json.title;
            const body = json.body;
            document.getElementById("printTitle").innerHTML = title;
            document.getElementById("printBody").innerHTML = body;
        })
    };

req();
  </script>