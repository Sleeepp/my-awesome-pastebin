    var fave = fave || {};
    var data = JSON.parse(localStorage.getItem("favorite"));
    data = data || {};
            var fave = fave || {};
            var data = JSON.parse(localStorage.getItem("favorite"));
            data = data || {};
            $(function () {
                var data = localStorage.getItem("favorite");

                if (data !== null) {
                    $("input[name='favorites']").attr("checked", "checked");
                }
            });
            $("input[name='favorites']").click(function () {
                if ($(this).is(":checked")) {
                localStorage.setItem("favorite", $(this).val());
                } 
                else {
                    localStorage.removeItem("favorite");
                }
            });